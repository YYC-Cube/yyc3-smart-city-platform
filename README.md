# 🏠 YYC³ 智慧城市服务平台  ❤️  "小语"多维智能助手  ❤️

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> 🤖 **"小语"** - 您的专属多维智能助手，让智能贴近生活，让科技更有温度！

## 📖 项目简介

YYC³智慧城市服务平台是一个基于 Next.js 15 构建的现代化智能服务平台，集成了本地大模型AI助手❤️"小语"，为用户提供全方位的智慧生活服务。平台以拟人化交互为核心，结合百度地图、本地大模型等技术，打造24/7贴心智能服务体验。

### 🎯 核心理念
- **拟人化思维** - AI助手具备情感表达和温暖交流
- **便捷服务** - 一站式解决生活各类需求
- **畅享智能** - 让科技融入生活的每个角落
- **隐私保护** - 本地化处理，数据安全可控

## ✨ 功能特性

### 🤖 "小语"智能管家
- **情感化交互** - 具备多种情感状态表达
- **多维服务** - 天气查询、地图导航、日程管理、紧急救助
- **智能学习** - 上下文记忆、个性化推荐
- **语音交互** - 支持语音识别与合成
- **本地处理** - 隐私数据不上传，安全可靠

### 🏙️ 城市赋能
- **智慧社区** - 社区服务、邻里互助
- **便民服务** - 政务服务、生活缴费
- **资源共享** - 技能交换、物品共享

### 👴 养老关怀
- **健康监测** - 实时健康数据跟踪
- **陪伴服务** - 智能聊天、情感支持
- **医疗助手** - 用药提醒、就医指导

### 🏡 智慧生活
- **智能家居** - 设备控制、场景联动
- **智慧出行** - 路线规划、实时导航
- **生活助手** - 日程管理、提醒服务

### 📅 智能时间系统
- **多时制显示** - 12/24小时制自由切换
- **农历日历** - 传统节日、二十四节气
- **节日提醒** - 重要节日高亮显示
- **生日管家** - 用户生日智能提醒

### 📢 城市之声
- **实时播报** - 重要信息滚动播报
- **社区动态** - 本地新闻、活动通知
- **便民信息** - 天气预警、交通状况

## 🛠️ 技术栈

### 前端框架
- **Next.js 15** - React全栈框架，支持SSR/SSG
- **TypeScript** - 类型安全的JavaScript超集
- **Tailwind CSS** - 原子化CSS框架
- **Shadcn/ui** - 现代化UI组件库

### AI与地图
- **本地大模型** - Llama 2/ChatGLM-6B
- **百度地图API** - JavaScript API v3.0
- **语音识别** - Web Speech API
- **自然语言处理** - 本地化NLP处理

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git钩子管理
- **Docker** - 容器化部署

## 🚀 快速开始

### 环境要求
- Node.js 18.0+
- npm 9.0+ 或 yarn 1.22+
- Docker (可选，用于本地大模型部署)

### 安装步骤

