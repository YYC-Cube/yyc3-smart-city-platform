import { UnderDevelopment } from "@/components/under-development"

export default function HomeServicePage() {
  return (
    <UnderDevelopment
      title="家政服务"
      description="专业家政服务平台正在开发中，让家庭生活更轻松！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年05月底"
      features={["家庭清洁服务", "家电维修服务", "搬家服务预约", "月嫂保姆服务", "家庭护理服务"]}
    />
  )
}
