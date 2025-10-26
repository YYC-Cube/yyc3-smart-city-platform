"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// 定义地区类型
export interface Location {
  id: string
  city: string
  district: string
  fullName: string
  coordinates: {
    lat: number
    lng: number
  }
  distance?: number // 距离用户的距离（公里）
}

// 默认地区列表（添加真实坐标）
export const availableLocations: Location[] = [
  {
    id: "luoyang-jianxi",
    city: "洛阳市",
    district: "涧西区",
    fullName: "洛阳市涧西区",
    coordinates: { lat: 34.6836, lng: 112.3951 },
  },
  {
    id: "luoyang-xigong",
    city: "洛阳市",
    district: "西工区",
    fullName: "洛阳市西工区",
    coordinates: { lat: 34.6697, lng: 112.4439 },
  },
  {
    id: "luoyang-laocheng",
    city: "洛阳市",
    district: "老城区",
    fullName: "洛阳市老城区",
    coordinates: { lat: 34.6836, lng: 112.4692 },
  },
  {
    id: "luoyang-chanhe",
    city: "洛阳市",
    district: "瀍河区",
    fullName: "洛阳市瀍河区",
    coordinates: { lat: 34.6697, lng: 112.4947 },
  },
  {
    id: "luoyang-jili",
    city: "洛阳市",
    district: "吉利区",
    fullName: "洛阳市吉利区",
    coordinates: { lat: 34.9019, lng: 112.5869 },
  },
  {
    id: "luoyang-luolong",
    city: "洛阳市",
    district: "洛龙区",
    fullName: "洛阳市洛龙区",
    coordinates: { lat: 34.6197, lng: 112.4639 },
  },
  {
    id: "zhengzhou-jinshui",
    city: "郑州市",
    district: "金水区",
    fullName: "郑州市金水区",
    coordinates: { lat: 34.8008, lng: 113.6814 },
  },
  {
    id: "zhengzhou-erqi",
    city: "郑州市",
    district: "二七区",
    fullName: "郑州市二七区",
    coordinates: { lat: 34.7347, lng: 113.6394 },
  },
  {
    id: "zhengzhou-zhongyuan",
    city: "郑州市",
    district: "中原区",
    fullName: "郑州市中原区",
    coordinates: { lat: 34.7486, lng: 113.6131 },
  },
  {
    id: "beijing-chaoyang",
    city: "北京市",
    district: "朝阳区",
    fullName: "北京市朝阳区",
    coordinates: { lat: 39.9388, lng: 116.4074 },
  },
  {
    id: "beijing-haidian",
    city: "北京市",
    district: "海淀区",
    fullName: "北京市海淀区",
    coordinates: { lat: 39.959, lng: 116.2982 },
  },
  {
    id: "shanghai-pudong",
    city: "上海市",
    district: "浦东新区",
    fullName: "上海市浦东新区",
    coordinates: { lat: 31.2222, lng: 121.5581 },
  },
  {
    id: "guangzhou-tianhe",
    city: "广州市",
    district: "天河区",
    fullName: "广州市天河区",
    coordinates: { lat: 23.1291, lng: 113.3185 },
  },
  {
    id: "shenzhen-nanshan",
    city: "深圳市",
    district: "南山区",
    fullName: "深圳市南山区",
    coordinates: { lat: 22.5311, lng: 113.9344 },
  },
]

// 地理位置状态类型
export interface GeolocationState {
  isLoading: boolean
  error: string | null
  userLocation: { lat: number; lng: number } | null
  permissionStatus: "granted" | "denied" | "prompt" | "unknown"
}

// 创建上下文类型
interface LocationContextType {
  currentLocation: Location
  setCurrentLocation: (location: Location) => void
  availableLocations: Location[]
  geolocation: GeolocationState
  requestLocation: () => Promise<void>
  getNearbyLocations: (limit?: number) => Location[]
  calculateDistance: (lat1: number, lng1: number, lat2: number, lng2: number) => number
}

// 创建上下文
const LocationContext = createContext<LocationContextType | undefined>(undefined)

// 计算两点间距离（使用Haversine公式）
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371 // 地球半径（公里）
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// 上下文提供者组件
export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<Location>(availableLocations[0])
  const [geolocation, setGeolocation] = useState<GeolocationState>({
    isLoading: false,
    error: null,
    userLocation: null,
    permissionStatus: "unknown",
  })

  // 检查地理位置权限状态
  useEffect(() => {
    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          setGeolocation((prev) => ({ ...prev, permissionStatus: result.state as any }))

          // 监听权限状态变化
          result.addEventListener("change", () => {
            setGeolocation((prev) => ({ ...prev, permissionStatus: result.state as any }))
          })
        })
        .catch(() => {
          setGeolocation((prev) => ({ ...prev, permissionStatus: "unknown" }))
        })
    }
  }, [])

  // 请求用户位置
  const requestLocation = async (): Promise<void> => {
    if (!("geolocation" in navigator)) {
      setGeolocation((prev) => ({
        ...prev,
        error: "您的浏览器不支持地理位置功能",
        isLoading: false,
      }))
      return
    }

    setGeolocation((prev) => ({ ...prev, isLoading: true, error: null }))

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          setGeolocation((prev) => ({
            ...prev,
            isLoading: false,
            userLocation: userLoc,
            permissionStatus: "granted",
          }))

          // 自动推荐最近的区域
          const nearbyLocations = getNearbyLocations(userLoc, 1)
          if (nearbyLocations.length > 0) {
            setCurrentLocation(nearbyLocations[0])
          }

          resolve()
        },
        (error) => {
          let errorMessage = "获取位置失败"
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "用户拒绝了位置权限请求"
              setGeolocation((prev) => ({ ...prev, permissionStatus: "denied" }))
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage = "位置信息不可用"
              break
            case error.TIMEOUT:
              errorMessage = "获取位置超时"
              break
          }

          setGeolocation((prev) => ({
            ...prev,
            isLoading: false,
            error: errorMessage,
          }))

          reject(new Error(errorMessage))
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5分钟缓存
        },
      )
    })
  }

  // 获取附近的区域（基于用户位置或指定位置）
  const getNearbyLocations = (userLoc?: { lat: number; lng: number }, limit = 5): Location[] => {
    const targetLocation = userLoc || geolocation.userLocation
    if (!targetLocation) return []

    const locationsWithDistance = availableLocations.map((location) => ({
      ...location,
      distance: calculateDistance(
        targetLocation.lat,
        targetLocation.lng,
        location.coordinates.lat,
        location.coordinates.lng,
      ),
    }))

    return locationsWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0)).slice(0, limit)
  }

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        availableLocations,
        geolocation,
        requestLocation,
        getNearbyLocations,
        calculateDistance,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

// 自定义Hook，方便使用上下文
export function useLocation() {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider")
  }
  return context
}
