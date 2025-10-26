import { Settings } from "lucide-react"

export default function VehicleManagementLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Settings className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-600">正在加载车辆管理...</p>
      </div>
    </div>
  )
}
