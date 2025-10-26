"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Search,
  Star,
  Clock,
  MapPin,
  Utensils,
  Apple,
  Pill,
  ShoppingBag,
  Timer,
  Phone,
} from "lucide-react"

export default function DailyNeedsPage() {
  const [cartCount, setCartCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // 服务分类
  const categories = [
    { id: "all", name: "全部", icon: ShoppingBag, count: 1250 },
    { id: "supermarket", name: "超市购物", icon: ShoppingCart, count: 456 },
    { id: "food", name: "外卖配送", icon: Utensils, count: 789 },
    { id: "fresh", name: "生鲜配送", icon: Apple, count: 234 },
    { id: "pharmacy", name: "药品配送", icon: Pill, count: 67 },
  ]

  // 推荐商家
  const merchants = [
    {
      id: 1,
      name: "永辉超市(朝阳店)",
      category: "supermarket",
      rating: 4.8,
      deliveryTime: "30-45分钟",
      deliveryFee: 3,
      minOrder: 20,
      distance: "1.2km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["品质保证", "24小时"],
      promotion: "满50减10",
      isOpen: true,
    },
    {
      id: 2,
      name: "麦当劳(国贸店)",
      category: "food",
      rating: 4.6,
      deliveryTime: "20-35分钟",
      deliveryFee: 5,
      minOrder: 15,
      distance: "0.8km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["快餐", "热销"],
      promotion: "第二份半价",
      isOpen: true,
    },
    {
      id: 3,
      name: "盒马鲜生",
      category: "fresh",
      rating: 4.9,
      deliveryTime: "30分钟达",
      deliveryFee: 0,
      minOrder: 39,
      distance: "2.1km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["新鲜", "当日达"],
      promotion: "新用户立减20",
      isOpen: true,
    },
    {
      id: 4,
      name: "同仁堂药店",
      category: "pharmacy",
      rating: 4.7,
      deliveryTime: "45-60分钟",
      deliveryFee: 2,
      minOrder: 10,
      distance: "1.5km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["正品保证", "医保"],
      promotion: "处方药免费配送",
      isOpen: true,
    },
    {
      id: 5,
      name: "海底捞火锅",
      category: "food",
      rating: 4.8,
      deliveryTime: "40-55分钟",
      deliveryFee: 8,
      minOrder: 60,
      distance: "3.2km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["火锅", "服务好"],
      promotion: "生日免费",
      isOpen: false,
    },
    {
      id: 6,
      name: "7-11便利店",
      category: "supermarket",
      rating: 4.5,
      deliveryTime: "15-25分钟",
      deliveryFee: 2,
      minOrder: 5,
      distance: "0.3km",
      image: "/placeholder.svg?height=120&width=200",
      tags: ["便利", "24小时"],
      promotion: "满30减5",
      isOpen: true,
    },
  ]

  // 热门商品
  const hotProducts = [
    {
      id: 1,
      name: "新鲜蔬菜组合装",
      price: 29.9,
      originalPrice: 39.9,
      image: "/placeholder.svg?height=100&width=100",
      sales: 1234,
      merchant: "盒马鲜生",
    },
    {
      id: 2,
      name: "巨无霸套餐",
      price: 35.0,
      originalPrice: 42.0,
      image: "/placeholder.svg?height=100&width=100",
      sales: 856,
      merchant: "麦当劳",
    },
    {
      id: 3,
      name: "感冒灵颗粒",
      price: 18.5,
      originalPrice: 22.0,
      image: "/placeholder.svg?height=100&width=100",
      sales: 234,
      merchant: "同仁堂药店",
    },
  ]

  const filteredMerchants =
    selectedCategory === "all" ? merchants : merchants.filter((m) => m.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">生活刚需</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="搜索商家或商品" className="pl-10 w-64" />
              </div>
              <Button className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                购物车
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 快捷入口 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Timer className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <p className="font-medium">急速配送</p>
              <p className="text-xs text-gray-500">30分钟达</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Pill className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">24小时药店</p>
              <p className="text-xs text-gray-500">全天候服务</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Apple className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">生鲜直达</p>
              <p className="text-xs text-gray-500">新鲜保证</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">电话订购</p>
              <p className="text-xs text-gray-500">400-123-4567</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧分类 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">服务分类</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <div
                      key={category.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedCategory === category.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-gray-600" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* 热门商品 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">热门商品</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hotProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.merchant}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600 font-bold text-sm">¥{product.price}</span>
                        <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* 右侧商家列表 */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">
                {categories.find((c) => c.id === selectedCategory)?.name || "全部商家"}
                <span className="text-sm text-gray-500 ml-2">({filteredMerchants.length}家商家)</span>
              </h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  距离最近
                </Button>
                <Button variant="outline" size="sm">
                  评分最高
                </Button>
                <Button variant="outline" size="sm">
                  配送最快
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredMerchants.map((merchant) => (
                <Card key={merchant.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* 商家图片 */}
                      <div className="w-48 h-32 relative">
                        <img
                          src={merchant.image || "/placeholder.svg"}
                          alt={merchant.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        {merchant.promotion && (
                          <Badge className="absolute top-2 left-2 bg-red-500 text-white">{merchant.promotion}</Badge>
                        )}
                        {!merchant.isOpen && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-l-lg flex items-center justify-center">
                            <span className="text-white font-medium">暂停营业</span>
                          </div>
                        )}
                      </div>

                      {/* 商家信息 */}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{merchant.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{merchant.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{merchant.deliveryTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{merchant.distance}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">配送费 ¥{merchant.deliveryFee}</div>
                            <div className="text-sm text-gray-600">起送 ¥{merchant.minOrder}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {merchant.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Phone className="h-4 w-4 mr-1" />
                              电话
                            </Button>
                            <Button size="sm" disabled={!merchant.isOpen}>
                              {merchant.isOpen ? "立即下单" : "暂停营业"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
