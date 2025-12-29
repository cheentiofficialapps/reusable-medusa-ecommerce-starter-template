#!/bin/bash

# Railway Deployment Setup Script
# This script helps generate secure secrets for Railway deployment

echo "🚂 Railway Deployment Setup"
echo "=========================="
echo ""

# Generate secure secrets
echo "📝 Generating secure secrets..."
JWT_SECRET=$(openssl rand -base64 32)
COOKIE_SECRET=$(openssl rand -base64 32)

echo ""
echo "✅ Generated Secrets:"
echo "======================"
echo ""
echo "JWT_SECRET=$JWT_SECRET"
echo "COOKIE_SECRET=$COOKIE_SECRET"
echo ""
echo "📋 Copy these values to Railway environment variables:"
echo "   1. Go to Railway Dashboard → Your Project → Variables"
echo "   2. Add JWT_SECRET and COOKIE_SECRET"
echo ""
echo "🔐 Security Note: Keep these secrets secure and never commit them to git!"
echo ""

# Check if Railway CLI is installed
if command -v railway &> /dev/null; then
    echo "✅ Railway CLI is installed"
    echo ""
    echo "To deploy:"
    echo "  1. railway login"
    echo "  2. railway link"
    echo "  3. railway up"
else
    echo "ℹ️  Railway CLI not installed"
    echo "   Install: npm i -g @railway/cli"
    echo ""
    echo "   Or deploy via Railway Dashboard:"
    echo "   1. Go to railway.app"
    echo "   2. New Project → Deploy from GitHub"
    echo "   3. Select this repository"
fi

echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"

