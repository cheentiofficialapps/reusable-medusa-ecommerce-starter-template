#!/bin/bash

# Create .env file for backend
cat > .env << 'ENVEOF'
# Database
DATABASE_URL=postgres://localhost:5432/dizester-herbal-2

# CORS
STORE_CORS=http://localhost:8000,http://localhost:3000
ADMIN_CORS=http://localhost:7001,http://localhost:9000
AUTH_CORS=http://localhost:7001,http://localhost:9000

# Secrets
JWT_SECRET=supersecret_jwt_key_change_in_production
COOKIE_SECRET=supersecret_cookie_key_change_in_production

# Medusa Admin
MEDUSA_ADMIN_ONBOARDING_TYPE=default
MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY=../storefront
ENVEOF

# Create .env.local for storefront
cat > storefront/.env.local << 'STOREFRONTEOF'
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
ENVEOF

echo "✅ Environment files created"
echo "📦 Running database migrations..."
npx medusa db:migrate

echo "👤 Creating admin user..."
npx medusa user -e mohit@cheenti.com -p "Mohit@123!@#$"

echo "✅ Setup complete!"
echo ""
echo "To start the backend: npm run dev"
echo "To start the storefront: cd storefront && npm run dev"

