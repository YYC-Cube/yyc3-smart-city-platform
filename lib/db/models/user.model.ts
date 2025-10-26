import { query, queryOne, insert, execute } from "../config"

/**
 * 用户接口定义
 */
export interface User {
  id: number
  phone: string
  username?: string
  nickname?: string
  avatar?: string
  gender: number
  birthday?: Date
  email?: string
  id_card?: string
  real_name?: string
  is_verified: boolean
  status: number
  created_at: Date
  updated_at: Date
}

/**
 * 创建用户输入接口
 */
export interface CreateUserInput {
  phone: string
  username?: string
  nickname?: string
  avatar?: string
  gender?: number
  birthday?: string
  email?: string
}

/**
 * 更新用户输入接口
 */
export interface UpdateUserInput {
  username?: string
  nickname?: string
  avatar?: string
  gender?: number
  birthday?: string
  email?: string
  id_card?: string
  real_name?: string
  is_verified?: boolean
  status?: number
}

/**
 * 用户模型
 */
export class UserModel {
  /**
   * 根据ID查询用户
   */
  static async findById(id: number): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE id = ?"
    return queryOne<User>(sql, [id])
  }

  /**
   * 根据手机号查询用户
   */
  static async findByPhone(phone: string): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE phone = ?"
    return queryOne<User>(sql, [phone])
  }

  /**
   * 查询所有用户
   */
  static async findAll(limit = 50, offset = 0): Promise<User[]> {
    const sql = "SELECT * FROM users WHERE status = 1 ORDER BY created_at DESC LIMIT ? OFFSET ?"
    return query<User>(sql, [limit, offset])
  }

  /**
   * 创建用户
   */
  static async create(data: CreateUserInput): Promise<number> {
    const sql = `
      INSERT INTO users (phone, username, nickname, avatar, gender, birthday, email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    return insert(sql, [
      data.phone,
      data.username || null,
      data.nickname || null,
      data.avatar || null,
      data.gender || 0,
      data.birthday || null,
      data.email || null,
    ])
  }

  /**
   * 更新用户信息
   */
  static async update(id: number, data: UpdateUserInput): Promise<number> {
    const fields: string[] = []
    const values: any[] = []

    if (data.username !== undefined) {
      fields.push("username = ?")
      values.push(data.username)
    }
    if (data.nickname !== undefined) {
      fields.push("nickname = ?")
      values.push(data.nickname)
    }
    if (data.avatar !== undefined) {
      fields.push("avatar = ?")
      values.push(data.avatar)
    }
    if (data.gender !== undefined) {
      fields.push("gender = ?")
      values.push(data.gender)
    }
    if (data.birthday !== undefined) {
      fields.push("birthday = ?")
      values.push(data.birthday)
    }
    if (data.email !== undefined) {
      fields.push("email = ?")
      values.push(data.email)
    }
    if (data.id_card !== undefined) {
      fields.push("id_card = ?")
      values.push(data.id_card)
    }
    if (data.real_name !== undefined) {
      fields.push("real_name = ?")
      values.push(data.real_name)
    }
    if (data.is_verified !== undefined) {
      fields.push("is_verified = ?")
      values.push(data.is_verified)
    }
    if (data.status !== undefined) {
      fields.push("status = ?")
      values.push(data.status)
    }

    if (fields.length === 0) {
      return 0
    }

    values.push(id)
    const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`
    return execute(sql, values)
  }

  /**
   * 删除用户（软删除）
   */
  static async delete(id: number): Promise<number> {
    const sql = "UPDATE users SET status = 0 WHERE id = ?"
    return execute(sql, [id])
  }

  /**
   * 统计用户数量
   */
  static async count(): Promise<number> {
    const sql = "SELECT COUNT(*) as total FROM users WHERE status = 1"
    const result = await queryOne<{ total: number }>(sql)
    return result?.total || 0
  }

  /**
   * 搜索用户
   */
  static async search(keyword: string, limit = 50): Promise<User[]> {
    const sql = `
      SELECT * FROM users 
      WHERE status = 1 
      AND (phone LIKE ? OR username LIKE ? OR nickname LIKE ?)
      ORDER BY created_at DESC 
      LIMIT ?
    `
    const searchTerm = `%${keyword}%`
    return query<User>(sql, [searchTerm, searchTerm, searchTerm, limit])
  }
}
