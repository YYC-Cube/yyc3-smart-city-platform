import { type NextRequest, NextResponse } from "next/server"
import { MerchantModel } from "@/lib/db/models/merchant.model"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || undefined
    const keyword = searchParams.get("keyword") || undefined
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let merchants
    if (keyword) {
      merchants = await MerchantModel.search(keyword, limit)
    } else if (type) {
      merchants = await MerchantModel.findByType(type, limit)
    } else {
      merchants = await MerchantModel.findAll(limit, offset)
    }

    const total = await MerchantModel.count(type)

    return NextResponse.json({
      success: true,
      data: {
        merchants,
        total,
        limit,
        offset,
      },
    })
  } catch (error) {
    console.error("获取商家列表失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "获取商家列表失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const id = await MerchantModel.create({
      merchant_name: body.merchant_name,
      merchant_type: body.merchant_type,
      contact_person: body.contact_person,
      contact_phone: body.contact_phone,
      business_license: body.business_license,
      address: body.address,
      longitude: body.longitude,
      latitude: body.latitude,
      description: body.description,
      logo_url: body.logo_url,
    })

    return NextResponse.json({
      success: true,
      data: { id },
      message: "商家创建成功",
    })
  } catch (error) {
    console.error("创建商家失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "创建商家失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}
