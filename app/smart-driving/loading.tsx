import { Car } from "lucide-react"

export default function SmartDrivingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Car className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-600">正在加载智驭随行服务...</p>
      </div>
    </div>
  )
}
