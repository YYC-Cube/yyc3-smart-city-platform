"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Megaphone,
  Search,
  Filter,
  Bell,
  MapPin,
  Clock,
  Eye,
  Heart,
  Share2,
  Building,
  Users,
  Store,
  Car,
  Stethoscope,
  GraduationCap,
  AlertTriangle,
  Info,
  Gift,
  Calendar,
  RefreshCw,
} from "lucide-react"

export default function AnnouncementsPage() {
  const [selectedChannel, setSelectedChannel] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [announcementsData, setAnnouncementsData] = useState<any[]>([])

  // 模拟数据加载
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // 模拟 API 调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 在实际应用中，这里会是真正的 API 调用
        const mockData = [
          {
            id: 1,
            title: "台风&quot;海葵&quot;预警通知",
            content: "受台风影响，明日将有大风大雨，请市民做好防护措施，避免外出。",
            channel: "city",
            type: "emergency",
            priority: "high",
            publishTime: "2024-01-15 08:30",
            views: 15420,
            likes: 234,
            publisher: "北京市应急管理局",
            location: "全市",
            tags: ["紧急", "天气", "安全"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            id: 2,
            title: "地铁2号线部分站点临时关闭",
            content: "因设备维护需要，地铁2号线东直门站至朝阳门站区间将于本周末临时关闭。",
            channel: "transport",
            type: "notice",
            priority: "medium",
            publishTime: "2024-01-15 10:15",
            views: 8960,
            likes: 156,
            publisher: "北京地铁运营公司",
            location: "2号线沿线",
            tags: ["交通", "地铁", "维护"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ]
        
        setAnnouncementsData(mockData)
      } catch (err) {
        setError("加载公告失败，请检查网络连接")
      } finally {
        setIsLoading(false)
      }
    }

    loadAnnouncements()
  }, [selectedChannel])

  const handleRetry = () => {
    // 重新加载数据的逻辑
    window.location.reload()
  }

  // 公告频道
  const channels = [
    { id: "all", name: "全部公告", icon: Megaphone, count: 156, color: "text-gray-600" },
    { id: "city", name: "城市之声", icon: Building, count: 45, color: "text-blue-600" },
    { id: "community", name: "社区频道", icon: Users, count: 67, color: "text-purple-600" },
    { id: "merchant", name: "商家活动", icon: Store, count: 34, color: "text-orange-600" },
    { id: "transport", name: "交通出行", icon: Car, count: 23, color: "text-green-600" },
    { id: "health", name: "健康医疗", icon: Stethoscope, count: 18, color: "text-red-600" },
    { id: "education", name: "教育培训", icon: GraduationCap, count: 12, color: "text-indigo-600" },
  ]

  // 获取公告类型图标和颜色
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "emergency":
        return { icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" }
      case "notice":
        return { icon: Info, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" }
      case "activity":
        return { icon: Calendar, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" }
      case "promotion":
        return { icon: Gift, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" }
      case "recruitment":
        return { icon: Users, color: "text-green-600", bg: "bg-green-50", border: "border-green-200" }
      default:
        return { icon: Info, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" }
    }
  }

  // 获取优先级标签
  // const getPriorityBadge = (priority: string) => {
  //   switch (priority) {
  //     case "high":
  //   }
  // }

  // 获取优先级标签
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="text-xs">
            紧急
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="secondary" className="text-xs">
            重要
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="text-xs">
            一般
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="text-xs">
            一般
          </Badge>
        )
    }
  }

  // 过滤公告
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesChannel = selectedChannel === "all" || announcement.channel === selectedChannel
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesChannel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Megaphone className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">城市公告</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="搜索公告内容"
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                筛选
              </Button>
              <Button>
                <Bell className="h-4 w-4 mr-2" />
                订阅通知
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 统计概览 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">今日公告</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">紧急通知</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">89</div>
              <div className="text-sm text-gray-600">活动信息</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">商家优惠</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧频道分类 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">公告频道</CardTitle>
                <CardDescription>按类别浏览公告信息</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <div
                      key={channel.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedChannel === channel.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedChannel(channel.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-5 w-5 ${channel.color}`} />
                        <div>
                          <div className="font-medium">{channel.name}</div>
                          <div className="text-xs text-gray-500">{channel.count}条公告</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* 热门标签 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">热门标签</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["紧急", "交通", "活动", "优惠", "医疗", "教育", "安全", "天气"].map((tag, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧公告列表 */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  {channels.find((c) => c.id === selectedChannel)?.name || "全部公告"}
                  <span className="text-sm text-gray-500 ml-2">({filteredAnnouncements.length}条)</span>
                </h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    最新发布
                  </Button>
                  <Button variant="outline" size="sm">
                    最多浏览
                  </Button>
                  <Button variant="outline" size="sm">
                    优先级
                  </Button>
                </div>
              </div>

              {filteredAnnouncements.map((announcement) => {
                const typeInfo = getTypeIcon(announcement.type)
                const TypeIcon = typeInfo.icon

                return (
                  <Card key={announcement.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex">
                        {/* 公告图片 */}
                        <div className="w-64 h-48 relative">
                          <img
                            src={announcement.image || "/placeholder.svg"}
                            alt={announcement.title}
                            className="w-full h-full object-cover rounded-l-lg"
                          />
                          <div className="absolute top-2 left-2">{getPriorityBadge(announcement.priority)}</div>
                          <div
                            className={`absolute top-2 right-2 p-2 rounded-full ${typeInfo.bg} ${typeInfo.border} border`}
                          >
                            <TypeIcon className={`h-4 w-4 ${typeInfo.color}`} />
                          </div>
                        </div>

                        {/* 公告内容 */}
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-bold text-xl">{announcement.title}</h3>
                                <Badge
                                  variant="secondary"
                                  className={channels.find((c) => c.id === announcement.channel)?.color}
                                >
                                  {channels.find((c) => c.id === announcement.channel)?.name}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3 line-clamp-2">{announcement.content}</p>

                              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                <div className="flex items-center space-x-1">
                                  <Building className="h-4 w-4" />
                                  <span>{announcement.publisher}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{announcement.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{announcement.publishTime}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                  {announcement.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{announcement.views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Heart className="h-4 w-4" />
                                    <span>{announcement.likes}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2 ml-4">
                              <Button size="sm">查看详情</Button>
                              <Button variant="outline" size="sm">
                                <Share2 className="h-4 w-4 mr-1" />
                                分享
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {filteredAnnouncements.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Megaphone className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">暂无相关公告</h3>
                    <p className="text-gray-500">请尝试其他搜索条件或浏览其他频道</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
