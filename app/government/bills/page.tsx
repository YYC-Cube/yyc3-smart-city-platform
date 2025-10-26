import { UnderDevelopment } from "@/components/under-development"

export default function BillsPage() {
  return (
    <UnderDevelopment
      title="公共缴费服务"
      description="水电燃气缴费功能正在开发中，让缴费更便捷！"
      backUrl="/government"
      backLabel="返回便民服务"
      expectedDate="2026年01月底"
      features={["水电燃气缴费", "物业费缴纳", "话费充值服务", "缴费记录查询", "自动缴费设置"]}
    />
  )
}
