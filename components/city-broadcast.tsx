"use client"

import { useState, useEffect } from "react"
import { Megaphone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BroadcastMessage {
  id: string
  type: "emergency" | "notice" | "activity" | "weather"
  title: string
  content: string
  timestamp: string
  priority: "high" | "medium" | "low"
}

const mockMessages: BroadcastMessage[] = [
  {
    id: "1",
    type: "emergency",
    title: "台风预警",
    content: "受台风影响，明日部分公交线路将临时调整，请市民注意出行安全",
    timestamp: "刚刚",
    priority: "high",
  },
  {
    id: "2",
    type: "notice",
    title: "地铁维护通知",
    content: "地铁2号线将于本周末进行设备维护，部分时段列车间隔延长",
    timestamp: "2小时前",
    priority: "medium",
  },
  {
    id: "3",
    type: "activity",
    title: "社区运动会",
    content: "本周六上午9点，社区运动会在中心广场举行，欢迎居民积极参与",
    timestamp: "1天前",
    priority: "low",
  },
  {
    id: "4",
    type: "weather",
    title: "天气提醒",
    content: "明日气温下降，最低温度5℃，请注意保暖添衣",
    timestamp: "3小时前",
    priority: "medium",
  },
]

export function CityBroadcast() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mockMessages.length)
      }, 5000) // 每5秒切换一条消息

      return () => clearInterval(interval)
    }
  }, [isPaused, isVisible])

  const currentMessage = mockMessages[currentIndex]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "emergency":
        return "text-red-600 bg-red-50"
      case "notice":
        return "text-blue-600 bg-blue-50"
      case "activity":
        return "text-purple-600 bg-purple-50"
      case "weather":
        return "text-orange-600 bg-orange-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "emergency":
        return "紧急"
      case "notice":
        return "通知"
      case "activity":
        return "活动"
      case "weather":
        return "天气"
      default:
        return "消息"
    }
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 relative overflow-hidden">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Megaphone className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-medium">城市之声</span>
        </div>

        <div
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex items-center space-x-4">
              <Badge className={`${getTypeColor(currentMessage.type)} text-xs px-2 py-1`} variant="secondary">
                {getTypeLabel(currentMessage.type)}
              </Badge>
              <span className="text-sm font-medium">{currentMessage.title}</span>
              <span className="text-sm opacity-90">-</span>
              <span className="text-sm opacity-90">{currentMessage.content}</span>
              <span className="text-xs opacity-75 ml-4">{currentMessage.timestamp}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="flex space-x-1">
            {mockMessages.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          animation-play-state: ${isPaused ? "paused" : "running"};
        }
      `}</style>
    </div>
  )
}
