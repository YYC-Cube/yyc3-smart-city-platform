import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ReservationLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部骨架 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto mb-6 bg-white/20" />
            <div className="flex items-center justify-center space-x-8">
              <Skeleton className="h-5 w-20 bg-white/20" />
              <Skeleton className="h-5 w-20 bg-white/20" />
              <Skeleton className="h-5 w-20 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 筛选和搜索骨架 */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-48" />
        </div>

        {/* 统计概览骨架 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <Skeleton className="h-8 w-8 mx-auto mb-2" />
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 功能列表骨架 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="h-12 w-12" />
                    <div>
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-6 w-16 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-2 w-full" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
