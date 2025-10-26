import mysql from "mysql2/promise"

/**
 * 数据库配置
 */
export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "yyc3_gov",
  password: process.env.DB_PASS || "yyc3_gov",
  database: process.env.DB_NAME || "yyc3_my",
  waitForConnections: true,
  connectionLimit: Number.parseInt(process.env.DB_CONNECTION_LIMIT || "10"),
  queueLimit: Number.parseInt(process.env.DB_QUEUE_LIMIT || "0"),
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
}

/**
 * 创建数据库连接池
 */
export const createPool = () => {
  return mysql.createPool(dbConfig)
}

/**
 * 获取数据库连接
 */
let pool: mysql.Pool | null = null

export const getPool = () => {
  if (!pool) {
    pool = createPool()
  }
  return pool
}

/**
 * 执行查询
 */
export async function query<T = any>(sql: string, params?: any[]): Promise<T[]> {
  const pool = getPool()
  const [rows] = await pool.execute(sql, params)
  return rows as T[]
}

/**
 * 执行单条查询
 */
export async function queryOne<T = any>(sql: string, params?: any[]): Promise<T | null> {
  const rows = await query<T>(sql, params)
  return rows.length > 0 ? rows[0] : null
}

/**
 * 执行插入
 */
export async function insert(sql: string, params?: any[]): Promise<number> {
  const pool = getPool()
  const [result] = await pool.execute(sql, params)
  return (result as any).insertId
}

/**
 * 执行更新或删除
 */
export async function execute(sql: string, params?: any[]): Promise<number> {
  const pool = getPool()
  const [result] = await pool.execute(sql, params)
  return (result as any).affectedRows
}

/**
 * 事务处理
 */
export async function transaction<T>(callback: (connection: mysql.PoolConnection) => Promise<T>): Promise<T> {
  const pool = getPool()
  const connection = await pool.getConnection()

  try {
    await connection.beginTransaction()
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

/**
 * 关闭连接池
 */
export async function closePool() {
  if (pool) {
    await pool.end()
    pool = null
  }
}
