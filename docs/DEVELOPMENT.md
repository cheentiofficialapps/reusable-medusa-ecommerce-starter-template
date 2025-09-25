# Development Guide

This guide covers development best practices, common tasks, and troubleshooting for the Medusa e-commerce starter.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **PostgreSQL** 14+
- **Git**

### Local Development Setup

1. **Clone and Setup**
   ```bash
   git clone <your-repo-url> my-store
   cd my-store
   ./scripts/setup.sh
   ```

2. **Start Development Servers**
   ```bash
   ./scripts/dev.sh
   ```

3. **Access Your Store**
   - Frontend: http://localhost:8000
   - Admin: http://localhost:9000/admin

## 🛠️ Development Workflow

### Adding New Features

#### Backend Development

1. **Create API Route**
   ```typescript
   // src/api/my-feature/route.ts
   import { MedusaRequest, MedusaResponse } from "@medusajs/medusa"
   
   export async function GET(req: MedusaRequest, res: MedusaResponse) {
     // Your logic here
     res.json({ message: "Hello World" })
   }
   ```

2. **Create Service**
   ```typescript
   // src/services/my-service.ts
   import { TransactionBaseService } from "@medusajs/medusa"
   
   class MyService extends TransactionBaseService {
     async doSomething() {
       // Your business logic
     }
   }
   
   export default MyService
   ```

3. **Create Model**
   ```typescript
   // src/models/my-model.ts
   import { BaseEntity } from "@medusajs/medusa"
   import { Entity, Column } from "typeorm"
   
   @Entity()
   export class MyModel extends BaseEntity {
     @Column()
     name: string
   }
   ```

4. **Create Migration**
   ```bash
   npm run db:create-migration -- --name add-my-model
   ```

#### Frontend Development

1. **Create Component**
   ```typescript
   // src/components/ui/my-component.tsx
   import React from 'react'
   
   interface MyComponentProps {
     title: string
   }
   
   export function MyComponent({ title }: MyComponentProps) {
     return (
       <div className="p-4">
         <h2>{title}</h2>
       </div>
     )
   }
   ```

2. **Create Page**
   ```typescript
   // src/app/my-page/page.tsx
   import { MyComponent } from '@/components/ui/my-component'
   
   export default function MyPage() {
     return (
       <div>
         <MyComponent title="My Page" />
       </div>
     )
   }
   ```

3. **Add API Integration**
   ```typescript
   // src/lib/api/my-api.ts
   import { medusaClient } from '@/lib/medusa'
   
   export async function getMyData() {
     const response = await medusaClient.custom.get('/my-feature')
     return response.data
   }
   ```

### Database Management

#### Running Migrations
```bash
# Create new migration
npm run db:create-migration -- --name your-migration-name

# Run migrations
npm run db:migrate

# Rollback last migration
npm run db:rollback
```

#### Seeding Data
```bash
# Seed with sample data
npm run seed

# Create custom seed
# Edit seed.json or create new seed files
```

### Testing

#### Backend Testing
```bash
# Run all tests
npm test

# Run specific test file
npm test -- --testPathPattern=my-test

# Run tests in watch mode
npm run test:watch
```

#### Frontend Testing
```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## 🎨 Styling Guidelines

### Tailwind CSS

Use Tailwind utility classes for styling:

```typescript
// Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// Avoid inline styles
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### Component Styling

```typescript
// Use consistent spacing
<div className="space-y-4 p-6">

// Use semantic color classes
<button className="bg-blue-600 hover:bg-blue-700 text-white">

// Use responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Custom Styles

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded;
  }
}
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
# Database
DATABASE_URL=postgres://user:pass@localhost:5432/db

# CORS
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:7001

# Security
JWT_SECRET=your-secret
COOKIE_SECRET=your-secret
```

#### Frontend (.env.local)
```env
# Backend URL
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000

# Publishable Key
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test_...

# Store URL
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

### Medusa Configuration

```typescript
// medusa-config.ts
import { defineConfig } from '@medusajs/framework/utils'

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
    }
  },
  plugins: [
    // Add plugins here
  ]
})
```

## 🐛 Debugging

### Common Issues

#### Backend Issues

1. **Database Connection Errors**
   ```bash
   # Check PostgreSQL is running
   brew services start postgresql
   
   # Test connection
   psql -h localhost -U postgres -d medusa_store_local
   ```

2. **CORS Errors**
   - Check CORS settings in medusa-config.ts
   - Ensure frontend URL is in STORE_CORS

3. **Migration Errors**
   ```bash
   # Reset database
   npm run db:reset
   
   # Run migrations again
   npm run db:migrate
   ```

#### Frontend Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Reinstall dependencies
   rm -rf node_modules
   yarn install
   ```

2. **API Connection Errors**
   - Check MEDUSA_BACKEND_URL
   - Verify backend is running
   - Check network tab in browser dev tools

### Debug Tools

