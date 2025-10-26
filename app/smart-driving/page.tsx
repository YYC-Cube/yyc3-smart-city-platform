import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Car, Smartphone, Navigation, Settings } from "lucide-react"

export default function SmartDrivingPage() {
  const services = [
    {
      id: "smart-driving",
      title: "智驭随行",
      description: "智能驾驶辅助、路况分析、安全提醒",
      icon: Car,
      color: "bg-blue-500",
      features: ["智能驾驶", "路况分析", "安全提醒", "驾驶记录"],
      href: "/smart-driving/smart-driving",
    },
    {
      id: "car-connect",
      title: "车享智联",
      description: "车联网服务、远程控制、车辆监控",
      icon: Smartphone,
      color: "bg-green-500",
      features: ["远程控制", "车辆监控", "智能诊断", "数据分析"],
      href: "/smart-driving/car-connect",
    },
    {
      id: "navigation",
      title: "智能导航",
      description: "精准导航、实时路况、最优路线",
      icon: Navigation,
      color: "bg-purple-500",
      features: ["精准导航", "实时路况", "最优路线", "语音导航"],
      href: "/smart-driving/navigation",
    },
    {
      id: "vehicle-management",
      title: "车辆管理",
      description: "车辆信息、保养提醒、费用管理",
      icon: Settings,
      color: "bg-orange-500",
      features: ["车辆档案", "保养提醒", "费用统计", "违章查询"],
      href: "/smart-driving/management",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
            <div className="ml-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">智驭随行</h1>
                <p className="text-xs text-gray-500">智能驾驶新体验</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">智驭随行服务平台</h2>
              <p className="text-slate-100 text-lg">智能驾驶辅助，让出行更安全、更智能、更便捷</p>
              <div className="flex space-x-4 mt-4">
                <Badge className="bg-white/20 text-white border-white/30">智能驾驶</Badge>
                <Badge className="bg-white/20 text-white border-white/30">车联网</Badge>
                <Badge className="bg-white/20 text-white border-white/30">安全出行</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-green-500 text-white text-xs">新功能</Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
