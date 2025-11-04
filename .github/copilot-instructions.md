# GitHub Copilot Instructions for YYC³ Smart City Platform

## Project Overview

YYC³ Smart City Platform is a comprehensive smart city application built with Next.js 14, React 18, and TypeScript. The platform provides various urban services including transportation, healthcare, education, community management, and emergency services.

This repository is automatically synced with v0.app deployments and hosted on Vercel.

## Project Structure

```
/app              - Next.js 14 App Router pages and API routes
  /analysis       - Data analysis features
  /announcements  - Community announcements
  /api            - API endpoints
  /community      - Community management
  /daily-needs    - Daily services features
  /education      - Educational services
  /elderly        - Elderly care services
  /emergency      - Emergency response features
  /medical        - Healthcare services
  /transport      - Transportation services
  [other modules] - Various smart city service modules
/components       - Reusable React components (Radix UI + shadcn/ui)
/contexts         - React Context providers
/docs             - Documentation
/lib              - Utility functions and shared logic
/public           - Static assets
/scripts          - Build and utility scripts
/styles           - Global styles and Tailwind configuration
```

## Technology Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript 5 (strict mode enabled)
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4 with tailwindcss-animate
- **UI Components**: Radix UI primitives + shadcn/ui
- **Database**: MySQL2
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Development Guidelines

### Code Style & Standards

1. **TypeScript**
   - Use strict mode (enabled in tsconfig.json)
   - Prefer explicit types over `any`
   - Use interfaces for object shapes
   - Leverage TypeScript's type inference where appropriate

2. **React Components**
   - Use functional components with hooks
   - Follow the App Router conventions for server/client components
   - Place 'use client' directive only when necessary
   - Use proper prop typing with TypeScript interfaces

3. **Styling**
   - Use Tailwind CSS utility classes
   - Follow the existing Tailwind configuration
   - Use the `cn()` utility from `lib/utils.ts` for conditional classes
   - Maintain responsive design principles (mobile-first)

4. **File Organization**
   - Group related components in feature directories
   - Keep components focused and single-purpose
   - Use barrel exports (index.ts) where appropriate
   - Place API routes in `/app/api` following Next.js conventions

### Build & Development

**Install Dependencies:**
```bash
pnpm install
```

**Development Server:**
```bash
pnpm dev
```
Runs on http://localhost:3000

**Build:**
```bash
pnpm build
```

**Linting:**
```bash
pnpm lint
```
Uses ESLint with Next.js configuration

**Start Production Server:**
```bash
pnpm start
```

### Testing Practices

- Test components in the browser using the dev server
- Verify responsive design on different screen sizes
- Test API endpoints manually or with API clients
- Ensure accessibility standards are met (ARIA labels, keyboard navigation)

### Commit Guidelines

- Write clear, descriptive commit messages
- Keep commits focused on a single change or feature
- Reference issue numbers when applicable
- Follow conventional commits format when possible

### Smart City Features Context

This platform serves multiple user groups:
- **Citizens**: Access various city services (transport, healthcare, education, etc.)
- **Merchants**: Manage business-related services
- **Government**: Administrative and management features
- **Service Providers**: Healthcare, education, and other service management

When working on features:
- Consider accessibility for elderly users
- Ensure mobile responsiveness for on-the-go access
- Maintain consistency across different service modules
- Follow the established UI patterns from Radix UI and shadcn/ui

### Database & API

- Database interactions use MySQL2
- API routes follow Next.js App Router conventions
- Place API logic in `/app/api` directories
- Use proper error handling and status codes
- Validate inputs and sanitize data

### Integration with v0.app

This repository syncs automatically with v0.app:
- Changes from v0.app deployments are pushed to this repo
- Maintain compatibility with v0.app's deployment system
- Be cautious when making manual changes that might conflict with v0.app updates

### Common Pitfalls to Avoid

1. Don't use client-side features in Server Components without 'use client'
2. Avoid large client bundles - keep 'use client' usage minimal
3. Don't bypass TypeScript checks with `@ts-ignore` without good reason
4. Avoid inline styles - use Tailwind classes
5. Don't hardcode values that should be environment variables

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Getting Help

- Check existing code patterns in similar features
- Refer to Next.js and React documentation for framework-specific questions
- Review TypeScript errors carefully - they often point to the exact issue
- Use the development server to test changes iteratively
