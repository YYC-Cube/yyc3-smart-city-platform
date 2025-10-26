import { UnderDevelopment } from "@/components/under-development"

export default function PharmacyPage() {
  return (
    <UnderDevelopment
      title="药品配送服务"
      description="24小时药品配送功能正在开发中，为您的健康保驾护航！"
      backUrl="/daily-needs"
      backLabel="返回生活刚需"
      expectedDate="2026年01月中旬"
      features={["24小时药店服务", "处方药配送", "用药安全提醒", "药师在线咨询", "医保支付对接"]}
    />
  )
}
