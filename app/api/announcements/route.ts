import { type NextRequest, NextResponse } from "next/server"
import { AnnouncementModel } from "@/lib/db/models/announcement.model"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || undefined
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let announcements
    if (category) {
      announcements = await AnnouncementModel.findByCategory(category, limit)
    } else {
      announcements = await AnnouncementModel.findAll(limit, offset)
    }

    const total = await AnnouncementModel.count(category)

    return NextResponse.json({
      success: true,
      data: {
        announcements,
        total,
        limit,
        offset,
      },
    })
  } catch (error) {
    console.error("获取公告列表失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "获取公告列表失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const id = await AnnouncementModel.create({
      title: body.title,
      content: body.content,
      category: body.category,
      priority: body.priority,
      tags: body.tags,
      cover_image: body.cover_image,
      publisher: body.publisher,
      expire_time: body.expire_time,
      is_top: body.is_top,
    })

    return NextResponse.json({
      success: true,
      data: { id },
      message: "公告创建成功",
    })
  } catch (error) {
    console.error("创建公告失败:", error)
    return NextResponse.json(
      {
        success: false,
        message: "创建公告失败",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 },
    )
  }
}
