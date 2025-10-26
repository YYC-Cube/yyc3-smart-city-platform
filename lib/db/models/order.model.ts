import { query, queryOne, insert, execute } from "../config"

/**
 * 订单接口定义
 */
export interface Order {
  id: number
  order_no: string
  user_id: number
  merchant_id: number
  service_id?: number
  order_type: string
  total_amount: number
  discount_amount: number
  actual_amount: number
  payment_method?: string
  payment_time?: Date
  order_status: string
  contact_name?: string
  contact_phone?: string
  service_address?: string
  service_time?: Date
  remark?: string
  created_at: Date
  updated_at: Date
}

/**
 * 创建订单输入接口
 */
export interface CreateOrderInput {
  user_id: number
  merchant_id: number
  service_id?: number
  order_type: string
  total_amount: number
  discount_amount?: number
  actual_amount: number
  contact_name?: string
  contact_phone?: string
  service_address?: string
  service_time?: Date
  remark?: string
}

/**
 * 订单模型
 */
export class OrderModel {
  /**
   * 生成订单号
   */
  static generateOrderNo(): string {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")
    return `YYC${timestamp}${random}`
  }

  /**
   * 根据ID查询订单
   */
  static async findById(id: number): Promise<Order | null> {
    const sql = "SELECT * FROM orders WHERE id = ?"
    return queryOne<Order>(sql, [id])
  }

  /**
   * 根据订单号查询订单
   */
  static async findByOrderNo(orderNo: string): Promise<Order | null> {
    const sql = "SELECT * FROM orders WHERE order_no = ?"
    return queryOne<Order>(sql, [orderNo])
  }

  /**
   * 查询用户订单
   */
  static async findByUserId(userId: number, limit = 50, offset = 0): Promise<Order[]> {
    const sql = "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?"
    return query<Order>(sql, [userId, limit, offset])
  }

  /**
   * 查询商家订单
   */
  static async findByMerchantId(merchantId: number, limit = 50, offset = 0): Promise<Order[]> {
    const sql = "SELECT * FROM orders WHERE merchant_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?"
    return query<Order>(sql, [merchantId, limit, offset])
  }

  /**
   * 创建订单
   */
  static async create(data: CreateOrderInput): Promise<number> {
    const orderNo = this.generateOrderNo()
    const sql = `
      INSERT INTO orders (
        order_no, user_id, merchant_id, service_id, order_type,
        total_amount, discount_amount, actual_amount,
        contact_name, contact_phone, service_address, service_time, remark
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    return insert(sql, [
      orderNo,
      data.user_id,
      data.merchant_id,
      data.service_id || null,
      data.order_type,
      data.total_amount,
      data.discount_amount || 0,
      data.actual_amount,
      data.contact_name || null,
      data.contact_phone || null,
      data.service_address || null,
      data.service_time || null,
      data.remark || null,
    ])
  }

  /**
   * 更新订单状态
   */
  static async updateStatus(id: number, status: string): Promise<number> {
    const sql = "UPDATE orders SET order_status = ? WHERE id = ?"
    return execute(sql, [status, id])
  }

  /**
   * 更新支付信息
   */
  static async updatePayment(id: number, paymentMethod: string): Promise<number> {
    const sql = "UPDATE orders SET payment_method = ?, payment_time = NOW(), order_status = 'paid' WHERE id = ?"
    return execute(sql, [paymentMethod, id])
  }

  /**
   * 统计订单数量
   */
  static async count(userId?: number, status?: string): Promise<number> {
    let sql = "SELECT COUNT(*) as total FROM orders WHERE 1=1"
    const params: any[] = []

    if (userId) {
      sql += " AND user_id = ?"
      params.push(userId)
    }
    if (status) {
      sql += " AND order_status = ?"
      params.push(status)
    }

    const result = await queryOne<{ total: number }>(sql, params)
    return result?.total || 0
  }

  /**
   * 统计订单金额
   */
  static async sumAmount(userId?: number, merchantId?: number): Promise<number> {
    let sql = "SELECT COALESCE(SUM(actual_amount), 0) as total FROM orders WHERE order_status IN ('paid', 'completed')"
    const params: any[] = []

    if (userId) {
      sql += " AND user_id = ?"
      params.push(userId)
    }
    if (merchantId) {
      sql += " AND merchant_id = ?"
      params.push(merchantId)
    }

    const result = await queryOne<{ total: number }>(sql, params)
    return result?.total || 0
  }
}
