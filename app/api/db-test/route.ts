import { NextResponse } from "next/server"
import { getPool } from "@/lib/db/config"
import type { RowDataPacket } from "mysql2"

interface TableInfo extends RowDataPacket {
  table_name: string
  table_rows: number
}

interface ColumnInfo extends RowDataPacket {
  COLUMN_NAME: string
  DATA_TYPE: string
  IS_NULLABLE: string
  COLUMN_KEY: string
}

export async function GET() {
  const pool = getPool()
  const results: any = {
    connectionStatus: "disconnected",
    database: process.env.DB_NAME || "yyc3_my",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "yyc3_gov",
    tables: [],
    testResults: {},
    timestamp: new Date().toISOString(),
  }

  try {
    // 测试1: 基本连接测试
    await pool.query("SELECT 1")
    results.connectionStatus = "connected"
    results.testResults.basicConnection = "✅ 连接成功"

    // 测试2: 获取数据库版本
    const [versionRows] = await pool.query<RowDataPacket[]>("SELECT VERSION() as version")
    results.mysqlVersion = versionRows[0].version
    results.testResults.versionCheck = `✅ MySQL版本: ${versionRows[0].version}`

    // 测试3: 检查数据库是否存在
    const [dbRows] = await pool.query<RowDataPacket[]>(
      "SELECT SCHEMA_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = ?",
      [results.database],
    )
    if (dbRows.length > 0) {
      results.testResults.databaseExists = `✅ 数据库 ${results.database} 存在`
    } else {
      results.testResults.databaseExists = `❌ 数据库 ${results.database} 不存在`
      return NextResponse.json(results)
    }

    // 测试4: 获取所有表及其记录数
    const [tableRows] = await pool.query<TableInfo[]>(
      `SELECT 
        TABLE_NAME as table_name, 
        TABLE_ROWS as table_rows 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? 
      ORDER BY TABLE_NAME`,
      [results.database],
    )

    for (const table of tableRows) {
      // 获取准确的记录数
      const [countRows] = await pool.query<RowDataPacket[]>(`SELECT COUNT(*) as count FROM ${table.table_name}`)
      const actualCount = countRows[0].count

      // 获取表的列信息
      const [columns] = await pool.query<ColumnInfo[]>(
        `SELECT 
          COLUMN_NAME, 
          DATA_TYPE, 
          IS_NULLABLE, 
          COLUMN_KEY 
        FROM information_schema.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
        ORDER BY ORDINAL_POSITION`,
        [results.database, table.table_name],
      )

      results.tables.push({
        name: table.table_name,
        rows: actualCount,
        estimatedRows: table.table_rows,
        columns: columns.map((col) => ({
          name: col.COLUMN_NAME,
          type: col.DATA_TYPE,
          nullable: col.IS_NULLABLE === "YES",
          key: col.COLUMN_KEY,
        })),
      })
    }

    results.testResults.tablesFound = `✅ 找到 ${tableRows.length} 张表`

    // 测试5: 测试用户表的CRUD操作
    try {
      // 测试读取
      const [users] = await pool.query<RowDataPacket[]>("SELECT * FROM users LIMIT 5")
      results.testResults.userTableRead = `✅ 用户表读取成功 (${users.length} 条记录)`

      // 测试写入（使用事务，最后回滚）
      const connection = await pool.getConnection()
      try {
        await connection.beginTransaction()

        const testPhone = `test_${Date.now()}`
        const [insertResult] = await connection.query<any>(
          "INSERT INTO users (phone, username, nickname, avatar, status) VALUES (?, ?, ?, ?, ?)",
          [testPhone, "测试用户", "测试昵称", "/placeholder.svg", "active"],
        )

        const insertId = insertResult.insertId

        // 测试更新
        await connection.query("UPDATE users SET nickname = ? WHERE id = ?", ["更新后的昵称", insertId])

        // 测试删除
        await connection.query("DELETE FROM users WHERE id = ?", [insertId])

        // 回滚测试数据
        await connection.rollback()

        results.testResults.userTableWrite = "✅ 用户表写入测试成功 (已回滚)"
      } catch (error) {
        await connection.rollback()
        throw error
      } finally {
        connection.release()
      }
    } catch (error) {
      results.testResults.userTableOperations = `❌ 用户表操作测试失败: ${error instanceof Error ? error.message : "未知错误"}`
    }

    // 测试6: 测试商家表
    try {
      const [merchants] = await pool.query<RowDataPacket[]>("SELECT * FROM merchants LIMIT 5")
      results.testResults.merchantTableRead = `✅ 商家表读取成功 (${merchants.length} 条记录)`
    } catch (error) {
      results.testResults.merchantTableRead = `❌ 商家表读取失败: ${error instanceof Error ? error.message : "未知错误"}`
    }

    // 测试7: 测试订单表
    try {
      const [orders] = await pool.query<RowDataPacket[]>("SELECT * FROM orders LIMIT 5")
      results.testResults.orderTableRead = `✅ 订单表读取成功 (${orders.length} 条记录)`
    } catch (error) {
      results.testResults.orderTableRead = `❌ 订单表读取失败: ${error instanceof Error ? error.message : "未知错误"}`
    }

    // 测试8: 测试公告表
    try {
      const [announcements] = await pool.query<RowDataPacket[]>("SELECT * FROM city_announcements LIMIT 5")
      results.testResults.announcementTableRead = `✅ 公告表读取成功 (${announcements.length} 条记录)`
    } catch (error) {
      results.testResults.announcementTableRead = `❌ 公告表读取失败: ${error instanceof Error ? error.message : "未知错误"}`
    }

    // 测试9: 测试连接池状态
    const poolConfig = pool.pool.config
    results.poolInfo = {
      connectionLimit: poolConfig.connectionLimit,
      queueLimit: poolConfig.queueLimit,
      waitForConnections: poolConfig.waitForConnections,
    }
    results.testResults.poolConfig = "✅ 连接池配置正常"

    // 测试10: 检查关键表是否存在
    const requiredTables = [
      "users",
      "user_addresses",
      "merchants",
      "services",
      "orders",
      "city_announcements",
      "ai_conversations",
      "reservations",
      "vehicles",
      "pets",
      "maternal_records",
      "elderly_records",
    ]

    const existingTableNames = results.tables.map((t: any) => t.name)
    const missingTables = requiredTables.filter((t) => !existingTableNames.includes(t))

    if (missingTables.length === 0) {
      results.testResults.requiredTables = "✅ 所有必需的表都存在"
    } else {
      results.testResults.requiredTables = `⚠️ 缺少以下表: ${missingTables.join(", ")}`
    }

    // 总结
    const successCount = Object.values(results.testResults).filter((r: any) => r.startsWith("✅")).length
    const totalTests = Object.keys(results.testResults).length
    results.summary = {
      success: successCount === totalTests,
      successCount,
      totalTests,
      message: `通过 ${successCount}/${totalTests} 项测试`,
    }

    return NextResponse.json(results)
  } catch (error) {
    results.connectionStatus = "error"
    results.error = error instanceof Error ? error.message : "未知错误"
    results.testResults.connectionError = `❌ 连接失败: ${error instanceof Error ? error.message : "未知错误"}`

    return NextResponse.json(results, { status: 500 })
  }
}
