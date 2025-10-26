"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Target,
  Users,
  Code,
  TestTube,
  Rocket,
  FileText,
  Palette,
  Shield,
  TrendingUp,
  Filter,
} from "lucide-react"

export default function DevelopmentMilestonesPage() {
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // 开发阶段定义
  const developmentPhases = [
    { id: "analysis", name: "需求分析", icon: FileText, color: "text-blue-600", duration: "1周" },
    { id: "design", name: "UI/UX设计", icon: Palette, color: "text-purple-600", duration: "1-2周" },
    { id: "development", name: "功能开发", icon: Code, color: "text-green-600", duration: "2-4周" },
    { id: "testing", name: "测试验证", icon: TestTube, color: "text-orange-600", duration: "1周" },
    { id: "security", name: "安全审核", icon: Shield, color: "text-red-600", duration: "3天" },
    { id: "deployment", name: "部署上线", icon: Rocket, color: "text-indigo-600", duration: "2天" },
  ]

  // 功能模块开发计划
  const modulesMilestones = [
    {
      id: "pharmacy",
      name: "药品配送服务",
      priority: "critical",
      category: "医疗健康",
      targetDate: "2026年01月15日",
      status: "planning",
      progress: 5,
      team: ["前端开发", "后端开发", "UI设计师", "产品经理"],
      complexity: "medium",
      milestones: [
        {
          phase: "analysis",
          title: "需求分析完成",
          startDate: "2025年12月01日",
          endDate: "2025年12月07日",
          status: "pending",
          deliverables: ["需求文档", "用户故事", "API规格说明"],
          dependencies: [],
        },
        {
          phase: "design",
          title: "UI/UX设计完成",
          startDate: "2025年12月08日",
          endDate: "2025年12月21日",
          status: "pending",
          deliverables: ["设计稿", "交互原型", "设计规范"],
          dependencies: ["需求分析"],
        },
        {
          phase: "development",
          title: "核心功能开发",
          startDate: "2025年12月22日",
          endDate: "2026年01月05日",
          status: "pending",
          deliverables: ["药品搜索", "在线下单", "配送跟踪", "支付集成"],
          dependencies: ["UI/UX设计"],
        },
        {
          phase: "testing",
          title: "功能测试验证",
          startDate: "2026年01月06日",
          endDate: "2026年01月12日",
          status: "pending",
          deliverables: ["测试报告", "Bug修复", "性能优化"],
          dependencies: ["核心功能开发"],
        },
        {
          phase: "security",
          title: "安全审核",
          startDate: "2026年01月13日",
          endDate: "2026年01月15日",
          status: "pending",
          deliverables: ["安全评估报告", "漏洞修复"],
          dependencies: ["功能测试"],
        },
        {
          phase: "deployment",
          title: "正式上线",
          startDate: "2026年01月15日",
          endDate: "2026年01月15日",
          status: "pending",
          deliverables: ["生产环境部署", "用户培训", "运营支持"],
          dependencies: ["安全审核"],
        },
      ],
    },
    {
      id: "emergency",
      name: "紧急医疗服务",
      priority: "critical",
      category: "医疗健康",
      targetDate: "2026年01月30日",
      status: "planning",
      progress: 0,
      team: ["前端开发", "后端开发", "移动端开发", "产品经理"],
      complexity: "high",
      milestones: [
        {
          phase: "analysis",
          title: "需求分析完成",
          startDate: "2025年12月15日",
          endDate: "2025年12月21日",
          status: "pending",
          deliverables: ["紧急流程设计", "医院接口对接", "GPS定位需求"],
          dependencies: [],
        },
        {
          phase: "design",
          title: "UI/UX设计完成",
          startDate: "2025年12月22日",
          endDate: "2026年01月04日",
          status: "pending",
          deliverables: ["紧急按钮设计", "急救流程界面", "医院导航设计"],
          dependencies: ["需求分析"],
        },
        {
          phase: "development",
          title: "核心功能开发",
          startDate: "2026年01月05日",
          endDate: "2026年01月19日",
          status: "pending",
          deliverables: ["一键呼救", "GPS定位", "医院导航", "急救指导"],
          dependencies: ["UI/UX设计"],
        },
        {
          phase: "testing",
          title: "功能测试验证",
          startDate: "2026年01月20日",
          endDate: "2026年01月26日",
          status: "pending",
          deliverables: ["紧急响应测试", "定位精度测试", "医院对接测试"],
          dependencies: ["核心功能开发"],
        },
        {
          phase: "security",
          title: "安全审核",
          startDate: "2026年01月27日",
          endDate: "2026年01月29日",
          status: "pending",
          deliverables: ["隐私保护审核", "数据安全评估"],
          dependencies: ["功能测试"],
        },
        {
          phase: "deployment",
          title: "正式上线",
          startDate: "2026年01月30日",
          endDate: "2026年01月30日",
          status: "pending",
          deliverables: ["24小时监控", "应急响应团队", "医院合作协议"],
          dependencies: ["安全审核"],
        },
      ],
    },
    {
      id: "bills",
      name: "公共缴费服务",
      priority: "high",
      category: "政务服务",
      targetDate: "2026年01月30日",
      status: "planning",
      progress: 10,
      team: ["前端开发", "后端开发", "支付专家", "产品经理"],
      complexity: "medium",
      milestones: [
        {
          phase: "analysis",
          title: "需求分析完成",
          startDate: "2025年12月01日",
          endDate: "2025年12月07日",
          status: "completed",
          deliverables: ["缴费类型梳理", "支付接口调研", "用户流程设计"],
          dependencies: [],
        },
        {
          phase: "design",
          title: "UI/UX设计完成",
          startDate: "2025年12月08日",
          endDate: "2025年12月21日",
          status: "in-progress",
          deliverables: ["缴费界面设计", "账单管理界面", "支付流程设计"],
          dependencies: ["需求分析"],
        },
        {
          phase: "development",
          title: "核心功能开发",
          startDate: "2025年12月22日",
          endDate: "2026年01月12日",
          status: "pending",
          deliverables: ["水电燃气缴费", "物业费缴纳", "支付集成", "账单查询"],
          dependencies: ["UI/UX设计"],
        },
        {
          phase: "testing",
          title: "功能测试验证",
          startDate: "2026年01月13日",
          endDate: "2026年01月19日",
          status: "pending",
          deliverables: ["支付安全测试", "账单准确性测试", "并发性能测试"],
          dependencies: ["核心功能开发"],
        },
        {
          phase: "security",
          title: "安全审核",
          startDate: "2026年01月20日",
          endDate: "2026年01月22日",
          status: "pending",
          deliverables: ["支付安全认证", "数据加密验证"],
          dependencies: ["功能测试"],
        },
        {
          phase: "deployment",
          title: "正式上线",
          startDate: "2026年01月30日",
          endDate: "2026年01月30日",
          status: "pending",
          deliverables: ["支付通道开通", "客服培训", "用户指南"],
          dependencies: ["安全审核"],
        },
      ],
    },
    {
      id: "food-delivery",
      name: "外卖配送服务",
      priority: "high",
      category: "生活服务",
      targetDate: "2026年02月28日",
      status: "planning",
      progress: 0,
      team: ["前端开发", "后端开发", "地图专家", "产品经理"],
      complexity: "high",
      milestones: [
        {
          phase: "analysis",
          title: "需求分析完成",
          startDate: "2026年01月15日",
          endDate: "2026年01月21日",
          status: "pending",
          deliverables: ["商家对接需求", "配送路径算法", "用户体验流程"],
          dependencies: [],
        },
        {
          phase: "design",
          title: "UI/UX设计完成",
          startDate: "2026年01月22日",
          endDate: "2026年02月04日",
          status: "pending",
          deliverables: ["餐厅列表设计", "菜品展示界面", "订单跟踪设计"],
          dependencies: ["需求分析"],
        },
        {
          phase: "development",
          title: "核心功能开发",
          startDate: "2026年02月05日",
          endDate: "2026年02月19日",
          status: "pending",
          deliverables: ["餐厅搜索", "在线点餐", "实时配送", "评价系统"],
          dependencies: ["UI/UX设计"],
        },
        {
          phase: "testing",
          title: "功能测试验证",
          startDate: "2026年02月20日",
          endDate: "2026年02月26日",
          status: "pending",
          deliverables: ["配送时效测试", "支付流程测试", "用户体验测试"],
          dependencies: ["核心功能开发"],
        },
        {
          phase: "security",
          title: "安全审核",
          startDate: "2026年02月27日",
          endDate: "2026年02月28日",
          status: "pending",
          deliverables: ["食品安全合规", "支付安全验证"],
          dependencies: ["功能测试"],
        },
        {
          phase: "deployment",
          title: "正式上线",
          startDate: "2026年02月28日",
          endDate: "2026年02月28日",
          status: "pending",
          deliverables: ["商家培训", "配送员培训", "客服支持"],
          dependencies: ["安全审核"],
        },
      ],
    },
    {
      id: "merchant-register",
      name: "商家注册入驻",
      priority: "medium",
      category: "商业服务",
      targetDate: "2026年02月15日",
      status: "planning",
      progress: 0,
      team: ["前端开发", "后端开发", "业务专家", "产品经理"],
      complexity: "medium",
      milestones: [
        {
          phase: "analysis",
          title: "需求分析完成",
          startDate: "2026年01月20日",
          endDate: "2026年01月26日",
          status: "pending",
          deliverables: ["入驻流程设计", "资质审核标准", "费用结算方案"],
          dependencies: [],
        },
        {
          phase: "design",
          title: "UI/UX设计完成",
          startDate: "2026年01月27日",
          endDate: "2026年02月02日",
          status: "pending",
          deliverables: ["注册表单设计", "资质上传界面", "审核状态页面"],
          dependencies: ["需求分析"],
        },
        {
          phase: "development",
          title: "核心功能开发",
          startDate: "2026年02月03日",
          endDate: "2026年02月09日",
          status: "pending",
          deliverables: ["注册流程", "资质审核", "商家认证", "费用管理"],
          dependencies: ["UI/UX设计"],
        },
        {
          phase: "testing",
          title: "功能测试验证",
          startDate: "2026年02月10日",
          endDate: "2026年02月13日",
          status: "pending",
          deliverables: ["注册流程测试", "审核流程测试", "数据安全测试"],
          dependencies: ["核心功能开发"],
        },
        {
          phase: "security",
          title: "安全审核",
          startDate: "2026年02月14日",
          endDate: "2026年02月14日",
          status: "pending",
          deliverables: ["商家信息安全", "资质真实性验证"],
          dependencies: ["功能测试"],
        },
        {
          phase: "deployment",
          title: "正式上线",
          startDate: "2026年02月15日",
          endDate: "2026年02月15日",
          status: "pending",
          deliverables: ["商家指南", "客服培训", "推广活动"],
          dependencies: ["安全审核"],
        },
      ],
    },
  ]

  // 获取状态颜色和图标
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return { color: "text-green-600", bg: "bg-green-50", icon: CheckCircle, label: "已完成" }
      case "in-progress":
        return { color: "text-blue-600", bg: "bg-blue-50", icon: Clock, label: "进行中" }
      case "pending":
        return { color: "text-gray-600", bg: "bg-gray-50", icon: Calendar, label: "待开始" }
      case "delayed":
        return { color: "text-red-600", bg: "bg-red-50", icon: AlertCircle, label: "延期" }
      default:
        return { color: "text-gray-600", bg: "bg-gray-50", icon: Calendar, label: "未知" }
    }
  }

  // 获取优先级颜色
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  // 获取复杂度标签
  const getComplexityBadge = (complexity: string) => {
    switch (complexity) {
      case "high":
        return <Badge variant="destructive">高复杂度</Badge>
      case "medium":
        return <Badge variant="secondary">中等复杂度</Badge>
      case "low":
        return <Badge variant="outline">低复杂度</Badge>
      default:
        return <Badge variant="outline">未定义</Badge>
    }
  }

  // 计算项目整体进度
  const calculateOverallProgress = () => {
    const totalModules = modulesMilestones.length
    const totalProgress = modulesMilestones.reduce((sum, module) => sum + module.progress, 0)
    return Math.round(totalProgress / totalModules)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">开发里程碑管理</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">整体进度: {calculateOverallProgress()}%</span>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 项目概览 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{modulesMilestones.length}</div>
              <div className="text-sm text-gray-600">总功能模块</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">
                {modulesMilestones.filter((m) => m.status === "completed").length}
              </div>
              <div className="text-sm text-gray-600">已完成</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {modulesMilestones.filter((m) => m.status === "in-progress").length}
              </div>
              <div className="text-sm text-gray-600">开发中</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">{calculateOverallProgress()}%</div>
              <div className="text-sm text-gray-600">整体进度</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="timeline">时间线视图</TabsTrigger>
            <TabsTrigger value="modules">模块详情</TabsTrigger>
            <TabsTrigger value="phases">阶段管理</TabsTrigger>
          </TabsList>

          {/* 时间线视图 */}
          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>2026年开发时间线</CardTitle>
                <CardDescription>按时间顺序展示各功能模块的开发计划</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {modulesMilestones
                    .sort((a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime())
                    .map((module, index) => (
                      <div key={module.id} className="flex items-start space-x-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-4 h-4 rounded-full ${getPriorityColor(module.priority)}`}></div>
                          {index < modulesMilestones.length - 1 && <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>}
                        </div>
                        <div className="flex-1">
                          <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h4 className="font-bold text-lg">{module.name}</h4>
                                  <p className="text-sm text-gray-600">{module.category}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">{module.targetDate}</div>
                                  {getComplexityBadge(module.complexity)}
                                </div>
                              </div>
                              <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>开发进度</span>
                                  <span>{module.progress}%</span>
                                </div>
                                <Progress value={module.progress} className="h-2" />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                  {module.team.slice(0, 3).map((role, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {role}
                                    </Badge>
                                  ))}
                                  {module.team.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{module.team.length - 3}
                                    </Badge>
                                  )}
                                </div>
                                <Button size="sm" variant="outline">
                                  查看详情
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 模块详情 */}
          <TabsContent value="modules" className="space-y-6">
            {modulesMilestones.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center space-x-3">
                        <span>{module.name}</span>
                        {getComplexityBadge(module.complexity)}
                      </CardTitle>
                      <CardDescription>
                        {module.category} • 目标上线: {module.targetDate}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{module.progress}%</div>
                      <Progress value={module.progress} className="w-24 h-2 mt-1" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* 团队信息 */}
                    <div>
                      <h5 className="font-medium mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        开发团队
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {module.team.map((role, idx) => (
                          <Badge key={idx} variant="secondary">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* 里程碑详情 */}
                    <div>
                      <h5 className="font-medium mb-3">开发里程碑</h5>
                      <div className="space-y-3">
                        {module.milestones.map((milestone, idx) => {
                          const statusInfo = getStatusInfo(milestone.status)
                          const StatusIcon = statusInfo.icon
                          const phaseInfo = developmentPhases.find((p) => p.id === milestone.phase)
                          const PhaseIcon = phaseInfo?.icon || Calendar

                          return (
                            <div key={idx} className="border rounded-lg p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center space-x-3">
                                  <div className={`p-2 rounded-lg ${statusInfo.bg}`}>
                                    <PhaseIcon className={`h-4 w-4 ${phaseInfo?.color}`} />
                                  </div>
                                  <div>
                                    <h6 className="font-medium">{milestone.title}</h6>
                                    <p className="text-sm text-gray-600">
                                      {milestone.startDate} - {milestone.endDate}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
                                  <span className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h6 className="text-sm font-medium mb-2">交付物</h6>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {milestone.deliverables.map((item, i) => (
                                      <li key={i} className="flex items-center space-x-2">
                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h6 className="text-sm font-medium mb-2">依赖关系</h6>
                                  {milestone.dependencies.length > 0 ? (
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {milestone.dependencies.map((dep, i) => (
                                        <li key={i} className="flex items-center space-x-2">
                                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                          <span>{dep}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-gray-500">无依赖</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* 阶段管理 */}
          <TabsContent value="phases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>开发阶段说明</CardTitle>
                <CardDescription>标准化的开发流程和各阶段要求</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {developmentPhases.map((phase) => {
                    const Icon = phase.icon
                    return (
                      <Card key={phase.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <Icon className={`h-6 w-6 ${phase.color}`} />
                            </div>
                            <div>
                              <h4 className="font-bold">{phase.name}</h4>
                              <p className="text-sm text-gray-600">预计耗时: {phase.duration}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {phase.id === "analysis" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 用户需求调研</li>
                                <li>• 功能规格定义</li>
                                <li>• 技术方案设计</li>
                                <li>• 项目计划制定</li>
                              </ul>
                            )}
                            {phase.id === "design" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 用户界面设计</li>
                                <li>• 交互流程设计</li>
                                <li>• 视觉规范制定</li>
                                <li>• 原型制作验证</li>
                              </ul>
                            )}
                            {phase.id === "development" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 前端功能开发</li>
                                <li>• 后端接口开发</li>
                                <li>• 数据库设计</li>
                                <li>• 第三方集成</li>
                              </ul>
                            )}
                            {phase.id === "testing" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 功能测试验证</li>
                                <li>• 性能压力测试</li>
                                <li>• 兼容性测试</li>
                                <li>• 用户体验测试</li>
                              </ul>
                            )}
                            {phase.id === "security" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 安全漏洞扫描</li>
                                <li>• 数据加密验证</li>
                                <li>• 权限控制审核</li>
                                <li>• 合规性检查</li>
                              </ul>
                            )}
                            {phase.id === "deployment" && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 生产环境部署</li>
                                <li>• 监控系统配置</li>
                                <li>• 用户培训准备</li>
                                <li>• 运营支持就绪</li>
                              </ul>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* 阶段统计 */}
            <Card>
              <CardHeader>
                <CardTitle>各阶段进度统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {developmentPhases.map((phase) => {
                    const Icon = phase.icon
                    const phaseCount = modulesMilestones.reduce((count, module) => {
                      return count + module.milestones.filter((m) => m.phase === phase.id).length
                    }, 0)
                    const completedCount = modulesMilestones.reduce((count, module) => {
                      return (
                        count + module.milestones.filter((m) => m.phase === phase.id && m.status === "completed").length
                      )
                    }, 0)
                    const progress = phaseCount > 0 ? Math.round((completedCount / phaseCount) * 100) : 0

                    return (
                      <div key={phase.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <Icon className={`h-6 w-6 ${phase.color}`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{phase.name}</span>
                            <span className="text-sm text-gray-600">
                              {completedCount}/{phaseCount} 已完成
                            </span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{progress}%</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
