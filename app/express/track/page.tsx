import { UnderDevelopment } from "@/components/under-development"

export default function ExpressTrackPage() {
  return (
    <UnderDevelopment
      title="快递查询服务"
      description="快递跟踪查询功能正在开发中，实时了解包裹状态！"
      backUrl="/community/express"
      backLabel="返回快递服务"
      expectedDate="2026年01月底"
      features={["实时物流跟踪", "多快递公司支持", "配送进度提醒", "签收状态确认", "历史查询记录"]}
    />
  )
}
