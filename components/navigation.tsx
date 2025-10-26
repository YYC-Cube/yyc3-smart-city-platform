"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, ShoppingCart, Stethoscope, FileText, Store, User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "首页", icon: Home },
    { href: "/daily-needs", label: "生活", icon: ShoppingCart, badge: "热门" },
    { href: "/medical", label: "医疗", icon: Stethoscope, urgent: true },
    { href: "/government", label: "政务", icon: FileText },
    { href: "/merchant", label: "商家", icon: Store, isNew: true },
    { href: "/profile", label: "我的", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-1 py-1 md:hidden z-50 safe-area-inset-bottom">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center space-y-1 h-auto py-2 px-1 w-full relative ${
                  isActive ? "text-blue-600 bg-blue-50" : "text-gray-600"
                }`}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
                  {item.urgent && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>}
                  {item.isNew && (
                    <Badge className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-1 py-0 h-4 min-w-0">
                      新
                    </Badge>
                  )}
                  {item.badge && !item.isNew && !item.urgent && (
                    <Badge className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-1 py-0 h-4 min-w-0">
                      热
                    </Badge>
                  )}
                </div>
                <span className="text-xs leading-none">{item.label}</span>
              </Button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
