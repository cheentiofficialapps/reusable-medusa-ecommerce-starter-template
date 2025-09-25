#!/bin/bash

# Medusa Store Production Deployment Script
# This script helps prepare and deploy to Railway and Vercel

echo "🚀 Medusa Store Production Deployment Helper"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if git is initialized
check_git() {
    if [ ! -d ".git" ]; then
        print_warning "Git repository not initialized. Initializing..."
        git init
        git add .
        git commit -m "Initial commit: Medusa store setup"
        print_status "Git repository initialized"
    else
        print_status "Git repository found"
    fi
}

# Generate secure secrets
generate_secrets() {
    print_info "Generating secure secrets for production..."
    
    JWT_SECRET=$(openssl rand -base64 32)
    COOKIE_SECRET=$(openssl rand -base64 32)
    FILE_SECRET=$(openssl rand -base64 32)
    
    echo "Generated secrets:"
    echo "JWT_SECRET: $JWT_SECRET"
    echo "COOKIE_SECRET: $COOKIE_SECRET"
    echo "FILE_SERVICE_SECRET: $FILE_SECRET"
    echo ""
    print_warning "Save these secrets securely! You'll need them for Railway deployment."
}

# Validate environment files
validate_env() {
    print_info "Validating environment configuration..."
    
    # Check backend env example
    if [ -f "medusa-store/.env.example" ]; then
        print_status "Backend .env.example found"
    else
        print_error "Backend .env.example not found"
        return 1
    fi
    
    # Check frontend env example
    if [ -f "medusa-store-storefront/.env.example" ]; then
        print_status "Frontend .env.example found"
    else
        print_error "Frontend .env.example not found"
        return 1
    fi
    
    # Check Railway config
    if [ -f "medusa-store/railway.json" ]; then
        print_status "Railway configuration found"
    else
        print_error "Railway configuration not found"
        return 1
    fi
    
    # Check Vercel config
    if [ -f "medusa-store-storefront/vercel.json" ]; then
        print_status "Vercel configuration found"
    else
        print_error "Vercel configuration not found"
        return 1
    fi
}

# Show deployment checklist
show_checklist() {
    echo ""
    echo "📋 Production Deployment Checklist"
    echo "=================================="
    echo ""
    echo "Before deploying, ensure you have:"
    echo ""
    echo "🔧 Railway Setup:"
    echo "  □ Railway account created"
    echo "  □ GitHub repository connected"
    echo "  □ PostgreSQL service added"
    echo "  □ Environment variables configured"
    echo "  □ Domain configured (optional)"
    echo ""
    echo "🔧 Vercel Setup:"
    echo "  □ Vercel account created"
    echo "  □ GitHub repository connected"
    echo "  □ Environment variables configured"
    echo "  □ Domain configured (optional)"
    echo ""
    echo "🔧 Services Setup:"
    echo "  □ Stripe account and API keys"
    echo "  □ SendGrid account (for emails)"
    echo "  □ Domain names purchased"
    echo ""
    echo "🔧 Security:"
    echo "  □ Strong secrets generated"
    echo "  □ CORS domains configured"
    echo "  □ HTTPS enabled (automatic)"
    echo ""
}

# Show next steps
show_next_steps() {
    echo ""
    echo "🚀 Next Steps for Deployment"
    echo "============================="
    echo ""
    echo "1. Railway Backend Deployment:"
    echo "   • Go to https://railway.app"
    echo "   • Create new project from GitHub"
    echo "   • Select 'medusa-store' folder"
    echo "   • Add PostgreSQL service"
    echo "   • Configure environment variables"
    echo "   • Deploy and note the domain"
    echo ""
    echo "2. Vercel Frontend Deployment:"
    echo "   • Go to https://vercel.com"
    echo "   • Import GitHub repository"
    echo "   • Set root directory to 'medusa-store-storefront'"
    echo "   • Configure environment variables"
    echo "   • Deploy and note the domain"
    echo ""
    echo "3. Configure Services:"
    echo "   • Update CORS settings with actual domains"
    echo "   • Set up Stripe webhooks"
    echo "   • Configure email service"
    echo "   • Run database migrations"
    echo ""
    echo "📚 For detailed instructions, see DEPLOYMENT.md"
}

# Main function
main() {
    check_git
    validate_env
    
    if [ $? -eq 0 ]; then
        print_status "Environment validation passed"
    else
        print_error "Environment validation failed"
        exit 1
    fi
    
    generate_secrets
    show_checklist
    show_next_steps
    
    echo ""
    print_status "Production deployment preparation completed!"
    echo ""
    print_info "Remember to:"
    print_info "• Keep your secrets secure"
    print_info "• Test locally before deploying"
    print_info "• Monitor your deployments"
    print_info "• Set up proper monitoring and logging"
}

# Run main function
main
