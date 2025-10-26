import { UnderDevelopment } from "@/components/under-development"

export default function ProfilePage() {
  return (
    <UnderDevelopment
      title="个人中心"
      description="个人中心功能正在开发中，管理您的账户信息！"
      backUrl="/"
      backLabel="返回首页"
      expectedDate="2026年02月初"
      features={["个人信息管理", "订单历史查询", "收藏夹管理", "积分会员系统", "消息通知中心"]}
    />
  )
}
