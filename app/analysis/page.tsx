"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ShoppingCart,
  Stethoscope,
  FileText,
  Building,
  Car,
  GraduationCap,
  Home,
  CreditCard,
  Star,
  TrendingUp,
  Users,
  Store,
  Baby,
  Heart,
  Megaphone,
  BarChart3,
  LineChart,
  ArrowUpRight,
  ChevronRight,
  Download,
  Share2,
  Printer,
} from "lucide-react"
import Link from "next/link"

export default function AnalysisPage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  // 功能核心数据
  const serviceModules = [
    {
      id: "daily-needs",
      title: "生活刚需",
      description: "超市购物、外卖配送、日用百货",
      icon: ShoppingCart,
      color: "bg-blue-500",
      services: [
        { name: "超市购物", description: "线上下单，社区配送", usage: 78, growth: 15, potential: 90 },
        { name: "外卖配送", description: "餐饮外卖，即时配送", usage: 92, growth: 23, potential: 95 },
        { name: "生鲜配送", description: "新鲜果蔬，产地直达", usage: 65, growth: 35, potential: 88 },
        { name: "药品配送", description: "医药配送，处方审核", usage: 45, growth: 28, potential: 85 },
      ],
      marketValue: 95,
      userSatisfaction: 4.7,
      monthlyActiveUsers: 450000,
      revenue: 12500000,
      growthRate: 23,
      competitionLevel: "高",
      marketTrend: "上升",
      investmentValue: "高",
      analysis:
        "生活刚需服务是平台最核心的功能模块，拥有最高的用户活跃度和使用频率。大数据分析显示，用户平均每周使用3.5次相关服务，消费转化率达到65%。外卖配送是最受欢迎的子功能，但生鲜配送增长最快，显示出巨大的市场潜力。该模块与本地商家合作紧密，可通过提高配送效率和扩大商品品类进一步提升市场价值。",
    },
    {
      id: "medical",
      title: "在线就诊",
      description: "预约挂号、在线问诊、健康管理",
      icon: Stethoscope,
      color: "bg-red-500",
      services: [
        { name: "预约挂号", description: "线上预约，减少等待", usage: 68, growth: 32, potential: 92 },
        { name: "在线问诊", description: "远程医疗，专家咨询", usage: 55, growth: 45, potential: 95 },
        { name: "体检预约", description: "健康体检，定期检查", usage: 42, growth: 25, potential: 80 },
        { name: "健康档案", description: "电子病历，健康记录", usage: 38, growth: 40, potential: 90 },
      ],
      marketValue: 90,
      userSatisfaction: 4.5,
      monthlyActiveUsers: 320000,
      revenue: 9800000,
      growthRate: 35,
      competitionLevel: "中",
      marketTrend: "快速上升",
      investmentValue: "高",
      analysis:
        "在线就诊模块在疫情后呈现爆发式增长，大数据显示用户对远程医疗服务的接受度大幅提高。预约挂号功能使用率最高，但在线问诊增长最快，年增长率达45%。该模块与公立医院合作紧密，通过整合医疗资源，解决了传统就医的痛点。未来可通过AI辅助诊断和慢病管理等创新服务进一步提升市场价值。数据显示，60%的用户愿意为高质量的在线医疗服务支付额外费用。",
    },
    {
      id: "community",
      title: "社区服务",
      description: "物业管理、快递收发、邻里互助",
      icon: Building,
      color: "bg-purple-500",
      services: [
        { name: "物业服务", description: "报修缴费，投诉建议", usage: 75, growth: 18, potential: 85 },
        { name: "快递管理", description: "代收代寄，智能柜取件", usage: 88, growth: 15, potential: 90 },
        { name: "社区商城", description: "社区团购，邻里共享", usage: 52, growth: 30, potential: 80 },
        { name: "邻里互助", description: "技能共享，资源互换", usage: 35, growth: 42, potential: 85 },
      ],
      marketValue: 85,
      userSatisfaction: 4.3,
      monthlyActiveUsers: 380000,
      revenue: 7500000,
      growthRate: 20,
      competitionLevel: "中",
      marketTrend: "稳定上升",
      investmentValue: "中高",
      analysis:
        "社区服务模块是提升用户粘性的关键功能，大数据显示该模块用户留存率高达78%。快递管理是使用频率最高的子功能，平均每用户每月使用6.2次。邻里互助功能虽然使用率较低，但增长迅速，反映了社区共享经济的发展趋势。该模块通过线上线下结合的服务模式，有效提升了社区居民的生活便利性和归属感。未来可通过社区活动组织和兴趣小组等功能进一步强化社区连接。",
    },
    {
      id: "government",
      title: "便民服务",
      description: "政务办事、公共缴费、证件办理",
      icon: FileText,
      color: "bg-green-500",
      services: [
        { name: "政务办事", description: "线上办理，一站式服务", usage: 58, growth: 25, potential: 90 },
        { name: "公共缴费", description: "水电气费，税费缴纳", usage: 82, growth: 12, potential: 85 },
        { name: "证件办理", description: "证照预约，进度查询", usage: 45, growth: 30, potential: 88 },
        { name: "查询服务", description: "信息查询，政策咨询", usage: 65, growth: 20, potential: 80 },
      ],
      marketValue: 80,
      userSatisfaction: 4.0,
      monthlyActiveUsers: 290000,
      revenue: 5200000,
      growthRate: 15,
      competitionLevel: "低",
      marketTrend: "稳定",
      investmentValue: "中",
      analysis:
        "便民服务模块通过与政府部门合作，提供了高效便捷的政务服务体验。大数据显示，该模块为用户平均节省了65%的办事时间。公共缴费是使用率最高的子功能，每月活跃用户超过20万。该模块虽然直接营收较低，但通过提升用户黏性和平台公信力，间接贡献了平台整体价值。未来可通过拓展更多政务服务类型和提升服务智能化水平，进一步提升市场竞争力。",
    },
    {
      id: "merchant",
      title: "商家服务",
      description: "商家入驻、店铺管理、营销推广",
      icon: Store,
      color: "bg-orange-500",
      services: [
        { name: "商家入驻", description: "快速入驻，资质审核", usage: 42, growth: 38, potential: 95 },
        { name: "店铺管理", description: "商品管理，订单处理", usage: 68, growth: 25, potential: 90 },
        { name: "订单管理", description: "订单跟踪，售后服务", usage: 75, growth: 20, potential: 85 },
        { name: "营销工具", description: "优惠活动，精准推广", usage: 55, growth: 45, potential: 92 },
      ],
      marketValue: 88,
      userSatisfaction: 4.2,
      monthlyActiveUsers: 85000,
      revenue: 15800000,
      growthRate: 40,
      competitionLevel: "中高",
      marketTrend: "快速上升",
      investmentValue: "高",
      analysis:
        "商家服务模块是平台收入的主要来源之一，大数据显示该模块贡献了平台35%的总收入。营销工具子功能增长最快，反映了商家对精准营销需求的增加。该模块通过为商家提供一站式服务解决方案，有效降低了商家运营成本，提升了经营效率。数据显示，使用平台服务的商家平均营收增长了28%。未来可通过大数据分析和AI营销工具，进一步提升商家服务的价值和竞争力。",
    },
    {
      id: "maternal",
      title: "呵护母婴",
      description: "孕期护理、婴幼儿服务、母婴用品",
      icon: Baby,
      color: "bg-pink-500",
      services: [
        { name: "孕期护理", description: "孕期指导，营养建议", usage: 48, growth: 35, potential: 90 },
        { name: "婴幼儿服务", description: "育儿指导，成长记录", usage: 55, growth: 40, potential: 92 },
        { name: "母婴用品", description: "正品保障，专业选择", usage: 72, growth: 28, potential: 88 },
        { name: "育儿指导", description: "专家咨询，科学育儿", usage: 45, growth: 38, potential: 95 },
      ],
      marketValue: 85,
      userSatisfaction: 4.6,
      monthlyActiveUsers: 180000,
      revenue: 8500000,
      growthRate: 32,
      competitionLevel: "中",
      marketTrend: "上升",
      investmentValue: "高",
      analysis:
        "呵护母婴模块针对特定人群提供专业服务，大数据显示该模块用户忠诚度极高，复购率达到78%。母婴用品子功能使用率最高，但育儿指导潜力最大，反映了新生代父母对科学育儿知识的强烈需求。该模块通过整合线上咨询和线下服务，为用户提供全周期的母婴照护解决方案。数据显示，85%的用户愿意为高质量的母婴服务支付溢价。未来可通过个性化育儿方案和社区互助功能，进一步提升服务价值。",
    },
    {
      id: "elderly",
      title: "关爱老人",
      description: "健康监护、生活照料、娱乐活动",
      icon: Heart,
      color: "bg-rose-500",
      services: [
        { name: "健康监护", description: "健康检测，用药提醒", usage: 38, growth: 45, potential: 95 },
        { name: "生活照料", description: "日常护理，上门服务", usage: 42, growth: 38, potential: 90 },
        { name: "娱乐活动", description: "兴趣小组，社交活动", usage: 35, growth: 30, potential: 85 },
        { name: "紧急救助", description: "一键呼叫，快速响应", usage: 25, growth: 50, potential: 98 },
      ],
      marketValue: 82,
      userSatisfaction: 4.4,
      monthlyActiveUsers: 150000,
      revenue: 6800000,
      growthRate: 42,
      competitionLevel: "低",
      marketTrend: "快速上升",
      investmentValue: "高",
      analysis:
        "关爱老人模块针对老龄化社会提供刚需服务，大数据显示该模块市场潜力巨大，预计五年内用户规模将增长3倍。紧急救助子功能虽然使用率最低，但增长最快，反映了独居老人安全需求的增加。该模块通过智能硬件和专业服务相结合，为老年人提供全方位的生活照护。数据显示，该模块用户年龄主要集中在65-80岁，但付费主体多为40-55岁的子女群体。未来可通过远程健康监测和AI陪伴等创新服务，进一步提升市场竞争力。",
    },
    {
      id: "transport",
      title: "出行服务",
      description: "公交查询、打车服务、停车缴费",
      icon: Car,
      color: "bg-yellow-500",
      services: [
        { name: "公交查询", description: "实时公交，线路规划", usage: 75, growth: 15, potential: 85 },
        { name: "打车服务", description: "快速叫车，安全出行", usage: 68, growth: 20, potential: 88 },
        { name: "停车缴费", description: "在线缴费，无感支付", usage: 55, growth: 35, potential: 90 },
        { name: "违章查询", description: "违章查询，罚款缴纳", usage: 48, growth: 25, potential: 82 },
      ],
      marketValue: 78,
      userSatisfaction: 4.2,
      monthlyActiveUsers: 320000,
      revenue: 5500000,
      growthRate: 18,
      competitionLevel: "高",
      marketTrend: "稳定",
      investmentValue: "中",
      analysis:
        "出行服务模块满足了用户日常出行需求，大数据显示该模块平均每用户每周使用4.2次。公交查询是使用频率最高的子功能，但停车缴费增长最快，反映了私家车保有量增加带来的市场变化。该模块通过整合多种出行方式和支付服务，为用户提供便捷的一站式出行解决方案。数据显示，该模块与其他功能模块的交叉使用率高，是提升用户活跃度的重要因素。未来可通过共享出行和绿色出行等新兴服务，进一步拓展市场空间。",
    },
    {
      id: "announcements",
      title: "城市公告",
      description: "城市之声、社区频道、商家活动",
      icon: Megaphone,
      color: "bg-cyan-500",
      services: [
        { name: "城市之声", description: "官方发布，政策通知", usage: 65, growth: 20, potential: 85 },
        { name: "社区频道", description: "社区动态，居民互动", usage: 58, growth: 25, potential: 88 },
        { name: "商家活动", description: "促销信息，新店开业", usage: 72, growth: 30, potential: 90 },
        { name: "便民信息", description: "生活资讯，实用信息", usage: 68, growth: 22, potential: 85 },
      ],
      marketValue: 75,
      userSatisfaction: 4.1,
      monthlyActiveUsers: 420000,
      revenue: 3200000,
      growthRate: 25,
      competitionLevel: "低",
      marketTrend: "上升",
      investmentValue: "中",
      analysis:
        "城市公告模块是平台信息流通的重要渠道，大数据显示该模块每日浏览量超过100万次。商家活动是最受关注的子功能，反映了用户对消费信息的高度关注。该模块通过整合官方信息和商业信息，为用户提供全面的城市生活资讯。数据显示，公告信息的点击转化率达到28%，是商家获客的重要渠道。未来可通过个性化推荐和精准定位，进一步提升信息触达效率和用户体验。",
    },
    {
      id: "education",
      title: "教育培训",
      description: "在线学习、技能培训、考试报名",
      icon: GraduationCap,
      color: "bg-indigo-500",
      services: [
        { name: "在线课程", description: "优质课程，灵活学习", usage: 45, growth: 38, potential: 92 },
        { name: "技能培训", description: "职业技能，实用知识", usage: 38, growth: 42, potential: 90 },
        { name: "考试报名", description: "考试信息，在线报名", usage: 52, growth: 25, potential: 85 },
        { name: "学历提升", description: "学历教育，证书考取", usage: 35, growth: 35, potential: 88 },
      ],
      marketValue: 80,
      userSatisfaction: 4.3,
      monthlyActiveUsers: 180000,
      revenue: 7200000,
      growthRate: 35,
      competitionLevel: "中高",
      marketTrend: "上升",
      investmentValue: "高",
      analysis:
        "教育培训模块满足了用户终身学习的需求，大数据显示该模块用户年龄跨度大，覆盖18-45岁人群。技能培训子功能增长最快，反映了职场人士对技能提升的迫切需求。该模块通过整合优质教育资源和便捷学习工具，为用户提供灵活多样的学习方式。数据显示，75%的用户愿意为高质量的教育内容付费。未来可通过AI个性化学习路径和互动式学习体验，进一步提升服务价值和市场竞争力。",
    },
    {
      id: "home-service",
      title: "家政服务",
      description: "家庭清洁、维修服务、搬家服务",
      icon: Home,
      color: "bg-teal-500",
      services: [
        { name: "家庭清洁", description: "专业保洁，深度清洁", usage: 58, growth: 25, potential: 88 },
        { name: "维修服务", description: "家电维修，水电维修", usage: 65, growth: 20, potential: 85 },
        { name: "搬家服务", description: "专业搬运，一站服务", usage: 35, growth: 18, potential: 80 },
        { name: "月嫂保姆", description: "专业护理，贴心服务", usage: 28, growth: 45, potential: 92 },
      ],
      marketValue: 78,
      userSatisfaction: 4.0,
      monthlyActiveUsers: 150000,
      revenue: 6500000,
      growthRate: 22,
      competitionLevel: "中",
      marketTrend: "稳定上升",
      investmentValue: "中",
      analysis:
        "家政服务模块满足了现代家庭的生活需求，大数据显示该模块用户主要为25-45岁的城市中产阶级。维修服务是使用率最高的子功能，但月嫂保姆增长最快，反映了高端家政服务需求的增加。该模块通过严格的服务人员筛选和标准化的服务流程，解决了传统家政服务质量参差不齐的问题。数据显示，用户对服务人员的评价是决定复购的关键因素。未来可通过智能家居维护和个性化家庭服务，进一步拓展服务范围和提升用户体验。",
    },
    {
      id: "finance",
      title: "金融服务",
      description: "银行服务、保险理财、贷款申请",
      icon: CreditCard,
      color: "bg-emerald-500",
      services: [
        { name: "银行服务", description: "账户管理，转账汇款", usage: 62, growth: 15, potential: 85 },
        { name: "保险理财", description: "保险购买，理财产品", usage: 45, growth: 28, potential: 90 },
        { name: "贷款申请", description: "快速审批，灵活还款", usage: 38, growth: 32, potential: 88 },
        { name: "信用查询", description: "信用评估，额度提升", usage: 55, growth: 20, potential: 82 },
      ],
      marketValue: 85,
      userSatisfaction: 4.2,
      monthlyActiveUsers: 220000,
      revenue: 9500000,
      growthRate: 18,
      competitionLevel: "高",
      marketTrend: "稳定",
      investmentValue: "中高",
      analysis:
        "金融服务模块为用户提供便捷的金融解决方案，大数据显示该模块用户主要为有稳定收入的城市人群。银行服务是使用率最高的子功能，但保险理财增长最快，反映了用户理财意识的提升。该模块通过与金融机构合作，为用户提供安全、便捷的金融服务体验。数据显示，68%的用户通过该模块完成了至少一次金融产品购买。未来可通过智能投顾和个性化金融规划，进一步提升服务价值和用户满意度。",
    },
    {
      id: "smart-driving",
      title: "智驭随行",
      description: "智能驾驶、车联网服务、出行助手",
      icon: Car,
      color: "bg-slate-500",
      services: [
        { name: "智驭随行", description: "智能驾驶，安全提醒", usage: 35, growth: 48, potential: 95 },
        { name: "车享智联", description: "车辆监控，远程控制", usage: 28, growth: 52, potential: 92 },
        { name: "智能导航", description: "实时路况，最优路线", usage: 45, growth: 38, potential: 90 },
        { name: "车辆管理", description: "维护提醒，费用管理", usage: 38, growth: 35, potential: 88 },
      ],
      marketValue: 82,
      userSatisfaction: 4.3,
      monthlyActiveUsers: 120000,
      revenue: 5800000,
      growthRate: 45,
      competitionLevel: "低",
      marketTrend: "快速上升",
      investmentValue: "高",
      analysis:
        "智驭随行模块是平台的创新服务，大数据显示该模块虽然用户基数较小，但增长迅速，年增长率达45%。车享智联子功能增长最快，反映了用户对智能车联网服务的强烈需求。该模块通过车载设备和移动应用的结合，为车主提供全方位的智能驾驶体验。数据显示，该模块用户主要为25-45岁的中高收入车主，消费能力强。未来可通过自动驾驶辅助和车辆健康管理等高科技服务，进一步提升市场竞争力和用户黏性。预计到2026年5月，该模块将成为平台重要的增长点。",
    },
    {
      id: "pet-companion",
      title: "伴宠星途",
      description: "宠物护理、宠物服务、宠物社交",
      icon: Heart,
      color: "bg-amber-500",
      services: [
        { name: "伴宠星途", description: "宠物陪伴，行为分析", usage: 32, growth: 45, potential: 90 },
        { name: "宠心呵护", description: "宠物医疗，健康管理", usage: 38, growth: 50, potential: 95 },
        { name: "宠物医疗", description: "在线问诊，疫苗接种", usage: 45, growth: 42, potential: 92 },
        { name: "宠物用品", description: "食品用品，玩具服饰", usage: 58, growth: 35, potential: 88 },
      ],
      marketValue: 78,
      userSatisfaction: 4.5,
      monthlyActiveUsers: 110000,
      revenue: 4800000,
      growthRate: 48,
      competitionLevel: "低",
      marketTrend: "快速上升",
      investmentValue: "高",
      analysis:
        "伴宠星途模块针对宠物经济提供专业服务，大数据显示该模块用户忠诚度高，平均每周使用3.2次。宠心呵护子功能增长最快，反映了宠物主人对宠物健康关注度的提升。该模块通过线上咨询和线下服务相结合，为宠物主人提供一站式宠物护理解决方案。数据显示，宠物用户人均年消费达5800元，消费潜力巨大。未来可通过宠物社交和智能宠物用品等创新服务，进一步拓展市场空间和提升用户体验。预计到2026年5月，该模块将成为平台新的增长引擎。",
    },
  ]

  // 市场价值排名
  const marketValueRanking = [...serviceModules].sort((a, b) => b.marketValue - a.marketValue)

  // 用户满意度排名
  const satisfactionRanking = [...serviceModules].sort((a, b) => b.userSatisfaction - a.userSatisfaction)

  // 增长率排名
  const growthRanking = [...serviceModules].sort((a, b) => b.growthRate - a.growthRate)

  // 投资价值排名
  const investmentRanking = [...serviceModules].filter((module) => module.investmentValue === "高")

  // 计算总体统计数据
  const totalActiveUsers = serviceModules.reduce((sum, module) => sum + module.monthlyActiveUsers, 0)
  const totalRevenue = serviceModules.reduce((sum, module) => sum + module.revenue, 0)
  const averageGrowthRate = serviceModules.reduce((sum, module) => sum + module.growthRate, 0) / serviceModules.length
  const averageSatisfaction =
    serviceModules.reduce((sum, module) => sum + module.userSatisfaction, 0) / serviceModules.length

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">功能核心分析报告</h1>
                <p className="text-sm text-gray-500">基于大数据的市场价值评估</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                导出报告
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                打印
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 总体概览 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">平台总体概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">月活跃用户</p>
                    <h3 className="text-2xl font-bold text-gray-900">{(totalActiveUsers / 1000000).toFixed(2)}M</h3>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+18.2%</span>
                  <span className="text-gray-500 ml-2">较上月</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">月总收入</p>
                    <h3 className="text-2xl font-bold text-gray-900">¥{(totalRevenue / 10000).toFixed(0)}万</h3>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+23.5%</span>
                  <span className="text-gray-500 ml-2">较上月</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">平均增长率</p>
                    <h3 className="text-2xl font-bold text-gray-900">{averageGrowthRate.toFixed(1)}%</h3>
                  </div>
                  <LineChart className="h-8 w-8 text-purple-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+5.3%</span>
                  <span className="text-gray-500 ml-2">较上季度</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">用户满意度</p>
                    <h3 className="text-2xl font-bold text-gray-900">{averageSatisfaction.toFixed(1)}/5.0</h3>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+0.3</span>
                  <span className="text-gray-500 ml-2">较上季度</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 功能核心分析 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">功能核心分析</h2>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">全部功能</TabsTrigger>
              <TabsTrigger value="market-value">市场价值</TabsTrigger>
              <TabsTrigger value="satisfaction">用户满意度</TabsTrigger>
              <TabsTrigger value="growth">增长潜力</TabsTrigger>
              <TabsTrigger value="investment">投资价值</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceModules.map((module) => {
                  const Icon = module.icon
                  return (
                    <Card
                      key={module.id}
                      className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        selectedModule === module.id ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle>{module.title}</CardTitle>
                              <CardDescription>{module.description}</CardDescription>
                            </div>
                          </div>
                          <ChevronRight
                            className={`h-5 w-5 text-gray-400 transition-transform ${
                              selectedModule === module.id ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">市场价值</p>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: `${module.marketValue}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm font-medium">{module.marketValue}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">用户满意度</p>
                            <div className="flex items-center">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(module.userSatisfaction)
                                        ? "fill-yellow-400"
                                        : i < module.userSatisfaction
                                          ? "fill-yellow-400/50"
                                          : "fill-gray-200"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium">{module.userSatisfaction}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">月活用户</p>
                            <p className="font-medium">
                              {module.monthlyActiveUsers >= 1000000
                                ? `${(module.monthlyActiveUsers / 1000000).toFixed(1)}M`
                                : `${(module.monthlyActiveUsers / 10000).toFixed(0)}W`}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">增长率</p>
                            <div className="flex items-center">
                              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              <span className="font-medium text-green-500">{module.growthRate}%</span>
                            </div>
                          </div>
                        </div>

                        {selectedModule === module.id && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="font-medium mb-2">子功能分析</h4>
                            <div className="space-y-3">
                              {module.services.map((service, index) => (
                                <div key={index}>
                                  <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center">
                                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                                      <span className="text-sm font-medium">{service.name}</span>
                                    </div>
                                    <Badge
                                      variant={
                                        service.growth > 40 ? "default" : service.growth > 30 ? "secondary" : "outline"
                                      }
                                      className="text-xs"
                                    >
                                      +{service.growth}%
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-500 mb-1">{service.description}</p>
                                  <div className="flex items-center text-xs">
                                    <span className="mr-2">使用率: {service.usage}%</span>
                                    <span className="mr-2">|</span>
                                    <span>潜力值: {service.potential}</span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-medium mb-2">市场分析</h4>
                              <p className="text-sm text-gray-600">{module.analysis}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-medium mb-2">市场指标</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-xs text-gray-500">竞争程度</p>
                                  <p className="text-sm font-medium">{module.competitionLevel}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">市场趋势</p>
                                  <p className="text-sm font-medium">{module.marketTrend}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">月收入</p>
                                  <p className="text-sm font-medium">¥{(module.revenue / 10000).toFixed(0)}万</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">投资价值</p>
                                  <p className="text-sm font-medium">{module.investmentValue}</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4">
                              <Link href={`/${module.id}`}>
                                <Button className="w-full">查看详情</Button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="market-value">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>市场价值排名</CardTitle>
                    <CardDescription>基于市场需求、用户规模和商业价值的综合评估</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketValueRanking.map((module, index) => {
                        const Icon = module.icon
                        return (
                          <div
                            key={module.id}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center ${
                                  index < 3 ? "ring-2 ring-yellow-400" : ""
                                }`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  {index < 3 && (
                                    <Badge className="mr-2 bg-yellow-400 text-yellow-900">TOP {index + 1}</Badge>
                                  )}
                                  {module.title}
                                </h4>
                                <p className="text-sm text-gray-500">{module.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">{module.marketValue}</div>
                              <p className="text-xs text-gray-500">市场价值评分</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="satisfaction">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>用户满意度排名</CardTitle>
                    <CardDescription>基于用户评价、使用体验和服务质量的综合评估</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {satisfactionRanking.map((module, index) => {
                        const Icon = module.icon
                        return (
                          <div
                            key={module.id}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center ${
                                  index < 3 ? "ring-2 ring-yellow-400" : ""
                                }`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  {index < 3 && (
                                    <Badge className="mr-2 bg-yellow-400 text-yellow-900">TOP {index + 1}</Badge>
                                  )}
                                  {module.title}
                                </h4>
                                <p className="text-sm text-gray-500">{module.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex justify-end text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                      i < Math.floor(module.userSatisfaction)
                                        ? "fill-yellow-400"
                                        : i < module.userSatisfaction
                                          ? "fill-yellow-400/50"
                                          : "fill-gray-200"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">用户满意度评分</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="growth">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>增长潜力排名</CardTitle>
                    <CardDescription>基于增长速度、市场趋势和发展潜力的综合评估</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {growthRanking.map((module, index) => {
                        const Icon = module.icon
                        return (
                          <div
                            key={module.id}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center ${
                                  index < 3 ? "ring-2 ring-yellow-400" : ""
                                }`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  {index < 3 && (
                                    <Badge className="mr-2 bg-yellow-400 text-yellow-900">TOP {index + 1}</Badge>
                                  )}
                                  {module.title}
                                </h4>
                                <p className="text-sm text-gray-500">{module.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center justify-end">
                                <ArrowUpRight className="h-5 w-5 text-green-500 mr-1" />
                                <span className="text-2xl font-bold text-green-500">{module.growthRate}%</span>
                              </div>
                              <p className="text-xs text-gray-500">年增长率</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="investment">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>高投资价值功能</CardTitle>
                    <CardDescription>具有高投资回报潜力的功能模块</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investmentRanking.map((module, index) => {
                        const Icon = module.icon
                        return (
                          <Card key={module.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center`}
                                >
                                  <Icon className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <CardTitle>{module.title}</CardTitle>
                                  <CardDescription>{module.description}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-500">市场价值</p>
                                  <div className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${module.marketValue}%` }}
                                      ></div>
                                    </div>
                                    <span className="ml-2 text-sm font-medium">{module.marketValue}</span>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">增长率</p>
                                  <div className="flex items-center">
                                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="font-medium text-green-500">{module.growthRate}%</span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4">
                                <h4 className="font-medium mb-2">投资亮点</h4>
                                <p className="text-sm text-gray-600">{module.analysis}</p>
                              </div>

                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="font-medium mb-2">市场指标</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-xs text-gray-500">竞争程度</p>
                                    <p className="text-sm font-medium">{module.competitionLevel}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">市场趋势</p>
                                    <p className="text-sm font-medium">{module.marketTrend}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">月收入</p>
                                    <p className="text-sm font-medium">¥{(module.revenue / 10000).toFixed(0)}万</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">月活用户</p>
                                    <p className="text-sm font-medium">
                                      {module.monthlyActiveUsers >= 1000000
                                        ? `${(module.monthlyActiveUsers / 1000000).toFixed(1)}M`
                                        : `${(module.monthlyActiveUsers / 10000).toFixed(0)}W`}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 市场价值分析报告 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">市场价值分析报告</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">总体市场分析</h3>
                  <p className="text-gray-700">
                    智慧城市平台通过整合14个核心功能模块，覆盖了城市居民生活的各个方面，形成了完整的服务生态系统。大数据分析显示，平台月活跃用户已突破300万，年增长率达28%，市场前景广阔。各功能模块之间形成了良好的协同效应，用户在使用一个功能后，平均会使用2.3个其他功能，大大提升了平台的用户粘性和价值。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">核心价值模块</h3>
                  <p className="text-gray-700">
                    根据市场价值评估，生活刚需、在线就诊和商家服务是平台的三大核心价值模块，贡献了平台60%的收入和55%的用户活跃度。这三个模块满足了用户的基础生活需求，具有高频使用特性和强大的商业变现能力。特别是生活刚需模块，其外卖配送功能日均订单量超过10万单，是平台最具价值的单一功能。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">增长潜力分析</h3>
                  <p className="text-gray-700">
                    伴宠星途、智驭随行和关爱老人是平台增长最快的三个模块，年增长率均超过40%。这反映了宠物经济、智能出行和银发经济的快速发展趋势。特别是伴宠星途模块，虽然目前用户规模相对较小，但用户付费意愿高，ARPU值是平台平均水平的1.8倍。智驭随行模块则代表了未来智能交通的发展方向，具有巨大的市场潜力。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">用户满意度分析</h3>
                  <p className="text-gray-700">
                    生活刚需、呵护母婴和伴宠星途是用户满意度最高的三个模块，评分均在4.5以上。这些模块共同特点是服务标准化程度高、响应速度快、用户体验好。值得注意的是，呵护母婴模块虽然用户规模不是最大，但用户忠诚度极高，复购率达到78%，是平台最具粘性的功能之一。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">投资价值评估</h3>
                  <p className="text-gray-700">
                    从投资回报角度看，在线就诊、商家服务、呵护母婴、智驭随行和伴宠星途是最具投资价值的五个模块。这些模块具有较高的市场价值、快速的增长率和相对较低的竞争程度，投资回报潜力大。特别是在线就诊模块，随着远程医疗政策的放开和用户习惯的养成，预计未来三年将保持35%以上的高速增长，是平台重点投资方向。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">竞争格局分析</h3>
                  <p className="text-gray-700">
                    平台在生活刚需、出行服务和金融服务领域面临较强的竞争，主要来自垂直领域的专业平台。但通过整合多种服务，提供一站式解决方案，平台在用户便利性和服务协同性方面具有明显优势。在关爱老人、伴宠星途和智驭随行等新兴领域，平台处于市场领先地位，竞争优势明显。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">未来发展建议</h3>
                  <p className="text-gray-700">
                    1.
                    重点发展在线就诊、商家服务和呵护母婴三个高价值模块，通过提升服务质量和扩大用户规模，巩固市场领先地位。
                    <br />
                    2. 加大对智驭随行和伴宠星途两个高增长模块的投入，抢占市场先机，建立竞争壁垒。
                    <br />
                    3. 优化生活刚需和社区服务的用户体验，提高服务效率，进一步提升用户满意度和留存率。
                    <br />
                    4. 加强各功能模块之间的数据共享和服务协同，发挥平台整合优势，提升整体竞争力。
                    <br />
                    5. 关注新兴技术和市场趋势，适时推出新的功能模块，保持平台的创新活力和市场竞争力。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 关键指标总结 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">关键指标总结</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">市场价值TOP3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketValueRanking.slice(0, 3).map((module, index) => (
                    <div key={module.id} className="flex items-center justify-between">
                      <span className="text-sm">{module.title}</span>
                      <Badge variant="outline">{module.marketValue}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">增长率TOP3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {growthRanking.slice(0, 3).map((module, index) => (
                    <div key={module.id} className="flex items-center justify-between">
                      <span className="text-sm">{module.title}</span>
                      <Badge variant="outline" className="text-green-600">
                        +{module.growthRate}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">满意度TOP3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {satisfactionRanking.slice(0, 3).map((module, index) => (
                    <div key={module.id} className="flex items-center justify-between">
                      <span className="text-sm">{module.title}</span>
                      <Badge variant="outline" className="text-yellow-600">
                        {module.userSatisfaction}/5.0
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
