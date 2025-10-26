"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Phone,
  MapPin,
  Clock,
  Star,
  Users,
  Home,
  Stethoscope,
  Utensils,
  Car,
  AlertCircle,
  CheckCircle,
  Video,
  Music,
} from "lucide-react"

export default function ElderlyPage() {
  const [selectedService, setSelectedService] = useState("")

  // 老年服务分类
  const elderlyServices = [
    {
      id: "health",
      name: "健康监护",
      icon: Stethoscope,
      color: "text-red-600",
      services: ["定期体检", "慢病管理", "用药提醒", "健康档案"],
      description: "专业的健康监护服务",
    },
    {
      id: "care",
      name: "生活照料",
      icon: Home,
      color: "text-blue-600",
      services: ["日常护理", "家政服务", "陪护服务", "康复训练"],
      description: "贴心的生活照料服务",
    },
    {
      id: "emergency",
      name: "紧急救助",
      icon: AlertCircle,
      color: "text-red-500",
      services: ["一键求助", "紧急联系", "医疗急救", "安全监控"],
      description: "24小时紧急救助服务",
    },
    {
      id: "entertainment",
      name: "娱乐活动",
      icon: Music,
      color: "text-purple-600",
      services: ["文艺活动", "健身运动", "社交聚会", "兴趣班"],
      description: "丰富多彩的娱乐活动",
    },
    {
      id: "meal",
      name: "营养配餐",
      icon: Utensils,
      color: "text-orange-600",
      services: ["营养搭配", "送餐服务", "特殊饮食", "健康食谱"],
      description: "科学的营养配餐服务",
    },
    {
      id: "transport",
      name: "出行服务",
      icon: Car,
      color: "text-green-600",
      services: ["专车接送", "陪同就医", "购物代办", "旅游陪伴"],
      description: "安全便捷的出行服务",
    },
  ]

  // 专业护理团队
  const careTeam = [
    {
      id: 1,
      name: "李护士长",
      title: "资深护理师",
      experience: "15年",
      rating: 4.9,
      services: 2340,
      specialties: ["老年护理", "慢病管理", "康复训练"],
      avatar: "/placeholder.svg?height=80&width=80",
      isAvailable: true,
      certifications: ["护理师资格证", "老年护理专业证"],
    },
    {
      id: 2,
      name: "王医生",
      title: "老年科医师",
      experience: "20年",
      rating: 4.8,
      services: 1890,
      specialties: ["老年疾病", "健康管理", "营养指导"],
      avatar: "/placeholder.svg?height=80&width=80",
      isAvailable: false,
      certifications: ["执业医师证", "老年医学专科证"],
    },
    {
      id: 3,
      name: "张阿姨",
      title: "专业陪护",
      experience: "10年",
      rating: 4.9,
      services: 3456,
      specialties: ["生活照料", "心理陪伴", "家务服务"],
      avatar: "/placeholder.svg?height=80&width=80",
      isAvailable: true,
      certifications: ["护工证", "心理咨询师证"],
    },
  ]

  // 健康套餐
  const healthPackages = [
    {
      id: 1,
      name: "基础健康套餐",
      price: 299,
      originalPrice: 399,
      duration: "1个月",
      services: ["每周健康监测", "用药提醒", "健康咨询", "紧急联系"],
      popular: false,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      name: "全面护理套餐",
      price: 899,
      originalPrice: 1199,
      duration: "1个月",
      services: ["24小时监护", "专业护理", "营养配餐", "康复训练", "心理陪伴"],
      popular: true,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      name: "高端定制套餐",
      price: 1999,
      originalPrice: 2599,
      duration: "1个月",
      services: ["一对一护理", "专家会诊", "高端体检", "私人定制", "家属培训"],
      popular: false,
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  // 娱乐活动
  const activities = [
    {
      id: 1,
      title: "太极拳晨练",
      time: "每天 06:30-07:30",
      location: "社区广场",
      participants: 45,
      instructor: "李师傅",
      image: "/placeholder.svg?height=100&width=150",
      category: "健身运动",
    },
    {
      id: 2,
      title: "书法兴趣班",
      time: "周二、四 14:00-16:00",
      location: "社区活动中心",
      participants: 23,
      instructor: "王老师",
      image: "/placeholder.svg?height=100&width=150",
      category: "文艺活动",
    },
    {
      id: 3,
      title: "健康知识讲座",
      time: "每周六 15:00-16:30",
      location: "社区会议室",
      participants: 67,
      instructor: "张医生",
      image: "/placeholder.svg?height=100&width=150",
      category: "健康教育",
    },
    {
      id: 4,
      title: "象棋比赛",
      time: "每周日 09:00-11:00",
      location: "社区棋牌室",
      participants: 32,
      instructor: "社区组织",
      image: "/placeholder.svg?height=100&width=150",
      category: "智力游戏",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-600" />
              <h1 className="text-2xl font-bold text-gray-900">关爱老人</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-red-600 border-red-600">
                <AlertCircle className="h-4 w-4 mr-2" />
                一键求助
              </Button>
              <Button>
                <Phone className="h-4 w-4 mr-2" />
                护理热线
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 关爱横幅 */}
        <Card className="mb-8 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">专业老年关爱服务</h3>
                <p className="text-rose-100">用心呵护每一位老人，让晚年生活更加精彩、安心、健康</p>
                <div className="flex space-x-4 mt-3 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>24小时紧急响应</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>专业护理团队</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>丰富娱乐活动</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 快捷服务 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer bg-red-50 border-red-200">
            <CardContent className="p-4 text-center">
              <AlertCircle className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <p className="font-medium">紧急求助</p>
              <p className="text-xs text-gray-500">一键呼救</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Stethoscope className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">健康监测</p>
              <p className="text-xs text-gray-500">实时关注</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">远程陪伴</p>
              <p className="text-xs text-gray-500">视频通话</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Music className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">娱乐活动</p>
              <p className="text-xs text-gray-500">丰富多彩</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="services">服务中心</TabsTrigger>
            <TabsTrigger value="team">护理团队</TabsTrigger>
            <TabsTrigger value="packages">健康套餐</TabsTrigger>
            <TabsTrigger value="activities">娱乐活动</TabsTrigger>
            <TabsTrigger value="community">老年社区</TabsTrigger>
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
                    {elderlyServices.map((service) => {
                      const Icon = service.icon
                      return (
                        <div
                          key={service.id}
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedService === service.id ? "bg-rose-50 border border-rose-200" : "hover:bg-gray-50"
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
                  {elderlyServices.map((service) => {
                    const Icon = service.icon
                    return (
                      <Card key={service.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
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
                          <Button className="w-full" variant={service.id === "emergency" ? "destructive" : "default"}>
                            {service.id === "emergency" ? "立即求助" : "立即预约"}
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 护理团队 */}
          <TabsContent value="team" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">专业护理团队</h3>
              <p className="text-gray-600">经验丰富的护理专家，为老人提供专业、贴心的服务</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careTeam.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover mx-auto"
                        />
                        {member.isAvailable && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <h4 className="font-bold text-lg mt-3">{member.name}</h4>
                      <p className="text-gray-600">{member.title}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">从业经验</span>
                        <span className="font-medium">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">服务评分</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{member.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">服务次数</span>
                        <span className="font-medium">{member.services}次</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">专业领域：</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">专业资质：</div>
                      <div className="flex flex-wrap gap-1">
                        {member.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className={`text-sm ${member.isAvailable ? "text-green-600" : "text-orange-600"}`}>
                        <Clock className="h-4 w-4 inline mr-1" />
                        {member.isAvailable ? "现在可预约" : "暂时不可预约"}
                      </div>
                      <Button className="w-full" disabled={!member.isAvailable}>
                        预约服务
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 健康套餐 */}
          <TabsContent value="packages" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">健康护理套餐</h3>
              <p className="text-gray-600">根据不同需求，为老人量身定制的健康护理方案</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {healthPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`hover:shadow-lg transition-shadow ${pkg.popular ? "ring-2 ring-rose-500" : ""}`}
                >
                  <CardContent className="p-0">
                    {pkg.popular && (
                      <div className="bg-rose-500 text-white text-center py-2 text-sm font-medium">最受欢迎</div>
                    )}

                    <div className="p-6">
                      <div className="text-center mb-4">
                        <img
                          src={pkg.image || "/placeholder.svg"}
                          alt={pkg.name}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="font-bold text-xl mb-2">{pkg.name}</h4>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-3xl font-bold text-rose-600">¥{pkg.price}</span>
                          <span className="text-lg text-gray-500 line-through">¥{pkg.originalPrice}</span>
                        </div>
                        <p className="text-sm text-gray-600">{pkg.duration}</p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {pkg.services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                        立即订购
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 娱乐活动 */}
          <TabsContent value="activities" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">丰富多彩的娱乐活动</h3>
              <p className="text-gray-600">让老年生活更加充实有趣，促进身心健康</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-rose-500 text-white text-xs">
                        {activity.category}
                      </Badge>
                    </div>

                    <div className="p-4 space-y-3">
                      <h4 className="font-bold text-lg">{activity.title}</h4>

                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{activity.participants}人参与</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="text-gray-600">指导老师：</span>
                        <span className="font-medium">{activity.instructor}</span>
                      </div>

                      <Button className="w-full" size="sm">
                        报名参加
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 老年社区 */}
          <TabsContent value="community">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 社区动态 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>社区动态</CardTitle>
                    <CardDescription>老年朋友们的精彩生活分享</CardDescription>
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
                            <span className="font-medium">张大爷</span>
                            <Badge variant="secondary" className="text-xs">
                              太极爱好者
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">今天的太极拳晨练特别有意思，学会了新的招式</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>1小时前</span>
                            <span>12个点赞</span>
                            <span>5条评论</span>
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
                            <span className="font-medium">李奶奶</span>
                            <Badge variant="secondary" className="text-xs">
                              书法达人
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">分享一幅刚完成的书法作品，请大家指正</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>3小时前</span>
                            <span>28个点赞</span>
                            <span>15条评论</span>
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
                            <span className="font-medium">王叔叔</span>
                            <Badge variant="secondary" className="text-xs">
                              象棋高手
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-2">象棋比赛获得第二名，感谢大家的支持！</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>1天前</span>
                            <span>45个点赞</span>
                            <span>23条评论</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 社区统计和服务 */}
              <div className="lg:col-span-1">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>社区数据</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-600">2,345</div>
                      <div className="text-sm text-gray-500">活跃老人</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">156</div>
                        <div className="text-xs text-gray-500">今日活动</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">89</div>
                        <div className="text-xs text-gray-500">护理服务</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>健康提醒</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">按时服药</h4>
                      <p className="text-xs text-gray-600">降压药，每日上午8点</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">体检提醒</h4>
                      <p className="text-xs text-gray-600">下周二上午体检</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">运动建议</h4>
                      <p className="text-xs text-gray-600">今日步数不足，建议多走动</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>紧急联系</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="destructive" className="w-full">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      一键求助
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      联系家属
                    </Button>
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
