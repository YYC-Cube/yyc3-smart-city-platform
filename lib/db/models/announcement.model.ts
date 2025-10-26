import { query, queryOne, insert, execute } from "../config"

/**
 * 公告接口定义
 */
export interface Announcement {
  id: number
  title: string
  content: string
  category: string
  priority: number
  tags?: string[]
  cover_image?: string
  publisher?: string
  publish_time: Date
  expire_time?: Date
  view_count: number
  is_top: boolean
  status: number
  created_at: Date
  updated_at: Date
}

/**
 * 创建公告输入接口
 */
export interface CreateAnnouncementInput {
  title: string
  content: string
  category: string
  priority?: number
  tags?: string[]
  cover_image?: string
  publisher?: string
  expire_time?: Date
  is_top?: boolean
}

/**
 * 公告模型
 */
export class AnnouncementModel {
  /**
   * 根据ID查询公告
   */
  static async findById(id: number): Promise<Announcement | null> {
    const sql = "SELECT * FROM city_announcements WHERE id = ?"
    return queryOne<Announcement>(sql, [id])
  }

  /**
   * 查询所有公告
   */
  static async findAll(limit = 50, offset = 0): Promise<Announcement[]> {
    const sql = `
      SELECT * FROM city_announcements 
      WHERE status = 1 
      AND (expire_time IS NULL OR expire_time > NOW())
      ORDER BY is_top DESC, priority DESC, publish_time DESC 
      LIMIT ? OFFSET ?
    `
    return query<Announcement>(sql, [limit, offset])
  }

  /**
   * 根据分类查询公告
   */
  static async findByCategory(category: string, limit = 50): Promise<Announcement[]> {
    const sql = `
      SELECT * FROM city_announcements 
      WHERE category = ? 
      AND status = 1 
      AND (expire_time IS NULL OR expire_time > NOW())
      ORDER BY is_top DESC, priority DESC, publish_time DESC 
      LIMIT ?
    `
    return query<Announcement>(sql, [category, limit])
  }

  /**
   * 创建公告
   */
  static async create(data: CreateAnnouncementInput): Promise<number> {
    const sql = `
      INSERT INTO city_announcements (
        title, content, category, priority, tags, cover_image, 
        publisher, expire_time, is_top
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    return insert(sql, [
      data.title,
      data.content,
      data.category,
      data.priority || 0,
      data.tags ? JSON.stringify(data.tags) : null,
      data.cover_image || null,
      data.publisher || null,
      data.expire_time || null,
      data.is_top || false,
    ])
  }

  /**
   * 增加浏览次数
   */
  static async incrementViewCount(id: number): Promise<number> {
    const sql = "UPDATE city_announcements SET view_count = view_count + 1 WHERE id = ?"
    return execute(sql, [id])
  }

  /**
   * 删除公告（软删除）
   */
  static async delete(id: number): Promise<number> {
    const sql = "UPDATE city_announcements SET status = 0 WHERE id = ?"
    return execute(sql, [id])
  }

  /**
   * 统计公告数量
   */
  static async count(category?: string): Promise<number> {
    let sql = "SELECT COUNT(*) as total FROM city_announcements WHERE status = 1"
    const params: any[] = []

    if (category) {
      sql += " AND category = ?"
      params.push(category)
    }

    const result = await queryOne<{ total: number }>(sql, params)
    return result?.total || 0
  }
}
