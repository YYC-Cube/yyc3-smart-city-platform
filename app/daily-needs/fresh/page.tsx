import { UnderDevelopment } from "@/components/under-development"

export default function FreshDeliveryPage() {
  return (
    <UnderDevelopment
      title="生鲜配送服务"
      description="新鲜蔬果配送功能正在开发中，为您提供最新鲜的食材！"
      backUrl="/daily-needs"
      backLabel="返回生活刚需"
      expectedDate="2026年03月初"
      features={["当日新鲜采购", "冷链配送保鲜", "品质保证退换", "营养搭配建议", "定期配送服务"]}
    />
  )
}
