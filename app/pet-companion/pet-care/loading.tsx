import { Stethoscope } from "lucide-react"

export default function PetCareLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Stethoscope className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-600">正在加载宠心呵护...</p>
      </div>
    </div>
  )
}
