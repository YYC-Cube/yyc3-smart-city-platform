import mysql from "mysql2/promise"

// 数据库是否可用的标志
let isDatabaseAvailable = true

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
    isDatabaseAvailable = true
    return true
  } catch (error) {
    console.error("数据库连接失败:", error)
    isDatabaseAvailable = false
    return false
  }
}

// 检查数据库是否可用
export function isDatabaseUp(): boolean {
  return isDatabaseAvailable
}

// 通用查询方法（带错误处理）
export async function query<T>(sql: string, params?: any[]): Promise<T[]> {
  if (!isDatabaseAvailable) {
    console.warn("数据库不可用，返回空数据")
    return []
  }
  
  try {
    const [rows] = await pool.execute(sql, params)
    return rows as T[]
  } catch (error) {
    console.error("数据库查询错误:", error)
    isDatabaseAvailable = false
    return []
  }
}

// 查询单条记录
export async function queryOne<T>(sql: string, params?: any[]): Promise<T | null> {
  if (!isDatabaseAvailable) {
    console.warn("数据库不可用，返回空数据")
    return null
  }
  
  try {
    const [rows] = await pool.execute(sql, params)
    const result = rows as T[]
    return result.length > 0 ? result[0] : null
  } catch (error) {
    console.error("数据库查询错误:", error)
    isDatabaseAvailable = false
    return null
  }
}

// 插入数据
export async function insert(sql: string, params?: any[]): Promise<number> {
  if (!isDatabaseAvailable) {
    console.warn("数据库不可用，返回 0")
    return 0
  }
  
  try {
    const [result] = await pool.execute(sql, params)
    return (result as any).insertId
  } catch (error) {
    console.error("数据库插入错误:", error)
    isDatabaseAvailable = false
    return 0
  }
}

// 更新/删除数据
export async function execute(sql: string, params?: any[]): Promise<number> {
  if (!isDatabaseAvailable) {
    console.warn("数据库不可用，返回 0")
    return 0
  }
  
  try {
    const [result] = await pool.execute(sql, params)
    return (result as any).affectedRows
  } catch (error) {
    console.error("数据库执行错误:", error)
    isDatabaseAvailable = false
    return 0
  }
}

// 事务处理
export async function transaction<T>(callback: (connection: any) => Promise<T>): Promise<T | null> {
  if (!isDatabaseAvailable) {
    console.warn("数据库不可用，事务无法执行")
    return null
  }
  
  const connection = await pool.getConnection()
  await connection.beginTransaction()

  try {
    const result = await callback(connection)
    await connection.commit()
    return result
  } catch (error) {
    await connection.rollback()
    console.error("事务执行错误:", error)
    isDatabaseAvailable = false
    throw error
  } finally {
    connection.release()
  }
}

export default pool
