import { UnderDevelopment } from "@/components/under-development"

export default function EmergencyPage() {
  return (
    <UnderDevelopment
      title="紧急医疗服务"
      description="紧急医疗救助功能正在开发中，为您提供快速的医疗响应！"
      backUrl="/medical"
      backLabel="返回在线就诊"
      expectedDate="2026年01月底"
      features={["一键呼叫急救", "最近医院导航", "急救知识指导", "家属紧急联系", "医疗记录快速调取"]}
    />
  )
}
