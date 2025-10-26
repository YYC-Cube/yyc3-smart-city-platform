"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  Calendar,
  Video,
  FileText,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Users,
  Clock,
  Star,
  MapPin,
  Phone,
  AlertCircle,
  Activity,
} from "lucide-react"

export default function MedicalPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  // 科室分类
  const departments = [
    { id: "internal", name: "内科", icon: Heart, color: "text-red-600", doctors: 45, available: 12 },
    { id: "surgery", name: "外科", icon: Stethoscope, color: "text-blue-600", doctors: 38, available: 8 },
    { id: "pediatrics", name: "儿科", icon: Baby, color: "text-pink-600", doctors: 25, available: 15 },
    { id: "neurology", name: "神经科", icon: Brain, color: "text-purple-600", doctors: 20, available: 6 },
    { id: "orthopedics", name: "骨科", icon: Bone, color: "text-orange-600", doctors: 32, available: 10 },
    { id: "ophthalmology", name: "眼科", icon: Eye, color: "text-green-600", doctors: 18, available: 7 },
    { id: "emergency", name: "急诊科", icon: AlertCircle, color: "text-red-500", doctors: 24, available: 24 },
    { id: "psychology", name: "心理科", icon: Brain, color: "text-indigo-600", doctors: 15, available: 5 },
  ]

  // 推荐医生
  const doctors = [
    {
      id: 1,
      name: "张主任",
      title: "主任医师",
      department: "心血管内科",
      hospital: "北京协和医院",
      rating: 4.9,
      experience: "30年",
      consultations: 15420,
      price: 200,
      avatar: "/placeholder.svg?height=80&width=80",
      specialties: ["高血压", "冠心病", "心律失常"],
      nextAvailable: "今天 14:00",
      isOnline: true,
    },
    {
      id: 2,
      name: "李医生",
      title: "副主任医师",
      department: "儿科",
      hospital: "首都儿科研究所",
      rating: 4.8,
      experience: "15年",
      consultations: 8960,
      price: 150,
      avatar: "/placeholder.svg?height=80&width=80",
      specialties: ["小儿感冒", "发育问题", "疫苗咨询"],
      nextAvailable: "明天 09:00",
      isOnline: false,
    },
    {
      id: 3,
      name: "王教授",
      title: "主任医师",
      department: "神经内科",
      hospital: "北京天坛医院",
      rating: 4.9,
      experience: "25年",
      consultations: 12340,
      price: 300,
      avatar: "/placeholder.svg?height=80&width=80",
      specialties: ["头痛", "失眠", "帕金森"],
      nextAvailable: "后天 10:30",
      isOnline: true,
    },
  ]

  // 健康资讯
  const healthNews = [
    {
      id: 1,
      title: "春季流感预防指南",
      summary: "春季是流感高发期，了解预防措施很重要...",
      category: "疾病预防",
      readTime: "3分钟",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 2,
      title: "高血压患者饮食注意事项",
      summary: "合理饮食是控制血压的重要手段...",
      category: "慢病管理",
      readTime: "5分钟",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 3,
      title: "儿童疫苗接种时间表",
      summary: "按时接种疫苗是保护儿童健康的重要措施...",
      category: "儿童健康",
      readTime: "4分钟",
      image: "/placeholder.svg?height=60&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">在线就诊</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-red-600 border-red-600">
                <AlertCircle className="h-4 w-4 mr-2" />
                紧急求助
              </Button>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                健康档案
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 紧急服务横幅 */}
        <Card className="mb-8 bg-gradient-to-r from-red-500 to-pink-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">24小时急诊服务</h3>
                <p className="text-red-100">紧急情况请立即拨打急救电话或前往最近医院</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  120急救
                </Button>
                <Button variant="secondary" size="lg">
                  <MapPin className="h-4 w-4 mr-2" />
                  最近医院
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="appointment" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointment">预约挂号</TabsTrigger>
            <TabsTrigger value="consultation">在线问诊</TabsTrigger>
            <TabsTrigger value="health">健康管理</TabsTrigger>
            <TabsTrigger value="info">健康资讯</TabsTrigger>
          </TabsList>

          {/* 预约挂号 */}
          <TabsContent value="appointment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 科室选择 */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>选择科室</CardTitle>
                    <CardDescription>请选择您需要就诊的科室</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {departments.map((dept) => {
                      const Icon = dept.icon
                      return (
                        <div
                          key={dept.id}
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedDepartment === dept.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedDepartment(dept.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-5 w-5 ${dept.color}`} />
                            <div>
                              <div className="font-medium">{dept.name}</div>
                              <div className="text-xs text-gray-500">
                                {dept.doctors}位医生 · {dept.available}位可约
                              </div>
                            </div>
                          </div>
                          {dept.id === "emergency" && (
                            <Badge variant="destructive" className="text-xs">
                              24小时
                            </Badge>
                          )}
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* 医生列表 */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">推荐医生</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        按评分
                      </Button>
                      <Button variant="outline" size="sm">
                        按价格
                      </Button>
                      <Button variant="outline" size="sm">
                        按经验
                      </Button>
                    </div>
                  </div>

                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="relative">
                            <img
                              src={doctor.avatar || "/placeholder.svg"}
                              alt={doctor.name}
                              className="w-20 h-20 rounded-full object-cover"
                            />
                            {doctor.isOnline && (
                              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-lg">{doctor.name}</h4>
                                <p className="text-gray-600">
                                  {doctor.title} · {doctor.department}
                                </p>
                                <p className="text-sm text-gray-500">{doctor.hospital}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-red-600">¥{doctor.price}</div>
                                <div className="text-sm text-gray-500">问诊费</div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{doctor.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Activity className="h-4 w-4" />
                                <span>{doctor.experience}经验</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{doctor.consultations}次问诊</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm text-gray-600 mb-1">擅长领域：</div>
                                <div className="flex space-x-2">
                                  {doctor.specialties.map((specialty, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {specialty}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Video className="h-4 w-4 mr-1" />
                                  视频问诊
                                </Button>
                                <Button size="sm">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  预约挂号
                                </Button>
                              </div>
                            </div>

                            <div className="mt-2 text-sm text-green-600">
                              <Clock className="h-4 w-4 inline mr-1" />
                              最近可约：{doctor.nextAvailable}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 在线问诊 */}
          <TabsContent value="consultation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Video className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-bold text-lg mb-2">视频问诊</h3>
                  <p className="text-gray-600 mb-4">面对面交流，更直观的诊疗体验</p>
                  <Button className="w-full">立即开始</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-bold text-lg mb-2">图文问诊</h3>
                  <p className="text-gray-600 mb-4">文字描述病情，上传相关图片</p>
                  <Button className="w-full">立即开始</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-bold text-lg mb-2">电话问诊</h3>
                  <p className="text-gray-600 mb-4">语音通话，方便快捷的咨询方式</p>
                  <Button className="w-full">立即开始</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 健康管理 */}
          <TabsContent value="health">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-red-600" />
                  <h4 className="font-medium mb-2">健康档案</h4>
                  <p className="text-2xl font-bold text-gray-900">完整</p>
                  <p className="text-sm text-gray-500">个人健康记录</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-medium mb-2">体检报告</h4>
                  <p className="text-2xl font-bold text-gray-900">3份</p>
                  <p className="text-sm text-gray-500">最近一年</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h4 className="font-medium mb-2">处方记录</h4>
                  <p className="text-2xl font-bold text-gray-900">12条</p>
                  <p className="text-sm text-gray-500">历史处方</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-medium mb-2">预约记录</h4>
                  <p className="text-2xl font-bold text-gray-900">8次</p>
                  <p className="text-sm text-gray-500">就诊历史</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 健康资讯 */}
          <TabsContent value="info">
            <div className="space-y-4">
              {healthNews.map((news) => (
                <Card key={news.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{news.category}</Badge>
                          <span className="text-sm text-gray-500">{news.readTime}阅读</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                        <p className="text-gray-600">{news.summary}</p>
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
