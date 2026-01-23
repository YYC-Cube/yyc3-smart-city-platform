import { query, queryOne, insert, execute } from "../config"

export interface Merchant {
  id: number
  merchant_name: string
  merchant_type: string
  contact_person: string
  contact_phone: string
  business_license?: string
  address?: string
  longitude?: number
  latitude?: number
  description?: string
  logo_url?: string
  cover_images?: string
  business_hours?: string
  rating: number
  total_orders: number
  status: number
  created_at: Date
  updated_at: Date
}

export interface CreateMerchantInput {
  merchant_name: string
  merchant_type: string
  contact_person: string
  contact_phone: string
  business_license?: string
  address?: string
  longitude?: number
  latitude?: number
  description?: string
  logo_url?: string
}

export interface UpdateMerchantInput {
  merchant_name?: string
  contact_person?: string
  contact_phone?: string
  address?: string
  longitude?: number
  latitude?: number
  description?: string
  logo_url?: string
  cover_images?: string
  business_hours?: string
  status?: number
}

export class MerchantModel {
  static async findById(id: number): Promise<Merchant | null> {
    const sql = "SELECT * FROM merchants WHERE id = ?"
    return queryOne<Merchant>(sql, [id])
  }

  static async findAll(limit = 50, offset = 0): Promise<Merchant[]> {
    const sql = "SELECT * FROM merchants WHERE status = 1 ORDER BY rating DESC, created_at DESC LIMIT ? OFFSET ?"
    return query<Merchant>(sql, [limit, offset])
  }

  static async findByType(merchantType: string, limit = 50): Promise<Merchant[]> {
    const sql = "SELECT * FROM merchants WHERE merchant_type = ? AND status = 1 ORDER BY rating DESC LIMIT ?"
    return query<Merchant>(sql, [merchantType, limit])
  }

  static async create(data: CreateMerchantInput): Promise<number> {
    const sql = `INSERT INTO merchants (merchant_name, merchant_type, contact_person, contact_phone, business_license, address, longitude, latitude, description, logo_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    return insert(sql, [
      data.merchant_name,
      data.merchant_type,
      data.contact_person,
      data.contact_phone,
      data.business_license || null,
      data.address || null,
      data.longitude || null,
      data.latitude || null,
      data.description || null,
      data.logo_url || null,
    ])
  }

  static async update(id: number, data: UpdateMerchantInput): Promise<number> {
    const fields: string[] = []
    const values: any[] = []

    if (data.merchant_name !== undefined) {
      fields.push("merchant_name = ?")
      values.push(data.merchant_name)
    }
    if (data.contact_person !== undefined) {
      fields.push("contact_person = ?")
      values.push(data.contact_person)
    }
    if (data.contact_phone !== undefined) {
      fields.push("contact_phone = ?")
      values.push(data.contact_phone)
    }
    if (data.address !== undefined) {
      fields.push("address = ?")
      values.push(data.address)
    }
    if (data.longitude !== undefined) {
      fields.push("longitude = ?")
      values.push(data.longitude)
    }
    if (data.latitude !== undefined) {
      fields.push("latitude = ?")
      values.push(data.latitude)
    }
    if (data.description !== undefined) {
      fields.push("description = ?")
      values.push(data.description)
    }
    if (data.logo_url !== undefined) {
      fields.push("logo_url = ?")
      values.push(data.logo_url)
    }
    if (data.cover_images !== undefined) {
      fields.push("cover_images = ?")
      values.push(data.cover_images)
    }
    if (data.business_hours !== undefined) {
      fields.push("business_hours = ?")
      values.push(data.business_hours)
    }
    if (data.status !== undefined) {
      fields.push("status = ?")
      values.push(data.status)
    }

    if (fields.length === 0) {
      return 0
    }

    values.push(id)
    const sql = `UPDATE merchants SET ${fields.join(", ")} WHERE id = ?`
    return execute(sql, values)
  }

  static async delete(id: number): Promise<number> {
    const sql = "UPDATE merchants SET status = 0 WHERE id = ?"
    return execute(sql, [id])
  }

  static async count(merchantType?: string): Promise<number> {
    let sql = "SELECT COUNT(*) as total FROM merchants WHERE status = 1"
    const params: any[] = []

    if (merchantType) {
      sql += " AND merchant_type = ?"
      params.push(merchantType)
    }

    const result = await queryOne<{ total: number }>(sql, params)
    return result?.total || 0
  }

  static async search(keyword: string, limit = 50): Promise<Merchant[]> {
    const sql = `SELECT * FROM merchants WHERE status = 1 AND (merchant_name LIKE CONCAT('%', ?, '%') OR address LIKE CONCAT('%', ?, '%') OR description LIKE CONCAT('%', ?, '%')) ORDER BY rating DESC, created_at DESC LIMIT ?`
    return query<Merchant>(sql, [keyword, keyword, keyword, limit])
  }

  static async updateRating(id: number, rating: number): Promise<number> {
    const sql = "UPDATE merchants SET rating = ? WHERE id = ?"
    return execute(sql, [rating, id])
  }

  static async incrementOrders(id: number): Promise<number> {
    const sql = "UPDATE merchants SET total_orders = total_orders + 1 WHERE id = ?"
    return execute(sql, [id])
  }
}
