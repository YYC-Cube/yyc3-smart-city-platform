import { UnderDevelopment } from "@/components/under-development"

export default function ConsultationPage() {
  return (
    <UnderDevelopment
      title="在线问诊服务"
      description="在线问诊功能正在开发中，专家医生随时为您服务！"
      backUrl="/medical"
      backLabel="返回在线就诊"
      expectedDate="2026年02月中旬"
      features={["视频问诊服务", "图文咨询功能", "电话问诊选项", "病历管理系统", "处方开具服务"]}
    />
  )
}
