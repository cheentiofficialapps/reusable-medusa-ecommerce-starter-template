# Deployment Guide

This guide covers deploying your Medusa e-commerce store to production using Railway (backend) and Vercel (frontend).

## 🚀 Quick Deployment

### Backend (Railway)

1. **Connect Repository**
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Choose the `medusa-store` directory as the root

2. **Add PostgreSQL Database**
   - In your Railway project, click "New" → "Database" → "PostgreSQL"
   - Railway will automatically set the `DATABASE_URL` environment variable

3. **Set Environment Variables**
   ```
   NODE_ENV=production
   PORT=9000
   JWT_SECRET=your-production-jwt-secret
   COOKIE_SECRET=your-production-cookie-secret
   STORE_CORS=https://yourdomain.com
   ADMIN_CORS=https://admin.yourdomain.com
   AUTH_CORS=https://api.yourdomain.com
   ```

4. **Deploy**
   - Railway will automatically deploy on every push to main
   - Your backend will be available at the provided Railway URL

### Frontend (Vercel)

1. **Import Project**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project" → "Import Git Repository"
   - Select your repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Root Directory: `medusa-store-storefront`
   - Build Command: `yarn build` (or `npm run build`)
   - Output Directory: `.next`

3. **Set Environment Variables**
   ```
   MEDUSA_BACKEND_URL=https://your-railway-backend-url.railway.app
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://your-railway-backend-url.railway.app
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-production-publishable-key
   NEXT_PUBLIC_DEFAULT_REGION=us
   NEXT_PUBLIC_STRIPE_KEY=pk_live_your-stripe-key
   REVALIDATE_SECRET=your-production-revalidation-secret
   ```

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Your frontend will be available at the provided Vercel URL

## 🔧 Production Configuration

### Database Setup

1. **Run Migrations**
   ```bash
   # Connect to your Railway database
   railway connect
   
   # Run migrations
   npm run db:migrate
   
   # Seed with initial data (optional)
   npm run seed
   ```

### Domain Configuration

1. **Custom Domain (Vercel)**
   - Go to your Vercel project settings
   - Add your custom domain
   - Update DNS records as instructed

2. **Custom Domain (Railway)**
   - Go to your Railway project settings
   - Add custom domain
   - Update DNS records

### SSL Certificates

Both Railway and Vercel provide automatic SSL certificates. No additional configuration needed.

## 🔐 Security Checklist

- [ ] Use strong, unique secrets for JWT_SECRET and COOKIE_SECRET
- [ ] Set up proper CORS origins for production domains
- [ ] Use production Stripe keys (pk_live_*)
- [ ] Enable HTTPS only
- [ ] Set up proper environment variable security
- [ ] Configure proper database access controls

## 📊 Monitoring

### Railway
- Built-in metrics and logs
- Set up alerts for errors
- Monitor database performance

### Vercel
- Built-in analytics
- Performance monitoring
- Error tracking

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        run: railway deploy

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: vercel deploy --prod
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS origins are set correctly
   - Check that frontend URL is in STORE_CORS

2. **Database Connection Issues**
   - Verify DATABASE_URL is correct
   - Check database is accessible from Railway

3. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

4. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly

### Debug Commands

```bash
# Check Railway logs
railway logs

# Check Vercel deployment logs
vercel logs

# Test API endpoints
curl https://your-backend-url.railway.app/health
```

## 📈 Performance Optimization

### Backend
- Enable Redis caching
- Optimize database queries
- Use CDN for static assets
- Implement proper indexing

### Frontend
- Enable Next.js Image Optimization
- Use Static Generation where possible
- Implement proper caching headers
- Optimize bundle size

## 🔄 Updates and Maintenance

### Updating Dependencies
```bash
# Backend
cd medusa-store
npm update

# Frontend
cd medusa-store-storefront
yarn upgrade
```

### Database Backups
- Railway provides automatic backups
- Set up additional backup strategies for critical data

### Monitoring
- Set up uptime monitoring
- Monitor error rates
- Track performance metrics
- Set up alerts for critical issues

---

For more detailed information, refer to the [Medusa Documentation](https://docs.medusajs.com/) and [Next.js Deployment Guide](https://nextjs.org/docs/deployment).
