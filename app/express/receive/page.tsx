"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Search, Phone, MapPin, Clock } from "lucide-react"

export default function ExpressReceivePage() {
  const [searchQuery, setSearchQuery] = useState("")

  // 模拟快递数据
  const packages = [
    {
      id: "SF1234567890",
      recipient: "张三",
      phone: "138****5678",
      address: "A栋2单元1201",
      courier: "顺丰快递",
      status: "已到达",
      arriveTime: "2024-01-15 14:30",
      pickupCode: "8856",
    },
    {
      id: "YT9876543210",
      recipient: "李四",
      phone: "139****9876",
      address: "B栋1单元0503",
      courier: "圆通快递",
      status: "待取件",
      arriveTime: "2024-01-15 16:20",
      pickupCode: "2341",
    },
    {
      id: "ZTO5555666677",
      recipient: "王五",
      phone: "136****1234",
      address: "C栋3单元2105",
      courier: "中通快递",
      status: "已取件",
      arriveTime: "2024-01-14 09:15",
      pickupTime: "2024-01-15 10:30",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已到达":
        return "bg-blue-100 text-blue-800"
      case "待取件":
        return "bg-yellow-100 text-yellow-800"
      case "已取件":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">快递收件管理</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="list" className="space-y-6">
          <TabsList>
            <TabsTrigger value="list">快递列表</TabsTrigger>
            <TabsTrigger value="register">登记收件</TabsTrigger>
            <TabsTrigger value="pickup">取件管理</TabsTrigger>
          </TabsList>

          {/* 快递列表 */}
          <TabsContent value="list" className="space-y-6">
            {/* 搜索栏 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="search">搜索快递单号或收件人</Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="输入快递单号或收件人姓名"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button>
                      <Search className="h-4 w-4 mr-2" />
                      搜索
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 快递列表 */}
            <div className="grid gap-4">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{pkg.id}</h3>
                          <Badge className={getStatusColor(pkg.status)}>{pkg.status}</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span>
                              {pkg.recipient} - {pkg.phone}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{pkg.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-400" />
                            <span>{pkg.courier}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>到达时间：{pkg.arriveTime}</span>
                          </div>
                        </div>

                        {pkg.pickupCode && (
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <span className="text-sm text-blue-600">
                              取件码：<span className="font-bold text-lg">{pkg.pickupCode}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col space-y-2 ml-4">
                        {pkg.status === "待取件" && <Button size="sm">确认取件</Button>}
                        <Button variant="outline" size="sm">
                          详情
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 登记收件 */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>快递收件登记</CardTitle>
                <CardDescription>为业主登记新到达的快递包裹</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trackingNumber">快递单号</Label>
                    <Input id="trackingNumber" placeholder="输入快递单号" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courier">快递公司</Label>
                    <Input id="courier" placeholder="如：顺丰、圆通、中通" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient">收件人</Label>
                    <Input id="recipient" placeholder="收件人姓名" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input id="phone" placeholder="收件人电话" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">收件地址</Label>
                    <Input id="address" placeholder="楼栋单元门牌号" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">包裹大小</Label>
                    <Input id="size" placeholder="小件/中件/大件" />
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">取消</Button>
                  <Button>确认登记</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 取件管理 */}
          <TabsContent value="pickup">
            <Card>
              <CardHeader>
                <CardTitle>取件管理</CardTitle>
                <CardDescription>管理业主取件流程和记录</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">取件管理功能开发中...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
