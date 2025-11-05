# GitHub Actions Workflows Documentation

This directory contains all GitHub Actions workflows for the YYC³ Smart City Platform project.

## 📋 Available Workflows

### 1. **CI Workflow** (`ci.yml`)
**Trigger:** Pull requests and pushes to `main` and `develop` branches

Performs continuous integration checks:
- 🔍 **Lint**: Runs ESLint to check code quality
- 🔎 **Type Check**: Validates TypeScript types
- 🏗️ **Build**: Builds the Next.js application
- 📦 **Artifacts**: Uploads build output for inspection

**Jobs:**
- `lint` - Linting and type checking
- `build` - Application build and artifact upload

### 2. **CodeQL Security Scan** (`codeql.yml`)
**Trigger:** Pull requests, pushes to main/develop, and weekly schedule (Mondays)

Performs automated security scanning:
- 🔐 Scans for security vulnerabilities
- 🐛 Identifies potential bugs and code quality issues
- 📊 Uses security-extended and security-and-quality query suites

### 3. **Deployment** (`deploy.yml`)
**Trigger:** Pushes to `main` branch and manual dispatch

Deploys the application to Vercel:
- 🚀 Builds and deploys to production using Vercel CLI
- ⚙️ Requires Vercel secrets to be configured

**Required Secrets:**
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### 4. **PR Auto Review** (`pr-review.yml`)
**Trigger:** When PRs are opened, synchronized, reopened, or ready for review

Performs automated code review and quality checks:
- 🤖 **Automated Code Quality**: Runs TypeScript type check, ESLint, and build verification
- 📝 **PR Description Check**: Validates PR description completeness and quality
- 🔍 **Changed Files Analysis**: Analyzes changed files and provides contextual warnings
- ✅ **Review Checklist**: Posts comprehensive review checklist based on project guidelines
- 🔒 **Security Awareness**: Flags security-sensitive file changes for extra scrutiny
- 📦 **Dependency Tracking**: Warns about dependency changes that need team discussion
- 📚 **Documentation Reminder**: Reminds to update documentation for API changes

**Jobs:**
- `code-quality` - Runs automated code quality checks and posts review
- `pr-description-check` - Validates PR description quality
- `changed-files-analysis` - Analyzes changed files and provides warnings

**Review Guidelines Based On:**
- Code style and naming conventions
- Type safety and error handling
- Security considerations (SQL injection, XSS, authorization)
- Test coverage
- Documentation completeness
- Architectural constraints

### 5. **PR Labeler** (`pr-labeler.yml`)
**Trigger:** When PRs are opened, synchronized, or reopened

Automatically labels PRs based on changed files:
- 🏷️ Adds labels like `dependencies`, `documentation`, `frontend`, `api`, etc.
- 📝 Configuration in `.github/labeler.yml`

### 6. **PR Size Check** (`pr-size-check.yml`)
**Trigger:** When PRs are opened, synchronized, or reopened

Adds size labels to PRs:
- 📏 Labels: `size/xs`, `size/s`, `size/m`, `size/l`, `size/xl`
- ⚠️ Warns about very large PRs
- 🚫 Ignores lock files

### 7. **Stale Issues and PRs** (`stale.yml`)
**Trigger:** Daily at midnight and manual dispatch

Manages stale issues and PRs:
- 📅 Issues: Marked stale after 60 days, closed after 7 more days
- 🔄 PRs: Marked stale after 45 days, closed after 7 more days
- 📌 Exempts issues/PRs with labels: `pinned`, `security`, `bug`, `work-in-progress`

### 8. **Release** (`release.yml`)
**Trigger:** When tags matching `v*` are pushed or manual dispatch

Creates GitHub releases:
- 📝 Automatically generates changelog
- 🎉 Creates release notes
- 🏷️ Tags releases

### 9. **Auto Assign** (`auto-assign.yml`)
**Trigger:** When PRs or issues are opened

Automatically assigns reviewers and assignees:
- 👥 Assigns team members to new PRs
- 📋 Assigns team members to new issues
- ⏭️ Skips draft PRs
- ⚙️ Configuration in `.github/auto-assign.yml`

### 10. **Link Check** (`link-check.yml`)
**Trigger:** When markdown files change in PRs, weekly, and manual dispatch

Validates links in documentation:
- 🔗 Checks for broken links in markdown files
- 📅 Runs weekly to catch external link changes
- ⚙️ Configuration in `.github/markdown-link-check-config.json`

## 🔧 Configuration Files

### `.github/dependabot.yml`
Configures Dependabot for automatic dependency updates:
- 📦 npm packages (weekly on Mondays)
- 🔄 GitHub Actions (weekly on Mondays)
- 🏷️ Auto-labels with `dependencies` and `automated`

### `.github/labeler.yml`
Defines rules for automatic PR labeling based on file paths.

### `.github/auto-assign.yml`
Configures automatic reviewer and assignee assignment.

## 📄 Templates

### Pull Request Template
Located at `.github/pull_request_template.md`
- Provides a structured format for PR descriptions
- Includes checklist for contributors
- Helps maintain consistency

### Issue Templates
Located at `.github/ISSUE_TEMPLATE/`
- **Bug Report** (`bug_report.yml`) - For reporting bugs
- **Feature Request** (`feature_request.yml`) - For suggesting new features
- **Config** (`config.yml`) - Defines additional options and contact links

## 🚀 Setup Instructions

### 1. Enable Required Permissions
Ensure your repository has these permissions enabled:
- Settings → Actions → General → Workflow permissions: "Read and write permissions"
- Settings → Code security and analysis → Enable "CodeQL analysis"

### 2. Configure Secrets (for deployment)
Add these secrets in Settings → Secrets and variables → Actions:
```
VERCEL_TOKEN=<your-vercel-token>
VERCEL_ORG_ID=<your-org-id>
VERCEL_PROJECT_ID=<your-project-id>
```

### 3. Enable Dependabot
Dependabot should be automatically enabled with the configuration file.

### 4. Create Labels
The workflows use these labels (create them if they don't exist):
- `dependencies`, `automated`, `documentation`, `frontend`, `api`, `configuration`, `ci/cd`, `database`
- `bug`, `enhancement`, `triage`, `stale`, `pinned`, `security`, `work-in-progress`
- `size/xs`, `size/s`, `size/m`, `size/l`, `size/xl`

## 🔍 Workflow Status Badges

Add these to your README.md to show workflow status:

```markdown
[![CI](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/ci.yml)
[![CodeQL](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/codeql.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/codeql.yml)
[![Deploy](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/YYC-Cube/yyc3-smart-city-platform/actions/workflows/deploy.yml)
```

## 🛠️ Customization

### Modify Workflow Triggers
Edit the `on:` section of each workflow file to change when they run.

### Adjust Stale Timeframes
Edit `.github/workflows/stale.yml` to change how long before issues/PRs are marked stale.

### Change Auto-Assignment Rules
Edit `.github/auto-assign.yml` to modify who gets assigned to PRs and issues.

### Update PR Size Thresholds
Edit `.github/workflows/pr-size-check.yml` to adjust size categories.

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)

## 🤝 Contributing

When adding new workflows:
1. Follow the existing naming conventions
2. Add comprehensive comments
3. Update this README with the new workflow details
4. Test workflows before merging to main

## 📝 Notes

- The CI workflow may show warnings for existing code quality issues. These are informational and don't block the workflow.
- Ensure you have proper permissions set up for automated workflows to function correctly.
- Some workflows require manual secret configuration for full functionality.
