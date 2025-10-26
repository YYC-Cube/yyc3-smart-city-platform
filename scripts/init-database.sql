-- =============================================
-- YYC³ 智慧城市平台 - 数据库初始化脚本
-- =============================================

-- 创建数据库
CREATE DATABASE IF NOT EXISTS yyc3_my 
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE yyc3_my;

-- =============================================
-- 用户相关表
-- =============================================

-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(20) NOT NULL UNIQUE COMMENT '手机号',
  username VARCHAR(50) COMMENT '用户名',
  nickname VARCHAR(50) COMMENT '昵称',
  avatar VARCHAR(500) COMMENT '头像URL',
  gender TINYINT DEFAULT 0 COMMENT '性别：0-未知，1-男，2-女',
  birthday DATE COMMENT '生日',
  email VARCHAR(100) COMMENT '邮箱',
  id_card VARCHAR(20) COMMENT '身份证号',
  real_name VARCHAR(50) COMMENT '真实姓名',
  is_verified BOOLEAN DEFAULT FALSE COMMENT '是否实名认证',
  status TINYINT DEFAULT 1 COMMENT '状态：0-禁用，1-正常',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_phone (phone),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 用户地址表
CREATE TABLE IF NOT EXISTS user_addresses (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  contact_name VARCHAR(50) NOT NULL COMMENT '联系人',
  contact_phone VARCHAR(20) NOT NULL COMMENT '联系电话',
  province VARCHAR(50) NOT NULL COMMENT '省份',
  city VARCHAR(50) NOT NULL COMMENT '城市',
  district VARCHAR(50) NOT NULL COMMENT '区县',
  street VARCHAR(100) COMMENT '街道',
  address_detail VARCHAR(200) NOT NULL COMMENT '详细地址',
  longitude DECIMAL(10, 7) COMMENT '经度',
  latitude DECIMAL(10, 7) COMMENT '纬度',
  is_default BOOLEAN DEFAULT FALSE COMMENT '是否默认地址',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户地址表';

-- =============================================
-- 服务商家相关表
-- =============================================

-- 商家表
CREATE TABLE IF NOT EXISTS merchants (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  merchant_name VARCHAR(100) NOT NULL COMMENT '商家名称',
  merchant_type VARCHAR(50) NOT NULL COMMENT '商家类型',
  contact_person VARCHAR(50) NOT NULL COMMENT '联系人',
  contact_phone VARCHAR(20) NOT NULL COMMENT '联系电话',
  business_license VARCHAR(50) COMMENT '营业执照号',
  address VARCHAR(200) COMMENT '地址',
  longitude DECIMAL(10, 7) COMMENT '经度',
  latitude DECIMAL(10, 7) COMMENT '纬度',
  description TEXT COMMENT '商家描述',
  logo_url VARCHAR(500) COMMENT 'Logo URL',
  cover_images JSON COMMENT '封面图片数组',
  business_hours JSON COMMENT '营业时间',
  rating DECIMAL(3, 2) DEFAULT 5.00 COMMENT '评分',
  total_orders INT DEFAULT 0 COMMENT '总订单数',
  status TINYINT DEFAULT 1 COMMENT '状态：0-禁用，1-正常，2-审核中',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_merchant_type (merchant_type),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商家表';

-- 服务项目表
CREATE TABLE IF NOT EXISTS services (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  merchant_id BIGINT UNSIGNED NOT NULL COMMENT '商家ID',
  service_name VARCHAR(100) NOT NULL COMMENT '服务名称',
  service_category VARCHAR(50) NOT NULL COMMENT '服务分类',
  description TEXT COMMENT '服务描述',
  price DECIMAL(10, 2) NOT NULL COMMENT '价格',
  unit VARCHAR(20) COMMENT '单位',
  image_urls JSON COMMENT '图片URL数组',
  is_available BOOLEAN DEFAULT TRUE COMMENT '是否可用',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_merchant_id (merchant_id),
  INDEX idx_category (service_category),
  FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='服务项目表';

-- =============================================
-- 订单相关表
-- =============================================

-- 订单表
CREATE TABLE IF NOT EXISTS orders (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_no VARCHAR(32) NOT NULL UNIQUE COMMENT '订单号',
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  merchant_id BIGINT UNSIGNED NOT NULL COMMENT '商家ID',
  service_id BIGINT UNSIGNED COMMENT '服务ID',
  order_type VARCHAR(50) NOT NULL COMMENT '订单类型',
  total_amount DECIMAL(10, 2) NOT NULL COMMENT '总金额',
  discount_amount DECIMAL(10, 2) DEFAULT 0.00 COMMENT '优惠金额',
  actual_amount DECIMAL(10, 2) NOT NULL COMMENT '实付金额',
  payment_method VARCHAR(20) COMMENT '支付方式',
  payment_time TIMESTAMP NULL COMMENT '支付时间',
  order_status VARCHAR(20) NOT NULL DEFAULT 'pending' COMMENT '订单状态',
  contact_name VARCHAR(50) COMMENT '联系人',
  contact_phone VARCHAR(20) COMMENT '联系电话',
  service_address VARCHAR(200) COMMENT '服务地址',
  service_time TIMESTAMP COMMENT '服务时间',
  remark TEXT COMMENT '备注',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_order_no (order_no),
  INDEX idx_user_id (user_id),
  INDEX idx_merchant_id (merchant_id),
  INDEX idx_status (order_status),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (merchant_id) REFERENCES merchants(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

-- =============================================
-- 城市广播相关表
-- =============================================

-- 城市公告表
CREATE TABLE IF NOT EXISTS city_announcements (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL COMMENT '标题',
  content TEXT NOT NULL COMMENT '内容',
  category VARCHAR(50) NOT NULL COMMENT '分类：city_voice-城市之声，community-社区频道，merchant-商家活动',
  priority TINYINT DEFAULT 0 COMMENT '优先级：0-普通，1-重要，2-紧急',
  tags JSON COMMENT '标签数组',
  cover_image VARCHAR(500) COMMENT '封面图片',
  publisher VARCHAR(50) COMMENT '发布者',
  publish_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
  expire_time TIMESTAMP NULL COMMENT '过期时间',
  view_count INT DEFAULT 0 COMMENT '浏览次数',
  is_top BOOLEAN DEFAULT FALSE COMMENT '是否置顶',
  status TINYINT DEFAULT 1 COMMENT '状态：0-下架，1-发布',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_status (status),
  INDEX idx_publish_time (publish_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='城市公告表';

-- =============================================
-- AI 助手相关表
-- =============================================

-- AI 对话记录表
CREATE TABLE IF NOT EXISTS ai_conversations (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  session_id VARCHAR(64) NOT NULL COMMENT '会话ID',
  user_message TEXT NOT NULL COMMENT '用户消息',
  ai_response TEXT NOT NULL COMMENT 'AI回复',
  message_type VARCHAR(20) DEFAULT 'text' COMMENT '消息类型：text-文本，voice-语音',
  context JSON COMMENT '上下文信息',
  intent VARCHAR(50) COMMENT '意图识别',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  INDEX idx_session_id (session_id),
  INDEX idx_created_at (created_at),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='AI对话记录表';

-- =============================================
-- 预约相关表
-- =============================================

-- 预约表
CREATE TABLE IF NOT EXISTS reservations (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  reservation_no VARCHAR(32) NOT NULL UNIQUE COMMENT '预约号',
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  merchant_id BIGINT UNSIGNED NOT NULL COMMENT '商家ID',
  service_id BIGINT UNSIGNED COMMENT '服务ID',
  reservation_type VARCHAR(50) NOT NULL COMMENT '预约类型',
  reservation_time TIMESTAMP NOT NULL COMMENT '预约时间',
  contact_name VARCHAR(50) NOT NULL COMMENT '联系人',
  contact_phone VARCHAR(20) NOT NULL COMMENT '联系电话',
  remark TEXT COMMENT '备注',
  status VARCHAR(20) NOT NULL DEFAULT 'pending' COMMENT '状态：pending-待确认，confirmed-已确认，completed-已完成，cancelled-已取消',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_reservation_no (reservation_no),
  INDEX idx_user_id (user_id),
  INDEX idx_merchant_id (merchant_id),
  INDEX idx_status (status),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (merchant_id) REFERENCES merchants(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='预约表';

-- =============================================
-- 智能出行相关表
-- =============================================

-- 车辆信息表
CREATE TABLE IF NOT EXISTS vehicles (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  license_plate VARCHAR(20) NOT NULL COMMENT '车牌号',
  brand VARCHAR(50) COMMENT '品牌',
  model VARCHAR(50) COMMENT '型号',
  color VARCHAR(20) COMMENT '颜色',
  vin VARCHAR(50) COMMENT '车架号',
  engine_no VARCHAR(50) COMMENT '发动机号',
  buy_date DATE COMMENT '购买日期',
  insurance_expire_date DATE COMMENT '保险到期日期',
  inspection_expire_date DATE COMMENT '年检到期日期',
  is_default BOOLEAN DEFAULT FALSE COMMENT '是否默认车辆',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  INDEX idx_license_plate (license_plate),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='车辆信息表';

-- =============================================
-- 宠物相关表
-- =============================================

-- 宠物信息表
CREATE TABLE IF NOT EXISTS pets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  pet_name VARCHAR(50) NOT NULL COMMENT '宠物名字',
  pet_type VARCHAR(20) NOT NULL COMMENT '宠物类型：dog-狗，cat-猫，other-其他',
  breed VARCHAR(50) COMMENT '品种',
  gender TINYINT COMMENT '性别：1-公，2-母',
  birthday DATE COMMENT '生日',
  avatar VARCHAR(500) COMMENT '头像',
  weight DECIMAL(5, 2) COMMENT '体重(kg)',
  is_sterilized BOOLEAN DEFAULT FALSE COMMENT '是否绝育',
  health_status TEXT COMMENT '健康状况',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='宠物信息表';

-- =============================================
-- 母婴相关表
-- =============================================

-- 母婴档案表
CREATE TABLE IF NOT EXISTS maternal_records (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  record_type TINYINT NOT NULL COMMENT '档案类型：1-孕期，2-婴幼儿',
  expected_date DATE COMMENT '预产期',
  baby_name VARCHAR(50) COMMENT '宝宝姓名',
  baby_gender TINYINT COMMENT '宝宝性别：1-男，2-女',
  baby_birthday DATE COMMENT '宝宝生日',
  baby_weight DECIMAL(5, 2) COMMENT '出生体重(kg)',
  baby_height DECIMAL(5, 2) COMMENT '出生身高(cm)',
  health_records JSON COMMENT '健康记录',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='母婴档案表';

-- =============================================
-- 老人关爱相关表
-- =============================================

-- 老人档案表
CREATE TABLE IF NOT EXISTS elderly_records (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  elderly_name VARCHAR(50) NOT NULL COMMENT '老人姓名',
  elderly_age INT COMMENT '年龄',
  emergency_contact VARCHAR(50) COMMENT '紧急联系人',
  emergency_phone VARCHAR(20) COMMENT '紧急联系电话',
  health_conditions JSON COMMENT '健康状况',
  medications JSON COMMENT '用药记录',
  care_level TINYINT COMMENT '护理等级：1-自理，2-半护理，3-全护理',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='老人档案表';

-- =============================================
-- 初始化测试数据
-- =============================================

-- 插入测试用户
INSERT INTO users (phone, username, nickname, gender, status) VALUES
('13800138000', 'test_user_1', '张三', 1, 1),
('13800138001', 'test_user_2', '李四', 2, 1),
('13800138002', 'test_user_3', '王五', 1, 1);

-- 插入测试商家
INSERT INTO merchants (merchant_name, merchant_type, contact_person, contact_phone, address, rating, status) VALUES
('美团超市', 'supermarket', '张经理', '13900139000', '北京市朝阳区xxx街道', 4.8, 1),
('社区医院', 'medical', '李医生', '13900139001', '北京市朝阳区xxx社区', 4.9, 1),
('社区物业', 'property', '王主任', '13900139002', '北京市朝阳区xxx小区', 4.5, 1);

-- 插入城市公告
INSERT INTO city_announcements (title, content, category, priority, publisher, status) VALUES
('台风预警通知', '预计明日将有强台风过境，请市民做好防护措施', 'city_voice', 2, '市气象局', 1),
('地铁临时调整', '地铁2号线因维护需要，将于本周六停运', 'city_voice', 1, '市交通局', 1),
('社区运动会', '本月28日举办社区运动会，欢迎居民报名参加', 'community', 0, '社区居委会', 1),
('超市大促销', '本周末全场商品8折优惠，欢迎选购', 'merchant', 0, '美团超市', 1);

-- 创建数据库用户并授权（如果不存在）
CREATE USER IF NOT EXISTS 'yyc3_gov'@'localhost' IDENTIFIED BY 'yyc3_gov';
GRANT ALL PRIVILEGES ON yyc3_my.* TO 'yyc3_gov'@'localhost';
FLUSH PRIVILEGES;
