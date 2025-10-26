import { UnderDevelopment } from "@/components/under-development"

export default function MaternalConsultationPage() {
  return (
    <UnderDevelopment
      title="母婴专家咨询"
      description="母婴专家在线咨询功能正在开发中，专业指导随时获得！"
      backUrl="/maternal"
      backLabel="返回呵护母婴"
      expectedDate="2026年03月中旬"
      features={["妇产科专家咨询", "儿科医生问诊", "营养师指导", "心理咨询服务", "育儿专家答疑"]}
    />
  )
}
