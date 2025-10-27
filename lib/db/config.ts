import mysql from "mysql2/promise"

// 创建数据库连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "yyc_platform",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

// 测试数据库连接
export async function testConnection(): Promise<boolean> {
  try {
    const connection = await pool.getConnection()
    await connection.ping()
    connection.release()
    return true
  } catch (error) {
    console.error("数据库连接失败:", error)
    return false
  }
}

// 通用查询方法
export async function query<T>(sql: string, params?: any[]): Promise<T[]> {
  const [rows] = await pool.execute(sql, params)
  return rows as T[]
}

// 查询单条记录
export async function queryOne<T>(sql: string, params?: any[]): Promise<T | null> {
  const [rows] = await pool.execute(sql, params)
  const result = rows as T[]
  return result.length > 0 ? result[0] : null
}

// 插入数据
export async function insert(sql: string, params?: any[]): Promise<number> {
  const [result] = await pool.execute(sql, params)
  return (result as any).insertId
}

// 更新/删除数据
export async function execute(sql: string, params?: any[]): Promise<number> {
  const [result] = await pool.execute(sql, params)
  return (result as any).affectedRows
}

// 事务处理
export async function transaction<T>(callback: (connection: any) => Promise<T>): Promise<T> {
  const connection = await pool.getConnection()
  await connection.beginTransaction()

  try {
    const result = await callback(connection)
    await connection.commit()
    return result
  } catch (error) {
    await connection.rollback()
    throw error
  } finally {
    connection.release()
  }
}

export default pool
