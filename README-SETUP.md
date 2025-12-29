# Dizester Herbal 2 - Setup Instructions

## Quick Setup

Run the setup script to configure the project:

```bash
chmod +x setup.sh
./setup.sh
```

## Manual Setup

### 1. Backend Environment

Create `.env` file in the root directory:

```env
DATABASE_URL=postgres://localhost:5432/dizester-herbal-2
STORE_CORS=http://localhost:8000,http://localhost:3000
ADMIN_CORS=http://localhost:7001,http://localhost:9000
AUTH_CORS=http://localhost:7001,http://localhost:9000
JWT_SECRET=supersecret_jwt_key_change_in_production
COOKIE_SECRET=supersecret_cookie_key_change_in_production
MEDUSA_ADMIN_ONBOARDING_TYPE=default
MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY=../storefront
```

### 2. Storefront Environment

Create `storefront/.env.local`:

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

### 3. Database Setup

```bash
# Create database (if not exists)
createdb dizester-herbal-2

# Run migrations
npm run build
npx medusa db:migrate
```

### 4. Create Admin User

```bash
npx medusa user -e mohit@cheenti.com -p "Mohit@123!@#$"
```

### 5. Start Services

**Backend (Terminal 1):**
```bash
npm run dev
```
Backend runs on: http://localhost:9000
Admin UI: http://localhost:9000/app

**Storefront (Terminal 2):**
```bash
cd storefront
npm install  # If dependencies not installed
npm run dev
```
Storefront runs on: http://localhost:8000

## Deployment

### Railway (Backend)
1. Connect your GitHub repo to Railway
2. Railway will auto-detect the Node.js project
3. Set environment variables in Railway dashboard
4. Add PostgreSQL service in Railway

### Vercel (Frontend)
1. Connect your GitHub repo to Vercel
2. Set root directory to `storefront`
3. Add environment variables:
   - `NEXT_PUBLIC_MEDUSA_BACKEND_URL` (your Railway backend URL)
   - `NEXT_PUBLIC_BASE_URL` (your Vercel URL)

## Admin Credentials

- Email: mohit@cheenti.com
- Password: Mohit@123!@#$

