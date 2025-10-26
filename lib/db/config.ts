import mysql from "mysql2/promise"

// 数据库连接配置
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "yyc3_gov",
  password: process.env.DB_PASS || "yyc3_gov",
  database: process.env.DB_NAME || "yyc3_my",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
}

// 创建连接池
const pool = mysql.createPool(dbConfig)

/**
 * 执行查询并返回多条结果
 */
export async function query<T = any>(sql: string, params?: any[]): Promise<T[]> {
  try {
    const [rows] = await pool.execute(sql, params)
    return rows as T[]
  } catch (error) {
    console.error("数据库查询错误:", error)
    throw error
  }
}

/**
 * 执行查询并返回单条结果
 */
export async function queryOne<T = any>(sql: string, params?: any[]): Promise<T | null> {
  try {
    const [rows] = await pool.execute(sql, params)
    const result = rows as T[]
    return result.length > 0 ? result[0] : null
  } catch (error) {
    console.error("数据库查询错误:", error)
    throw error
  }
}

/**
 * 执行插入操作并返回插入的ID
 */
export async function insert(sql: string, params?: any[]): Promise<number> {
  try {
    const [result] = await pool.execute(sql, params)
    const insertResult = result as mysql.ResultSetHeader
    return insertResult.insertId
  } catch (error) {
    console.error("数据库插入错误:", error)
    throw error
  }
}

/**
 * 执行更新或删除操作并返回受影响的行数
 */
export async function execute(sql: string, params?: any[]): Promise<number> {
  try {
    const [result] = await pool.execute(sql, params)
    const executeResult = result as mysql.ResultSetHeader
    return executeResult.affectedRows
  } catch (error) {
    console.error("数据库执行错误:", error)
    throw error
  }
}

/**
 * 获取数据库连接池
 */
export function getPool() {
  return pool
}

/**
 * 测试数据库连接
 */
export async function testConnection(): Promise<boolean> {
  try {
    const connection = await pool.getConnection()
    await connection.ping()
    connection.release()
    return true
  } catch (error) {
    console.error("数据库连接测试失败:", error)
    return false
  }
}

export default pool
