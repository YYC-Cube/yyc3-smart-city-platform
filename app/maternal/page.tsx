"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Baby,
  Heart,
  Phone,
  Clock,
  Star,
  Users,
  BookOpen,
  ShoppingCart,
  Stethoscope,
  Home,
  AlertCircle,
  CheckCircle,
  Video,
  MessageCircle,
} from "lucide-react"

export default function MaternalPage() {
  const [selectedService, setSelectedService] = useState("")

  // 母婴服务分类
  const maternalServices = [
    {
      id: "prenatal",
      name: "孕期护理",
      icon: Heart,
      color: "text-pink-600",
      services: ["产检预约", "孕期营养", "胎教指导", "孕期瑜伽"],
      description: "专业的孕期护理服务",
    },
    {
      id: "postnatal",
      name: "产后康复",
      icon: Home,
      color: "text-purple-600",
      services: ["月子护理", "产后修复", "心理疏导", "营养调理"],
      description: "全方位产后康复支持",
    },
    {
      id: "childcare",
      name: "婴幼儿护理",
      icon: Baby,
      color: "text-blue-600",
      services: ["新生儿护理", "疫苗接种", "生长发育", "早期教育"],
      description: "专业的婴幼儿护理服务",
    },
    {
      id: "education",
      name: "育儿指导",
      icon: BookOpen,
      color: "text-green-600",
      services: ["育儿课程", "专家咨询", "亲子活动", "成长记录"],
      description: "科学的育儿指导方案",
    },
    {
      id: "products",
      name: "母婴用品",
      icon: ShoppingCart,
      color: "text-orange-600",
      services: ["奶粉尿布", "玩具用品", "服装鞋帽", "安全座椅"],
      description: "优质的母婴用品商城",
    },
    {
      id: "health",
      name: "健康监护",
      icon: Stethoscope,
      color: "text-red-600",
      services: ["健康体检", "疾病预防", "营养评估", "发育监测"],
      description: "专业的健康监护服务",
    },
  ]

  // 专家团队
  const experts = [
    {
      id: 1,
      name: "李主任",
      title: "妇产科主任医师",
      hospital: "北京妇产医院",
      experience: "20年",
      rating: 4.9,
      consultations: 5420,
      specialties: ["高危妊娠", "产前诊断", "分娩指导"],
      avatar: "/placeholder.svg?height=80&width=80",
      isOnline: true,
      nextAvailable: "今天 14:00",
    },
    {
      id: 2,
      name: "张医生",
      title: "儿科副主任医师",
      hospital: "首都儿科研究所",
      experience: "15年",
      rating: 4.8,
      consultations: 3890,
      specialties: ["新生儿护理", "婴幼儿发育", "疫苗接种"],
      avatar: "/placeholder.svg?height=80&width=80",
      isOnline: false,
      nextAvailable: "明天 09:00",
    },
    {
      id: 3,
      name: "王护士长",
      title: "资深月嫂",
      hospital: "金牌月嫂中心",
      experience: "12年",
      rating: 4.9,
      consultations: 2340,
      specialties: ["月子护理", "新生儿护理", "产后康复"],
      avatar: "/placeholder.svg?height=80&width=80",
      isOnline: true,
      nextAvailable: "今天 16:30",
    },
  ]

  // 热门商品
  const popularProducts = [
    {
      id: 1,
      name: "有机婴儿奶粉",
      price: 298,
      originalPrice: 358,
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      sales: 1234,
      brand: "德国爱他美",
      tags: ["有机认证", "营养全面"],
    },
    {
      id: 2,
      name: "婴儿纸尿裤",
      price: 89,
      originalPrice: 109,
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      sales: 2567,
      brand: "帮宝适",
      tags: ["超薄透气", "防漏设计"],
    },
    {
      id: 3,
      name: "婴儿推车",
      price: 1299,
      originalPrice: 1599,
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      sales: 456,
      brand: "好孩子",
      tags: ["轻便折叠", "安全认证"],
    },
    {
      id: 4,
      name: "孕妇维生素",
      price: 168,
      originalPrice: 198,
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      sales: 890,
      brand: "爱乐维",
      tags: ["叶酸补充", "医生推荐"],
    },
  ]

  // 育儿课程
  const courses = [
    {
      id: 1,
      title: "新手妈妈必修课",
      instructor: "李主任",
      duration: "2小时",
      students: 1234,
      rating: 4.9,
      price: 99,
      image: "/placeholder.svg?height=100&width=150",
      topics: ["新生儿护理", "母乳喂养", "产后恢复"],
    },
    {
      id: 2,
      title: "婴幼儿早期教育",
      instructor: "张老师",
      duration: "3小时",
      students: 890,
      rating: 4.8,
      price: 129,
      image: "/placeholder.svg?height=100&width=150",
      topics: ["认知发展", "语言启蒙", "运动能力"],
    },
    {
      id: 3,
      title: "孕期营养指导",
      instructor: "营养师王老师",
      duration: "1.5小时",
      students: 567,
      rating: 4.7,
      price: 79,
      image: "/placeholder.svg?height=100&width=150",
      topics: ["营养搭配", "体重管理", "孕期禁忌"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Baby className="h-6 w-6 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-900">呵护母婴</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-red-600 border-red-600">
                <AlertCircle className="h-4 w-4 mr-2" />
                紧急咨询
              </Button>
              <Button>
                <Phone className="h-4 w-4 mr-2" />
                专家热线
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 温馨提示横幅 */}
        <Card className="mb-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">专业母婴护理服务</h3>
                <p className="text-pink-100">从孕期到育儿，全程专业陪伴，给妈妈和宝宝最贴心的关爱</p>
                <div className="flex space-x-4 mt-3 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>24小时专家在线</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>科学育儿指导</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>优质母婴用品</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Baby className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 快捷服务 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-pink-600" />
              <p className="font-medium">孕期护理</p>
              <p className="text-xs text-gray-500">专业指导</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Baby className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">新生儿护理</p>
              <p className="text-xs text-gray-500">24小时服务</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">在线咨询</p>
              <p className="text-xs text-gray-500">专家问诊</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">母婴商城</p>
              <p className="text-xs text-gray-500">品质保证</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="services">服务中心</TabsTrigger>
            <TabsTrigger value="experts">专家团队</TabsTrigger>
            <TabsTrigger value="products">母婴商城</TabsTrigger>
            <TabsTrigger value="courses">育儿课程</TabsTrigger>
            <TabsTrigger value="community">妈妈社区</TabsTrigger>
          </TabsList>

          {/* 服务中心 */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* 左侧服务分类 */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">服务分类</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {maternalServices.map((service) => {
                      const Icon = service.icon
                      return (
                        <div
                          key={service.id}
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedService === service.id ? "bg-pink-50 border border-pink-200" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-5 w-5 ${service.color}`} />
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* 右侧服务详情 */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {maternalServices.map((service) => {
                    const Icon = service.icon
                    return (
                      <Card key={service.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                              <Icon className={`h-6 w-6 ${service.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{service.name}</CardTitle>
                              <CardDescription>{service.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {service.services.map((item, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                          <Button className="w-full">立即预约</Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 专家团队 */}
          <TabsContent value="experts" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">专业母婴专家团队</h3>
              <p className="text-gray-600">汇聚顶级妇产科医生、儿科专家和资深月嫂，为您提供专业指导</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <img
                          src={expert.avatar || "/placeholder.svg"}
                          alt={expert.name}
                          className="w-20 h-20 rounded-full object-cover mx-auto"
                        />
                        {expert.isOnline && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <h4 className="font-bold text-lg mt-3">{expert.name}</h4>
                      <p className="text-gray-600">{expert.title}</p>
                      <p className="text-sm text-gray-500">{expert.hospital}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">从业经验</span>
                        <span className="font-medium">{expert.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">评分</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{expert.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">咨询次数</span>
                        <span className="font-medium">{expert.consultations}次</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">擅长领域：</div>
                      <div className="flex flex-wrap gap-1">
                        {expert.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-green-600">
                        <Clock className="h-4 w-4 inline mr-1" />
                        最近可约：{expert.nextAvailable}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Video className="h-4 w-4 mr-1" />
                          视频咨询
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          图文咨询
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 母婴商城 */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">热门母婴用品</h3>
              <Button variant="outline">查看全部商品</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        {product.tags.map((tag, index) => (
                          <Badge key={index} className="bg-pink-500 text-white text-xs mb-1 block">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h4 className="font-semibold text-lg line-clamp-2">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">已售 {product.sales}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-xl font-bold text-red-600">¥{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">¥{product.originalPrice}</span>
                        </div>
                        <Button size="sm">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          加购物车
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 育儿课程 */}
          <TabsContent value="courses" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">专业育儿课程</h3>
              <p className="text-gray-600">科学育儿，从学习开始。专业讲师，实用内容</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-pink-500 text-white">¥{course.price}</Badge>
                    </div>

                    <div className="p-4 space-y-3">
                      <h4 className="font-bold text-lg">{course.title}</h4>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>讲师：{course.instructor}</span>
                        <span>时长：{course.duration}</span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span>{course.students}人学习</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">课程内容：</div>
                        <div className="flex flex-wrap gap-1">
                          {course.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full">立即学习</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 妈妈社区 */}
          <TabsContent value="community">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 热门话题 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>热门话题</CardTitle>
                    <CardDescription>妈妈们都在讨论什么</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="用户头像"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">新手妈妈小李</span>
                            <Badge variant="secondary" className="text-xs">
                              新手妈妈
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">宝宝6个月了，什么时候开始添加辅食比较好？</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>2小时前</span>
                            <span>23个回复</span>
                            <span>156个赞</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="用户头像"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">二胎妈妈王女士</span>
                            <Badge variant="secondary" className="text-xs">
                              经验妈妈
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">分享一些孕期营养搭配的小技巧</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>5小时前</span>
                            <span>45个回复</span>
                            <span>289个赞</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="用户头像"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">准妈妈张小姐</span>
                            <Badge variant="secondary" className="text-xs">
                              准妈妈
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">孕晚期需要准备哪些待产包物品？</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>1天前</span>
                            <span>67个回复</span>
                            <span>234个赞</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 社区统计和活动 */}
              <div className="lg:col-span-1">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>社区数据</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">12,345</div>
                      <div className="text-sm text-gray-500">活跃妈妈</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">1,234</div>
                        <div className="text-xs text-gray-500">今日话题</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">5,678</div>
                        <div className="text-xs text-gray-500">专家回复</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>近期活动</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">亲子瑜伽体验课</h4>
                      <p className="text-xs text-gray-600">本周六上午10:00</p>
                      <Button size="sm" className="w-full mt-2">
                        报名参加
                      </Button>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">新生儿护理讲座</h4>
                      <p className="text-xs text-gray-600">下周三晚上7:00</p>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        了解详情
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
