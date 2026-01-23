---
@file: YYC3-Smart-City-Platform-GitHub-Actions.md
@description: YYC3-Smart-City-Platform 项目自动化 GitHub Actions 工作流，详细说明系统的功能、工作流程和配置要求
@author: YanYuCloudCube Team
@version: v1.0.0
@created: 2026-01-22
@updated: 2026-01-22
@status: published
@tags: [文档管理, GitHub Actions, 工作流, 持续集成]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

# 🏠 YYC³ Smart City Platform 工作流文件摘要

本文档提供了为 YYC³（YanYuCloudCube）Smart City Platform 实现的所有 GitHub Actions 工作流的全面概述。

## 🎯 完整工作流套件

### 核心工作流

1. **CI（持续集成）** - `.github/workflows/ci.yml`
   - 运行时机：拉取请求和推送到 main/develop 分支
   - 操作：代码检查、类型检查、构建
   - 目的：确保代码质量和可构建性

2. **CodeQL 安全扫描** - `.github/workflows/codeql.yml`
   - 运行时机：拉取请求、推送和每周计划
   - 操作：安全漏洞扫描
   - 目的：识别安全问题和代码质量问题

3. **部署到 Vercel** - `.github/workflows/deploy.yml`
   - 运行时机：推送到 main 分支
   - 操作：使用 Vercel CLI 构建和部署到生产环境
   - 目的：自动化生产环境部署

### 自动化工作流

4. **PR 标签器** - `.github/workflows/pr-labeler.yml`
   - 运行时机：PR 打开/同步/重新打开
   - 操作：基于更改的文件自动为 PR 添加标签
   - 目的：更好地组织 PR

5. **PR 大小检查** - `.github/workflows/pr-size-check.yml`
   - 运行时机：PR 打开/同步/重新打开
   - 操作：添加大小标签（xs/s/m/l/xl）
   - 目的：鼓励更小、更易审查的 PR

6. **自动分配** - `.github/workflows/auto-assign.yml`
   - 运行时机：PR/问题打开
   - 操作：自动分配审查者和负责人
   - 目的：简化审查流程

7. **过时管理** - `.github/workflows/stale.yml`
   - 运行时机：每日计划
   - 操作：标记并关闭过时的问题/PR
   - 目的：保持仓库清洁和活跃

8. **发布** - `.github/workflows/release.yml`
   - 运行时机：版本标签（v*）
   - 操作：创建带有变更日志的发布
   - 目的：自动化发布管理

### 质量工作流

9. **链接检查** - `.github/workflows/link-check.yml`
   - 运行时机：包含 markdown 更改的 PR，每周
   - 操作：检查文档中的损坏链接
   - 目的：维护文档质量

## 📄 配置文件

### 工作流配置

- **Dependabot** - `.github/dependabot.yml`
  - 自动更新 npm 包和 GitHub Actions
  - 每周一运行

- **PR 标签器配置** - `.github/labeler.yml`
  - 自动 PR 标签规则

- **自动分配配置** - `.github/auto-assign.yml`
  - 审查者/负责人分配规则

- **链接检查配置** - `.github/markdown-link-check-config.json`
  - 链接验证配置

### 模板

- **拉取请求模板** - `.github/pull_request_template.md`
  - PR 描述的结构化格式
  - 包含检查清单和部分

- **错误报告模板** - `.github/ISSUE_TEMPLATE/bug_report.yml`
  - 报告错误的表单

- **功能请求模板** - `.github/ISSUE_TEMPLATE/feature_request.yml`
  - 请求新功能的表单

- **问题模板配置** - `.github/ISSUE_TEMPLATE/config.yml`
  - 其他选项和联系链接

## 🔧 设置要求

### 仓库设置

1. **Actions 权限**
   - 前往设置 → Actions → 通用
   - 将"工作流权限"设置为"读取和写入权限"
   - 启用"允许 GitHub Actions 创建和批准拉取请求"

2. **CodeQL**
   - 前往设置 → 代码安全和分析
   - 启用"CodeQL 分析"

3. **所需密钥**（用于部署）
   ```
   VERCEL_TOKEN
   VERCEL_ORG_ID
   VERCEL_PROJECT_ID
   ```

### 推荐标签

在仓库中创建这些标签：
- 类型：`bug`（错误）、`enhancement`（增强）、`documentation`（文档）、`dependencies`（依赖）
- 状态：`triage`（分类）、`stale`（过时）、`pinned`（固定）、`work-in-progress`（进行中）
- 区域：`frontend`（前端）、`api`（API）、`configuration`（配置）、`ci/cd`（CI/CD）、`database`（数据库）
- 大小：`size/xs`（极小）、`size/s`（小）、`size/m`（中）、`size/l`（大）、`size/xl`（特大）
- 自动化：`automated`（自动化）、`security`（安全）

## 📊 工作流徽章

将这些徽章添加到您的主 README.md 中：

```markdown
[![CI](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/ci.yml)
[![CodeQL](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/codeql.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/codeql.yml)
[![Deploy](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/deploy.yml)
```

## 🚀 入门指南

1. **推送触发工作流**：提交并推送以查看工作流运行
2. **创建 PR**：打开拉取请求以查看自动化工作流
3. **检查 Actions 选项卡**：在 Actions 选项卡中监控工作流运行
4. **配置密钥**：为部署工作流添加所需的密钥

## 📚 其他资源

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [工作流语法](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [安全最佳实践](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

## 🤝 维护

### 常规任务

- 每周审查 Dependabot PR
- 定期检查 CodeQL 警报
- 每季度更新工作流版本
- 根据需要审查和更新过时阈值

### 自定义

所有工作流都设计为易于自定义：
- 在 `on:` 部分编辑触发条件
- 根据需要调整作业步骤
- 修改配置文件以获得不同行为
- 按照现有模式添加新工作流

## ✅ 工作流验证

所有工作流文件均已验证：
- ✓ 有效的 YAML 语法
- ✓ 正确的结构
- ✓ 兼容的操作版本
- ✓ 适当的权限

## 📝 注意事项

- 工作流使用 `pnpm` 作为包管理器（版本 9）
- Node.js 版本设置为 20 LTS
- CI 工作流对 lint/type-check 有 `continue-on-error` 以处理现有问题
- 所有工作流遵循 GitHub Actions 最佳实践
- 详细文档可在 `.github/README.md` 中找到

---

有关每个工作流的详细信息，请参阅 `.github/README.md`
