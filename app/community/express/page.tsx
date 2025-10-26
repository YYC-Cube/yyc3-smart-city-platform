"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Send, Inbox, Search, Truck, Clock } from "lucide-react"

export default function ExpressPage() {
  const expressServices = [
    {
      id: "receive",
      title: "快递收件",
      description: "查看和管理收到的快递包裹",
      icon: Inbox,
      href: "/express/receive",
      color: "bg-blue-500",
      available: true,
    },
    {
      id: "send",
      title: "快递寄件",
      description: "在线下单寄送快递包裹",
      icon: Send,
      href: "/express/send",
      color: "bg-green-500",
      available: false,
    },
    {
      id: "track",
      title: "快递查询",
      description: "实时跟踪快递配送状态",
      icon: Search,
      href: "/express/track",
      color: "bg-purple-500",
      available: false,
    },
    {
      id: "pickup",
      title: "代收服务",
      description: "物业代收快递服务",
      icon: Truck,
      href: "/express/pickup",
      color: "bg-orange-500",
      available: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">快递服务</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 服务概览 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">今日快递</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">89</div>
              <div className="text-sm text-gray-600">待取件</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">23</div>
              <div className="text-sm text-gray-600">寄件中</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">代收服务</div>
            </CardContent>
          </Card>
        </div>

        {/* 快递服务 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expressServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {!service.available && (
                      <div className="flex items-center space-x-1 text-orange-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs">开发中</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {service.available ? (
                    <Link href={service.href}>
                      <Button className="w-full">立即使用</Button>
                    </Link>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      敬请期待
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 快递公司 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>合作快递公司</CardTitle>
            <CardDescription>支持主流快递公司的收发服务</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {["顺丰速运", "圆通快递", "中通快递", "申通快递", "韵达快递", "百世快递"].map((company, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Package className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-sm font-medium">{company}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
