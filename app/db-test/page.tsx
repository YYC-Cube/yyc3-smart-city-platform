"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Database, RefreshCw, Server, Table } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface TableInfo {
  name: string
  rows: number
  estimatedRows: number
  columns: Array<{
    name: string
    type: string
    nullable: boolean
    key: string
  }>
}

interface TestResults {
  connectionStatus: string
  database: string
  host: string
  port: string
  user: string
  mysqlVersion?: string
  tables: TableInfo[]
  testResults: Record<string, string>
  poolInfo?: {
    connectionLimit: number
    queueLimit: number
    waitForConnections: boolean
  }
  summary?: {
    success: boolean
    successCount: number
    totalTests: number
    message: string
  }
  error?: string
  timestamp: string
}

export default function DatabaseTestPage() {
  const [testResults, setTestResults] = useState<TestResults | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const runTests = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/db-test")
      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "测试失败")
      }

      setTestResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "网络请求失败")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Database className="h-8 w-8" />
            数据库连接测试
          </h1>
          <p className="text-muted-foreground mt-2">验证 YYC³ 智慧城市平台数据库连接状态</p>
        </div>
        <Button onClick={runTests} disabled={loading} size="lg">
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          {loading ? "测试中..." : "重新测试"}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>错误</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {testResults && (
        <>
          {/* 连接状态概览 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">连接状态</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {testResults.connectionStatus === "connected" ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-2xl font-bold text-green-500">已连接</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-2xl font-bold text-red-500">未连接</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">数据库</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{testResults.database}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {testResults.host}:{testResults.port}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">数据表</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{testResults.tables.length}</div>
                <p className="text-xs text-muted-foreground mt-1">张数据表</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">测试结果</CardTitle>
              </CardHeader>
              <CardContent>
                {testResults.summary && (
                  <>
                    <div className="text-2xl font-bold">
                      {testResults.summary.successCount}/{testResults.summary.totalTests}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{testResults.summary.message}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* MySQL 版本信息 */}
          {testResults.mysqlVersion && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  数据库信息
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">MySQL 版本</p>
                    <p className="font-medium">{testResults.mysqlVersion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">用户</p>
                    <p className="font-medium">{testResults.user}</p>
                  </div>
                  {testResults.poolInfo && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground">连接池限制</p>
                        <p className="font-medium">{testResults.poolInfo.connectionLimit}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">队列限制</p>
                        <p className="font-medium">
                          {testResults.poolInfo.queueLimit === 0 ? "无限制" : testResults.poolInfo.queueLimit}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 测试结果详情 */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>测试项目详情</CardTitle>
              <CardDescription>各项功能测试的详细结果</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(testResults.testResults).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    {value.startsWith("✅") ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : value.startsWith("⚠️") ? (
                      <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                      <p className="text-sm text-muted-foreground mt-1">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 数据表详情 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Table className="h-5 w-5" />
                数据表详情
              </CardTitle>
              <CardDescription>所有数据表的结构和记录数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testResults.tables.map((table) => (
                  <div key={table.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{table.name}</h3>
                      <Badge variant="secondary">{table.rows} 条记录</Badge>
                    </div>
                    <div className="grid gap-2">
                      {table.columns.map((column) => (
                        <div
                          key={column.name}
                          className="flex items-center justify-between text-sm p-2 rounded bg-muted/30"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-medium">{column.name}</span>
                            {column.key === "PRI" && <Badge variant="default">主键</Badge>}
                            {column.key === "UNI" && <Badge variant="secondary">唯一</Badge>}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{column.type}</span>
                            {!column.nullable && <Badge variant="outline">NOT NULL</Badge>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 时间戳 */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            测试时间: {new Date(testResults.timestamp).toLocaleString("zh-CN")}
          </div>
        </>
      )}
    </div>
  )
}
