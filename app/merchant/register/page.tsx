import { UnderDevelopment } from "@/components/under-development"

export default function MerchantRegisterPage() {
  return (
    <UnderDevelopment
      title="商家注册入驻"
      description="商家快速注册功能正在开发中，简化入驻流程！"
      backUrl="/merchant"
      backLabel="返回商家服务"
      expectedDate="2026年02月初"
      features={["快速注册通道", "资质在线审核", "开店指导服务", "营销工具配置", "数据分析报表"]}
    />
  )
}
