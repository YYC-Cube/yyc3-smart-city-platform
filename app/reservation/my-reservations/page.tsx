"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  Gift,
  Settings,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  Smartphone,
  Mail,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

// 模拟用户预约数据
const userReservations = [
  {
    id: 1,
    name: "智能药品配送",
    category: "医疗健康",
    status: "active",
    reservedDate: "2024-12-15",
    launchDate: "2026-01-15",
    progress: 85,
    benefits: ["首月免配送费", "专属客服", "优先配送"],
    notifications: {
      sms: true,
      email: true,
      push: true,
    },
  },
  {
    id: 2,
    name: "紧急医疗救助",
    category: "医疗健康",
    status: "active",
    reservedDate: "2024-12-10",
    launchDate: "2026-01-08",
    progress: 92,
    benefits: ["VIP急救通道", "家属自动通知", "专家指导"],
    notifications: {
      sms: true,
      email: false,
      push: true,
    },
  },
  {
    id: 3,
    name: "智能外卖服务",
    category: "生活服务",
    status: "completed",
    reservedDate: "2024-11-20",
    launchDate: "2025-12-01",
    progress: 100,
    benefits: ["新用户8折", "免配送费", "积分奖励"],
    notifications: {
      sms: false,
      email: true,
      push: true,
    },
  },
  {
    id: 4,
    name: "邻里社交平台",
    category: "社区服务",
    status: "cancelled",
    reservedDate: "2024-12-01",
    launchDate: "2026-02-15",
    progress: 65,
    benefits: ["社交积分", "活动优先", "邻里优惠"],
    notifications: {
      sms: false,
      email: false,
      push: false,
    },
  },
]

const getStatusInfo = (status: string) => {
  switch (status) {
    case "active":
      return { label: "预约中", color: "bg-blue-100 text-blue-800", icon: Clock }
    case "completed":
      return { label: "已上线", color: "bg-green-100 text-green-800", icon: CheckCircle }
    case "cancelled":
      return { label: "已取消", color: "bg-gray-100 text-gray-800", icon: XCircle }
    default:
      return { label: "未知", color: "bg-gray-100 text-gray-800", icon: Clock }
  }
}

export default function MyReservationsPage() {
  const [reservations, setReservations] = useState(userReservations)
  const [activeTab, setActiveTab] = useState("active")

  const filteredReservations = reservations.filter((reservation) => {
    if (activeTab === "all") return true
    return reservation.status === activeTab
  })

  const handleCancelReservation = (id: number) => {
    setReservations((prev) =>
      prev.map((reservation) => (reservation.id === id ? { ...reservation, status: "cancelled" } : reservation)),
    )
  }

  const handleNotificationToggle = (id: number, type: "sms" | "email" | "push") => {
    setReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === id
          ? {
              ...reservation,
              notifications: {
                ...reservation.notifications,
                [type]: !reservation.notifications[type],
              },
            }
          : reservation,
      ),
    )
  }

  const activeCount = reservations.filter((r) => r.status === "active").length
  const completedCount = reservations.filter((r) => r.status === "completed").length
  const totalBenefits = reservations.filter((r) => r.status === "active").reduce((sum, r) => sum + r.benefits.length, 0)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">我的预约</h1>
            <Link href="/reservation">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                预约更多功能
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{activeCount}</div>
              <div className="text-sm opacity-90">活跃预约</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{completedCount}</div>
              <div className="text-sm opacity-90">已上线</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{totalBenefits}</div>
              <div className="text-sm opacity-90">专享福利</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* 状态筛选 */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">预约中 ({activeCount})</TabsTrigger>
            <TabsTrigger value="completed">已上线 ({completedCount})</TabsTrigger>
            <TabsTrigger value="cancelled">已取消</TabsTrigger>
            <TabsTrigger value="all">全部</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 预约列表 */}
        <div className="space-y-4">
          {filteredReservations.map((reservation) => {
            const statusInfo = getStatusInfo(reservation.status)
            const StatusIcon = statusInfo.icon
            const daysUntilLaunch = Math.ceil(
              (new Date(reservation.launchDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
            )

            return (
              <Card key={reservation.id} className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg">{reservation.name}</CardTitle>
                        <Badge className={statusInfo.color}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {reservation.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* 进度信息 */}
                  {reservation.status === "active" && (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">开发进度</span>
                        <span className="font-medium">{reservation.progress}%</span>
                      </div>
                      <Progress value={reservation.progress} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span>预约时间：{reservation.reservedDate}</span>
                        <span>预计上线：{daysUntilLaunch > 0 ? `${daysUntilLaunch}天后` : "即将上线"}</span>
                      </div>
                    </div>
                  )}

                  {/* 专享福利 */}
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      <Gift className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">专享福利</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {reservation.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 通知设置 */}
                  {reservation.status === "active" && (
                    <div>
                      <div className="flex items-center space-x-1 mb-3">
                        <Bell className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">通知设置</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Smartphone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">短信通知</span>
                          </div>
                          <Switch
                            checked={reservation.notifications.sms}
                            onCheckedChange={() => handleNotificationToggle(reservation.id, "sms")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">邮件通知</span>
                          </div>
                          <Switch
                            checked={reservation.notifications.email}
                            onCheckedChange={() => handleNotificationToggle(reservation.id, "email")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">应用推送</span>
                          </div>
                          <Switch
                            checked={reservation.notifications.push}
                            onCheckedChange={() => handleNotificationToggle(reservation.id, "push")}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 操作按钮 */}
                  <div className="flex space-x-2 pt-2">
                    {reservation.status === "active" && (
                      <>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Settings className="h-4 w-4 mr-1" />
                          修改设置
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleCancelReservation(reservation.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          取消预约
                        </Button>
                      </>
                    )}
                    {reservation.status === "completed" && (
                      <Button size="sm" className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        立即体验
                      </Button>
                    )}
                    {reservation.status === "cancelled" && (
                      <Button variant="outline" size="sm" className="flex-1">
                        重新预约
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredReservations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">📅</div>
            <p className="text-gray-500">暂无{activeTab === "all" ? "" : getStatusInfo(activeTab).label}预约</p>
            <p className="text-sm text-gray-400 mt-1">
              {activeTab === "active" ? "去预约一些即将上线的功能吧！" : "切换其他状态查看更多预约"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
