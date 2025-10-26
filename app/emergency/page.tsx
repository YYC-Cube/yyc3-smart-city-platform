import { UnderDevelopment } from "@/components/under-development"

export default function EmergencyPage() {
  return (
    <UnderDevelopment
      title="紧急求助服务"
      description="紧急求助功能正在开发中，为您的安全保驾护航！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年01月底"
      features={["一键报警功能", "紧急联系人", "医疗急救呼叫", "位置信息共享", "求助信息推送"]}
    />
  )
}
