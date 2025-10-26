"use client"

import { useEffect, useState } from "react"
import { MapPin, Navigation, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLocation } from "@/contexts/location-context"

export function LocationStatus() {
  const { geolocation, currentLocation, requestLocation } = useLocation()
  const [showStatus, setShowStatus] = useState(false)

  // 在组件挂载后显示状态
  useEffect(() => {
    setShowStatus(true)
  }, [])

  if (!showStatus) return null

  return (
    <div className="mb-4">
      {/* 当前位置状态 */}
      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium text-blue-900">当前服务区域</p>
            <p className="text-sm text-blue-700">{currentLocation.fullName}</p>
          </div>
        </div>

        {/* 位置状态指示器 */}
        <div className="flex items-center space-x-2">
          {geolocation.userLocation ? (
            <Badge className="bg-green-500 text-white">
              <Navigation className="h-3 w-3 mr-1" />
              已定位
            </Badge>
          ) : geolocation.permissionStatus === "denied" ? (
            <Badge variant="destructive">
              <AlertCircle className="h-3 w-3 mr-1" />
              定位被拒绝
            </Badge>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={requestLocation}
              disabled={geolocation.isLoading}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <Navigation className="h-3 w-3 mr-1" />
              {geolocation.isLoading ? "定位中..." : "自动定位"}
            </Button>
          )}
        </div>
      </div>

      {/* 定位精度提示 */}
      {geolocation.userLocation && (
        <p className="text-xs text-gray-500 mt-2 text-center">已为您推荐最近的服务区域，如需更改请点击右上角地区名称</p>
      )}
    </div>
  )
}
