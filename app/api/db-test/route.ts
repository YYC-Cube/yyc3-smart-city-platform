import { NextResponse } from "next/server"
import { getPool, testConnection } from "@/lib/db/config"
import { UserModel } from "@/lib/db/models/user.model"
import { MerchantModel } from "@/lib/db/models/merchant.model"
import { OrderModel } from "@/lib/db/models/order.model"
import { AnnouncementModel } from "@/lib/db/models/announcement.model"

export async function GET() {
  const results: any = {
    tests: [],
    summary: {
      total: 0,
      passed: 0,
      failed: 0,
    },
  }

  try {
    // 测试1: 基本连接测试
    const testName1 = "数据库连接测试"
    try {
      const connected = await testConnection()
      results.tests.push({
        name: testName1,
        status: connected ? "passed" : "failed",
        message: connected ? "数据库连接成功" : "数据库连接失败",
      })
      if (connected) results.summary.passed++
      else results.summary.failed++
    } catch (error: any) {
      results.tests.push({
        name: testName1,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试2: 获取MySQL版本
    const testName2 = "MySQL版本检测"
    try {
      const pool = getPool()
      const [rows] = await pool.query("SELECT VERSION() as version")
      const version = (rows as any)[0].version
      results.tests.push({
        name: testName2,
        status: "passed",
        message: `MySQL版本: ${version}`,
        data: { version },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName2,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试3: 验证数据库是否存在
    const testName3 = "数据库存在性验证"
    try {
      const pool = getPool()
      const [rows] = await pool.query("SELECT DATABASE() as db_name")
      const dbName = (rows as any)[0].db_name
      results.tests.push({
        name: testName3,
        status: "passed",
        message: `当前数据库: ${dbName}`,
        data: { database: dbName },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName3,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试4: 列出所有表
    const testName4 = "数据表统计"
    try {
      const pool = getPool()
      const [rows] = await pool.query("SHOW TABLES")
      const tables = (rows as any[]).map((row: any) => Object.values(row)[0])
      results.tests.push({
        name: testName4,
        status: "passed",
        message: `共找到 ${tables.length} 张表`,
        data: { tables, count: tables.length },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName4,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试5: 获取每个表的记录数
    const testName5 = "表记录统计"
    try {
      const pool = getPool()
      const [tables] = await pool.query("SHOW TABLES")
      const tableList = (tables as any[]).map((row: any) => Object.values(row)[0])

      const tableCounts: any = {}
      for (const table of tableList) {
        const [countResult] = await pool.query(`SELECT COUNT(*) as count FROM ${table}`)
        tableCounts[table] = (countResult as any)[0].count
      }

      results.tests.push({
        name: testName5,
        status: "passed",
        message: "成功统计所有表的记录数",
        data: tableCounts,
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName5,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试6: 获取表结构信息
    const testName6 = "表结构信息"
    try {
      const pool = getPool()
      const [tables] = await pool.query("SHOW TABLES")
      const tableList = (tables as any[]).map((row: any) => Object.values(row)[0])

      const tableStructures: any = {}
      for (const table of tableList) {
        const [columns] = await pool.query(`SHOW COLUMNS FROM ${table}`)
        tableStructures[table] = columns
      }

      results.tests.push({
        name: testName6,
        status: "passed",
        message: "成功获取所有表的结构信息",
        data: tableStructures,
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName6,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试7: 用户表CRUD测试
    const testName7 = "用户表CRUD测试"
    try {
      const pool = getPool()
      const connection = await pool.getConnection()

      try {
        await connection.beginTransaction()

        // 测试插入
        const testPhone = `TEST${Date.now()}`
        const userId = await UserModel.create({
          phone: testPhone,
          username: "测试用户",
          nickname: "测试昵称",
        })

        // 测试查询
        const user = await UserModel.findById(userId)

        // 测试更新
        await UserModel.update(userId, {
          nickname: "更新后的昵称",
        })

        // 测试删除
        await UserModel.delete(userId)

        await connection.rollback()
        connection.release()

        results.tests.push({
          name: testName7,
          status: "passed",
          message: "用户表CRUD操作测试通过",
          data: { userId, user },
        })
        results.summary.passed++
      } catch (error) {
        await connection.rollback()
        connection.release()
        throw error
      }
    } catch (error: any) {
      results.tests.push({
        name: testName7,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试8: 商家表读取测试
    const testName8 = "商家表读取测试"
    try {
      const merchants = await MerchantModel.findAll(5, 0)
      const count = await MerchantModel.count()

      results.tests.push({
        name: testName8,
        status: "passed",
        message: `成功读取商家数据，共 ${count} 条记录`,
        data: { count, sample: merchants.slice(0, 2) },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName8,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试9: 订单表读取测试
    const testName9 = "订单表读取测试"
    try {
      const count = await OrderModel.count()

      results.tests.push({
        name: testName9,
        status: "passed",
        message: `成功读取订单数据，共 ${count} 条记录`,
        data: { count },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName9,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 测试10: 公告表读取测试
    const testName10 = "公告表读取测试"
    try {
      const announcements = await AnnouncementModel.findAll(5, 0)
      const count = await AnnouncementModel.count()

      results.tests.push({
        name: testName10,
        status: "passed",
        message: `成功读取公告数据，共 ${count} 条记录`,
        data: { count, sample: announcements.slice(0, 2) },
      })
      results.summary.passed++
    } catch (error: any) {
      results.tests.push({
        name: testName10,
        status: "failed",
        message: error.message,
      })
      results.summary.failed++
    }
    results.summary.total++

    // 返回结果
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      results,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        results,
      },
      { status: 500 },
    )
  }
}
