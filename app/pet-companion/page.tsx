import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Stethoscope, ShoppingBag, Users } from "lucide-react"

export default function PetCompanionPage() {
  const services = [
    {
      id: "pet-journey",
      title: "伴宠星途",
      description: "宠物成长记录、智能陪伴、行为分析",
      icon: Heart,
      color: "bg-pink-500",
      features: ["成长记录", "智能陪伴", "行为分析", "健康监测"],
      href: "/pet-companion/pet-journey",
    },
    {
      id: "pet-care",
      title: "宠心呵护",
      description: "宠物医疗、健康管理、专业护理",
      icon: Stethoscope,
      color: "bg-red-500",
      features: ["在线问诊", "健康档案", "疫苗提醒", "急救指导"],
      href: "/pet-companion/pet-care",
    },
    {
      id: "pet-shopping",
      title: "宠物用品",
      description: "宠物食品、玩具用品、护理产品",
      icon: ShoppingBag,
      color: "bg-blue-500",
      features: ["优质食品", "趣味玩具", "护理用品", "定制服务"],
      href: "/pet-companion/shopping",
    },
    {
      id: "pet-social",
      title: "宠物社交",
      description: "宠友交流、活动聚会、经验分享",
      icon: Users,
      color: "bg-green-500",
      features: ["宠友圈", "线下聚会", "经验分享", "专家答疑"],
      href: "/pet-companion/social",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-amber-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
            <div className="ml-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-amber-600 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">伴宠星途</h1>
                <p className="text-xs text-gray-500">用心呵护每一只宠物</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-pink-600 to-amber-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">伴宠星途服务平台</h2>
              <p className="text-pink-100 text-lg">专业宠物服务，让每一只宠物都能健康快乐成长</p>
              <div className="flex space-x-4 mt-4">
                <Badge className="bg-white/20 text-white border-white/30">专业护理</Badge>
                <Badge className="bg-white/20 text-white border-white/30">健康管理</Badge>
                <Badge className="bg-white/20 text-white border-white/30">社交互动</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-green-500 text-white text-xs">新功能</Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
