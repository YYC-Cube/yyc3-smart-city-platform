"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Wrench, CreditCard, Bell, Phone, Calendar, AlertCircle } from "lucide-react"

export default function PropertyPage() {
  const [selectedService, setSelectedService] = useState("")

  // 模拟数据
  const services = [
    { id: "repair", name: "维修报修", icon: Wrench, color: "text-blue-600" },
    { id: "complaint", name: "投诉建议", icon: AlertCircle, color: "text-red-600" },
    { id: "appointment", name: "预约服务", icon: Calendar, color: "text-green-600" },
    { id: "contact", name: "联系物业", icon: Phone, color: "text-purple-600" },
  ]

  const announcements = [
    {
      id: 1,
      title: "关于小区停水通知",
      content: "因市政管网维修，明日上午9:00-17:00将停水，请提前储水。",
      date: "2024-01-15",
      type: "紧急通知",
      important: true,
    },
    {
      id: 2,
      title: "春节期间物业服务安排",
      content: "春节期间物业24小时值班，紧急事务请拨打值班电话。",
      date: "2024-01-14",
      type: "服务公告",
      important: false,
    },
    {
      id: 3,
      title: "小区绿化改造完成",
      content: "小区中心花园绿化改造已完成，欢迎业主前往休憩。",
      date: "2024-01-13",
      type: "社区动态",
      important: false,
    },
  ]

  const bills = [
    {
      id: 1,
      type: "物业费",
      amount: 280.0,
      period: "2024年1月",
      dueDate: "2024-01-31",
      status: "未缴费",
    },
    {
      id: 2,
      type: "停车费",
      amount: 150.0,
      period: "2024年1月",
      dueDate: "2024-01-31",
      status: "未缴费",
    },
    {
      id: 3,
      type: "物业费",
      amount: 280.0,
      period: "2023年12月",
      dueDate: "2023-12-31",
      status: "已缴费",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">物业服务</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList>
            <TabsTrigger value="services">服务申请</TabsTrigger>
            <TabsTrigger value="bills">费用缴纳</TabsTrigger>
            <TabsTrigger value="announcements">社区公告</TabsTrigger>
            <TabsTrigger value="contact">联系我们</TabsTrigger>
          </TabsList>

          {/* 服务申请 */}
          <TabsContent value="services" className="space-y-6">
            {/* 服务类型选择 */}
            <Card>
              <CardHeader>
                <CardTitle>选择服务类型</CardTitle>
                <CardDescription>请选择您需要的物业服务类型</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={service.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedService === service.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="text-center space-y-2">
                          <Icon className={`h-8 w-8 mx-auto ${service.color}`} />
                          <div className="font-medium">{service.name}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* 服务申请表单 */}
            {selectedService && (
              <Card>
                <CardHeader>
                  <CardTitle>{services.find((s) => s.id === selectedService)?.name}申请</CardTitle>
                  <CardDescription>请详细描述您的需求，我们将尽快为您处理</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">联系人</Label>
                      <Input id="name" placeholder="您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话</Label>
                      <Input id="phone" placeholder="您的手机号码" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">房屋地址</Label>
                      <Input id="address" placeholder="楼栋单元门牌号" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">紧急程度</Label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">请选择</option>
                        <option value="urgent">紧急</option>
                        <option value="normal">一般</option>
                        <option value="low">不急</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">详细描述</Label>
                    <Textarea id="description" placeholder="请详细描述您遇到的问题或需要的服务" rows={4} />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" onClick={() => setSelectedService("")}>
                      取消
                    </Button>
                    <Button>提交申请</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* 费用缴纳 */}
          <TabsContent value="bills">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>费用缴纳</CardTitle>
                  <CardDescription>查看和缴纳物业相关费用</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bills.map((bill) => (
                      <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                          <div>
                            <div className="font-medium">{bill.type}</div>
                            <div className="text-sm text-gray-500">
                              {bill.period} · 截止日期：{bill.dueDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="font-bold text-lg">¥{bill.amount}</div>
                            <Badge variant={bill.status === "已缴费" ? "default" : "destructive"}>{bill.status}</Badge>
                          </div>
                          {bill.status === "未缴费" && <Button size="sm">立即缴费</Button>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 社区公告 */}
          <TabsContent value="announcements">
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-lg">{announcement.title}</h3>
                          <Badge variant={announcement.important ? "destructive" : "secondary"}>
                            {announcement.type}
                          </Badge>
                          {announcement.important && <Bell className="h-4 w-4 text-red-500" />}
                        </div>
                        <p className="text-gray-600 mb-3">{announcement.content}</p>
                        <div className="text-sm text-gray-500">发布时间：{announcement.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 联系我们 */}
          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                  <CardDescription>物业服务中心联系信息</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">服务热线</div>
                      <div className="text-gray-600">400-123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-medium">紧急电话</div>
                      <div className="text-gray-600">138-0000-1234</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">办公地址</div>
                      <div className="text-gray-600">小区1号楼一层物业服务中心</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">服务时间</div>
                      <div className="text-gray-600">周一至周日 8:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>在线留言</CardTitle>
                  <CardDescription>有任何问题或建议，请给我们留言</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message-name">姓名</Label>
                    <Input id="message-name" placeholder="您的姓名" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-phone">联系电话</Label>
                    <Input id="message-phone" placeholder="您的手机号码" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-content">留言内容</Label>
                    <Textarea id="message-content" placeholder="请输入您的留言内容" rows={4} />
                  </div>
                  <Button className="w-full">发送留言</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
