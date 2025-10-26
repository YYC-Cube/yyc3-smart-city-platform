import { UnderDevelopment } from "@/components/under-development"

export default function TransportPage() {
  return (
    <UnderDevelopment
      title="出行服务"
      description="智能出行服务正在开发中，让出行更便捷！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年05月中旬"
      features={["实时公交查询", "地铁线路规划", "打车服务对接", "停车位查找", "违章查询缴费"]}
    />
  )
}
