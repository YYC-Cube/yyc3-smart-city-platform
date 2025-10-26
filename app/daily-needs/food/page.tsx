import { UnderDevelopment } from "@/components/under-development"

export default function FoodDeliveryPage() {
  return (
    <UnderDevelopment
      title="外卖配送服务"
      description="美食外卖配送功能正在开发中，即将为您提供丰富的餐饮选择！"
      backUrl="/daily-needs"
      backLabel="返回生活刚需"
      expectedDate="2026年02月底"
      features={["附近餐厅推荐", "实时配送跟踪", "多种支付方式", "会员积分系统", "美食评价分享"]}
    />
  )
}
