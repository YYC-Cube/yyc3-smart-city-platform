import { type NextRequest, NextResponse } from "next/server"
import { OrderModel } from "@/lib/db/models/order.model"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("user_id")
    const merchantId = searchParams.get("merchant_id")
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let orders
    if (userId) {
      orders = await OrderModel.findByUserId(Number.parseInt(userId), limit, offset)
    } else if (merchantId) {
      orders = await OrderModel.findByMerchantId(Number.parseInt(merchantId), limit, offset)
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "请提供 user_id 或 merchant_id 参数",
        },
        { status: 400 },
      )
    }

    const total = await OrderModel.count(userId ? Number.parseInt(userId) : undefined)

    return NextResponse.json({
      success: true,
      data: {
        orders,
        total,
        limit,
        offset,
      },
    })
  } catch (error) {
    console.error("获取订单列表失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "获取订单列表失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const id = await OrderModel.create({
      user_id: body.user_id,
      merchant_id: body.merchant_id,
      service_id: body.service_id,
      order_type: body.order_type,
      total_amount: body.total_amount,
      discount_amount: body.discount_amount,
      actual_amount: body.actual_amount,
      contact_name: body.contact_name,
      contact_phone: body.contact_phone,
      service_address: body.service_address,
      service_time: body.service_time,
      remark: body.remark,
    })

    return NextResponse.json({
      success: true,
      data: { id },
      message: "订单创建成功",
    })
  } catch (error) {
    console.error("创建订单失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "创建订单失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}
