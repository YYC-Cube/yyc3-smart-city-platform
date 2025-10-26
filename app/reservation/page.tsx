"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, Users, Gift, Bell, Calendar, Star } from "lucide-react"
import Link from "next/link"

// 模拟功能数据
const upcomingFeatures = [
  {
    id: 1,
    name: "智能药品配送",
    category: "医疗健康",
    description: "AI智能推荐，30分钟内送达，专业药师在线咨询",
    launchDate: "2026-01-15",
    progress: 85,
    reservations: 1247,
    totalUsers: 2500,
    benefits: ["首月免配送费", "专属客服", "优先配送"],
    popularity: "超热门",
  },
  {
    id: 2,
    name: "紧急医疗救助",
    category: "医疗健康",
    description: "一键呼救，GPS定位，专业急救指导",
    launchDate: "2026-01-08",
    progress: 92,
    reservations: 2156,
    totalUsers: 3000,
    benefits: ["VIP急救通道", "家属自动通知", "专家指导"],
    popularity: "超热门",
  },
  {
    id: 3,
    name: "智能外卖服务",
    category: "生活服务",
    description: "AI推荐美食，实时配送跟踪，健康营养分析",
    launchDate: "2026-02-01",
    progress: 78,
    reservations: 892,
    totalUsers: 2000,
    benefits: ["新用户8折", "免配送费", "积分奖励"],
    popularity: "热门",
  },
  {
    id: 4,
    name: "公共缴费中心",
    category: "政务服务",
    description: "水电燃气一站式缴费，自动提醒，电子发票",
    launchDate: "2026-01-22",
    progress: 88,
    reservations: 654,
    totalUsers: 1800,
    benefits: ["缴费返现1%", "免手续费", "自动缴费"],
    popularity: "热门",
  },
  {
    id: 5,
    name: "邻里社交平台",
    category: "社区服务",
    description: "邻居互助，二手交易，社区活动组织",
    launchDate: "2026-02-15",
    progress: 65,
    reservations: 423,
    totalUsers: 1500,
    benefits: ["社交积分", "活动优先", "邻里优惠"],
    popularity: "受欢迎",
  },
  {
    id: 6,
    name: "智能家政服务",
    category: "生活服务",
    description: "专业保洁，维修服务，智能预约系统",
    launchDate: "2026-03-01",
    progress: 45,
    reservations: 234,
    totalUsers: 1200,
    benefits: ["首次半价", "服务保障", "评价返现"],
    popularity: "新功能",
  },
]

const categories = ["全部", "医疗健康", "生活服务", "政务服务", "社区服务"]

const getPopularityColor = (popularity: string) => {
  switch (popularity) {
    case "超热门":
      return "bg-red-100 text-red-800 border-red-200"
    case "热门":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "受欢迎":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getPopularityIcon = (popularity: string) => {
  switch (popularity) {
    case "超热门":
      return "🔥"
    case "热门":
      return "⭐"
    case "受欢迎":
      return "👍"
    default:
      return "💡"
  }
}

export default function ReservationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [reservedFeatures, setReservedFeatures] = useState<number[]>([])

  const filteredFeatures = upcomingFeatures.filter((feature) => {
    const matchesSearch =
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "全部" || feature.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleReservation = (featureId: number) => {
    if (reservedFeatures.includes(featureId)) {
      setReservedFeatures((prev) => prev.filter((id) => id !== featureId))
    } else {
      setReservedFeatures((prev) => [...prev, featureId])
    }
  }

  const totalReservations = upcomingFeatures.reduce((sum, feature) => sum + feature.reservations, 0)
  const averageProgress = Math.round(
    upcomingFeatures.reduce((sum, feature) => sum + feature.progress, 0) / upcomingFeatures.length,
  )
  const hotFeatures = upcomingFeatures.filter((f) => f.popularity === "超热门" || f.popularity === "热门").length

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 头部统计 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">功能预约体验</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{totalReservations.toLocaleString()}</div>
              <div className="text-sm opacity-90">总预约数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{averageProgress}%</div>
              <div className="text-sm opacity-90">平均进度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{hotFeatures}</div>
              <div className="text-sm opacity-90">热门功能</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{upcomingFeatures.length}</div>
              <div className="text-sm opacity-90">即将上线</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* 搜索和筛选 */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="搜索功能名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* 我的预约快捷入口 */}
        <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">我的预约</h3>
                  <p className="text-sm text-gray-600">管理已预约功能，查看专享福利</p>
                </div>
              </div>
              <Link href="/reservation/my-reservations">
                <Button variant="outline" size="sm">
                  查看详情
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 功能列表 */}
        <div className="space-y-4">
          {filteredFeatures.map((feature) => {
            const isReserved = reservedFeatures.includes(feature.id)
            const reservationRate = Math.round((feature.reservations / feature.totalUsers) * 100)
            const daysUntilLaunch = Math.ceil(
              (new Date(feature.launchDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
            )

            return (
              <Card
                key={feature.id}
                className={`transition-all duration-200 ${isReserved ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                        <Badge className={`text-xs ${getPopularityColor(feature.popularity)}`}>
                          {getPopularityIcon(feature.popularity)} {feature.popularity}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {feature.category}
                      </Badge>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* 进度和统计 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">开发进度</span>
                        <span className="font-medium">{feature.progress}%</span>
                      </div>
                      <Progress value={feature.progress} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">预约热度</span>
                        <span className="font-medium">{reservationRate}%</span>
                      </div>
                      <Progress value={reservationRate} className="h-2" />
                    </div>
                  </div>

                  {/* 统计信息 */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{feature.reservations.toLocaleString()}人预约</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{daysUntilLaunch}天后上线</span>
                      </div>
                    </div>
                  </div>

                  {/* 专享福利 */}
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      <Gift className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">预约专享福利</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {feature.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 预约按钮 */}
                  <Button
                    onClick={() => handleReservation(feature.id)}
                    className={`w-full ${isReserved ? "bg-green-600 hover:bg-green-700" : ""}`}
                    variant={isReserved ? "default" : "outline"}
                  >
                    {isReserved ? (
                      <>
                        <Bell className="h-4 w-4 mr-2" />
                        已预约 - 将优先通知您
                      </>
                    ) : (
                      <>
                        <Star className="h-4 w-4 mr-2" />
                        立即预约体验
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">😔</div>
            <p className="text-gray-500">没有找到匹配的功能</p>
            <p className="text-sm text-gray-400 mt-1">试试调整搜索条件或分类筛选</p>
          </div>
        )}
      </div>
    </div>
  )
}
