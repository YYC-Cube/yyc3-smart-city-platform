import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Package, ShoppingCart, Users, Wrench, Bell, Heart, Truck, Phone } from "lucide-react"

export default function CommunityPage() {
  // 社区服务模块
  const communityServices = [
    {
      id: "property",
      title: "物业服务",
      description: "报修申请、费用缴纳、投诉建议",
      icon: Building,
      color: "bg-blue-500",
      href: "/property",
      stats: { pending: 5, completed: 23 },
    },
    {
      id: "express",
      title: "快递管理",
      description: "快递收发、代收服务、取件通知",
      icon: Package,
      color: "bg-green-500",
      href: "/express/receive",
      stats: { pending: 12, completed: 156 },
    },
    {
      id: "mall",
      title: "社区商城",
      description: "本地商家、生鲜配送、便民购物",
      icon: ShoppingCart,
      color: "bg-purple-500",
      href: "/mall",
      stats: { orders: 8, merchants: 45 },
    },
    {
      id: "neighbor",
      title: "邻里互助",
      description: "邻里交流、互助服务、社区活动",
      icon: Users,
      color: "bg-orange-500",
      href: "/community/neighbor",
      stats: { posts: 23, helpers: 67 },
    },
  ]

  // 社区公告
  const announcements = [
    {
      id: 1,
      title: "小区停水通知",
      content: "因管网维修，明日上午9:00-17:00停水",
      type: "紧急通知",
      date: "2024-01-15",
      important: true,
    },
    {
      id: 2,
      title: "春节期间物业服务安排",
      content: "春节期间24小时值班，紧急事务请拨打值班电话",
      type: "服务公告",
      date: "2024-01-14",
      important: false,
    },
    {
      id: 3,
      title: "社区团购活动开始",
      content: "新鲜蔬果团购，价格优惠，欢迎参与",
      type: "活动通知",
      date: "2024-01-13",
      important: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">社区服务</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                社区公告
              </Button>
              <Button>
                <Phone className="h-4 w-4 mr-2" />
                联系物业
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 快捷服务 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Wrench className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <p className="font-medium">紧急报修</p>
              <p className="text-xs text-gray-500">24小时服务</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Package className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">快递查询</p>
              <p className="text-xs text-gray-500">实时追踪</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">生鲜配送</p>
              <p className="text-xs text-gray-500">新鲜直达</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-pink-600" />
              <p className="font-medium">邻里互助</p>
              <p className="text-xs text-gray-500">温暖社区</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要服务 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">社区服务</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityServices.map((service) => {
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
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-between text-sm text-gray-600">
                          {service.stats.pending !== undefined && <span>待处理: {service.stats.pending}</span>}
                          {service.stats.orders !== undefined && <span>订单: {service.stats.orders}</span>}
                          {service.stats.posts !== undefined && <span>动态: {service.stats.posts}</span>}
                          {service.stats.completed !== undefined && <span>已完成: {service.stats.completed}</span>}
                          {service.stats.merchants !== undefined && <span>商家: {service.stats.merchants}</span>}
                          {service.stats.helpers !== undefined && <span>互助: {service.stats.helpers}</span>}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 社区公告 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <span>社区公告</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={announcement.important ? "destructive" : "secondary"}>{announcement.type}</Badge>
                      <span className="text-xs text-gray-500">{announcement.date}</span>
                    </div>
                    <h4 className="font-medium mb-1">{announcement.title}</h4>
                    <p className="text-sm text-gray-600">{announcement.content}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  查看更多公告
                </Button>
              </CardContent>
            </Card>

            {/* 社区统计 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>社区数据</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1,234</div>
                    <div className="text-sm text-gray-500">社区住户</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-gray-500">今日快递</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">89</div>
                    <div className="text-sm text-gray-500">商城订单</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">23</div>
                    <div className="text-sm text-gray-500">服务申请</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
