"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"

interface DateTimeInfo {
  date: string
  time: string
  weekday: string
  lunarDate: string
  festivals: string[]
  userBirthdays: string[]
}

export function DateTimeWidget() {
  const [currentDateTime, setCurrentDateTime] = useState<DateTimeInfo>({
    date: "",
    time: "",
    weekday: "",
    lunarDate: "",
    festivals: [],
    userBirthdays: [],
  })
  const [open, setOpen] = useState(false)
  const [is24Hour, setIs24Hour] = useState(true)
  const [location, setLocation] = useState("洛阳市涧西区")

  // 模拟节日数据
  const festivals = [
    { date: "2025-01-01", name: "元旦", type: "national" },
    { date: "2025-01-29", name: "春节", type: "traditional" },
    { date: "2025-02-14", name: "情人节", type: "western" },
    { date: "2025-03-08", name: "妇女节", type: "national" },
    { date: "2025-04-05", name: "清明节", type: "traditional" },
    { date: "2025-05-01", name: "劳动节", type: "national" },
    { date: "2025-06-01", name: "儿童节", type: "national" },
    { date: "2025-10-01", name: "国庆节", type: "national" },
  ]

  // 模拟用户生日数据
  const userBirthdays = [
    { date: "2025-01-15", name: "张三", relation: "朋友" },
    { date: "2025-02-20", name: "李四", relation: "同事" },
    { date: "2025-03-10", name: "王五", relation: "家人" },
  ]

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, "0")
      const day = String(now.getDate()).padStart(2, "0")
      const hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")

      const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
      const weekday = weekdays[now.getDay()]

      // 格式化时间
      const timeStr = is24Hour
        ? `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`
        : `${hours > 12 ? hours - 12 : hours || 12}:${minutes}:${seconds} ${hours >= 12 ? "PM" : "AM"}`

      // 获取今日节日
      const todayStr = `${year}-${month}-${day}`
      const todayFestivals = festivals.filter((f) => f.date === todayStr).map((f) => f.name)

      // 获取今日生日
      const todayBirthdays = userBirthdays
        .filter((b) => b.date.slice(5) === `${month}-${day}`)
        .map((b) => `${b.name}(${b.relation})`)

      // 模拟农历日期
      const lunarDate = "腊月初八"

      setCurrentDateTime({
        date: `${year}年${month}月${day}日`,
        time: timeStr,
        weekday,
        lunarDate,
        festivals: todayFestivals,
        userBirthdays: todayBirthdays,
      })
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [is24Hour])

  const getCalendarDays = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
      const festival = festivals.find((f) => f.date === dateStr)
      const birthday = userBirthdays.find((b) => b.date.slice(5) === dateStr.slice(5))

      days.push({
        date: date.getDate(),
        isCurrentMonth: date.getMonth() === month,
        isToday: date.toDateString() === now.toDateString(),
        festival: festival?.name,
        birthday: birthday?.name,
        fullDate: dateStr,
      })
    }
    return days
  }

  return (
    <>
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
          className="flex items-center space-x-2 px-2 py-1"
        >
          <Clock className="h-4 w-4" />
          <span className="text-sm font-mono">
            {currentDateTime.date}-{currentDateTime.weekday}；{currentDateTime.time}
          </span>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>日期时间</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* 当前时间显示 */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold font-mono">{currentDateTime.time}</div>
                  <div className="text-lg">
                    {currentDateTime.date} {currentDateTime.weekday}
                  </div>
                  <div className="text-sm text-gray-600">农历 {currentDateTime.lunarDate}</div>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 时间格式设置 */}
            <div className="flex items-center justify-between">
              <span className="text-sm">24小时制</span>
              <Switch checked={is24Hour} onCheckedChange={setIs24Hour} />
            </div>

            {/* 今日特殊事件 */}
            {(currentDateTime.festivals.length > 0 || currentDateTime.userBirthdays.length > 0) && (
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">今日特殊</h4>
                  <div className="space-y-2">
                    {currentDateTime.festivals.map((festival, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Badge className="bg-red-500 text-white">节日</Badge>
                        <span className="text-sm">{festival}</span>
                      </div>
                    ))}
                    {currentDateTime.userBirthdays.map((birthday, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Badge className="bg-pink-500 text-white">生日</Badge>
                        <span className="text-sm">{birthday}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 日历视图 */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                    <div key={day} className="p-2 font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {getCalendarDays().map((day, index) => (
                    <div
                      key={index}
                      className={`
                        p-2 text-xs text-center rounded relative
                        ${day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                        ${day.isToday ? "bg-blue-500 text-white font-bold" : "hover:bg-gray-100"}
                      `}
                    >
                      {day.date}
                      {day.festival && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>}
                      {day.birthday && <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-500 rounded-full"></div>}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>节日</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>生日</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
