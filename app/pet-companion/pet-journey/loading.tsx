import { Heart } from "lucide-react"

export default function PetJourneyLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-600">正在加载伴宠星途...</p>
      </div>
    </div>
  )
}
