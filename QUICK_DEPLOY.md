# Quick Deployment Guide

## 🚀 Quick Start

### Railway (Backend) - 5 Minutes

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Select this repository

2. **Add PostgreSQL**
   - Click "+ New" → Database → PostgreSQL
   - Railway auto-sets `DATABASE_URL`

3. **Set Environment Variables**
   ```bash
   # Generate secrets (run locally):
   ./railway-setup.sh
   
   # Then add to Railway:
   JWT_SECRET=<generated-value>
   COOKIE_SECRET=<generated-value>
   STORE_CORS=https://your-vercel-app.vercel.app
   ADMIN_CORS=https://your-railway-app.railway.app
   AUTH_CORS=https://your-railway-app.railway.app
   ```

4. **Deploy**
   - Railway auto-deploys on push
   - Or click "Deploy" in dashboard

5. **Run Migrations**
   ```bash
   railway run npx medusa db:migrate
   ```

6. **Create Admin User**
   ```bash
   railway run npx medusa user -e mohit@cheenti.com -p "Mohit@123!@#$"
   ```

### Vercel (Storefront) - 3 Minutes

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Add New → Project
   - Import GitHub repository

2. **Configure**
   - Root Directory: `storefront`
   - Framework: Next.js (auto-detected)

3. **Set Environment Variables**
   ```bash
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://your-railway-app.railway.app
   NEXT_PUBLIC_BASE_URL=https://your-vercel-app.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Done! 🎉

### Update CORS After Vercel Deploy

1. Get your Vercel URL
2. Update Railway `STORE_CORS` variable
3. Railway auto-redeploys

---

## 📋 Checklist

- [ ] Railway backend deployed
- [ ] PostgreSQL database added
- [ ] Environment variables set in Railway
- [ ] Migrations run
- [ ] Admin user created
- [ ] Vercel storefront deployed
- [ ] Environment variables set in Vercel
- [ ] CORS updated with Vercel URL
- [ ] Test admin login
- [ ] Test storefront

---

## 🔗 URLs After Deployment

- **Backend API**: `https://your-app.railway.app`
- **Admin UI**: `https://your-app.railway.app/app`
- **Storefront**: `https://your-app.vercel.app`

---

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

