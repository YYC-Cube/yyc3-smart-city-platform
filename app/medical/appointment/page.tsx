import { UnderDevelopment } from "@/components/under-development"

export default function AppointmentPage() {
  return (
    <UnderDevelopment
      title="预约挂号服务"
      description="在线预约挂号功能正在开发中，让就医更便捷！"
      backUrl="/medical"
      backLabel="返回在线就诊"
      expectedDate="2026年02月初"
      features={["多医院号源整合", "专家排班查询", "智能推荐科室", "预约提醒服务", "就诊流程指导"]}
    />
  )
}
