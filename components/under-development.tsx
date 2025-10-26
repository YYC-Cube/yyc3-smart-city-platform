import { ArrowLeft, Calendar, Clock, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function UnderDevelopmentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled>
          敬请期待
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>此功能正在开发中</DialogTitle>
          <DialogDescription>
            我们正在努力开发此功能，以便尽快为您提供更好的体验。
            <br />
            感谢您的耐心等待！
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Calendar className="col-span-1 h-4 w-4" />
            <p className="col-span-3 text-sm">预计发布日期：2024年12月31日</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Clock className="col-span-1 h-4 w-4" />
            <p className="col-span-3 text-sm">预计发布时间：23:59</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/">
            <Button variant="secondary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回
            </Button>
          </Link>
          <Link href="/reservation">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Star className="h-4 w-4 mr-2" />
              预约体验此功能
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface UnderDevelopmentProps {
  title: string
  description: string
  backUrl: string
  backLabel: string
  expectedDate: string
  features: string[]
}

export function UnderDevelopment({
  title,
  description,
  backUrl,
  backLabel,
  expectedDate,
  features,
}: UnderDevelopmentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">预计上线时间</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{expectedDate}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">即将推出的功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-left">
                <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={backUrl}>
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {backLabel}
            </Button>
          </Link>
          <Link href="/reservation">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Star className="h-4 w-4 mr-2" />
              预约体验此功能
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
