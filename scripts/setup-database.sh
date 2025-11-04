#!/bin/bash

# YYC³ 智慧城市平台 - 数据库设置脚本

echo "🚀 开始设置 YYC³ 智慧城市平台数据库..."

# 检查 MySQL 是否已安装
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL 未安装。请先安装 MySQL:"
    echo "   - Ubuntu/Debian: sudo apt install mysql-server"
    echo "   - macOS: brew install mysql"
    echo "   - Windows: 下载 MySQL 安装包"
    exit 1
fi

# 检查 MySQL 服务是否运行
if ! systemctl is-active --quiet mysql 2>/dev/null && ! brew services list | grep mysql | grep started &> /dev/null; then
    echo "❌ MySQL 服务未运行。请启动 MySQL 服务:"
    echo "   - Ubuntu/Debian: sudo systemctl start mysql"
    echo "   - macOS: brew services start mysql"
    exit 1
fi

echo "✅ MySQL 已安装并运行"

# 读取配置
echo "📝 请输入 MySQL 配置信息:"
read -p "MySQL 主机 (默认: localhost): " DB_HOST
DB_HOST=${DB_HOST:-localhost}

read -p "MySQL 端口 (默认: 3306): " DB_PORT
DB_PORT=${DB_PORT:-3306}

read -p "MySQL 用户名 (默认: root): " DB_USER
DB_USER=${DB_USER:-root}

read -s -p "MySQL 密码: " DB_PASSWORD
echo

read -p "数据库名称 (默认: yyc_platform): " DB_NAME
DB_NAME=${DB_NAME:-yyc_platform}

# 测试连接
echo "🔍 测试数据库连接..."
if ! mysql -h"$DB_HOST" -P"$DB_PORT" -u"$DB_USER" -p"$DB_PASSWORD" -e "SELECT 1;" &> /dev/null; then
    echo "❌ 数据库连接失败，请检查配置"
    exit 1
fi

echo "✅ 数据库连接成功"

# 创建 .env.local 文件
echo "📄 创建 .env.local 文件..."
cat > .env.local << EOF
# 数据库配置
DB_HOST=$DB_HOST
DB_PORT=$DB_PORT
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
DB_NAME=$DB_NAME

# Next.js 配置
NEXTAUTH_SECRET=development-secret-key
NEXTAUTH_URL=http://localhost:3000

NODE_ENV=development
EOF

echo "✅ .env.local 文件已创建"

# 执行数据库初始化脚本
echo "🗄️ 初始化数据库..."
if mysql -h"$DB_HOST" -P"$DB_PORT" -u"$DB_USER" -p"$DB_PASSWORD" < scripts/init-database.sql; then
    echo "✅ 数据库初始化完成"
else
    echo "❌ 数据库初始化失败"
    exit 1
fi

echo ""
echo "🎉 数据库设置完成！"
echo ""
echo "📋 接下来的步骤:"
echo "   1. 运行 'pnpm install' 安装依赖"
echo "   2. 运行 'pnpm dev' 启动开发服务器"
echo "   3. 访问 http://localhost:3000"
echo ""
echo "🔧 数据库管理:"
echo "   - 测试连接: pnpm run db:test"
echo "   - 查看数据: 访问 http://localhost:3000/db-test"