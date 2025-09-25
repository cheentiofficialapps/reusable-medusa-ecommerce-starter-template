# Medusa E-commerce Starter Template Usage Guide

This document explains how to use this template to create new Medusa e-commerce projects.

## 🎯 What This Template Provides

- **Complete Medusa Backend**: Production-ready e-commerce backend with PostgreSQL
- **Official Next.js Frontend**: Latest Next.js 15 with Tailwind CSS and TypeScript
- **Automated Setup**: Scripts to quickly initialize new projects
- **Deployment Ready**: Pre-configured for Railway (backend) and Vercel (frontend)
- **Comprehensive Documentation**: Guides for development, deployment, and best practices

## 🚀 Creating a New Project

### Method 1: Using GitHub Template (Recommended)

1. **Create Repository from Template**
   - Go to this repository on GitHub
   - Click "Use this template" → "Create a new repository"
   - Name your new repository (e.g., `my-store`)

2. **Clone Your New Repository**
   ```bash
   git clone https://github.com/yourusername/my-store.git
   cd my-store
   ```

3. **Run Setup Script**
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

4. **Start Development**
   ```bash
   ./scripts/dev.sh
   ```

### Method 2: Manual Clone

1. **Clone This Repository**
   ```bash
   git clone https://github.com/yourusername/medusa-ecommerce-starter.git my-store
   cd my-store
   ```

2. **Remove Git History**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Run Setup Script**
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

## 📋 Setup Process

The setup script will:

1. **Ask for project name** and update package.json files
2. **Create environment files** from templates
3. **Install dependencies** for both backend and frontend
4. **Check PostgreSQL** connection and create database
5. **Update database URL** in environment files
6. **Provide next steps** for completing setup

## 🔧 Post-Setup Configuration

After running the setup script:

### 1. Update Environment Variables

**Backend** (`medusa-store/.env`):
```env
DATABASE_URL=postgres://username:password@localhost:5432/your_project_local
JWT_SECRET=your-unique-jwt-secret
COOKIE_SECRET=your-unique-cookie-secret
```

**Frontend** (`medusa-store-storefront/.env.local`):
```env
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-publishable-key
```

### 2. Run Database Migrations

```bash
cd medusa-store
npm run db:migrate
npm run seed
```

### 3. Get Publishable Key

1. Start the backend: `cd medusa-store && npm run dev`
2. Go to http://localhost:9000/admin
3. Create admin account and complete onboarding
4. Go to Settings → Publishable API Keys
5. Create a new key and copy it to your frontend `.env.local`

### 4. Start Development Servers

```bash
# Option 1: Use the dev script
./scripts/dev.sh

# Option 2: Start manually
# Terminal 1 - Backend
cd medusa-store && npm run dev

# Terminal 2 - Frontend  
cd medusa-store-storefront && yarn dev
```

## 🌐 Access Your Store

- **Frontend**: http://localhost:8000
- **Admin Panel**: http://localhost:9000/admin

## 📚 Documentation

- **README.md**: Complete project overview and setup instructions
- **docs/DEVELOPMENT.md**: Development workflow and best practices
- **docs/DEPLOYMENT.md**: Production deployment guide
- **docs/PROJECT_STRUCTURE.md**: Detailed project structure explanation

## 🛠️ Customization

### Backend Customization

- **Add API Routes**: `src/api/`
- **Create Services**: `src/services/`
- **Add Models**: `src/models/`
- **Create Migrations**: `npm run db:create-migration -- --name your-migration`

### Frontend Customization

- **Add Pages**: `src/app/`
- **Create Components**: `src/components/`
- **Modify Styles**: `src/styles/globals.css` and Tailwind classes
- **Add API Integration**: `src/lib/medusa/`

## 🚀 Deployment

### Backend (Railway)

1. Connect repository to Railway
2. Set environment variables
3. Add PostgreSQL database
4. Deploy automatically on push

### Frontend (Vercel)

1. Import repository to Vercel
2. Set root directory to `medusa-store-storefront`
3. Configure environment variables
4. Deploy automatically on push

See `docs/DEPLOYMENT.md` for detailed instructions.

## 🔄 Updates

To update your project with latest changes:

```bash
# Pull latest changes from template
git remote add template https://github.com/yourusername/medusa-ecommerce-starter.git
git fetch template
git merge template/main

# Update dependencies
cd medusa-store && npm update
cd ../medusa-store-storefront && yarn upgrade
```

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Verify database exists

2. **CORS Errors**
   - Check CORS settings in medusa-config.ts
   - Ensure frontend URL is in STORE_CORS

3. **Publishable Key Issues**
   - Ensure key is created in admin panel
   - Verify key is assigned to sales channel
   - Check key is in frontend .env.local

### Getting Help

- Check the documentation in `docs/` folder
- Review error messages in terminal
- Check browser console for frontend errors
- Verify environment variables are set correctly

## 📝 Best Practices

1. **Environment Variables**: Never commit .env files
2. **Database**: Use migrations for schema changes
3. **Version Control**: Use meaningful commit messages
4. **Testing**: Write tests for new features
5. **Security**: Use strong secrets in production

## 🎉 Success!

Once everything is set up, you'll have:

- ✅ Working Medusa backend with admin panel
- ✅ Beautiful Next.js frontend
- ✅ Database with sample data
- ✅ Development workflow ready
- ✅ Production deployment configured

Happy building! 🛍️
