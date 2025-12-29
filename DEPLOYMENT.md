# Deployment Guide - Railway & Vercel

This guide will help you deploy the Medusa backend to Railway and the Next.js storefront to Vercel.

## Prerequisites

- GitHub repository with your code
- Railway account (https://railway.app)
- Vercel account (https://vercel.com)
- Domain names (optional but recommended)

---

## Part 1: Deploy Backend to Railway

### Step 1: Create Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect the project

### Step 2: Add PostgreSQL Database

1. In your Railway project, click "+ New"
2. Select "Database" → "Add PostgreSQL"
3. Railway will automatically create a PostgreSQL database
4. Note the `DATABASE_URL` from the database service (you'll need this)

### Step 3: Configure Environment Variables

In your Railway project settings, add these environment variables:

```bash
# Database (automatically set by Railway PostgreSQL service)
DATABASE_URL=<provided-by-railway>

# CORS - Replace with your actual domains
STORE_CORS=https://your-storefront.vercel.app,https://your-storefront-domain.com
ADMIN_CORS=https://your-backend.railway.app
AUTH_CORS=https://your-backend.railway.app

# Secrets - Generate secure random strings!
# Use: openssl rand -base64 32 (for each)
JWT_SECRET=<generate-secure-random-string>
COOKIE_SECRET=<generate-secure-random-string>

# Medusa Admin
MEDUSA_ADMIN_ONBOARDING_TYPE=default
MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY=../storefront

# Optional: Redis (if you add Redis service)
# REDIS_URL=<provided-by-railway-redis>

# Production Backend URL (set after first deployment)
MEDUSA_BACKEND_URL=https://your-backend.railway.app
```

### Step 4: Configure Build Settings

Railway should auto-detect:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Root Directory**: `/` (root)

### Step 5: Deploy

1. Railway will automatically deploy when you push to your main branch
2. Wait for the build to complete
3. Note your Railway app URL (e.g., `https://your-app.railway.app`)

### Step 6: Run Migrations

After first deployment, run migrations:

1. In Railway, go to your service
2. Click on "Deployments" → Latest deployment
3. Click "View Logs"
4. Or use Railway CLI:
   ```bash
   railway run npx medusa db:migrate
   ```

### Step 7: Create Admin User

Create your admin user using Railway CLI:

```bash
railway run npx medusa user -e mohit@cheenti.com -p "Mohit@123!@#$"
```

Or via Railway dashboard → Deployments → Run Command

---

## Part 2: Deploy Storefront to Vercel

### Step 1: Import Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

### Step 2: Configure Project Settings

In the project settings:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `storefront` (IMPORTANT!)
- **Build Command**: `npm run build` (runs in storefront directory)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install`

### Step 3: Configure Environment Variables

Add these environment variables in Vercel:

```bash
# Backend URL (your Railway app URL)
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://your-backend.railway.app

# Frontend URL (will be set automatically, but you can override)
NEXT_PUBLIC_BASE_URL=https://your-storefront.vercel.app

# Optional: Publishable Key (if using Medusa Cloud)
# NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<your-publishable-key>
```

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your storefront
3. Your storefront will be available at `https://your-project.vercel.app`

---

## Part 3: Update CORS Settings

After both deployments are complete, update CORS in Railway:

1. Go to Railway → Your Backend Service → Variables
2. Update `STORE_CORS` with your Vercel URL:
   ```
   STORE_CORS=https://your-storefront.vercel.app
   ```
3. Railway will automatically redeploy

---

## Part 4: Custom Domain (Optional)

### Railway Custom Domain

1. In Railway → Your Service → Settings → Networking
2. Add your custom domain
3. Update DNS records as instructed
4. Update `ADMIN_CORS` and `AUTH_CORS` with your custom domain

### Vercel Custom Domain

1. In Vercel → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records
4. Update `NEXT_PUBLIC_BASE_URL` in environment variables

---

## Environment Variables Summary

### Railway (Backend)

| Variable | Description | Example |
|---------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Auto-set by Railway |
| `STORE_CORS` | Storefront URLs (comma-separated) | `https://your-app.vercel.app` |
| `ADMIN_CORS` | Admin UI URLs | `https://your-backend.railway.app` |
| `AUTH_CORS` | Auth endpoint URLs | `https://your-backend.railway.app` |
| `JWT_SECRET` | JWT signing secret | Generate with `openssl rand -base64 32` |
| `COOKIE_SECRET` | Cookie encryption secret | Generate with `openssl rand -base64 32` |
| `REDIS_URL` | Redis connection (optional) | Auto-set if using Railway Redis |

### Vercel (Storefront)

| Variable | Description | Example |
|---------|-------------|---------|
| `NEXT_PUBLIC_MEDUSA_BACKEND_URL` | Backend API URL | `https://your-backend.railway.app` |
| `NEXT_PUBLIC_BASE_URL` | Storefront URL | `https://your-storefront.vercel.app` |

---

## Troubleshooting

### Backend Issues

1. **Build Fails**: Check Railway logs for errors
2. **Database Connection**: Verify `DATABASE_URL` is set correctly
3. **CORS Errors**: Ensure `STORE_CORS` includes your Vercel URL
4. **Migrations Not Run**: Use Railway CLI to run migrations manually

### Storefront Issues

1. **Build Fails**: Check Vercel build logs
2. **API Connection**: Verify `NEXT_PUBLIC_MEDUSA_BACKEND_URL` is correct
3. **CORS Errors**: Update `STORE_CORS` in Railway with Vercel URL

### Common Commands

```bash
# Railway CLI
railway login
railway link
railway run npx medusa db:migrate
railway run npx medusa user -e email@example.com -p "password"

# Check logs
railway logs
```

---

## Post-Deployment Checklist

- [ ] Backend deployed to Railway
- [ ] Database migrations run
- [ ] Admin user created
- [ ] Storefront deployed to Vercel
- [ ] CORS settings updated with production URLs
- [ ] Environment variables set correctly
- [ ] Test admin login at `https://your-backend.railway.app/app`
- [ ] Test storefront at `https://your-storefront.vercel.app`
- [ ] Custom domains configured (if applicable)
- [ ] SSL certificates active (automatic on Railway/Vercel)

---

## Security Notes

1. **Never commit `.env` files** - They're in `.gitignore`
2. **Use strong secrets** - Generate with `openssl rand -base64 32`
3. **Update CORS** - Only allow your production domains
4. **Enable 2FA** - On both Railway and Vercel accounts
5. **Review access** - Limit who has access to production deployments

---

## Support

- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- Medusa Docs: https://docs.medusajs.com

