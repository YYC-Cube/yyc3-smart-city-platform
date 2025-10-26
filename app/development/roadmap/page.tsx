"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Layers,
  Target,
  Users,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  TrendingUp,
  FileText,
  Rocket,
  Star,
  Award,
  ChevronRight,
  ChevronDown,
  Calendar,
  DollarSign,
} from "lucide-react"

export default function DevelopmentRoadmapPage() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null)
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)

  // 分层开发策略
  const developmentLayers = [
    {
      id: "foundation",
      name: "基础设施层",
      priority: "P0",
      description: "核心技术架构、基础服务、安全体系",
      duration: "3-4个月",
      complexity: "高",
      riskLevel: "中",
      investment: "高",
      modules: [
        {
          name: "用户认证系统",
          description: "统一身份认证、权限管理、安全登录",
          techStack: ["Next.js", "NextAuth", "JWT", "Redis"],
          team: ["架构师", "后端开发", "安全专家"],
          duration: "4周",
          dependencies: [],
        },
        {
          name: "支付系统",
          description: "多渠道支付、风控系统、资金清算",
          techStack: ["Node.js", "微信支付", "支付宝", "银联"],
          team: ["支付专家", "后端开发", "风控专家"],
          duration: "6周",
          dependencies: ["用户认证系统"],
        },
        {
          name: "消息推送系统",
          description: "实时通知、消息队列、推送服务",
          techStack: ["WebSocket", "Redis", "RabbitMQ", "FCM"],
          team: ["后端开发", "运维工程师"],
          duration: "3周",
          dependencies: ["用户认证系统"],
        },
        {
          name: "地理位置服务",
          description: "定位服务、地图集成、配送路径优化",
          techStack: ["高德地图", "百度地图", "GPS", "算法优化"],
          team: ["地图专家", "算法工程师", "前端开发"],
          duration: "5周",
          dependencies: [],
        },
      ],
      milestones: [
        { name: "技术架构设计完成", date: "第2周", status: "completed" },
        { name: "核心基础服务开发完成", date: "第8周", status: "in-progress" },
        { name: "安全体系验证通过", date: "第12周", status: "pending" },
        { name: "基础设施层上线", date: "第16周", status: "pending" },
      ],
    },
    {
      id: "core-services",
      name: "核心服务层",
      priority: "P1",
      description: "高频使用、高价值的核心业务功能",
      duration: "4-6个月",
      complexity: "高",
      riskLevel: "中",
      investment: "高",
      modules: [
        {
          name: "生活刚需服务",
          description: "外卖配送、超市购物、生鲜配送、药品配送",
          techStack: ["React", "Node.js", "MongoDB", "Redis"],
          team: ["产品经理", "前端开发", "后端开发", "UI设计师"],
          duration: "8周",
          dependencies: ["支付系统", "地理位置服务"],
        },
        {
          name: "在线就诊服务",
          description: "预约挂号、在线问诊、健康档案管理",
          techStack: ["WebRTC", "医疗API", "区块链", "AI诊断"],
          team: ["医疗专家", "前端开发", "后端开发", "AI工程师"],
          duration: "10周",
          dependencies: ["用户认证系统", "支付系统"],
        },
        {
          name: "社区服务平台",
          description: "物业管理、快递收发、邻里互助",
          techStack: ["React Native", "IoT集成", "智能硬件"],
          team: ["IoT专家", "移动端开发", "硬件工程师"],
          duration: "6周",
          dependencies: ["消息推送系统", "地理位置服务"],
        },
        {
          name: "商家服务平台",
          description: "商家入驻、店铺管理、营销工具",
          techStack: ["Vue.js", "大数据分析", "推荐算法"],
          team: ["商务专家", "前端开发", "数据分析师"],
          duration: "7周",
          dependencies: ["支付系统", "消息推送系统"],
        },
      ],
      milestones: [
        { name: "核心功能原型完成", date: "第4周", status: "pending" },
        { name: "MVP版本开发完成", date: "第12周", status: "pending" },
        { name: "用户测试验证通过", date: "第18周", status: "pending" },
        { name: "核心服务层正式上线", date: "第24周", status: "pending" },
      ],
    },
    {
      id: "extended-services",
      name: "扩展服务层",
      priority: "P2",
      description: "中频使用、特定场景的专业服务",
      duration: "3-5个月",
      complexity: "中",
      riskLevel: "低",
      investment: "中",
      modules: [
        {
          name: "便民政务服务",
          description: "政务办事、公共缴费、证件办理",
          techStack: ["政务API", "区块链", "电子签名"],
          team: ["政务专家", "前端开发", "后端开发"],
          duration: "6周",
          dependencies: ["用户认证系统", "支付系统"],
        },
        {
          name: "教育培训平台",
          description: "在线课程、技能培训、考试报名",
          techStack: ["视频直播", "在线考试", "学习管理"],
          team: ["教育专家", "前端开发", "视频技术专家"],
          duration: "8周",
          dependencies: ["支付系统", "消息推送系统"],
        },
        {
          name: "家政服务平台",
          description: "家庭清洁、维修服务、月嫂保姆",
          techStack: ["服务匹配算法", "评价系统", "调度系统"],
          team: ["服务专家", "算法工程师", "前端开发"],
          duration: "5周",
          dependencies: ["地理位置服务", "支付系统"],
        },
        {
          name: "金融服务集成",
          description: "银行服务、保险理财、贷款申请",
          techStack: ["金融API", "风控系统", "数据加密"],
          team: ["金融专家", "风控专家", "后端开发"],
          duration: "7周",
          dependencies: ["用户认证系统", "支付系统"],
        },
      ],
      milestones: [
        { name: "需求调研完成", date: "第2周", status: "pending" },
        { name: "功能开发完成", date: "第10周", status: "pending" },
        { name: "集成测试通过", date: "第14周", status: "pending" },
        { name: "扩展服务层上线", date: "第18周", status: "pending" },
      ],
    },
    {
      id: "specialized-services",
      name: "专业服务层",
      priority: "P3",
      description: "特定人群、垂直领域的专业化服务",
      duration: "4-6个月",
      complexity: "中高",
      riskLevel: "中",
      investment: "中高",
      modules: [
        {
          name: "呵护母婴服务",
          description: "孕期护理、婴幼儿服务、母婴用品",
          techStack: ["健康监测", "成长记录", "专家咨询"],
          team: ["母婴专家", "前端开发", "健康数据分析师"],
          duration: "6周",
          dependencies: ["在线就诊服务", "商家服务平台"],
        },
        {
          name: "关爱老人服务",
          description: "健康监护、生活照料、紧急救助",
          techStack: ["IoT设备", "健康监测", "紧急呼叫"],
          team: ["养老专家", "IoT工程师", "医疗设备专家"],
          duration: "8周",
          dependencies: ["消息推送系统", "在线就诊服务"],
        },
        {
          name: "智驭随行服务",
          description: "智能驾驶、车联网、出行助手",
          techStack: ["车载系统", "AI算法", "实时通信"],
          team: ["汽车专家", "AI工程师", "嵌入式开发"],
          duration: "10周",
          dependencies: ["地理位置服务", "消息推送系统"],
        },
        {
          name: "伴宠星途服务",
          description: "宠物护理、宠物医疗、宠物社交",
          techStack: ["宠物识别", "健康监测", "社交平台"],
          team: ["宠物专家", "AI工程师", "前端开发"],
          duration: "7周",
          dependencies: ["在线就诊服务", "社区服务平台"],
        },
      ],
      milestones: [
        { name: "专业需求分析完成", date: "第3周", status: "pending" },
        { name: "专业功能开发完成", date: "第12周", status: "pending" },
        { name: "专家验证通过", date: "第16周", status: "pending" },
        { name: "专业服务层上线", date: "第20周", status: "pending" },
      ],
    },
    {
      id: "innovation-services",
      name: "创新服务层",
      priority: "P4",
      description: "前沿技术、实验性功能、未来服务",
      duration: "持续迭代",
      complexity: "高",
      riskLevel: "高",
      investment: "中",
      modules: [
        {
          name: "AI智能助手",
          description: "语音助手、智能推荐、自动化服务",
          techStack: ["NLP", "机器学习", "语音识别", "推荐系统"],
          team: ["AI专家", "算法工程师", "数据科学家"],
          duration: "持续",
          dependencies: ["所有基础服务"],
        },
        {
          name: "AR/VR体验",
          description: "虚拟试穿、3D展示、沉浸式体验",
          techStack: ["AR/VR", "3D建模", "实时渲染"],
          team: ["AR/VR专家", "3D设计师", "前端开发"],
          duration: "持续",
          dependencies: ["商家服务平台"],
        },
        {
          name: "区块链服务",
          description: "数字身份、智能合约、去中心化存储",
          techStack: ["区块链", "智能合约", "IPFS"],
          team: ["区块链专家", "智能合约开发", "安全专家"],
          duration: "持续",
          dependencies: ["用户认证系统"],
        },
        {
          name: "IoT生态系统",
          description: "智能家居、环境监测、设备联动",
          techStack: ["IoT平台", "边缘计算", "设备管理"],
          team: ["IoT专家", "嵌入式开发", "云平台工程师"],
          duration: "持续",
          dependencies: ["基础设施层"],
        },
      ],
      milestones: [
        { name: "技术可行性验证", date: "持续", status: "in-progress" },
        { name: "原型开发完成", date: "按需", status: "pending" },
        { name: "用户体验测试", date: "按需", status: "pending" },
        { name: "创新功能上线", date: "按需", status: "pending" },
      ],
    },
  ]

  // 迭代周期规划
  const iterationPhases = [
    {
      id: "phase1",
      name: "第一阶段：基础建设",
      duration: "4个月",
      startDate: "2025年12月",
      endDate: "2026年3月",
      focus: "基础设施层 + 核心服务层MVP",
      objectives: [
        "完成技术架构设计和基础设施搭建",
        "实现用户认证、支付、消息推送等核心系统",
        "开发生活刚需和在线就诊的MVP版本",
        "建立开发流程和质量保证体系",
      ],
      deliverables: ["技术架构文档", "基础设施部署", "核心系统API", "MVP应用发布"],
      kpis: [
        { name: "系统可用性", target: "99.5%", current: 0 },
        { name: "API响应时间", target: "<200ms", current: 0 },
        { name: "用户注册转化率", target: "15%", current: 0 },
        { name: "MVP功能完成度", target: "100%", current: 0 },
      ],
      risks: [
        { name: "技术架构复杂度", level: "高", mitigation: "引入架构专家，分阶段验证" },
        { name: "第三方API集成", level: "中", mitigation: "提前对接，准备备选方案" },
        { name: "团队磨合", level: "中", mitigation: "加强沟通，建立协作机制" },
      ],
    },
    {
      id: "phase2",
      name: "第二阶段：核心完善",
      duration: "3个月",
      startDate: "2026年4月",
      endDate: "2026年6月",
      focus: "核心服务层完整版 + 扩展服务层",
      objectives: [
        "完善核心服务功能，提升用户体验",
        "开发便民政务、教育培训等扩展服务",
        "建立商家生态，引入合作伙伴",
        "优化系统性能，提升服务质量",
      ],
      deliverables: ["核心服务完整版", "扩展服务模块", "商家管理平台", "性能优化报告"],
      kpis: [
        { name: "月活跃用户", target: "50万", current: 0 },
        { name: "用户留存率", target: "60%", current: 0 },
        { name: "商家入驻数量", target: "1000家", current: 0 },
        { name: "服务响应时间", target: "<30分钟", current: 0 },
      ],
      risks: [
        { name: "用户增长缓慢", level: "中", mitigation: "加强市场推广，优化用户体验" },
        { name: "商家合作困难", level: "中", mitigation: "提供优惠政策，建立合作机制" },
        { name: "系统性能瓶颈", level: "高", mitigation: "提前压测，准备扩容方案" },
      ],
    },
    {
      id: "phase3",
      name: "第三阶段：专业拓展",
      duration: "4个月",
      startDate: "2026年7月",
      endDate: "2026年10月",
      focus: "专业服务层 + 创新服务试点",
      objectives: [
        "开发母婴、养老等专业服务功能",
        "推出智驭随行、伴宠星途创新服务",
        "建立专业服务生态和标准",
        "试点AI、AR等前沿技术应用",
      ],
      deliverables: ["专业服务模块", "创新服务试点", "专业标准体系", "技术创新报告"],
      kpis: [
        { name: "专业服务用户", target: "20万", current: 0 },
        { name: "创新服务试用率", target: "30%", current: 0 },
        { name: "专业服务满意度", target: "4.5分", current: 0 },
        { name: "技术创新指标", target: "5项", current: 0 },
      ],
      risks: [
        { name: "专业服务标准化", level: "高", mitigation: "引入行业专家，建立标准体系" },
        { name: "创新技术成熟度", level: "高", mitigation: "小范围试点，逐步推广" },
        { name: "用户接受度", level: "中", mitigation: "用户教育，体验优化" },
      ],
    },
    {
      id: "phase4",
      name: "第四阶段：生态完善",
      duration: "持续迭代",
      startDate: "2026年11月",
      endDate: "持续",
      focus: "创新服务层 + 生态系统优化",
      objectives: [
        "完善创新服务功能，推广应用",
        "建立完整的服务生态系统",
        "实现平台数据智能化运营",
        "拓展新的业务领域和合作模式",
      ],
      deliverables: ["创新服务正式版", "生态系统平台", "智能运营系统", "业务拓展方案"],
      kpis: [
        { name: "平台总用户", target: "500万", current: 0 },
        { name: "生态合作伙伴", target: "10000家", current: 0 },
        { name: "平台总收入", target: "5亿元", current: 0 },
        { name: "市场占有率", target: "30%", current: 0 },
      ],
      risks: [
        { name: "市场竞争加剧", level: "高", mitigation: "持续创新，建立竞争壁垒" },
        { name: "监管政策变化", level: "中", mitigation: "密切关注政策，及时调整" },
        { name: "技术更新换代", level: "中", mitigation: "保持技术敏感度，持续投入研发" },
      ],
    },
  ]

  // 专业团队配置
  const teamConfiguration = [
    {
      role: "项目管理团队",
      members: [
        { title: "项目总监", count: 1, responsibility: "整体项目规划和管控" },
        { title: "产品经理", count: 3, responsibility: "产品规划和需求管理" },
        { title: "项目经理", count: 2, responsibility: "项目执行和进度管控" },
        { title: "敏捷教练", count: 1, responsibility: "敏捷流程和团队协作" },
      ],
      totalCount: 7,
    },
    {
      role: "技术架构团队",
      members: [
        { title: "技术总监", count: 1, responsibility: "技术架构和技术决策" },
        { title: "系统架构师", count: 2, responsibility: "系统设计和架构优化" },
        { title: "数据架构师", count: 1, responsibility: "数据架构和数据治理" },
        { title: "安全架构师", count: 1, responsibility: "安全体系和风险控制" },
      ],
      totalCount: 5,
    },
    {
      role: "前端开发团队",
      members: [
        { title: "前端技术负责人", count: 1, responsibility: "前端技术规划和团队管理" },
        { title: "高级前端工程师", count: 4, responsibility: "核心功能开发和技术攻关" },
        { title: "前端工程师", count: 6, responsibility: "功能开发和维护" },
        { title: "移动端工程师", count: 3, responsibility: "移动应用开发" },
      ],
      totalCount: 14,
    },
    {
      role: "后端开发团队",
      members: [
        { title: "后端技术负责人", count: 1, responsibility: "后端技术规划和团队管理" },
        { title: "高级后端工程师", count: 5, responsibility: "核心服务开发和架构实现" },
        { title: "后端工程师", count: 8, responsibility: "业务功能开发和API实现" },
        { title: "DevOps工程师", count: 2, responsibility: "部署运维和CI/CD" },
      ],
      totalCount: 16,
    },
    {
      role: "专业服务团队",
      members: [
        { title: "医疗专家", count: 2, responsibility: "医疗服务规划和质量把控" },
        { title: "教育专家", count: 1, responsibility: "教育培训内容和标准制定" },
        { title: "金融专家", count: 1, responsibility: "金融服务合规和风控" },
        { title: "汽车专家", count: 1, responsibility: "智能驾驶服务规划" },
        { title: "宠物专家", count: 1, responsibility: "宠物服务标准和内容" },
      ],
      totalCount: 6,
    },
    {
      role: "设计测试团队",
      members: [
        { title: "设计总监", count: 1, responsibility: "设计规范和用户体验" },
        { title: "UI设计师", count: 3, responsibility: "界面设计和视觉规范" },
        { title: "UX设计师", count: 2, responsibility: "用户体验和交互设计" },
        { title: "测试经理", count: 1, responsibility: "测试策略和质量管控" },
        { title: "测试工程师", count: 4, responsibility: "功能测试和自动化测试" },
      ],
      totalCount: 11,
    },
  ]

  // 质量保证体系
  const qualityAssurance = [
    {
      phase: "需求阶段",
      activities: ["需求评审会议", "用户故事验收标准", "原型设计评审", "技术可行性评估"],
      deliverables: ["需求规格说明书", "原型设计文档", "技术方案文档"],
      criteria: ["需求完整性", "可测试性", "技术可行性"],
    },
    {
      phase: "设计阶段",
      activities: ["架构设计评审", "接口设计评审", "数据库设计评审", "安全设计评审"],
      deliverables: ["系统设计文档", "接口设计文档", "数据库设计文档"],
      criteria: ["设计合理性", "可扩展性", "安全性"],
    },
    {
      phase: "开发阶段",
      activities: ["代码评审", "单元测试", "集成测试", "性能测试"],
      deliverables: ["源代码", "测试用例", "测试报告"],
      criteria: ["代码质量", "测试覆盖率", "性能指标"],
    },
    {
      phase: "部署阶段",
      activities: ["部署方案评审", "生产环境测试", "安全扫描", "性能监控"],
      deliverables: ["部署文档", "监控配置", "应急预案"],
      criteria: ["部署成功率", "系统稳定性", "监控完整性"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">分层开发专业迭代推进大纲</h1>
                <p className="text-sm text-gray-500">智慧城市平台专业化开发路线图</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500 text-white">2026年路线图</Badge>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                导出大纲
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 总体概览 */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>开发策略总览</span>
              </CardTitle>
              <CardDescription>基于市场价值分析的分层开发策略</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Layers className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-blue-700">开发层级</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-sm text-green-700">迭代阶段</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold text-purple-600">59</div>
                  <div className="text-sm text-purple-700">专业团队</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <div className="text-2xl font-bold text-orange-600">18</div>
                  <div className="text-sm text-orange-700">月开发周期</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="layers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="layers">分层策略</TabsTrigger>
            <TabsTrigger value="phases">迭代阶段</TabsTrigger>
            <TabsTrigger value="teams">团队配置</TabsTrigger>
            <TabsTrigger value="quality">质量保证</TabsTrigger>
            <TabsTrigger value="timeline">时间规划</TabsTrigger>
          </TabsList>

          {/* 分层开发策略 */}
          <TabsContent value="layers" className="space-y-6">
            <div className="space-y-6">
              {developmentLayers.map((layer, index) => (
                <Card
                  key={layer.id}
                  className={`hover:shadow-lg transition-all duration-300 ${
                    selectedLayer === layer.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <span>{layer.name}</span>
                            <Badge variant={layer.priority === "P0" ? "default" : "secondary"}>{layer.priority}</Badge>
                          </CardTitle>
                          <CardDescription>{layer.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{layer.duration}</div>
                          <div className="text-xs text-gray-500">预计周期</div>
                        </div>
                        {selectedLayer === layer.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {selectedLayer === layer.id && (
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {/* 层级指标 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-500">复杂度</div>
                            <div className="font-medium">{layer.complexity}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-500">风险等级</div>
                            <div className="font-medium">{layer.riskLevel}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-500">投资规模</div>
                            <div className="font-medium">{layer.investment}</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-500">模块数量</div>
                            <div className="font-medium">{layer.modules.length}个</div>
                          </div>
                        </div>

                        {/* 功能模块 */}
                        <div>
                          <h4 className="font-medium mb-3">核心功能模块</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {layer.modules.map((module, moduleIndex) => (
                              <Card key={moduleIndex} className="border-l-4 border-l-blue-500">
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-medium">{module.name}</h5>
                                    <Badge variant="outline" className="text-xs">
                                      {module.duration}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>

                                  <div className="space-y-2">
                                    <div>
                                      <div className="text-xs text-gray-500 mb-1">技术栈</div>
                                      <div className="flex flex-wrap gap-1">
                                        {module.techStack.map((tech, techIndex) => (
                                          <Badge key={techIndex} variant="outline" className="text-xs">
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    <div>
                                      <div className="text-xs text-gray-500 mb-1">团队配置</div>
                                      <div className="flex flex-wrap gap-1">
                                        {module.team.map((role, roleIndex) => (
                                          <Badge key={roleIndex} variant="secondary" className="text-xs">
                                            {role}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    {module.dependencies.length > 0 && (
                                      <div>
                                        <div className="text-xs text-gray-500 mb-1">依赖关系</div>
                                        <div className="text-xs text-gray-600">{module.dependencies.join(", ")}</div>
                                      </div>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* 里程碑 */}
                        <div>
                          <h4 className="font-medium mb-3">关键里程碑</h4>
                          <div className="space-y-3">
                            {layer.milestones.map((milestone, milestoneIndex) => (
                              <div
                                key={milestoneIndex}
                                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <div className="flex-shrink-0">
                                  {milestone.status === "completed" ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : milestone.status === "in-progress" ? (
                                    <Clock className="h-5 w-5 text-blue-500" />
                                  ) : (
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{milestone.name}</div>
                                  <div className="text-sm text-gray-600">{milestone.date}</div>
                                </div>
                                <Badge
                                  variant={
                                    milestone.status === "completed"
                                      ? "default"
                                      : milestone.status === "in-progress"
                                        ? "secondary"
                                        : "outline"
                                  }
                                  className="text-xs"
                                >
                                  {milestone.status === "completed"
                                    ? "已完成"
                                    : milestone.status === "in-progress"
                                      ? "进行中"
                                      : "待开始"}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 迭代阶段 */}
          <TabsContent value="phases" className="space-y-6">
            <div className="space-y-6">
              {iterationPhases.map((phase, index) => (
                <Card
                  key={phase.id}
                  className={`hover:shadow-lg transition-all duration-300 ${
                    selectedPhase === phase.id ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle>{phase.name}</CardTitle>
                          <CardDescription>
                            {phase.startDate} - {phase.endDate} ({phase.duration})
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{phase.focus}</Badge>
                        {selectedPhase === phase.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {selectedPhase === phase.id && (
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {/* 阶段目标 */}
                        <div>
                          <h4 className="font-medium mb-3">阶段目标</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.objectives.map((objective, objIndex) => (
                              <div key={objIndex} className="flex items-start space-x-2">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{objective}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 交付物 */}
                        <div>
                          <h4 className="font-medium mb-3">主要交付物</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <Badge key={delIndex} variant="secondary">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* KPI指标 */}
                        <div>
                          <h4 className="font-medium mb-3">关键绩效指标</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phase.kpis.map((kpi, kpiIndex) => (
                              <div key={kpiIndex} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">{kpi.name}</span>
                                  <Badge variant="outline">{kpi.target}</Badge>
                                </div>
                                <Progress value={kpi.current} className="h-2" />
                                <div className="text-xs text-gray-500 mt-1">当前进度: {kpi.current}%</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 风险管控 */}
                        <div>
                          <h4 className="font-medium mb-3">风险管控</h4>
                          <div className="space-y-3">
                            {phase.risks.map((risk, riskIndex) => (
                              <div key={riskIndex} className="p-3 border rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">{risk.name}</span>
                                  <Badge
                                    variant={
                                      risk.level === "高"
                                        ? "destructive"
                                        : risk.level === "中"
                                          ? "secondary"
                                          : "outline"
                                    }
                                  >
                                    {risk.level}风险
                                  </Badge>
                                </div>
                                <div className="text-sm text-gray-600">
                                  <strong>缓解措施:</strong> {risk.mitigation}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 团队配置 */}
          <TabsContent value="teams" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamConfiguration.map((team, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{team.role}</span>
                      <Badge variant="outline">{team.totalCount}人</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {team.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{member.title}</div>
                            <div className="text-sm text-gray-600">{member.responsibility}</div>
                          </div>
                          <Badge variant="secondary">{member.count}人</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 团队总览 */}
            <Card>
              <CardHeader>
                <CardTitle>团队配置总览</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {teamConfiguration.map((team, index) => (
                    <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold text-blue-600">{team.totalCount}</div>
                      <div className="text-xs text-blue-700">{team.role.replace("团队", "")}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {teamConfiguration.reduce((sum, team) => sum + team.totalCount, 0)}
                  </div>
                  <div className="text-sm text-gray-500">专业团队总人数</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 质量保证 */}
          <TabsContent value="quality" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualityAssurance.map((qa, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span>{qa.phase}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">质量活动</h5>
                        <div className="space-y-2">
                          {qa.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">交付物</h5>
                        <div className="flex flex-wrap gap-2">
                          {qa.deliverables.map((deliverable, delIndex) => (
                            <Badge key={delIndex} variant="outline">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">质量标准</h5>
                        <div className="space-y-1">
                          {qa.criteria.map((criterion, criIndex) => (
                            <div key={criIndex} className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm">{criterion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 质量指标 */}
            <Card>
              <CardHeader>
                <CardTitle>质量控制指标</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-green-700">代码覆盖率</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-blue-700">系统可用性</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold text-purple-600">&lt;200ms</div>
                    <div className="text-sm text-purple-700">响应时间</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <div className="text-2xl font-bold text-orange-600">4.5+</div>
                    <div className="text-sm text-orange-700">用户满意度</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 时间规划 */}
          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>开发时间线总览</CardTitle>
                <CardDescription>2025年12月 - 2026年12月及后续持续迭代</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* 时间轴 */}
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="space-y-8">
                      {iterationPhases.map((phase, index) => (
                        <div key={phase.id} className="relative flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-white p-4 rounded-lg border shadow-sm">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold">{phase.name}</h4>
                                <Badge variant="outline">{phase.duration}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{phase.focus}</p>
                              <div className="flex items-center text-xs text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>
                                  {phase.startDate} - {phase.endDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 关键里程碑 */}
                  <div className="mt-8">
                    <h4 className="font-medium mb-4">关键里程碑时间点</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Rocket className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">MVP上线</span>
                        </div>
                        <div className="text-sm text-gray-600">2026年3月</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-medium">核心服务完成</span>
                        </div>
                        <div className="text-sm text-gray-600">2026年6月</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-5 w-5 text-purple-600" />
                          <span className="font-medium">专业服务上线</span>
                        </div>
                        <div className="text-sm text-gray-600">2026年10月</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 资源投入计划 */}
            <Card>
              <CardHeader>
                <CardTitle>资源投入计划</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">59人</div>
                    <div className="text-sm text-blue-700">专业团队规模</div>
                    <div className="text-xs text-gray-600 mt-2">涵盖6个专业领域</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <div className="text-3xl font-bold text-green-600 mb-2">5000万</div>
                    <div className="text-sm text-green-700">预算投入规模</div>
                    <div className="text-xs text-gray-600 mt-2">18个月开发周期</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <Clock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">18月</div>
                    <div className="text-sm text-purple-700">开发周期规划</div>
                    <div className="text-xs text-gray-600 mt-2">4个主要迭代阶段</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
