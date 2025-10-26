import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Stethoscope,
  FileText,
  Building,
  Package,
  Car,
  GraduationCap,
  Home,
  Utensils,
  CreditCard,
  Clock,
  Star,
  TrendingUp,
  Users,
  Bell,
  Store,
  Baby,
  Heart,
  Megaphone,
} from "lucide-react"
import { LocationSelector } from "@/components/location-selector"
import { LocationStatus } from "@/components/location-status"
import { CityBroadcast } from "@/components/city-broadcast"
import { DateTimeWidget } from "@/components/datetime-widget"
import { AIAssistant } from "@/components/ai-assistant"

export default function HomePage() {
  // 服务模块数据
  const serviceModules = [
    {
      id: "daily-needs",
      title: "生活刚需",
      description: "超市购物、外卖配送、日用百货",
      icon: ShoppingCart,
      color: "bg-blue-500",
      services: ["超市购物", "外卖配送", "生鲜配送", "药品配送"],
      href: "/daily-needs",
      urgent: false,
      priority: 1,
    },
    {
      id: "medical",
      title: "在线就诊",
      description: "预约挂号、在线问诊、健康管理",
      icon: Stethoscope,
      color: "bg-red-500",
      services: ["预约挂号", "在线问诊", "体检预约", "健康档案"],
      href: "/medical",
      urgent: true,
      priority: 2,
    },
    {
      id: "community",
      title: "社区服务",
      description: "物业管理、快递收发、邻里互助",
      icon: Building,
      color: "bg-purple-500",
      services: ["物业服务", "快递管理", "社区商城", "邻里互助"],
      href: "/community",
      urgent: false,
      priority: 3,
    },
    {
      id: "government",
      title: "便民服务",
      description: "政务办事、公共缴费、证件办理",
      icon: FileText,
      color: "bg-green-500",
      services: ["政务办事", "公共缴费", "证件办理", "查询服务"],
      href: "/government",
      urgent: false,
      priority: 4,
    },
    {
      id: "merchant",
      title: "商家服务",
      description: "商家入驻、店铺管理、营销推广",
      icon: Store,
      color: "bg-orange-500",
      services: ["商家入驻", "店铺管理", "订单管理", "营销工具"],
      href: "/merchant",
      urgent: false,
      isNew: true,
      priority: 5,
    },
    {
      id: "maternal",
      title: "呵护母婴",
      description: "孕期护理、婴幼儿服务、母婴用品",
      icon: Baby,
      color: "bg-pink-500",
      services: ["孕期护理", "婴幼儿服务", "母婴用品", "育儿指导"],
      href: "/maternal",
      urgent: false,
      isNew: true,
      priority: 6,
    },
    {
      id: "elderly",
      title: "关爱老人",
      description: "健康监护、生活照料、娱乐活动",
      icon: Heart,
      color: "bg-rose-500",
      services: ["健康监护", "生活照料", "娱乐活动", "紧急救助"],
      href: "/elderly",
      urgent: false,
      isNew: true,
      priority: 7,
    },
    {
      id: "transport",
      title: "出行服务",
      description: "公交查询、打车服务、停车缴费",
      icon: Car,
      color: "bg-yellow-500",
      services: ["公交查询", "打车服务", "停车缴费", "违章查询"],
      href: "/transport",
      urgent: false,
      priority: 8,
    },
    {
      id: "announcements",
      title: "城市公告",
      description: "城市之声、社区频道、商家活动",
      icon: Megaphone,
      color: "bg-cyan-500",
      services: ["城市之声", "社区频道", "商家活动", "便民信息"],
      href: "/announcements",
      urgent: false,
      isNew: true,
      priority: 9,
    },
    {
      id: "education",
      title: "教育培训",
      description: "在线学习、技能培训、考试报名",
      icon: GraduationCap,
      color: "bg-indigo-500",
      services: ["在线课程", "技能培训", "考试报名", "学历提升"],
      href: "/education",
      urgent: false,
      priority: 10,
    },
    {
      id: "home-service",
      title: "家政服务",
      description: "家庭清洁、维修服务、搬家服务",
      icon: Home,
      color: "bg-teal-500",
      services: ["家庭清洁", "维修服务", "搬家服务", "月嫂保姆"],
      href: "/home-service",
      urgent: false,
      priority: 11,
    },
    {
      id: "finance",
      title: "金融服务",
      description: "银行服务、保险理财、贷款申请",
      icon: CreditCard,
      color: "bg-emerald-500",
      services: ["银行服务", "保险理财", "贷款申请", "信用查询"],
      href: "/finance",
      urgent: false,
      priority: 12,
    },
    {
      id: "smart-driving",
      title: "智驭随行",
      description: "智能驾驶、车联网服务、出行助手",
      icon: Car,
      color: "bg-slate-500",
      services: ["智驭随行", "车享智联", "智能导航", "车辆管理"],
      href: "/smart-driving",
      urgent: false,
      isNew: true,
      priority: 13,
    },
    {
      id: "pet-companion",
      title: "伴宠星途",
      description: "宠物护理、宠物服务、宠物社交",
      icon: Heart,
      color: "bg-amber-500",
      services: ["伴宠星途", "宠心呵护", "宠物医疗", "宠物用品"],
      href: "/pet-companion",
      urgent: false,
      isNew: true,
      priority: 14,
    },
  ]

  // 快捷服务 - 移动端优化
  const quickServices = [
    { name: "紧急就医", icon: Stethoscope, color: "text-red-600", href: "/medical/emergency", priority: 1 },
    { name: "外卖订餐", icon: Utensils, color: "text-orange-600", href: "/daily-needs/food", priority: 2 },
    { name: "快递查询", icon: Package, color: "text-blue-600", href: "/community/express", priority: 3 },
    { name: "水电缴费", icon: CreditCard, color: "text-purple-600", href: "/government/bills", priority: 4 },
    { name: "公交查询", icon: Car, color: "text-green-600", href: "/transport/bus", priority: 5 },
    { name: "商家入驻", icon: Store, color: "text-orange-600", href: "/merchant/register", priority: 6 },
    { name: "母婴护理", icon: Baby, color: "text-pink-600", href: "/maternal/care", priority: 7 },
    { name: "老人关爱", icon: Heart, color: "text-rose-600", href: "/elderly/care", priority: 8 },
  ]

  // 热门服务统计
  const stats = [
    { label: "今日服务次数", value: "15,678", icon: TrendingUp, color: "text-blue-600" },
    { label: "在线用户", value: "12,345", icon: Users, color: "text-green-600" },
    { label: "服务满意度", value: "99.2%", icon: Star, color: "text-yellow-600" },
    { label: "响应时间", value: "< 1分钟", icon: Clock, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 顶部导航栏 - 移动端优化 */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">智慧城市</h1>
                <p className="text-xs text-gray-500 hidden sm:block">让生活更便捷</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <DateTimeWidget />
              <Button variant="ghost" size="sm" className="relative p-2">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center p-0">
                  5
                </Badge>
              </Button>
              <LocationSelector />
            </div>
          </div>
        </div>
      </header>

      {/* 城市广播 */}
      <CityBroadcast />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* 位置状态 */}
        <LocationStatus />

        {/* 欢迎横幅 - 移动端优化 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white mb-6 sm:mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">欢迎使用智慧城市生活服务平台</h2>
              <p className="text-blue-100 text-sm sm:text-lg">
                一站式解决您的城市生活需求，让生活更智能、更便捷、更温暖
              </p>
              <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                <Badge className="bg-white/20 text-white border-white/30 text-xs">新增商家服务</Badge>
                <Badge className="bg-white/20 text-white border-white/30 text-xs">母婴关爱</Badge>
                <Badge className="bg-white/20 text-white border-white/30 text-xs hidden sm:inline-flex">老人服务</Badge>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Building className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* 快捷服务 - 移动端优化 */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">快捷服务</h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4">
            {quickServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-2 sm:p-4 text-center">
                      <Icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 ${service.color}`} />
                      <p className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">{service.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* 服务统计 - 移动端优化 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-3 sm:p-6 text-center">
                  <Icon className={`h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2 ${stat.color}`} />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 主要服务模块 - 移动端优化 */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">全部服务</h3>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              查看全部
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {serviceModules.map((module) => {
              const Icon = module.icon
              return (
                <Link key={module.id} href={module.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                    <CardHeader className="pb-2 sm:pb-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-8 h-8 sm:w-12 sm:h-12 ${module.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="flex flex-col space-y-1">
                          {module.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              紧急
                            </Badge>
                          )}
                          {module.isNew && <Badge className="bg-green-500 text-white text-xs">新增</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-sm sm:text-lg leading-tight">{module.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm line-clamp-2">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-1">
                        {module.services.slice(0, 2).map((service, index) => (
                          <div key={index} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                        {module.services.length > 2 && (
                          <div className="text-xs text-blue-600">+{module.services.length - 2} 更多服务</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* 最新公告 - 移动端优化 */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Megaphone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span>城市公告</span>
              <Badge className="bg-green-500 text-white text-xs">全新改版</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-medium text-blue-600 text-sm sm:text-base">城市之声</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge variant="destructive" className="text-xs">
                        紧急
                      </Badge>
                      <span className="font-medium text-xs sm:text-sm">台风预警通知</span>
                    </div>
                    <span className="text-xs text-gray-500">刚刚</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge variant="secondary" className="text-xs">
                        通知
                      </Badge>
                      <span className="font-medium text-xs sm:text-sm">地铁临时调整</span>
                    </div>
                    <span className="text-xs text-gray-500">2小时前</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-medium text-purple-600 text-sm sm:text-base">社区频道</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge className="bg-purple-500 text-xs">活动</Badge>
                      <span className="font-medium text-xs sm:text-sm">社区运动会</span>
                    </div>
                    <span className="text-xs text-gray-500">1天前</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge className="bg-green-500 text-xs">服务</Badge>
                      <span className="font-medium text-xs sm:text-sm">便民服务点</span>
                    </div>
                    <span className="text-xs text-gray-500">2天前</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-medium text-orange-600 text-sm sm:text-base">商家活动</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge className="bg-orange-500 text-xs">优惠</Badge>
                      <span className="font-medium text-xs sm:text-sm">超市大促销</span>
                    </div>
                    <span className="text-xs text-gray-500">3小时前</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-pink-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Badge className="bg-pink-500 text-xs">新店</Badge>
                      <span className="font-medium text-xs sm:text-sm">母婴店开业</span>
                    </div>
                    <span className="text-xs text-gray-500">1天前</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <Link href="/announcements">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  查看更多公告
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      {/* AI智能助手 */}
      <AIAssistant />
    </div>
  )
}
