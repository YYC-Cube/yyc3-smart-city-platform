import { UnderDevelopment } from "@/components/under-development"

export default function PetCarePage() {
  return (
    <UnderDevelopment
      title="宠心呵护"
      description="此页面功能正在研发中，敬请期待！"
      backUrl="/pet-companion"
      backLabel="返回伴宠星途"
      expectedDate="2026年5月"
      features={["在线宠物问诊", "健康档案管理", "疫苗接种提醒", "急救指导服务", "专业医师咨询", "健康体检预约"]}
    />
  )
}
