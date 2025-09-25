# Medusa Store Deployment Guide

This guide covers deploying your Medusa store to Railway (backend) and Vercel (frontend).

## Architecture Overview

- **Backend**: Medusa.js on Railway
- **Frontend**: Next.js on Vercel
- **Database**: PostgreSQL on Railway
- **Cache**: Redis on Railway (optional)

## Prerequisites

1. Railway account: https://railway.app
2. Vercel account: https://vercel.com
3. GitHub repository (recommended)

## Step 1: Deploy Backend to Railway

### 1.1 Connect Repository
1. Go to Railway dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Select the `medusa-store` folder

### 1.2 Add PostgreSQL Service
1. In your Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically provide `DATABASE_URL`

### 1.3 Configure Environment Variables
Add these environment variables in Railway:

```
STORE_CORS=https://your-storefront-domain.vercel.app
ADMIN_CORS=https://your-admin-domain.vercel.app
AUTH_CORS=https://your-backend-domain.railway.app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
COOKIE_SECRET=your-super-secret-cookie-key-change-this-in-production
FILE_SERVICE_URL=https://your-backend-domain.railway.app
FILE_SERVICE_SECRET=your-file-service-secret
NODE_ENV=production
PORT=9000
```

### 1.4 Deploy
1. Railway will automatically build and deploy
2. Note your Railway domain (e.g., `https://your-app.railway.app`)

## Step 2: Deploy Frontend to Vercel

### 2.1 Connect Repository
1. Go to Vercel dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Set root directory to `medusa-store-storefront`

### 2.2 Configure Environment Variables
Add these environment variables in Vercel:

```
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://your-backend-domain.railway.app
MEDUSA_BACKEND_URL=https://your-backend-domain.railway.app
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-medusa-publishable-key
NEXT_PUBLIC_BASE_URL=https://your-storefront-domain.vercel.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 2.3 Deploy
1. Click "Deploy"
2. Vercel will build and deploy your storefront

## Step 3: Configure Medusa Admin

### 3.1 Get Publishable Key
1. Access your Railway backend: `https://your-backend-domain.railway.app/admin`
2. Complete the onboarding process
3. Copy the publishable key from the admin

### 3.2 Update Frontend Environment
1. Go to Vercel dashboard
2. Update `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` with the key from step 3.1
3. Redeploy the frontend

## Step 4: Database Setup

### 4.1 Run Migrations
1. Access your Railway backend terminal
2. Run: `yarn medusa db:migrate`

### 4.2 Seed Data (Optional)
1. Run: `yarn seed`

## Step 5: Configure CORS

Update the CORS settings in Railway with your actual domains:

```
STORE_CORS=https://your-actual-storefront-domain.vercel.app
ADMIN_CORS=https://your-actual-admin-domain.vercel.app
AUTH_CORS=https://your-actual-backend-domain.railway.app
```

## Step 6: Payment Setup (Stripe)

### 6.1 Backend Configuration
Add to Railway environment variables:
```
STRIPE_API_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

### 6.2 Frontend Configuration
Add to Vercel environment variables:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Step 7: Custom Domain (Optional)

### 7.1 Railway Custom Domain
1. Go to Railway project settings
2. Add custom domain
3. Update CORS settings with new domain

### 7.2 Vercel Custom Domain
1. Go to Vercel project settings
2. Add custom domain
3. Update environment variables

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure all domains are properly configured in Railway
2. **Database Connection**: Check `DATABASE_URL` is set correctly
3. **Build Failures**: Check Node.js version compatibility
4. **Environment Variables**: Ensure all required variables are set

### Health Checks

- Backend: `https://your-backend-domain.railway.app/health`
- Frontend: `https://your-storefront-domain.vercel.app`

## Monitoring

- Railway: Built-in metrics and logs
- Vercel: Built-in analytics and performance monitoring
- Consider adding Sentry for error tracking

## Security Notes

1. Use strong, unique secrets for production
2. Enable HTTPS (automatic with Railway and Vercel)
3. Regularly update dependencies
4. Monitor for security vulnerabilities
5. Use environment variables for all sensitive data

## Next Steps

1. Set up monitoring and alerting
2. Configure backup strategies
3. Set up CI/CD pipelines
4. Add custom domains
5. Configure email services
6. Set up analytics
