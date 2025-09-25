#!/bin/bash

# Medusa Store Local Development Setup Script
# This script sets up the local development environment

echo "🚀 Setting up Medusa Store for local development..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 20+ from https://nodejs.org"
        exit 1
    fi
    
    if ! command -v yarn &> /dev/null; then
        print_error "Yarn is not installed. Please install Yarn from https://yarnpkg.com"
        exit 1
    fi
    
    if ! command -v psql &> /dev/null; then
        print_warning "PostgreSQL client not found. You may need to install PostgreSQL locally or use Docker."
    fi
    
    print_status "Requirements check completed"
}

# Setup backend environment
setup_backend() {
    print_status "Setting up Medusa backend..."
    
    cd medusa-store
    
    # Copy environment file
    if [ ! -f .env ]; then
        cp .env.example .env
        print_status "Created .env file from .env.example"
        print_warning "Please update .env with your local database credentials"
    fi
    
    # Install dependencies
    print_status "Installing backend dependencies..."
    yarn install
    
    cd ..
    print_status "Backend setup completed"
}

# Setup frontend environment
setup_frontend() {
    print_status "Setting up Next.js storefront..."
    
    cd medusa-store-storefront
    
    # Copy environment file
    if [ ! -f .env.local ]; then
        cp .env.example .env.local
        print_status "Created .env.local file from .env.example"
        print_warning "Please update .env.local with your local backend URL"
    fi
    
    # Install dependencies
    print_status "Installing frontend dependencies..."
    yarn install
    
    cd ..
    print_status "Frontend setup completed"
}

# Create local development environment files
create_local_env() {
    print_status "Creating local development environment files..."
    
    # Backend local env
    cat > medusa-store/.env.local << EOF
# Local Development Environment
DATABASE_URL=postgresql://postgres:password@localhost:5432/medusa_store_local
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:7001
AUTH_CORS=http://localhost:9000
JWT_SECRET=local-development-jwt-secret
COOKIE_SECRET=local-development-cookie-secret
NODE_ENV=development
PORT=9000
EOF
    
    # Frontend local env
    cat > medusa-store-storefront/.env.local << EOF
# Local Development Environment
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
NODE_ENV=development
EOF
    
    print_status "Local environment files created"
}

# Main setup function
main() {
    echo "🎯 Medusa Store Local Development Setup"
    echo "========================================"
    
    check_requirements
    create_local_env
    setup_backend
    setup_frontend
    
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Set up PostgreSQL database locally or use Docker"
    echo "2. Update .env files with your database credentials"
    echo "3. Run database migrations: cd medusa-store && yarn medusa db:migrate"
    echo "4. Seed the database: cd medusa-store && yarn seed"
    echo "5. Start the backend: cd medusa-store && yarn dev"
    echo "6. Start the frontend: cd medusa-store-storefront && yarn dev"
    echo ""
    echo "📚 For deployment instructions, see DEPLOYMENT.md"
}

# Run main function
main