#### Backend Debugging
```typescript
// Add logging
console.log('Debug info:', data)

// Use Medusa logger
import { Logger } from '@medusajs/medusa'
const logger = Logger.create('my-service')
logger.info('Debug message')
```

#### Frontend Debugging
```typescript
// Use React DevTools
import { useState, useEffect } from 'react'

// Add console logs
console.log('Component state:', state)

// Use browser dev tools
// Network tab for API calls
// Console for errors
// React DevTools for component state
```

## 📊 Performance Optimization

### Backend Performance

1. **Database Optimization**
   ```sql
   -- Add indexes for frequently queried fields
   CREATE INDEX idx_product_title ON product(title);
   CREATE INDEX idx_order_customer_id ON "order"(customer_id);
   ```

2. **Caching**
   ```typescript
   // Use Redis for caching
   import Redis from 'ioredis'
   const redis = new Redis(process.env.REDIS_URL)
   
   // Cache expensive operations
   const cached = await redis.get('key')
   if (cached) return JSON.parse(cached)
   ```

3. **API Optimization**
   ```typescript
   // Use pagination
   const products = await productService.list({
     limit: 20,
     offset: 0
   })
   
   // Use select fields
   const products = await productService.list({
     select: ['id', 'title', 'price']
   })
   ```

### Frontend Performance

1. **Image Optimization**
   ```typescript
   import Image from 'next/image'
   
   <Image
     src="/product.jpg"
     alt="Product"
     width={300}
     height={300}
     priority={isAboveFold}
   />
   ```

2. **Code Splitting**
   ```typescript
   // Lazy load components
   const LazyComponent = dynamic(() => import('./HeavyComponent'))
   
   // Use React.lazy
   const LazyPage = React.lazy(() => import('./pages/HeavyPage'))
   ```

3. **Caching**
   ```typescript
   // Use Next.js caching
   export const revalidate = 3600 // 1 hour
   
   // Use SWR for client-side caching
   import useSWR from 'swr'
   const { data } = useSWR('/api/products', fetcher)
   ```

## 🔒 Security Best Practices

### Backend Security

1. **Input Validation**
   ```typescript
   import { IsString, IsEmail } from 'class-validator'
   
   class CreateUserDto {
     @IsString()
     name: string
     
     @IsEmail()
     email: string
   }
   ```

2. **Authentication**
   ```typescript
   // Use Medusa auth middleware
   import { authenticate } from '@medusajs/medusa'
   
   export async function GET(req: MedusaRequest, res: MedusaResponse) {
     const user = await authenticate(req, res)
     // Protected route logic
   }
   ```

3. **Rate Limiting**
   ```typescript
   import rateLimit from 'express-rate-limit'
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   })
   ```

### Frontend Security

1. **Environment Variables**
   ```typescript
   // Only expose public variables
   const apiKey = process.env.NEXT_PUBLIC_API_KEY
   
   // Never expose secrets
   // ❌ Don't do this
   const secret = process.env.SECRET_KEY
   ```

2. **Input Sanitization**
   ```typescript
   import DOMPurify from 'dompurify'
   
   const sanitizedHtml = DOMPurify.sanitize(userInput)
   ```

3. **HTTPS Only**
   ```typescript
   // Use HTTPS in production
   const apiUrl = process.env.NODE_ENV === 'production' 
     ? 'https://api.example.com'
     : 'http://localhost:9000'
   ```

## 📝 Code Quality

### TypeScript

1. **Strict Type Checking**
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "strict": true,
       "noImplicitAny": true,
       "strictNullChecks": true
     }
   }
   ```

2. **Type Definitions**
   ```typescript
   // Define interfaces
   interface Product {
     id: string
     title: string
     price: number
   }
   
   // Use generics
   function createApiResponse<T>(data: T): ApiResponse<T> {
     return { data, success: true }
   }
   ```

### Code Formatting

1. **Prettier Configuration**
   ```json
   // .prettierrc
   {
     "semi": true,
     "trailingComma": "es5",
     "singleQuote": true,
     "printWidth": 80
   }
   ```

2. **ESLint Configuration**
   ```json
   // .eslintrc.js
   module.exports = {
     extends: ['next/core-web-vitals'],
     rules: {
       'no-unused-vars': 'error',
       'prefer-const': 'error'
     }
   }
   ```

### Git Workflow

1. **Branch Naming**
   ```bash
   # Feature branches
   feature/add-product-search
   feature/improve-checkout
   
   # Bug fixes
   fix/cart-calculation-bug
   fix/payment-processing-error
   
   # Hotfixes
   hotfix/security-patch
   ```

2. **Commit Messages**
   ```bash
   # Use conventional commits
   feat: add product search functionality
   fix: resolve cart calculation bug
   docs: update API documentation
   refactor: improve checkout flow
   ```

---

This guide should help you develop effectively with the Medusa e-commerce starter. For more specific information, refer to the [Medusa Documentation](https://docs.medusajs.com/) and [Next.js Documentation](https://nextjs.org/docs).
