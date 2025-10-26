"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Code,
  TestTube,
  Rocket,
  AlertTriangle,
  BarChart3,
  GitBranch,
} from "lucide-react"

export default function DevelopmentPage() {
  // 开发概览数据
  const developmentOverview = {
    totalModules: 25,
    completedModules: 2,
    inProgressModules: 3,
    plannedModules: 20,
    overallProgress: 15,
    nextMilestone: "药品配送服务",
    nextMilestoneDate: "2026年01月15日",
  }

  // 近期里程碑
  const upcomingMilestones = [
    {
      id: 1,
      name: "药品配送服务",
      phase: "需求分析",
      dueDate: "2025年12月07日",
      priority: "critical",
      progress: 80,
      team: "医疗团队",
    },
    {
      id: 2,
      name: "紧急医疗服务",
      phase: "UI设计",
      dueDate: "2025年12月21日",
      priority: "critical",
      progress: 30,
      team: "急救团队",
    },
    {
      id: 3,
      name: "公共缴费服务",
      phase: "功能开发",
      dueDate: "2026年01月12日",
      priority: "high",
      progress: 60,
      team: "政务团队",
    },
    {
      id: 4,
      name: "外卖配送服务",
      phase: "需求分析",
      dueDate: "2026年01月21日",
      priority: "high",
      progress: 0,
      team: "生活服务团队",
    },
  ]

  // 开发团队状态
  const teamStatus = [
    { name: "前端开发团队", members: 8, activeProjects: 5, efficiency: 92 },
    { name: "后端开发团队", members: 6, activeProjects: 4, efficiency: 88 },
    { name: "UI/UX设计团队", members: 4, activeProjects: 3, efficiency: 95 },
    { name: "测试团队", members: 5, activeProjects: 2, efficiency: 90 },
    { name: "产品团队", members: 3, activeProjects: 6, efficiency: 85 },
  ]

  // 获取优先级颜色
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">开发管理中心</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500 text-white">整体进度: {developmentOverview.overallProgress}%</Badge>
              <Link href="/development/milestones">
                <Button>
                  <Target className="h-4 w-4 mr-2" />
                  查看里程碑
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 开发概览 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">{developmentOverview.completedModules}</div>
              <div className="text-sm text-gray-600">已完成模块</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">{developmentOverview.inProgressModules}</div>
              <div className="text-sm text-gray-600">开发中模块</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600">{developmentOverview.plannedModules}</div>
              <div className="text-sm text-gray-600">计划中模块</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600">{developmentOverview.overallProgress}%</div>
              <div className="text-sm text-gray-600">整体进度</div>
            </CardContent>
          </Card>
        </div>

        {/* 整体进度 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>2026年开发进度总览</span>
            </CardTitle>
            <CardDescription>智慧城市生活服务平台功能模块开发进度</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">整体开发进度</span>
                <span className="text-lg font-bold text-blue-600">{developmentOverview.overallProgress}%</span>
              </div>
              <Progress value={developmentOverview.overallProgress} className="h-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{developmentOverview.completedModules}</div>
                  <div className="text-sm text-green-700">已完成</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{developmentOverview.inProgressModules}</div>
                  <div className="text-sm text-blue-700">开发中</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{developmentOverview.plannedModules}</div>
                  <div className="text-sm text-purple-700">计划中</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 近期里程碑 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-orange-600" />
                <span>近期里程碑</span>
              </CardTitle>
              <CardDescription>即将到达的重要开发节点</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(milestone.priority)}`}></div>
                      <div>
                        <h4 className="font-medium">{milestone.name}</h4>
                        <p className="text-sm text-gray-600">{milestone.phase}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{milestone.dueDate}</div>
                      <div className="text-xs text-gray-500">{milestone.team}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>进度</span>
                      <span>{milestone.progress}%</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                </div>
              ))}
              <Link href="/development/milestones">
                <Button variant="outline" className="w-full">
                  查看所有里程碑
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* 团队状态 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>开发团队状态</span>
              </CardTitle>
              <CardDescription>各开发团队的工作状态和效率</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamStatus.map((team, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">{team.name}</h4>
                      <p className="text-sm text-gray-600">{team.members}名成员</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{team.activeProjects}个项目</div>
                      <div className="text-xs text-gray-500">进行中</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>团队效率</span>
                      <span>{team.efficiency}%</span>
                    </div>
                    <Progress value={team.efficiency} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 快捷操作 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>开发管理工具</CardTitle>
            <CardDescription>快速访问开发相关的管理功能</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/development/milestones">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">里程碑管理</p>
                    <p className="text-xs text-gray-500">查看开发计划</p>
                  </CardContent>
                </Card>
              </Link>
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-50">
                <CardContent className="p-6 text-center">
                  <GitBranch className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-medium">代码管理</p>
                  <p className="text-xs text-gray-500">开发中</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-50">
                <CardContent className="p-6 text-center">
                  <TestTube className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="font-medium">测试管理</p>
                  <p className="text-xs text-gray-500">开发中</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-50">
                <CardContent className="p-6 text-center">
                  <Rocket className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <p className="font-medium">部署管理</p>
                  <p className="text-xs text-gray-500">开发中</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* 重要提醒 */}
        <Card className="mt-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-orange-800 mb-2">下个重要里程碑提醒</h4>
                <p className="text-orange-700 mb-3">
                  <strong>{developmentOverview.nextMilestone}</strong> 计划于{" "}
                  <strong>{developmentOverview.nextMilestoneDate}</strong> 完成需求分析阶段
                </p>
                <div className="flex space-x-3">
                  <Link href="/development/milestones">
                    <Button size="sm" variant="outline" className="border-orange-300 text-orange-700">
                      查看详情
                    </Button>
                  </Link>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                    设置提醒
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
