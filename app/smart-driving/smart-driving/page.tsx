import { UnderDevelopment } from "@/components/under-development"

export default function SmartDrivingServicePage() {
  return (
    <UnderDevelopment
      title="智驭随行"
      description="此页面功能正在研发中，敬请期待！"
      backUrl="/smart-driving"
      backLabel="返回智驭随行"
      expectedDate="2026年5月"
      features={["智能驾驶辅助系统", "实时路况分析", "安全驾驶提醒", "驾驶行为记录", "智能语音助手", "紧急情况处理"]}
    />
  )
}
