# Medusa E-commerce Starter Template

A complete, production-ready e-commerce solution built with Medusa.js backend and Next.js frontend. This template provides everything you need to start building your online store.

## 🚀 Features

### Backend (Medusa.js)
- **Headless Commerce**: Complete e-commerce backend with REST API
- **PostgreSQL Database**: Robust data storage with migrations
- **Admin Dashboard**: Built-in admin panel for store management
- **Payment Integration**: Ready for Stripe and other payment providers
- **Inventory Management**: Product variants, stock tracking, and fulfillment
- **Order Management**: Complete order lifecycle management
- **Customer Management**: User accounts, authentication, and profiles
- **Sales Channels**: Multi-channel selling capabilities
- **Publishable API Keys**: Secure frontend-backend communication

### Frontend (Next.js)
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Server Components**: Optimized performance
- **Server Actions**: Form handling and mutations
- **Static Generation**: SEO-optimized pages

## 📁 Project Structure

```
medusa-ecommerce-starter/
├── medusa-store/                 # Medusa backend
│   ├── src/                     # Source code
│   ├── migrations/              # Database migrations
│   ├── seed.json               # Sample data
│   ├── medusa-config.ts        # Medusa configuration
│   ├── package.json            # Backend dependencies
│   └── .env.example           # Environment variables template
├── medusa-store-storefront/     # Next.js frontend
│   ├── src/                    # Source code
│   ├── public/                 # Static assets
│   ├── package.json           # Frontend dependencies
│   └── .env.template          # Environment variables template
├── scripts/                    # Setup and deployment scripts
├── docs/                      # Documentation
└── README.md                  # This file
```

## 🛠️ Quick Start

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **PostgreSQL** 14+
- **Git**

### 1. Clone and Setup

```bash
# Clone this repository
git clone <your-repo-url> my-store
cd my-store

# Run the setup script
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 2. Database Setup

```bash
# Start PostgreSQL (if using Docker)
docker run --name medusa-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=medusa_store_local -p 5432:5432 -d postgres:14

# Or use your existing PostgreSQL instance
# Update DATABASE_URL in medusa-store/.env
```

### 3. Environment Configuration

#### Backend (.env)
```bash
cd medusa-store
cp .env.example .env
# Edit .env with your database credentials
```

#### Frontend (.env.local)
```bash
cd medusa-store-storefront
cp .env.template .env.local
# Edit .env.local with your backend URL and publishable key
```

### 4. Install Dependencies

```bash
# Backend
cd medusa-store
npm install

# Frontend
cd ../medusa-store-storefront
yarn install
```

### 5. Database Migration & Seeding

```bash
# From medusa-store directory
npm run db:migrate
npm run seed
```

### 6. Start Development Servers

```bash
# Terminal 1 - Backend (port 9000)
cd medusa-store
npm run dev

# Terminal 2 - Frontend (port 8000)
cd medusa-store-storefront
yarn dev
```

### 7. Access Your Store

- **Storefront**: http://localhost:8000
- **Admin Panel**: http://localhost:9000/admin

## 🔧 Configuration

### Environment Variables

#### Backend (`medusa-store/.env`)
```env
DATABASE_URL=postgres://username:password@localhost:5432/medusa_store_local
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:7001
AUTH_CORS=http://localhost:9000
JWT_SECRET=your-jwt-secret
COOKIE_SECRET=your-cookie-secret
NODE_ENV=development
PORT=9000
```

#### Frontend (`medusa-store-storefront/.env.local`)
```env
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-publishable-key
NEXT_PUBLIC_DEFAULT_REGION=us
NEXT_PUBLIC_STRIPE_KEY=your-stripe-public-key
REVALIDATE_SECRET=your-revalidation-secret
```

### Database Configuration

The template uses PostgreSQL by default. Update the `DATABASE_URL` in your `.env` file:

```env
DATABASE_URL=postgres://username:password@localhost:5432/your_database_name
```

### CORS Configuration

Update CORS settings in `medusa-config.ts` for production:

```typescript
http: {
  storeCors: "https://yourdomain.com",
  adminCors: "https://admin.yourdomain.com",
  authCors: "https://api.yourdomain.com",
}
```

## 🚀 Deployment

### Backend (Railway)

1. **Connect Repository**: Link your GitHub repository to Railway
2. **Environment Variables**: Set all required environment variables
3. **Database**: Add PostgreSQL service
4. **Deploy**: Railway will automatically deploy on push

### Frontend (Vercel)

1. **Import Project**: Connect your GitHub repository to Vercel
2. **Build Settings**: 
   - Framework Preset: Next.js
   - Root Directory: `medusa-store-storefront`
3. **Environment Variables**: Set all required environment variables
4. **Deploy**: Vercel will automatically deploy on push

### Manual Deployment

```bash
# Build frontend
cd medusa-store-storefront
yarn build

# Deploy backend
cd ../medusa-store
npm run build
```

## 📚 Development Guide

### Adding Products

1. Access admin panel: http://localhost:9000/admin
2. Navigate to Products → Create Product
3. Add product details, variants, and pricing
4. Assign to sales channels

### Customizing Frontend

The frontend uses Next.js 15 with App Router:

- **Pages**: `src/app/` directory
- **Components**: `src/components/` directory
- **Styles**: Tailwind CSS classes
- **API Calls**: Medusa SDK integration

### Adding Payment Providers

1. Install payment provider plugin
2. Configure in admin panel
3. Update environment variables
4. Test with Stripe test keys

### Database Migrations

```bash
# Create new migration
npm run db:create-migration -- --name your-migration-name

# Run migrations
npm run db:migrate

# Rollback migration
npm run db:rollback
```

## 🧪 Testing

```bash
# Backend tests
cd medusa-store
npm test

# Frontend tests
cd medusa-store-storefront
yarn test
```

## 📖 API Documentation

- **Store API**: http://localhost:9000/store/docs
- **Admin API**: http://localhost:9000/admin/docs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Medusa Docs](https://docs.medusajs.com/)
- **Community**: [Medusa Discord](https://discord.gg/medusajs)
- **Issues**: [GitHub Issues](https://github.com/medusajs/medusa/issues)

## 🔄 Updates

To update to the latest version:

```bash
# Update Medusa
cd medusa-store
npm update @medusajs/medusa

# Update Next.js starter
cd ../medusa-store-storefront
yarn upgrade
```

---

**Happy Building! 🛍️**