1. **克隆项目**
\`\`\`bash
git clone [https://github.com/YY-Nexus/YYC_Smart_City_Platform.git]
cd smart-life-assistant
\`\`\`

2. **安装依赖**
\`\`\`bash
npm install
# 或
yarn install
\`\`\`

3. **环境配置**
\`\`\`bash
cp .env.example .env.local
\`\`\`

编辑 `.env.local` 文件，配置必要的环境变量：
\`\`\`env
# 百度地图API密钥
NEXT_PUBLIC_BAIDU_MAP_AK=your_baidu_map_api_key

# 本地大模型配置
LOCAL_AI_MODEL_URL=http://localhost:8080
LOCAL_AI_MODEL_TYPE=chatglm

# 数据库配置（可选）
DATABASE_URL=your_database_url
\`\`\`

4. **启动开发服务器**
\`\`\`bash
npm run dev
# 或
yarn dev
\`\`\`

5. **访问应用**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 本地大模型部署（可选）

使用Docker部署ChatGLM-6B：
\`\`\`bash
# 拉取镜像
docker pull chatglm/chatglm-6b:latest

# 启动容器
docker run -d \
  --name chatglm-6b \
  -p 8080:8080 \
  --gpus all \
  chatglm/chatglm-6b:latest
\`\`\`

## 📁 项目结构

\`\`\`
smart-life-assistant/
├── app/                          # Next.js App Router
│   ├── city-empowerment/         # 城市赋能模块
│   ├── elderly-care/             # 养老关怀模块
│   ├── smart-living/             # 智慧生活模块
│   ├── project-plan/             # 项目计划页面
│   ├── login/                    # 登录页面
│   ├── register/                 # 注册页面
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 首页
├── components/                   # 可复用组件
│   ├── ui/                       # UI基础组件
│   ├── CityVoiceBroadcast.tsx    # 城市之声播报
│   ├── DateTime.tsx              # 智能时间组件
│   ├── XiaoYuAssistant.tsx       # 小语智能助手
│   ├── ModernNavigation.tsx      # 现代化导航
│   └── ...                      # 其他组件
├── docs/                         # 项目文档
├── lib/                          # 工具库
├── public/                       # 静态资源
├── types/                        # TypeScript类型定义
├── .env.example                  # 环境变量示例
├── next.config.js                # Next.js配置
├── tailwind.config.js            # Tailwind配置
├── package.json                  # 项目依赖
└── README.md                     # 项目说明
\`\`\`

## 📋 开发计划 ❤️

### 🎯 第一阶段：基础架构搭建（2025年6月21日 - 7月15日）
- [x] 项目初始化和基础框架搭建
- [x] UI组件库集成和主题配置
- [x] 路由结构设计和页面框架
- [x] 响应式布局和移动端适配
- [ ] 用户认证系统开发
- [ ] 数据库设计和API接口

### 🤖 第二阶段：AI能力与地图集成（7月16日 - 8月31日）
- [ ] 本地大模型部署和接口封装
- [ ] "小语"智能助手核心功能开发
- [ ] 百度地图API深度集成
- [ ] 语音识别和合成功能
- [ ] 自然语言处理优化
- [ ] AI对话上下文管理

### 🏠 第三阶段：生活服务整合（9月1日 - 10月15日）
- [ ] 智能家居设备接入
- [ ] 健康监测数据集成
- [ ] 社区服务功能开发
- [ ] 便民服务API对接
- [ ] 个性化推荐算法
- [ ] 数据分析和可视化

### 🚀 第四阶段：上线运营（10月16日 - 12月31日）
- [ ] 性能优化和安全加固
- [ ] 用户测试和反馈收集
- [ ] 运营数据监控
- [ ] 持续功能迭代
- [ ] 用户社区建设
- [ ] 商业化模式探索

## ❤️贡献指南❤️

我们欢迎所有形式的贡献！请遵循以下步骤：

1. **Fork 项目**
2. **创建功能分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **创建 Pull Request**

### 代码规范
- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 和 Prettier 配置
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case
- 提交信息使用中文，格式：`类型: 描述`

### 提交类型
- `功能`: 新功能开发
- `修复`: Bug修复
- `文档`: 文档更新
- `样式`: 代码格式调整
- `重构`: 代码重构
- `测试`: 测试相关
- `构建`: 构建系统或依赖更新

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 强大的React框架
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的CSS框架
- [Shadcn/ui](https://ui.shadcn.com/) - 现代化UI组件
- [百度地图](https://lbsyun.baidu.com/) - 地图服务支持
- [Hugging Face](https://huggingface.co/) - AI模型资源

## 📞 联系我们

- **项目主页**: [https://github.com/YY-Nexus/YYC_Smart_City_Platform.git]
- **问题反馈**: ❤️admin@0379.email❤️
- **功能建议**: ❤️admin@0379.email❤️

---

<div align="center">

**🌟 如果这个项目对您有帮助，请给我们一个 Star！🌟**

万象归源于云枢丨深栈智启新纪元

Made with ❤️ by YanYu Team

</div>
