import { UnderDevelopment } from "@/components/under-development"

export default function ElderlyCarePage() {
  return (
    <UnderDevelopment
      title="老人护理服务"
      description="专业老人护理功能正在开发中，让老人生活更安心！"
      backUrl="/elderly"
      backLabel="返回关爱老人"
      expectedDate="2026年04月初"
      features={["专业护理人员", "日常生活照料", "健康监测服务", "康复训练指导", "紧急救助响应"]}
    />
  )
}
