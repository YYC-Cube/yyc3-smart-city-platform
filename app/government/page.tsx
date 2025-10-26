"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  CreditCard,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  MapPin,
  Calendar,
  User,
  Building,
  Car,
  Zap,
  Droplets,
  Wifi,
  Shield,
  GraduationCap,
} from "lucide-react"

export default function GovernmentPage() {
  const [selectedService, setSelectedService] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // 便民服务分类
  const serviceCategories = [
    {
      id: "documents",
      name: "证件办理",
      icon: FileText,
      color: "text-blue-600",
      services: ["身份证办理", "护照申请", "驾驶证换证", "户口迁移"],
      count: 12,
    },
    {
      id: "bills",
      name: "公共缴费",
      icon: CreditCard,
      color: "text-green-600",
      services: ["水费缴纳", "电费缴纳", "燃气费", "网络费"],
      count: 8,
    },
    {
      id: "social",
      name: "社会保障",
      icon: Shield,
      color: "text-purple-600",
      services: ["社保查询", "医保报销", "失业登记", "养老金查询"],
      count: 15,
    },
    {
      id: "business",
      name: "工商服务",
      icon: Building,
      color: "text-orange-600",
      services: ["营业执照", "税务登记", "企业年检", "商标注册"],
      count: 10,
    },
    {
      id: "education",
      name: "教育服务",
      icon: GraduationCap,
      color: "text-indigo-600",
      services: ["入学申请", "学历认证", "考试报名", "奖学金申请"],
      count: 7,
    },
    {
      id: "transport",
      name: "交通服务",
      icon: Car,
      color: "text-red-600",
      services: ["违章查询", "车辆年检", "驾考预约", "ETC办理"],
      count: 9,
    },
  ]

  // 热门服务
  const popularServices = [
    {
      id: 1,
      name: "身份证办理/换证",
      description: "身份证首次申领、到期换证、遗失补办",
      category: "证件办理",
      processingTime: "15个工作日",
      fee: "20元",
      status: "可办理",
      requirements: ["户口簿", "照片", "申请表"],
      onlineAvailable: true,
    },
    {
      id: 2,
      name: "水电费缴纳",
      description: "居民用水用电费用在线缴纳",
      category: "公共缴费",
      processingTime: "即时到账",
      fee: "无手续费",
      status: "24小时可办",
      requirements: ["用户编号", "缴费金额"],
      onlineAvailable: true,
    },
    {
      id: 3,
      name: "社保查询",
      description: "个人社保缴费记录、余额查询",
      category: "社会保障",
      processingTime: "即时查询",
      fee: "免费",
      status: "可办理",
      requirements: ["身份证号", "社保卡"],
      onlineAvailable: true,
    },
    {
      id: 4,
      name: "营业执照办理",
      description: "个体工商户、企业营业执照申请",
      category: "工商服务",
      processingTime: "5-7个工作日",
      fee: "免费",
      status: "可办理",
      requirements: ["申请表", "身份证", "经营场所证明"],
      onlineAvailable: false,
    },
  ]

  // 办事指南
  const guides = [
    {
      id: 1,
      title: "如何在线申请护照？",
      steps: ["登录政务服务网", "填写申请表", "上传照片", "预约办理时间", "现场确认"],
      category: "证件办理",
    },
    {
      id: 2,
      title: "社保卡丢失如何补办？",
      steps: ["挂失原卡", "准备材料", "填写申请表", "缴纳工本费", "等待制卡"],
      category: "社会保障",
    },
  ]

  // 缴费账单
  const bills = [
    {
      id: 1,
      type: "电费",
      account: "110********234",
      amount: 156.8,
      dueDate: "2024-01-31",
      status: "未缴费",
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      id: 2,
      type: "水费",
      account: "220********567",
      amount: 89.5,
      dueDate: "2024-01-28",
      status: "未缴费",
      icon: Droplets,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "燃气费",
      account: "330********890",
      amount: 125.3,
      dueDate: "2024-02-05",
      status: "已缴费",
      icon: Building,
      color: "text-orange-600",
    },
    {
      id: 4,
      type: "网络费",
      account: "440********123",
      amount: 199.0,
      dueDate: "2024-02-10",
      status: "未缴费",
      icon: Wifi,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">便民服务</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="搜索服务事项"
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>
                <User className="h-4 w-4 mr-2" />
                个人中心
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 快捷入口 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p className="font-medium">紧急办事</p>
              <p className="text-xs opacity-90">加急服务</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">电话咨询</p>
              <p className="text-xs text-gray-500">12345热线</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">办事大厅</p>
              <p className="text-xs text-gray-500">就近办理</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">预约办理</p>
              <p className="text-xs text-gray-500">避免排队</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">办事服务</TabsTrigger>
            <TabsTrigger value="bills">公共缴费</TabsTrigger>
            <TabsTrigger value="query">查询服务</TabsTrigger>
            <TabsTrigger value="guide">办事指南</TabsTrigger>
          </TabsList>

          {/* 办事服务 */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* 左侧服务分类 */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">服务分类</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon
                      return (
                        <div
                          key={category.id}
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedService === category.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedService(category.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-5 w-5 ${category.color}`} />
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-xs text-gray-500">{category.count}项服务</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* 右侧服务列表 */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">热门服务</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        最新发布
                      </Button>
                      <Button variant="outline" size="sm">
                        办理量最多
                      </Button>
                    </div>
                  </div>

                  {popularServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-bold text-lg">{service.name}</h4>
                              <Badge variant="secondary">{service.category}</Badge>
                              {service.onlineAvailable && <Badge className="bg-green-500">在线办理</Badge>}
                            </div>
                            <p className="text-gray-600 mb-3">{service.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span>办理时长：{service.processingTime}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CreditCard className="h-4 w-4 text-gray-400" />
                                <span>收费标准：{service.fee}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-green-600">{service.status}</span>
                              </div>
                            </div>

                            <div className="mt-3">
                              <div className="text-sm text-gray-600 mb-2">所需材料：</div>
                              <div className="flex flex-wrap gap-2">
                                {service.requirements.map((req, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {req}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 ml-4">
                            {service.onlineAvailable ? (
                              <Button>在线办理</Button>
                            ) : (
                              <Button variant="outline">预约办理</Button>
                            )}
                            <Button variant="ghost" size="sm">
                              办事指南
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 公共缴费 */}
          <TabsContent value="bills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 待缴费用 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>待缴费用</CardTitle>
                    <CardDescription>
                      您有 {bills.filter((b) => b.status === "未缴费").length} 项费用待缴纳
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {bills.map((bill) => {
                      const Icon = bill.icon
                      return (
                        <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Icon className={`h-6 w-6 ${bill.color}`} />
                            <div>
                              <div className="font-medium">{bill.type}</div>
                              <div className="text-sm text-gray-500">
                                账户：{bill.account} · 截止：{bill.dueDate}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="font-bold text-lg">¥{bill.amount}</div>
                              <Badge variant={bill.status === "已缴费" ? "default" : "destructive"}>
                                {bill.status}
                              </Badge>
                            </div>
                            {bill.status === "未缴费" && <Button size="sm">立即缴费</Button>}
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* 缴费统计 */}
              <div className="lg:col-span-1">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>本月缴费统计</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">¥571.60</div>
                      <div className="text-sm text-gray-500">待缴总额</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-green-600">1</div>
                        <div className="text-xs text-gray-500">已缴项目</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-orange-600">3</div>
                        <div className="text-xs text-gray-500">待缴项目</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>快捷缴费</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="account">缴费账号</Label>
                      <Input id="account" placeholder="输入缴费账号" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">缴费金额</Label>
                      <Input id="amount" placeholder="输入缴费金额" />
                    </div>
                    <Button className="w-full">立即缴费</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* 查询服务 */}
          <TabsContent value="query">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <User className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-bold text-lg mb-2">个人信息查询</h3>
                  <p className="text-gray-600 mb-4">查询个人基本信息、证件状态</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-bold text-lg mb-2">社保查询</h3>
                  <p className="text-gray-600 mb-4">社保缴费记录、余额查询</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Car className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold text-lg mb-2">违章查询</h3>
                  <p className="text-gray-600 mb-4">车辆违章记录、罚款查询</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-bold text-lg mb-2">企业信息查询</h3>
                  <p className="text-gray-600 mb-4">企业注册信息、经营状态</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                  <h3 className="font-bold text-lg mb-2">学历查询</h3>
                  <p className="text-gray-600 mb-4">学历证书真伪验证</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-bold text-lg mb-2">办事进度查询</h3>
                  <p className="text-gray-600 mb-4">查询申请事项办理进度</p>
                  <Button className="w-full">立即查询</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 办事指南 */}
          <TabsContent value="guide">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">办事指南</h3>
                <Button variant="outline">查看全部</Button>
              </div>

              {guides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">{guide.title}</h4>
                        <Badge variant="secondary">{guide.category}</Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        详细指南
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm text-gray-600 mb-2">办理流程：</div>
                      <div className="flex flex-wrap gap-2">
                        {guide.steps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                            {index < guide.steps.length - 1 && <div className="w-4 h-px bg-gray-300"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
