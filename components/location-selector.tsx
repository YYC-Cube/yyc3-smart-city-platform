"use client"

import { useState, useEffect } from "react"
import { MapPin, Search, X, Navigation, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useLocation, type Location, availableLocations } from "@/contexts/location-context"

export function LocationSelector() {
  const { currentLocation, setCurrentLocation, geolocation, requestLocation, getNearbyLocations } = useLocation()

  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(availableLocations)
  const [selectedTab, setSelectedTab] = useState<string>("nearby")
  const [nearbyLocations, setNearbyLocations] = useState<Location[]>([])

  // 获取所有城市列表（去重）
  const cities = Array.from(new Set(availableLocations.map((loc) => loc.city)))

  // 更新附近区域列表
  useEffect(() => {
    if (geolocation.userLocation) {
      const nearby = getNearbyLocations(geolocation.userLocation, 5)
      setNearbyLocations(nearby)
    }
  }, [geolocation.userLocation, getNearbyLocations])

  // 根据搜索词和选中的标签过滤地区
  useEffect(() => {
    let filtered = availableLocations

    // 根据标签筛选
    if (selectedTab === "nearby") {
      filtered = nearbyLocations
    } else if (selectedTab !== "all") {
      filtered = filtered.filter((loc) => loc.city === selectedTab)
    }

    // 根据搜索词筛选
    if (searchTerm) {
      filtered = filtered.filter(
        (loc) =>
          loc.fullName.includes(searchTerm) || loc.city.includes(searchTerm) || loc.district.includes(searchTerm),
      )
    }

    setFilteredLocations(filtered)
  }, [searchTerm, selectedTab, nearbyLocations])

  // 选择地区
  const handleSelectLocation = (location: Location) => {
    setCurrentLocation(location)
    setOpen(false)
  }

  // 处理自动定位
  const handleAutoLocation = async () => {
    try {
      await requestLocation()
      // 定位成功后自动切换到附近标签
      setSelectedTab("nearby")
    } catch (error) {
      console.error("定位失败:", error)
    }
  }

  // 格式化距离显示
  const formatDistance = (distance?: number): string => {
    if (!distance) return ""
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`
    }
    return `${distance.toFixed(1)}km`
  }

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <MapPin className="h-4 w-4 mr-2" />
        {currentLocation.fullName}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>选择服务区域</DialogTitle>
          </DialogHeader>

          {/* 自动定位区域 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">自动定位</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAutoLocation}
                disabled={geolocation.isLoading}
                className="flex items-center space-x-2"
              >
                {geolocation.isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Navigation className="h-4 w-4" />
                )}
                <span>{geolocation.isLoading ? "定位中..." : "获取当前位置"}</span>
              </Button>
            </div>

            {/* 定位状态提示 */}
            {geolocation.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{geolocation.error}</AlertDescription>
              </Alert>
            )}

            {geolocation.userLocation && !geolocation.error && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>已获取您的位置，为您推荐附近的服务区域</AlertDescription>
              </Alert>
            )}

            {/* 权限状态提示 */}
            {geolocation.permissionStatus === "denied" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>位置权限已被拒绝，请在浏览器设置中允许位置访问，然后刷新页面重试</AlertDescription>
              </Alert>
            )}
          </div>

          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="搜索城市或区域"
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-7 w-7 p-0"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* 标签页 */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-4 mb-2">
              <TabsTrigger value="nearby" className="relative">
                附近
                {nearbyLocations.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center p-0">
                    {nearbyLocations.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="all">全部</TabsTrigger>
              {cities.slice(0, 2).map((city) => (
                <TabsTrigger key={city} value={city}>
                  {city.replace("市", "")}
                </TabsTrigger>
              ))}
            </TabsList>

            <ScrollArea className="h-72">
              {/* 附近区域 */}
              <TabsContent value="nearby" className="m-0">
                {nearbyLocations.length > 0 ? (
                  <div className="space-y-2">
                    {nearbyLocations.map((location) => (
                      <Button
                        key={location.id}
                        variant={currentLocation.id === location.id ? "default" : "outline"}
                        className="w-full justify-between"
                        onClick={() => handleSelectLocation(location)}
                      >
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {location.fullName}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {formatDistance(location.distance)}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Navigation className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">请先获取当前位置</p>
                    <p className="text-xs">点击上方&quot;获取当前位置&quot;按钮</p>
                  </div>
                )}
              </TabsContent>

              {/* 全部区域 */}
              <TabsContent value="all" className="m-0">
                <div className="grid grid-cols-2 gap-2">
                  {filteredLocations.map((location) => (
                    <Button
                      key={location.id}
                      variant={currentLocation.id === location.id ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => handleSelectLocation(location)}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {location.fullName}
                    </Button>
                  ))}
                </div>
              </TabsContent>

              {/* 按城市分类 */}
              {cities.map((city) => (
                <TabsContent key={city} value={city} className="m-0">
                  <div className="grid grid-cols-2 gap-2">
                    {filteredLocations
                      .filter((loc) => loc.city === city)
                      .map((location) => (
                        <Button
                          key={location.id}
                          variant={currentLocation.id === location.id ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => handleSelectLocation(location)}
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          {location.district}
                        </Button>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </ScrollArea>
          </Tabs>

          {/* 最近访问 */}
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">最近访问</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => handleSelectLocation(availableLocations[0])}>
                <MapPin className="h-3 w-3 mr-1" />
                {availableLocations[0].fullName}
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleSelectLocation(availableLocations[1])}>
                <MapPin className="h-3 w-3 mr-1" />
                {availableLocations[1].fullName}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
