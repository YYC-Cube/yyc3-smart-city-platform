"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RefreshCw, Database, Table, Activity, AlertCircle } from "lucide-react"

interface TestResult {
  name: string
  status: "passed" | "failed"
  message: string
  data?: any
}

interface TestResponse {
  success: boolean
  timestamp: string
  results: {
    tests: TestResult[]
    summary: {
      total: number
      passed: number
      failed: number
    }
  }
  error?: string
}

export default function DatabaseTestPage() {
  const [testResults, setTestResults] = useState<TestResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const runTests = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/db-test")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "测试失败")
      }

      setTestResults(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <RefreshCw className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600">正在运行数据库测试...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-6 w-6 text-red-500" />
              <CardTitle className="text-red-700">测试失败</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{error}</p>
            <Button onClick={runTests} className="mt-4 bg-transparent" variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              重新测试
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!testResults) {
    return null
  }

  const { results } = testResults
  const successRate = results.summary.total > 0 ? Math.round((results.summary.passed / results.summary.total) * 100) : 0

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Database className="h-8 w-8 text-blue-500" />
              数据库连接测试
            </h1>
            <p className="text-gray-600 mt-2">验证 YYC³ 智慧城市平台数据库连接状态</p>
          </div>
          <Button onClick={runTests} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            重新测试
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">连接状态</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {results.summary.passed > 0 ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-2xl font-bold text-green-600">已连接</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-2xl font-bold text-red-600">未连接</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">数据库</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-500" />
              <span className="text-2xl font-bold">yyc3_my</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">数据表</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Table className="h-5 w-5 text-purple-500" />
              <span className="text-2xl font-bold">
                {results.tests.find((t) => t.name === "数据表统计")?.data?.count || 0}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">测试通过率</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              <span className="text-2xl font-bold text-green-600">{successRate}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>测试汇总</CardTitle>
          <CardDescription>数据库功能测试结果概览</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-700">{results.summary.total}</div>
              <div className="text-sm text-gray-600 mt-1">总测试数</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{results.summary.passed}</div>
              <div className="text-sm text-green-700 mt-1">通过</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600">{results.summary.failed}</div>
              <div className="text-sm text-red-700 mt-1">失败</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>详细测试结果</CardTitle>
          <CardDescription>每项测试的执行详情</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {results.tests.map((test, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  test.status === "passed" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {test.status === "passed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{test.name}</h3>
                      <p className={test.status === "passed" ? "text-green-700" : "text-red-700"}>{test.message}</p>
                    </div>
                  </div>
                  <Badge variant={test.status === "passed" ? "default" : "destructive"}>
                    {test.status === "passed" ? "通过" : "失败"}
                  </Badge>
                </div>

                {test.data && (
                  <div className="mt-3 pl-8">
                    <details className="text-sm">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium">
                        查看详细数据
                      </summary>
                      <pre className="mt-2 p-3 bg-white rounded border overflow-x-auto text-xs">
                        {JSON.stringify(test.data, null, 2)}
                      </pre>
                    </details>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {results.tests.find((t) => t.name === "表结构信息")?.data && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>数据表结构</CardTitle>
            <CardDescription>所有表的字段信息</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(results.tests.find((t) => t.name === "表结构信息")!.data).map(
                ([tableName, columns]: [string, any]) => (
                  <div key={tableName} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Table className="h-5 w-5 text-blue-500" />
                      {tableName}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3 font-medium text-gray-700">字段名</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-700">类型</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-700">允许NULL</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-700">键</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-700">默认值</th>
                          </tr>
                        </thead>
                        <tbody>
                          {columns.map((column: any, idx: number) => (
                            <tr key={idx} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-3 font-mono text-blue-600">{column.Field}</td>
                              <td className="py-2 px-3 font-mono text-sm text-gray-600">{column.Type}</td>
                              <td className="py-2 px-3">
                                <Badge variant={column.Null === "YES" ? "outline" : "secondary"}>{column.Null}</Badge>
                              </td>
                              <td className="py-2 px-3">
                                {column.Key && (
                                  <Badge variant={column.Key === "PRI" ? "default" : "outline"}>{column.Key}</Badge>
                                )}
                              </td>
                              <td className="py-2 px-3 text-gray-600">{column.Default || "-"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">测试说明</p>
          <p>
            此页面用于验证数据库连接和表结构的完整性。所有的CRUD测试都会在事务中执行并自动回滚，不会对实际数据造成影响。
          </p>
        </div>
      </div>
    </div>
  )
}
