import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LocationProvider } from "@/contexts/location-context"

export const metadata: Metadata = {
  title: "智慧社区服务平台",
  description: "集快递收发、社区购物、物业服务于一体的便民平台",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <LocationProvider>
          {children}
          <Navigation />
          <div className="pb-16 md:pb-0" />
        </LocationProvider>
      </body>
    </html>
  )
}
