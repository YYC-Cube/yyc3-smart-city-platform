"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Search, Star, Truck, Clock, MapPin } from "lucide-react"

export default function MallPage() {
  const [cartCount, setCartCount] = useState(0)

  // 模拟商品数据
  const products = [
    {
      id: 1,
      name: "新鲜蔬菜礼盒",
      price: 39.9,
      originalPrice: 49.9,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      sales: 156,
      shop: "社区生鲜店",
      delivery: "30分钟送达",
      tags: ["新鲜", "当日采摘"],
    },
    {
      id: 2,
      name: "精品水果拼盘",
      price: 68.0,
      originalPrice: 78.0,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      sales: 89,
      shop: "果然好水果",
      delivery: "1小时送达",
      tags: ["进口", "精选"],
    },
    {
      id: 3,
      name: "社区面包房套餐",
      price: 25.8,
      originalPrice: 32.0,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      sales: 234,
      shop: "香香面包房",
      delivery: "即时送达",
      tags: ["现烤", "热销"],
    },
    {
      id: 4,
      name: "家庭清洁用品",
      price: 45.5,
      originalPrice: 55.0,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      sales: 67,
      shop: "便民超市",
      delivery: "2小时送达",
      tags: ["环保", "实用"],
    },
  ]

  const categories = [
    { name: "生鲜蔬果", count: 156, icon: "🥬" },
    { name: "面包糕点", count: 89, icon: "🍞" },
    { name: "日用百货", count: 234, icon: "🧴" },
    { name: "药品保健", count: 45, icon: "💊" },
    { name: "母婴用品", count: 78, icon: "🍼" },
    { name: "宠物用品", count: 32, icon: "🐕" },
  ]

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">社区商城</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="搜索商品" className="pl-10 w-64" />
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧分类 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">商品分类</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 配送信息 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">配送服务</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>社区内免费配送</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>30分钟-2小时送达</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span>物业代收服务</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧商品列表 */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">全部商品</TabsTrigger>
                <TabsTrigger value="fresh">生鲜蔬果</TabsTrigger>
                <TabsTrigger value="daily">日用百货</TabsTrigger>
                <TabsTrigger value="hot">热销推荐</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.tags.map((tag, index) => (
                            <Badge key={index} className="absolute top-2 left-2 bg-red-500 text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="p-4 space-y-3">
                          <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>

                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">已售 {product.sales}</span>
                          </div>

                          <div className="text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{product.shop}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Clock className="h-3 w-3" />
                              <span>{product.delivery}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-x-2">
                              <span className="text-xl font-bold text-red-600">¥{product.price}</span>
                              <span className="text-sm text-gray-500 line-through">¥{product.originalPrice}</span>
                            </div>
                            <Button size="sm" onClick={() => addToCart(product.id)}>
                              加入购物车
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fresh">
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">生鲜蔬果分类商品展示中...</p>
                </div>
              </TabsContent>

              <TabsContent value="daily">
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">日用百货分类商品展示中...</p>
                </div>
              </TabsContent>

              <TabsContent value="hot">
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">热销推荐商品展示中...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
