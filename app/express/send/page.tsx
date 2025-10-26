import { UnderDevelopment } from "@/components/under-development"

export default function ExpressSendPage() {
  return (
    <UnderDevelopment
      title="快递寄件服务"
      description="在线寄件功能正在开发中，让寄快递更便捷！"
      backUrl="/community/express"
      backLabel="返回快递服务"
      expectedDate="2026年02月初"
      features={["在线下单寄件", "上门取件服务", "价格对比选择", "寄件状态跟踪", "批量寄件管理"]}
    />
  )
}
