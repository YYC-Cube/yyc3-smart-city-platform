import { UnderDevelopment } from "@/components/under-development"

export default function MerchantDashboardPage() {
  return (
    <UnderDevelopment
      title="商家管理后台"
      description="商家管理后台正在开发中，提供全面的店铺管理功能！"
      backUrl="/merchant"
      backLabel="返回商家服务"
      expectedDate="2026年03月中旬"
      features={["订单管理系统", "商品上架管理", "营销活动设置", "财务数据统计", "客户服务工具"]}
    />
  )
}
