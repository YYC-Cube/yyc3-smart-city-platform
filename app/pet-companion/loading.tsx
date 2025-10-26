import { Heart } from "lucide-react"

export default function PetCompanionLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-amber-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-600">正在加载伴宠星途服务...</p>
      </div>
    </div>
  )
}
