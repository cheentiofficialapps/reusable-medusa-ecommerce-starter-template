#!/bin/bash

# Medusa E-commerce Starter Setup Script
# This script sets up a new Medusa project from this template

set -e

echo "🚀 Setting up Medusa E-commerce Starter..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "medusa-store/package.json" ] || [ ! -f "medusa-store-storefront/package.json" ]; then
    print_error "Please run this script from the root directory of the Medusa starter template"
    exit 1
fi

# Get project name
read -p "Enter your project name (e.g., my-store): " PROJECT_NAME

if [ -z "$PROJECT_NAME" ]; then
    print_error "Project name cannot be empty"
    exit 1
fi

print_status "Setting up project: $PROJECT_NAME"

# Update package.json files with project name
print_status "Updating package.json files..."

# Backend package.json
sed -i.bak "s/\"name\": \"medusa-store\"/\"name\": \"$PROJECT_NAME-backend\"/" medusa-store/package.json
rm medusa-store/package.json.bak

# Frontend package.json
sed -i.bak "s/\"name\": \"medusa-store-storefront\"/\"name\": \"$PROJECT_NAME-frontend\"/" medusa-store-storefront/package.json
rm medusa-store-storefront/package.json.bak

# Create environment files
print_status "Creating environment files..."

# Backend .env
if [ ! -f "medusa-store/.env" ]; then
    cp medusa-store/.env.example medusa-store/.env
    print_success "Created medusa-store/.env"
else
    print_warning "medusa-store/.env already exists, skipping..."
fi

# Frontend .env.local
if [ ! -f "medusa-store-storefront/.env.local" ]; then
    cp medusa-store-storefront/.env.template medusa-store-storefront/.env.local
    print_success "Created medusa-store-storefront/.env.local"
else
    print_warning "medusa-store-storefront/.env.local already exists, skipping..."
fi

# Install dependencies
print_status "Installing backend dependencies..."
cd medusa-store
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi
cd ..

print_status "Installing frontend dependencies..."
cd medusa-store-storefront
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi
cd ..

# Check if PostgreSQL is running
print_status "Checking PostgreSQL connection..."

# Try to connect to PostgreSQL
if command -v psql &> /dev/null; then
    if psql -h localhost -U postgres -d postgres -c "SELECT 1;" &> /dev/null; then
        print_success "PostgreSQL is running and accessible"
    else
        print_warning "PostgreSQL connection failed. Please ensure PostgreSQL is running."
        print_warning "You can start PostgreSQL with: brew services start postgresql (macOS)"
        print_warning "Or use Docker: docker run --name medusa-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=medusa_store_local -p 5432:5432 -d postgres:14"
    fi
else
    print_warning "psql command not found. Please ensure PostgreSQL is installed."
fi

# Create database if it doesn't exist
print_status "Setting up database..."
DB_NAME="${PROJECT_NAME}_local"
if command -v createdb &> /dev/null; then
    if createdb "$DB_NAME" 2>/dev/null; then
        print_success "Created database: $DB_NAME"
    else
        print_warning "Database $DB_NAME might already exist or creation failed"
    fi
else
    print_warning "createdb command not found. Please create the database manually."
fi

# Update database URL in .env
if [ -f "medusa-store/.env" ]; then
    sed -i.bak "s/medusa_store_local/$DB_NAME/" medusa-store/.env
    rm medusa-store/.env.bak
    print_success "Updated database URL in medusa-store/.env"
fi

print_success "Setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Update database credentials in medusa-store/.env"
echo "2. Run database migrations: cd medusa-store && npm run db:migrate"
echo "3. Seed the database: cd medusa-store && npm run seed"
echo "4. Start the backend: cd medusa-store && npm run dev"
echo "5. Start the frontend: cd medusa-store-storefront && yarn dev"
echo ""
echo "🌐 Your store will be available at:"
echo "   Frontend: http://localhost:8000"
echo "   Admin: http://localhost:9000/admin"
echo ""
echo "📚 Read the README.md for detailed instructions"
