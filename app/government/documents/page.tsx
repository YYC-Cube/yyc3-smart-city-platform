import { UnderDevelopment } from "@/components/under-development"

export default function DocumentsPage() {
  return (
    <UnderDevelopment
      title="证件办理服务"
      description="在线证件办理功能正在开发中，办事更高效！"
      backUrl="/government"
      backLabel="返回便民服务"
      expectedDate="2026年04月初"
      features={["身份证办理", "护照申请服务", "驾驶证业务", "户籍业务办理", "办理进度查询"]}
    />
  )
}
