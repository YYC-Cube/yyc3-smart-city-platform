import { UnderDevelopment } from "@/components/under-development"

export default function FinancePage() {
  return (
    <UnderDevelopment
      title="金融服务"
      description="便民金融服务正在开发中，理财投资更便捷！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年07月中旬"
      features={["银行业务办理", "理财产品推荐", "贷款申请服务", "保险产品咨询", "信用查询服务"]}
    />
  )
}
