import { UnderDevelopment } from "@/components/under-development"

export default function ElderlyActivitiesPage() {
  return (
    <UnderDevelopment
      title="老年娱乐活动"
      description="老年娱乐活动功能正在开发中，让晚年生活更精彩！"
      backUrl="/elderly"
      backLabel="返回关爱老人"
      expectedDate="2026年03月底"
      features={["太极拳晨练", "书法兴趣班", "健康知识讲座", "棋牌娱乐室", "老年旅游团"]}
    />
  )
}
