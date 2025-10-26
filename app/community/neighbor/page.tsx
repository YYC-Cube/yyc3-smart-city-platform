import { UnderDevelopment } from "@/components/under-development"

export default function NeighborPage() {
  return (
    <UnderDevelopment
      title="邻里互助服务"
      description="邻里互助功能正在开发中，让社区更温暖！"
      backUrl="/community"
      backLabel="返回社区服务"
      expectedDate="2026年03月底"
      features={["邻里求助发布", "技能分享平台", "物品借用服务", "社区活动组织", "邻里聊天室"]}
    />
  )
}
