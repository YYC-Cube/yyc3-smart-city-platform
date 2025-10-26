import { type NextRequest, NextResponse } from "next/server"
import { UserModel, type CreateUserInput } from "@/lib/db/models/user.model"

/**
 * 获取用户列表
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")
    const keyword = searchParams.get("keyword")

    let users
    if (keyword) {
      users = await UserModel.search(keyword, limit)
    } else {
      users = await UserModel.findAll(limit, offset)
    }

    const total = await UserModel.count()

    return NextResponse.json({
      success: true,
      data: {
        users,
        total,
        limit,
        offset,
      },
    })
  } catch (error) {
    console.error("获取用户列表失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "获取用户列表失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}

/**
 * 创建新用户
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateUserInput = await request.json()

    // 验证必填字段
    if (!body.phone) {
      return NextResponse.json(
        {
          success: false,
          message: "手机号不能为空",
        },
        { status: 400 },
      )
    }

    // 检查手机号是否已存在
    const existingUser = await UserModel.findByPhone(body.phone)
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "该手机号已被注册",
        },
        { status: 400 },
      )
    }

    // 创建用户
    const userId = await UserModel.create(body)
    const newUser = await UserModel.findById(userId)

    return NextResponse.json({
      success: true,
      data: newUser,
      message: "用户创建成功",
    })
  } catch (error) {
    console.error("创建用户失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "创建用户失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}
