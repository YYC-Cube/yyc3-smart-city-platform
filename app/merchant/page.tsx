"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Store,
  Plus,
  Settings,
  Users,
  ShoppingCart,
  Star,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Upload,
} from "lucide-react"

export default function MerchantPage() {
  const [applicationStep, setApplicationStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")

  // 商家分类
  const merchantCategories = [
    { id: "restaurant", name: "餐饮美食", icon: "🍽️", count: 234, commission: "8%" },
    { id: "retail", name: "零售商超", icon: "🛒", count: 156, commission: "5%" },
    { id: "service", name: "生活服务", icon: "🔧", count: 89, commission: "10%" },
    { id: "health", name: "医疗健康", icon: "🏥", count: 67, commission: "12%" },
    { id: "education", name: "教育培训", icon: "📚", count: 45, commission: "15%" },
    { id: "beauty", name: "美容美发", icon: "💄", count: 78, commission: "10%" },
    { id: "maternal", name: "母婴用品", icon: "👶", count: 34, commission: "8%" },
    { id: "elderly", name: "老年服务", icon: "👴", count: 23, commission: "12%" },
  ]

  // 入驻流程
  const applicationSteps = [
    { step: 1, title: "基本信息", description: "填写商家基本信息" },
    { step: 2, title: "资质证明", description: "上传营业执照等证件" },
    { step: 3, title: "店铺设置", description: "设置店铺信息和商品" },
    { step: 4, title: "审核等待", description: "等待平台审核通过" },
  ]

  // 商家案例
  const successCases = [
    {
      id: 1,
      name: "张记小厨",
      category: "餐饮美食",
      rating: 4.8,
      monthlyOrders: 1234,
      monthlyRevenue: 45600,
      joinDate: "2023-06-15",
      image: "/placeholder.svg?height=80&width=80",
      highlight: "月订单量增长300%",
    },
    {
      id: 2,
      name: "康乐药房",
      category: "医疗健康",
      rating: 4.9,
      monthlyOrders: 567,
      monthlyRevenue: 23400,
      joinDate: "2023-08-20",
      image: "/placeholder.svg?height=80&width=80",
      highlight: "24小时配送服务",
    },
    {
      id: 3,
      name: "爱婴母婴店",
      category: "母婴用品",
      rating: 4.7,
      monthlyOrders: 890,
      monthlyRevenue: 34500,
      joinDate: "2023-09-10",
      image: "/placeholder.svg?height=80&width=80",
      highlight: "专业育儿指导",
    },
  ]

  // 平台优势
  const platformAdvantages = [
    {
      icon: Users,
      title: "庞大用户群体",
      description: "超过50万活跃用户，覆盖全城各个社区",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "精准营销推广",
      description: "基于大数据的精准推荐，提升转化率",
      color: "text-green-600",
    },
    {
      icon: ShoppingCart,
      title: "完整交易闭环",
      description: "从下单到配送的完整服务体系",
      color: "text-purple-600",
    },
    {
      icon: Settings,
      title: "专业运营支持",
      description: "专属客服和运营指导，助力业务增长",
      color: "text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">商家服务</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                商家热线
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                立即入驻
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 入驻横幅 */}
        <Card className="mb-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardContent className="p-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">加入智慧城市商家联盟</h2>
                <p className="text-orange-100 text-lg mb-4">连接50万+用户，开启数字化经营新时代</p>
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>0元入驻费</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>专业运营指导</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>7天快速审核</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Button size="lg" variant="secondary" className="text-orange-600">
                  <Plus className="h-5 w-5 mr-2" />
                  立即申请入驻
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="apply" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="apply">入驻申请</TabsTrigger>
            <TabsTrigger value="categories">行业分类</TabsTrigger>
            <TabsTrigger value="cases">成功案例</TabsTrigger>
            <TabsTrigger value="advantages">平台优势</TabsTrigger>
            <TabsTrigger value="support">服务支持</TabsTrigger>
          </TabsList>

          {/* 入驻申请 */}
          <TabsContent value="apply" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 申请流程 */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>入驻流程</CardTitle>
                    <CardDescription>简单4步，快速开店</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {applicationSteps.map((step) => (
                      <div
                        key={step.step}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          applicationStep === step.step ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50"
                        }`}
                        onClick={() => setApplicationStep(step.step)}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            applicationStep >= step.step ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {applicationStep > step.step ? <CheckCircle className="h-4 w-4" /> : step.step}
                        </div>
                        <div>
                          <div className="font-medium">{step.title}</div>
                          <div className="text-sm text-gray-500">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* 联系方式 */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>需要帮助？</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-medium">商家热线</div>
                        <div className="text-sm text-gray-600">400-888-9999</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">邮箱咨询</div>
                        <div className="text-sm text-gray-600">merchant@smartcity.com</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 申请表单 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      第{applicationStep}步：{applicationSteps[applicationStep - 1]?.title}
                    </CardTitle>
                    <CardDescription>{applicationSteps[applicationStep - 1]?.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {applicationStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="businessName">商家名称</Label>
                            <Input id="businessName" placeholder="请输入商家名称" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactPerson">联系人</Label>
                            <Input id="contactPerson" placeholder="请输入联系人姓名" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">联系电话</Label>
                            <Input id="phone" placeholder="请输入联系电话" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">邮箱地址</Label>
                            <Input id="email" type="email" placeholder="请输入邮箱地址" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">经营地址</Label>
                          <Input id="address" placeholder="请输入详细经营地址" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">经营类别</Label>
                          <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">请选择经营类别</option>
                            {merchantCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.icon} {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">商家简介</Label>
                          <Textarea id="description" placeholder="请简要介绍您的商家特色和服务" rows={4} />
                        </div>
                      </div>
                    )}

                    {applicationStep === 2 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border-dashed border-2 border-gray-300 hover:border-orange-400 transition-colors">
                            <CardContent className="p-6 text-center">
                              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                              <h4 className="font-medium mb-2">营业执照</h4>
                              <p className="text-sm text-gray-500 mb-4">请上传清晰的营业执照照片</p>
                              <Button variant="outline" size="sm">
                                选择文件
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed border-2 border-gray-300 hover:border-orange-400 transition-colors">
                            <CardContent className="p-6 text-center">
                              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                              <h4 className="font-medium mb-2">身份证件</h4>
                              <p className="text-sm text-gray-500 mb-4">请上传法人身份证正反面</p>
                              <Button variant="outline" size="sm">
                                选择文件
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed border-2 border-gray-300 hover:border-orange-400 transition-colors">
                            <CardContent className="p-6 text-center">
                              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                              <h4 className="font-medium mb-2">食品经营许可证</h4>
                              <p className="text-sm text-gray-500 mb-4">餐饮类商家必须上传</p>
                              <Button variant="outline" size="sm">
                                选择文件
                              </Button>
                            </CardContent>
                          </Card>

                          <Card className="border-dashed border-2 border-gray-300 hover:border-orange-400 transition-colors">
                            <CardContent className="p-6 text-center">
                              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                              <h4 className="font-medium mb-2">其他证件</h4>
                              <p className="text-sm text-gray-500 mb-4">根据行业要求上传相关证件</p>
                              <Button variant="outline" size="sm">
                                选择文件
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}

                    {applicationStep === 3 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="storeName">店铺名称</Label>
                            <Input id="storeName" placeholder="请输入店铺显示名称" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="serviceTime">营业时间</Label>
                            <Input id="serviceTime" placeholder="如：09:00-22:00" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="storeDescription">店铺介绍</Label>
                          <Textarea id="storeDescription" placeholder="请详细介绍您的店铺特色" rows={3} />
                        </div>
                        <div className="space-y-2">
                          <Label>店铺头像</Label>
                          <Card className="border-dashed border-2 border-gray-300 hover:border-orange-400 transition-colors">
                            <CardContent className="p-6 text-center">
                              <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                              <p className="text-sm text-gray-500">上传店铺头像（建议尺寸：200x200）</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                选择图片
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}

                    {applicationStep === 4 && (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                        <h3 className="text-xl font-bold mb-2">申请已提交</h3>
                        <p className="text-gray-600 mb-4">您的入驻申请已成功提交，我们将在3-7个工作日内完成审核</p>
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <p className="text-sm text-blue-600">
                            申请编号：<span className="font-mono">MC202401150001</span>
                          </p>
                        </div>
                        <Button>查看申请状态</Button>
                      </div>
                    )}

                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setApplicationStep(Math.max(1, applicationStep - 1))}
                        disabled={applicationStep === 1}
                      >
                        上一步
                      </Button>
                      <Button
                        onClick={() => setApplicationStep(Math.min(4, applicationStep + 1))}
                        disabled={applicationStep === 4}
                      >
                        {applicationStep === 3 ? "提交申请" : "下一步"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* 行业分类 */}
          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {merchantCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>已入驻商家：{category.count}家</div>
                      <div>平台佣金：{category.commission}</div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      立即入驻
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 成功案例 */}
          <TabsContent value="cases">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">成功商家案例</h3>
                <p className="text-gray-600">看看其他商家如何在我们平台上获得成功</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {successCases.map((merchant) => (
                  <Card key={merchant.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={merchant.image || "/placeholder.svg"}
                          alt={merchant.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{merchant.name}</h4>
                          <p className="text-sm text-gray-600">{merchant.category}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{merchant.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-3 rounded-lg mb-4">
                        <p className="text-sm font-medium text-orange-600">{merchant.highlight}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">月订单量</div>
                          <div className="font-bold text-lg">{merchant.monthlyOrders}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">月营收</div>
                          <div className="font-bold text-lg">¥{merchant.monthlyRevenue.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t text-xs text-gray-500">入驻时间：{merchant.joinDate}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* 平台优势 */}
          <TabsContent value="advantages">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">为什么选择我们？</h3>
                <p className="text-gray-600">专业的平台，全方位的支持，助力您的生意蒸蒸日上</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformAdvantages.map((advantage, index) => {
                  const Icon = advantage.icon
                  return (
                    <Card key={index} className="text-center hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <Icon className={`h-12 w-12 mx-auto mb-4 ${advantage.color}`} />
                        <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                        <p className="text-gray-600 text-sm">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* 数据展示 */}
              <Card>
                <CardHeader>
                  <CardTitle>平台数据</CardTitle>
                  <CardDescription>真实的数据，见证平台的实力</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">50万+</div>
                      <div className="text-sm text-gray-600">注册用户</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">1,200+</div>
                      <div className="text-sm text-gray-600">入驻商家</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">100万+</div>
                      <div className="text-sm text-gray-600">月订单量</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600">98.5%</div>
                      <div className="text-sm text-gray-600">商家满意度</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 服务支持 */}
          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>运营支持</CardTitle>
                  <CardDescription>专业团队助力商家成长</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">专属客服经理</div>
                      <div className="text-sm text-gray-600">一对一服务，及时解决问题</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">运营培训</div>
                      <div className="text-sm text-gray-600">定期培训，提升运营技能</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">数据分析</div>
                      <div className="text-sm text-gray-600">详细的经营数据分析报告</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">营销推广</div>
                      <div className="text-sm text-gray-600">多种营销工具，提升曝光度</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>技术支持</CardTitle>
                  <CardDescription>稳定可靠的技术保障</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">商家后台</div>
                      <div className="text-sm text-gray-600">功能完善的管理后台</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">移动端支持</div>
                      <div className="text-sm text-gray-600">手机端随时管理店铺</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">API接口</div>
                      <div className="text-sm text-gray-600">开放API，支持系统对接</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">7x24技术支持</div>
                      <div className="text-sm text-gray-600">全天候技术支持服务</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
