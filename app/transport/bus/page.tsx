import { UnderDevelopment } from "@/components/under-development"

export default function BusPage() {
  return (
    <UnderDevelopment
      title="公交查询服务"
      description="实时公交查询功能正在开发中，出行信息一手掌握！"
      backUrl="/transport"
      backLabel="返回出行服务"
      expectedDate="2026年05月初"
      features={["实时公交到站", "最优路线规划", "换乘方案推荐", "公交卡余额查询", "站点周边信息"]}
    />
  )
}
