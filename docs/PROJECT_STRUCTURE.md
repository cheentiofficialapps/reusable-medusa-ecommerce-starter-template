# Project Structure

This document explains the structure and organization of the Medusa e-commerce starter template.

## 📁 Root Directory Structure

```
medusa-ecommerce-starter/
├── medusa-store/                 # Medusa backend application
├── medusa-store-storefront/      # Next.js frontend application
├── scripts/                      # Setup and utility scripts
├── docs/                         # Documentation
├── env-templates/                # Environment variable templates
├── .gitignore                    # Git ignore rules
└── README.md                     # Main documentation
```

## 🏗️ Backend Structure (`medusa-store/`)

```
medusa-store/
├── src/                          # Source code
│   ├── api/                      # API routes
│   ├── models/                   # Database models
│   ├── services/                 # Business logic
│   ├── subscribers/              # Event subscribers
│   ├── types/                    # TypeScript types
│   └── utils/                    # Utility functions
├── migrations/                   # Database migrations
├── seed.json                     # Sample data for seeding
├── medusa-config.ts             # Main Medusa configuration
├── package.json                  # Dependencies and scripts
├── .env.example                 # Environment variables template
├── .gitignore                   # Backend-specific git ignore
├── railway.json                 # Railway deployment config
└── railway.toml                 # Railway services config
```

### Key Backend Files

- **`medusa-config.ts`**: Main configuration file for Medusa
- **`package.json`**: Dependencies, scripts, and project metadata
- **`seed.json`**: Sample data for initial database setup
- **`migrations/`**: Database schema changes over time

## 🎨 Frontend Structure (`medusa-store-storefront/`)

```
medusa-store-storefront/
├── src/                          # Source code
│   ├── app/                      # Next.js App Router pages
│   │   ├── (country)/           # Country-specific routes
│   │   ├── account/             # User account pages
│   │   ├── cart/                # Shopping cart
│   │   ├── checkout/            # Checkout process
│   │   ├── collections/          # Product collections
│   │   ├── products/            # Product pages
│   │   ├── search/              # Search functionality
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # Reusable components
│   │   ├── common/              # Common UI components
│   │   ├── domain/              # Domain-specific components
│   │   └── ui/                  # Base UI components
│   ├── lib/                     # Utility libraries
│   │   ├── medusa/              # Medusa SDK configuration
│   │   └── utils.ts             # Helper functions
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── .env.template               # Environment variables template
├── .gitignore                  # Frontend-specific git ignore
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel deployment config
```

### Key Frontend Files

- **`src/app/layout.tsx`**: Root layout component
- **`src/app/page.tsx`**: Home page component
- **`src/lib/medusa/`**: Medusa SDK configuration and API calls
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`next.config.js`**: Next.js build and runtime configuration

## 🛠️ Scripts Directory (`scripts/`)

```
scripts/
├── setup.sh                     # Initial project setup
├── dev.sh                       # Development server startup
├── deploy-production.sh          # Production deployment
└── setup-local.sh               # Local development setup
```

### Script Descriptions

- **`setup.sh`**: Interactive setup script for new projects
- **`dev.sh`**: Starts both backend and frontend servers
- **`deploy-production.sh`**: Automated production deployment
- **`setup-local.sh`**: Local development environment setup

## 📚 Documentation (`docs/`)

```
docs/
├── DEPLOYMENT.md                # Deployment guide
├── PROJECT_STRUCTURE.md         # This file
├── DEVELOPMENT.md               # Development guide
└── API.md                      # API documentation
```

## 🔧 Environment Templates (`env-templates/`)

```
env-templates/
├── backend.env.example          # Backend environment variables
└── frontend.env.example         # Frontend environment variables
```

## 🎯 Key Concepts

### Backend Architecture

- **Modular Design**: Medusa uses a modular architecture
- **API-First**: RESTful API for all operations
- **Event-Driven**: Uses events for decoupled communication
- **Plugin System**: Extensible through plugins

### Frontend Architecture

- **App Router**: Uses Next.js 15 App Router
- **Server Components**: Optimized React components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling

### Data Flow

1. **Frontend** makes API calls to **Backend**
2. **Backend** processes requests and updates **Database**
3. **Backend** sends responses back to **Frontend**
4. **Frontend** updates UI based on responses

## 🔄 Development Workflow

### Adding New Features

1. **Backend**: Add API routes, services, and models
2. **Frontend**: Create components and pages
3. **Database**: Create migrations for schema changes
4. **Testing**: Add tests for new functionality

### File Naming Conventions

- **Components**: PascalCase (`ProductCard.tsx`)
- **Pages**: kebab-case (`product-detail.tsx`)
- **Utilities**: camelCase (`formatPrice.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

### Import Organization

```typescript
// External libraries
import React from 'react'
import { NextPage } from 'next'

// Internal modules
import { ProductCard } from '@/components/ui'
import { formatPrice } from '@/lib/utils'

// Relative imports
import './styles.css'
```

## 🚀 Deployment Structure

### Railway (Backend)
- Automatically detects Node.js applications
- Uses `package.json` for build configuration
- Environment variables set through Railway dashboard

### Vercel (Frontend)
- Detects Next.js applications
- Uses `next.config.js` for configuration
- Environment variables set through Vercel dashboard

## 📝 Best Practices

### Code Organization
- Keep related functionality together
- Use consistent naming conventions
- Separate concerns (UI, business logic, data)
- Write self-documenting code

### Performance
- Use Next.js Image component for images
- Implement proper caching strategies
- Optimize bundle sizes
- Use server components when possible

### Security
- Validate all inputs
- Use environment variables for secrets
- Implement proper CORS policies
- Use HTTPS in production

---

This structure provides a solid foundation for building scalable e-commerce applications with Medusa and Next.js.
