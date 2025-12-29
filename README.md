# Dizester Herbal 2 - Medusa E-commerce Platform

A modern e-commerce platform built with Medusa v2.12.3, Next.js, and deployed on Railway (backend) and Vercel (frontend).

## 🚀 Quick Start

### Local Development

1. **Setup**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Start Backend**
   ```bash
   npm run dev
   ```
   - Backend: http://localhost:9000
   - Admin UI: http://localhost:9000/app

3. **Start Storefront** (in another terminal)
   ```bash
   cd storefront
   npm run dev
   ```
   - Storefront: http://localhost:8000

### Admin Credentials

- **Email**: `mohit@cheenti.com`
- **Password**: `Mohit@123!@#$`

## 📦 Project Structure

```
.
├── src/                    # Backend source code
│   ├── api/               # API routes
│   ├── admin/            # Admin customization
│   ├── modules/          # Custom modules
│   └── ...
├── storefront/           # Next.js storefront
│   ├── src/
│   │   ├── app/          # Next.js app directory
│   │   ├── lib/          # Utilities and config
│   │   └── modules/      # Storefront modules
│   └── ...
├── medusa-config.ts      # Medusa configuration
├── railway.toml          # Railway deployment config
├── Dockerfile            # Docker configuration
└── vercel.json           # Vercel deployment config
```

## 🌐 Deployment

### Railway (Backend)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions or [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for a quick start.

**Quick Steps:**
1. Connect GitHub repo to Railway
2. Add PostgreSQL database
3. Set environment variables
4. Deploy!

### Vercel (Storefront)

**Quick Steps:**
1. Import GitHub repo to Vercel
2. Set root directory to `storefront`
3. Add environment variables
4. Deploy!

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Quick deployment steps
- [README-SETUP.md](./README-SETUP.md) - Local setup instructions
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions

## 🛠️ Tech Stack

- **Backend**: Medusa v2.12.3
- **Frontend**: Next.js 15.3.8
- **Database**: PostgreSQL
- **Deployment**: Railway (backend), Vercel (frontend)
- **Language**: TypeScript

## 📝 Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgres://localhost:5432/dizester-herbal-2
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:9000
JWT_SECRET=your-secret
COOKIE_SECRET=your-secret
```

### Storefront (storefront/.env.local)

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

## 🔧 Available Scripts

### Backend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx medusa db:migrate` - Run database migrations
- `npx medusa user -e email -p password` - Create admin user

### Storefront

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## 📄 License

MIT

## 🔗 Links

- [Medusa Documentation](https://docs.medusajs.com)
- [Railway Documentation](https://docs.railway.app)
- [Vercel Documentation](https://vercel.com/docs)
