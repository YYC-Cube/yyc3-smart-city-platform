import { UnderDevelopment } from "@/components/under-development"

export default function MaternalCarePage() {
  return (
    <UnderDevelopment
      title="母婴护理服务"
      description="专业母婴护理功能正在开发中，为妈妈和宝宝提供贴心服务！"
      backUrl="/maternal"
      backLabel="返回呵护母婴"
      expectedDate="2026年03月底"
      features={["专业月嫂服务", "产后康复指导", "新生儿护理", "母乳喂养指导", "24小时在线咨询"]}
    />
  )
}
