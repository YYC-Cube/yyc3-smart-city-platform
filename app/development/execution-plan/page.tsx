import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Bot,
  Calendar,
  Users,
  Target,
  Zap,
  Brain,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Cpu,
  Database,
  Shield,
  Globe,
  MessageSquare,
} from "lucide-react"

export default function ExecutionPlanPage() {
  // 项目阶段数据
  const projectPhases = [
    {
      id: "phase1",
      name: "基础架构搭建",
      duration: "2025.12 - 2026.02",
      progress: 0,
      status: "pending",
      description: "AI核心引擎、地图服务集成、基础UI框架",
      tasks: ["本地大模型部署与优化", "百度地图API集成", "语音识别与合成系统", "基础UI组件库开发", "数据库设计与部署"],
      resources: {
        developers: 8,
        budget: 800000,
        duration: 10,
      },
    },
    {
      id: "phase2",
      name: "核心功能开发",
      duration: "2026.03 - 2026.05",
      progress: 0,
      status: "pending",
      description: "智能对话、服务预约、个性化推荐",
      tasks: ["智能对话系统开发", "服务预约功能实现", "个性化推荐算法", "用户画像系统", "多模态交互界面"],
      resources: {
        developers: 12,
        budget: 1200000,
        duration: 12,
      },
    },
    {
      id: "phase3",
      name: "高级功能集成",
      duration: "2026.06 - 2026.08",
      progress: 0,
      status: "pending",
      description: "城市广播、日程管理、智能提醒",
      tasks: ["城市广播系统", "智能日程管理", "多维度提醒系统", "数据分析仪表板", "第三方服务集成"],
      resources: {
        developers: 10,
        budget: 1000000,
        duration: 10,
      },
    },
    {
      id: "phase4",
      name: "优化与上线",
      duration: "2026.09 - 2026.11",
      progress: 0,
      status: "pending",
      description: "性能优化、测试部署、用户培训",
      tasks: ["系统性能优化", "全面测试与调试", "用户体验优化", "部署与运维", "用户培训与推广"],
      resources: {
        developers: 6,
        budget: 600000,
        duration: 10,
      },
    },
  ]

  // 技术架构组件
  const techComponents = [
    {
      name: "AI大模型引擎",
      description: "本地部署的智能对话核心",
      tech: ["Transformer", "BERT", "GPT", "本地推理"],
      priority: "P0",
      complexity: "高",
      status: "设计中",
    },
    {
      name: "语音交互系统",
      description: "语音识别与合成服务",
      tech: ["ASR", "TTS", "NLP", "音频处理"],
      priority: "P0",
      complexity: "中",
      status: "设计中",
    },
    {
      name: "地图服务集成",
      description: "百度地图API深度集成",
      tech: ["百度地图API", "LBS", "路径规划", "POI"],
      priority: "P1",
      complexity: "中",
      status: "设计中",
    },
    {
      name: "多模态界面",
      description: "支持文字、语音、手势交互",
      tech: ["React", "WebRTC", "Canvas", "手势识别"],
      priority: "P1",
      complexity: "中",
      status: "设计中",
    },
    {
      name: "个性化推荐",
      description: "基于用户行为的智能推荐",
      tech: ["机器学习", "协同过滤", "内容推荐", "实时计算"],
      priority: "P2",
      complexity: "高",
      status: "规划中",
    },
    {
      name: "数据分析平台",
      description: "用户行为分析与洞察",
      tech: ["大数据", "实时分析", "可视化", "预测模型"],
      priority: "P2",
      complexity: "高",
      status: "规划中",
    },
  ]

  // 团队配置
  const teamStructure = [
    {
      role: "项目总监",
      count: 1,
      responsibilities: ["项目整体规划", "资源协调", "风险控制", "进度管控"],
      skills: ["项目管理", "技术架构", "团队管理", "商业分析"],
    },
    {
      role: "AI算法工程师",
      count: 3,
      responsibilities: ["大模型优化", "算法设计", "模型训练", "推理优化"],
      skills: ["深度学习", "NLP", "Python", "TensorFlow/PyTorch"],
    },
    {
      role: "前端开发工程师",
      count: 4,
      responsibilities: ["UI界面开发", "交互设计", "性能优化", "兼容性测试"],
      skills: ["React", "TypeScript", "WebRTC", "移动端开发"],
    },
    {
      role: "后端开发工程师",
      count: 5,
      responsibilities: ["API开发", "数据库设计", "系统架构", "性能优化"],
      skills: ["Node.js", "Python", "数据库", "微服务架构"],
    },
    {
      role: "产品设计师",
      count: 2,
      responsibilities: ["产品设计", "用户体验", "交互原型", "视觉设计"],
      skills: ["UI/UX设计", "原型设计", "用户研究", "设计系统"],
    },
    {
      role: "测试工程师",
      count: 2,
      responsibilities: ["功能测试", "性能测试", "自动化测试", "质量保证"],
      skills: ["测试框架", "自动化工具", "性能测试", "安全测试"],
    },
    {
      role: "运维工程师",
      count: 2,
      responsibilities: ["系统部署", "监控运维", "安全防护", "故障处理"],
      skills: ["Docker", "Kubernetes", "监控系统", "安全防护"],
    },
  ]

  // 关键里程碑
  const milestones = [
    {
      name: "AI引擎部署完成",
      date: "2026.01.15",
      description: "本地大模型成功部署，基础对话功能可用",
      status: "pending",
      dependencies: ["模型选型", "硬件配置", "优化调试"],
    },
    {
      name: "地图服务集成",
      date: "2026.02.28",
      description: "百度地图API完全集成，位置服务正常",
      status: "pending",
      dependencies: ["API申请", "接口开发", "功能测试"],
    },
    {
      name: "核心功能MVP",
      date: "2026.04.30",
      description: "智能对话、服务预约、推荐系统基础版本",
      status: "pending",
      dependencies: ["AI引擎", "后端API", "前端界面"],
    },
    {
      name: "城市广播上线",
      date: "2026.07.15",
      description: "城市之声广播系统正式上线运行",
      status: "pending",
      dependencies: ["内容管理", "推送系统", "权限控制"],
    },
    {
      name: "系统正式发布",
      date: "2026.10.31",
      description: "小语智能管家正式发布，全功能可用",
      status: "pending",
      dependencies: ["全面测试", "性能优化", "用户培训"],
    },
  ]

  // 风险评估
  const risks = [
    {
      category: "技术风险",
      level: "高",
      description: "本地大模型性能与资源消耗平衡",
      mitigation: "多模型对比测试，硬件资源预留，性能监控",
      probability: "中",
      impact: "高",
    },
    {
      category: "集成风险",
      level: "中",
      description: "第三方API服务稳定性依赖",
      mitigation: "多供应商备选方案，服务降级策略",
      probability: "中",
      impact: "中",
    },
    {
      category: "用户接受度",
      level: "中",
      description: "用户对AI助手的接受程度不确定",
      mitigation: "用户调研，渐进式功能发布，用户教育",
      probability: "中",
      impact: "中",
    },
    {
      category: "数据安全",
      level: "高",
      description: "用户隐私数据保护要求",
      mitigation: "数据加密，权限控制，合规审计",
      probability: "低",
      impact: "高",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "pending":
        return "bg-gray-400"
      case "delayed":
        return "bg-red-500"
      default:
        return "bg-gray-400"
    }
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "高":
        return "text-red-600 bg-red-50"
      case "中":
        return "text-yellow-600 bg-yellow-50"
      case "低":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/development">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回开发中心
              </Button>
            </Link>
            <div className="ml-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">智能管家"小语"项目执行计划</h1>
                <p className="text-xs text-gray-500">多维智慧生活管家详细开发方案</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 项目概览 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">18个月</div>
              <div className="text-blue-100">开发周期</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">19人</div>
              <div className="text-blue-100">专业团队</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">360万</div>
              <div className="text-blue-100">总投资(万元)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4个</div>
              <div className="text-blue-100">开发阶段</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">项目概览</TabsTrigger>
            <TabsTrigger value="phases">开发阶段</TabsTrigger>
            <TabsTrigger value="architecture">技术架构</TabsTrigger>
            <TabsTrigger value="team">团队配置</TabsTrigger>
            <TabsTrigger value="milestones">里程碑</TabsTrigger>
            <TabsTrigger value="risks">风险管控</TabsTrigger>
          </TabsList>

          {/* 项目概览 */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <span>核心特性</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">本地大模型集成</div>
                        <div className="text-sm text-gray-600">部署高性能本地AI模型，保障数据安全与响应速度</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">百度地图深度集成</div>
                        <div className="text-sm text-gray-600">精准定位、路径规划、POI搜索、实时路况</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">拟人化智能交互</div>
                        <div className="text-sm text-gray-600">自然语言理解、情感识别、个性化回应</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">多维服务整合</div>
                        <div className="text-sm text-gray-600">生活服务、信息查询、日程管理、智能提醒</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <span>预期目标</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-sm text-gray-600">用户满意度</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">&lt;500ms</div>
                      <div className="text-sm text-gray-600">响应时间</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">50万</div>
                      <div className="text-sm text-gray-600">目标用户</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">99.9%</div>
                      <div className="text-sm text-gray-600">系统可用性</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  <span>功能亮点</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-medium">智能对话</span>
                    </div>
                    <p className="text-sm text-gray-600">自然语言交互，理解用户意图，提供个性化服务</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="font-medium">城市广播</span>
                    </div>
                    <p className="text-sm text-gray-600">实时城市资讯，滚动播报，重要信息不错过</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">智能日程</span>
                    </div>
                    <p className="text-sm text-gray-600">日程管理，节日提醒，生日提醒，时间管理</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 开发阶段 */}
          <TabsContent value="phases" className="space-y-6">
            <div className="space-y-6">
              {projectPhases.map((phase, index) => (
                <Card key={phase.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStatusColor(phase.status)}`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <div>{phase.name}</div>
                          <div className="text-sm font-normal text-gray-600">{phase.duration}</div>
                        </div>
                      </CardTitle>
                      <Badge className={getRiskColor(phase.status === "pending" ? "中" : "低")}>
                        {phase.status === "pending" ? "待开始" : "进行中"}
                      </Badge>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">主要任务</div>
                        <div className="space-y-1">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle2 className="h-3 w-3 text-gray-400" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">资源配置</div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-blue-600" />
                            <span>开发人员: {phase.resources.developers}人</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-3 w-3 text-green-600" />
                            <span>预算: {(phase.resources.budget / 10000).toFixed(0)}万元</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3 text-purple-600" />
                            <span>周期: {phase.resources.duration}周</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">进度状态</div>
                        <div className="space-y-2">
                          <Progress value={phase.progress} className="h-2" />
                          <div className="text-xs text-gray-600">{phase.progress}% 完成</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 技术架构 */}
          <TabsContent value="architecture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {techComponents.map((component, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      <div className="flex space-x-2">
                        <Badge
                          className={
                            component.priority === "P0"
                              ? "bg-red-500"
                              : component.priority === "P1"
                                ? "bg-orange-500"
                                : "bg-blue-500"
                          }
                        >
                          {component.priority}
                        </Badge>
                        <Badge variant="outline">{component.complexity}</Badge>
                      </div>
                    </div>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">技术栈</div>
                      <div className="flex flex-wrap gap-2">
                        {component.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">状态: {component.status}</div>
                      <div className="flex items-center space-x-2">
                        {component.priority === "P0" && <Cpu className="h-4 w-4 text-red-500" />}
                        {component.priority === "P1" && <Database className="h-4 w-4 text-orange-500" />}
                        {component.priority === "P2" && <Shield className="h-4 w-4 text-blue-500" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 团队配置 */}
          <TabsContent value="team" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teamStructure.map((role, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{role.role}</CardTitle>
                      <Badge className="bg-blue-500 text-white">{role.count}人</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">主要职责</div>
                      <div className="space-y-1">
                        {role.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">技能要求</div>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>团队成本分析</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">19人</div>
                    <div className="text-sm text-gray-600">总团队规模</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">280万</div>
                    <div className="text-sm text-gray-600">人力成本(万元)</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">18个月</div>
                    <div className="text-sm text-gray-600">项目周期</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15.6万</div>
                    <div className="text-sm text-gray-600">月均成本(万元)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 里程碑 */}
          <TabsContent value="milestones" className="space-y-6">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getStatusColor(milestone.status)}`}
                      >
                        {milestone.status === "completed" ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{milestone.name}</h3>
                          <Badge variant="outline">{milestone.date}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{milestone.description}</p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">关键依赖</div>
                          <div className="flex flex-wrap gap-2">
                            {milestone.dependencies.map((dep, depIndex) => (
                              <Badge key={depIndex} variant="secondary" className="text-xs">
                                {dep}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 风险管控 */}
          <TabsContent value="risks" className="space-y-6">
            <div className="space-y-4">
              {risks.map((risk, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                        <span>{risk.category}</span>
                      </CardTitle>
                      <Badge className={getRiskColor(risk.level)}>{risk.level}风险</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">风险描述</div>
                      <p className="text-sm text-gray-600">{risk.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">应对措施</div>
                      <p className="text-sm text-gray-600">{risk.mitigation}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium">发生概率</div>
                        <div className="text-lg font-bold text-gray-700">{risk.probability}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium">影响程度</div>
                        <div className="text-lg font-bold text-gray-700">{risk.impact}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 行动计划 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span>下一步行动计划</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">即将开始 (本月)</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>团队招聘与组建</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>技术方案详细设计</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>开发环境搭建</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">近期计划 (下月)</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>AI模型选型与测试</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>百度地图API申请</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>基础架构设计</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-purple-600">中期目标 (3个月内)</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span>AI引擎部署完成</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span>基础对话功能实现</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span>地图服务集成完成</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
