import { UnderDevelopment } from "@/components/under-development"

export default function ExpressPickupPage() {
  return (
    <UnderDevelopment
      title="代收服务"
      description="物业代收快递功能正在开发中，让收件更安全！"
      backUrl="/community/express"
      backLabel="返回快递服务"
      expectedDate="2026年04月初"
      features={["物业代收服务", "安全存储保管", "取件码通知", "代收费用结算", "丢失赔偿保障"]}
    />
  )
}
