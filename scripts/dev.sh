#!/bin/bash

# Medusa Development Script
# Starts both backend and frontend servers

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "medusa-store/package.json" ] || [ ! -f "medusa-store-storefront/package.json" ]; then
    print_error "Please run this script from the root directory of the Medusa project"
    exit 1
fi

print_status "Starting Medusa development servers..."

# Function to cleanup background processes
cleanup() {
    print_status "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null || true
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
print_status "Starting backend server (port 9000)..."
cd medusa-store
if command -v yarn &> /dev/null; then
    yarn dev &
else
    npm run dev &
fi
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend server
print_status "Starting frontend server (port 8000)..."
cd medusa-store-storefront
if command -v yarn &> /dev/null; then
    yarn dev &
else
    npm run dev &
fi
FRONTEND_PID=$!
cd ..

print_success "Both servers are starting..."
echo ""
echo "🌐 Your Medusa store is available at:"
echo "   Frontend: http://localhost:8000"
echo "   Admin: http://localhost:9000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
