"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Mic, MicOff, X, Minimize2, Maximize2, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  suggestions?: string[]
}

interface QuickAction {
  id: string
  label: string
  icon: string
  action: string
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "您好！我是小语，您的智慧生活管家。我可以帮您查询天气、预约服务、导航出行、管理日程等。有什么可以为您服务的吗？",
      timestamp: new Date(),
      suggestions: ["查询今日天气", "预约医生", "附近美食推荐", "公交路线查询"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions: QuickAction[] = [
    { id: "weather", label: "天气查询", icon: "🌤️", action: "查询今日天气" },
    { id: "medical", label: "医疗预约", icon: "🏥", action: "我想预约医生" },
    { id: "food", label: "美食推荐", icon: "🍽️", action: "推荐附近美食" },
    { id: "transport", label: "出行导航", icon: "🚗", action: "规划出行路线" },
    { id: "shopping", label: "购物助手", icon: "🛒", action: "帮我购物" },
    { id: "schedule", label: "日程管理", icon: "📅", action: "查看我的日程" },
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

    const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue.trim()
    if (!messageContent) return

    setError(null) // 清除之前的错误
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
      
      const response = getAIResponse(messageContent)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions,
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setError("抱歉，服务暂时不可用，请稍后再试")
      console.error("AI 助手错误:", err)
    } finally {
      setIsTyping(false)
    }
  }

  const generateAIResponse = (userInput: string): { content: string; suggestions?: string[] } => {
    const input = userInput.toLowerCase()

    if (input.includes("天气")) {
      return {
        content: "今日洛阳市涧西区天气：晴转多云，气温5-15℃，东北风2-3级，空气质量良好。建议您适当添衣保暖。",
        suggestions: ["明日天气", "一周天气预报", "空气质量详情", "穿衣建议"],
      }
    } else if (input.includes("医生") || input.includes("预约") || input.includes("医疗")) {
      return {
        content:
          "我为您查询到附近的医疗资源：\n\n🏥 洛阳市中心医院（距离2.3km）\n⏰ 今日还有号源：内科、外科\n📞 预约电话：0379-63892222\n\n是否需要我帮您预约挂号？",
        suggestions: ["立即预约", "查看更多医院", "急诊科信息", "体检预约"],
      }
    } else if (input.includes("美食") || input.includes("吃") || input.includes("餐厅")) {
      return {
        content:
          "为您推荐附近热门美食：\n\n🍜 老洛阳面馆（4.8分）- 距离500m\n🥘 川味小厨（4.6分）- 距离800m\n🍕 必胜客（4.5分）- 距离1.2km\n\n需要我为您导航到哪家餐厅吗？",
        suggestions: ["导航到面馆", "查看菜单", "在线订餐", "更多推荐"],
      }
    } else if (input.includes("路线") || input.includes("导航") || input.includes("公交")) {
      return {
        content:
          "请告诉我您的目的地，我来为您规划最佳出行路线。支持：\n\n🚌 公交路线\n🚗 驾车路线\n🚶 步行路线\n🚴 骑行路线",
        suggestions: ["去火车站", "去机场", "去市中心", "去最近地铁站"],
      }
    } else if (input.includes("购物") || input.includes("买")) {
      return {
        content:
          "购物助手为您服务！我可以帮您：\n\n🛒 搜索商品\n💰 比价优惠\n🚚 配送服务\n⭐ 商品推荐\n\n请告诉我您想购买什么？",
        suggestions: ["生鲜蔬菜", "日用百货", "数码产品", "服装鞋帽"],
      }
    } else if (input.includes("日程") || input.includes("安排") || input.includes("提醒")) {
      return {
        content:
          "您的今日日程：\n\n📅 上午9:00 - 工作会议\n🍽️ 中午12:00 - 午餐时间\n🏥 下午3:00 - 体检预约\n\n需要我为您添加新的日程安排吗？",
        suggestions: ["添加提醒", "查看明日安排", "设置闹钟", "日程同步"],
      }
    } else {
      return {
        content: "我理解您的需求，让我为您提供更精准的服务。作为您的智慧生活管家，我可以帮您处理日常生活中的各种事务。",
        suggestions: ["服务介绍", "功能指南", "使用帮助", "联系客服"],
      }
    }
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    setError(null)
    
    if (!isListening) {
      // 检查浏览器语音识别支持
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        setError("您的浏览器不支持语音识别功能")
        return
      }
      
      // 开始语音识别
      try {
        setTimeout(() => {
          setIsListening(false)
          setInputValue("语音输入测试内容")
        }, 3000)
      } catch (err) {
        setError("语音识别出现错误，请重试")
        setIsListening(false)
      }
    }
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(action)
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-4 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed ${isMinimized ? "bottom-20 right-4 w-80 h-16" : "bottom-20 right-4 w-80 h-96"} md:bottom-4 shadow-2xl z-50 transition-all duration-300`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-sm">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                小语
              </AvatarFallback>
            </Avatar>
            <span>智能管家小语</span>
            <Badge className="bg-green-500 text-white text-xs">在线</Badge>
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsMinimized(!isMinimized)}>
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-80">
          {/* 快捷操作 */}
          <div className="px-4 pb-2">
            <div className="grid grid-cols-3 gap-2">
              {quickActions.slice(0, 6).map((action) => (
                <Button
                  key={action.id}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 px-2"
                  onClick={() => handleQuickAction(action.action)}
                >
                  <span className="mr-1">{action.icon}</span>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 消息区域 */}
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                    <div className="flex items-start space-x-2">
                      {message.type === "assistant" && (
                        <Avatar className="w-6 h-6 mt-1">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                            <Bot className="h-3 w-3" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`rounded-lg p-3 text-sm ${
                          message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        {message.suggestions && (
                          <div className="mt-2 space-y-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs bg-white/20 hover:bg-white/30 text-gray-700"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      {message.type === "user" && (
                        <Avatar className="w-6 h-6 mt-1">
                          <AvatarFallback className="bg-gray-500 text-white text-xs">
                            <User className="h-3 w-3" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <Avatar className="w-6 h-6 mt-1">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* 输入区域 */}
          <div className="p-4 border-t">
            {error && (
              <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 text-xs">{error}</p>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入消息或语音输入..."
                className="flex-1 text-sm"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputValue)
                  }
                }}
              />
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 ${isListening ? "bg-red-100 text-red-600" : ""}`}
                onClick={handleVoiceInput}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
