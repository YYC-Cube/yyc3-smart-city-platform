import { NextResponse } from "next/server"
import { testConnection } from "@/lib/db/config"
import { UserModel } from "@/lib/db/models/user.model"
import { MerchantModel } from "@/lib/db/models/merchant.model"
import { OrderModel } from "@/lib/db/models/order.model"
import { AnnouncementModel } from "@/lib/db/models/announcement.model"

export async function GET() {
  try {
    const results: any = {
      timestamp: new Date().toISOString(),
      tests: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
      },
    }

    // 测试1: 数据库连接
    const connectionTest = {
      name: "数据库连接测试",
      status: "running" as "running" | "passed" | "failed",
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      error: null as string | null,
      result: null as any,
    }

    try {
      const isConnected = await testConnection()
      connectionTest.status = isConnected ? "passed" : "failed"
      connectionTest.result = { connected: isConnected }
      if (!isConnected) {
        connectionTest.error = "无法连接到数据库"
      }
    } catch (error: any) {
      connectionTest.status = "failed"
      connectionTest.error = error.message
    }

    connectionTest.endTime = Date.now()
    connectionTest.duration = connectionTest.endTime - connectionTest.startTime
    results.tests.push(connectionTest)

    // 测试2: 用户模型
    const userTest = {
      name: "用户模型测试",
      status: "running" as "running" | "passed" | "failed",
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      error: null as string | null,
      result: null as any,
    }

    try {
      const userCount = await UserModel.count()
      const users = await UserModel.findAll(5)
      userTest.status = "passed"
      userTest.result = {
        totalUsers: userCount,
        sampleUsers: users.length,
      }
    } catch (error: any) {
      userTest.status = "failed"
      userTest.error = error.message
    }

    userTest.endTime = Date.now()
    userTest.duration = userTest.endTime - userTest.startTime
    results.tests.push(userTest)

    // 测试3: 商家模型
    const merchantTest = {
      name: "商家模型测试",
      status: "running" as "running" | "passed" | "failed",
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      error: null as string | null,
      result: null as any,
    }

    try {
      const merchantCount = await MerchantModel.count()
      const merchants = await MerchantModel.findAll(5)
      merchantTest.status = "passed"
      merchantTest.result = {
        totalMerchants: merchantCount,
        sampleMerchants: merchants.length,
      }
    } catch (error: any) {
      merchantTest.status = "failed"
      merchantTest.error = error.message
    }

    merchantTest.endTime = Date.now()
    merchantTest.duration = merchantTest.endTime - merchantTest.startTime
    results.tests.push(merchantTest)

    // 测试4: 订单模型
    const orderTest = {
      name: "订单模型测试",
      status: "running" as "running" | "passed" | "failed",
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      error: null as string | null,
      result: null as any,
    }

    try {
      const orderCount = await OrderModel.count()
      const totalAmount = await OrderModel.sumAmount()
      orderTest.status = "passed"
      orderTest.result = {
        totalOrders: orderCount,
        totalRevenue: totalAmount,
      }
    } catch (error: any) {
      orderTest.status = "failed"
      orderTest.error = error.message
    }

    orderTest.endTime = Date.now()
    orderTest.duration = orderTest.endTime - orderTest.startTime
    results.tests.push(orderTest)

    // 测试5: 公告模型
    const announcementTest = {
      name: "公告模型测试",
      status: "running" as "running" | "passed" | "failed",
      startTime: Date.now(),
      endTime: 0,
      duration: 0,
      error: null as string | null,
      result: null as any,
    }

    try {
      const announcementCount = await AnnouncementModel.count()
      const announcements = await AnnouncementModel.findAll(5)
      announcementTest.status = "passed"
      announcementTest.result = {
        totalAnnouncements: announcementCount,
        sampleAnnouncements: announcements.length,
      }
    } catch (error: any) {
      announcementTest.status = "failed"
      announcementTest.error = error.message
    }

    announcementTest.endTime = Date.now()
    announcementTest.duration = announcementTest.endTime - announcementTest.startTime
    results.tests.push(announcementTest)

    // 计算测试统计
    results.summary.total = results.tests.length
    results.summary.passed = results.tests.filter((t: any) => t.status === "passed").length
    results.summary.failed = results.tests.filter((t: any) => t.status === "failed").length

    return NextResponse.json({
      success: results.summary.failed === 0,
      message: `测试完成: ${results.summary.passed}/${results.summary.total} 通过`,
      data: results,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "数据库测试失败",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
