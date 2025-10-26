import { UnderDevelopment } from "@/components/under-development"

export default function EducationPage() {
  return (
    <UnderDevelopment
      title="教育培训服务"
      description="在线教育培训平台正在开发中，学习成长不停步！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年06月初"
      features={["在线课程学习", "职业技能培训", "考试报名服务", "学历提升咨询", "教育资源分享"]}
    />
  )
}
