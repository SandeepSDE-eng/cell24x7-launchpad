#!/bin/bash

# ==============================================================
# Server-side Deployment Script
# Place this in your project repository folder on the server
# ==============================================================

echo "=========================================="
echo "Starting Server Deployment..."
echo "=========================================="

# 1. Pull latest code from GitHub
echo "Step 1: Pulling latest changes from GitHub..."
git pull origin main
if [ $? -ne 0 ]; then
    echo "[ERROR] git pull failed! Make sure there are no conflicts."
    exit 1
fi

# 2. Build the project
echo "Step 2: Installing packages and building..."
npm install
npm run build
if [ $? -ne 0 ]; then
    echo "[ERROR] npm build failed!"
    exit 1
fi

# 3. Copy to public_html
echo "Step 3: Copying dist files to public_html..."
# Ensure the destination exists
mkdir -p /home/wcdq4d18mj5g/public_html/cell24x7.com/

cp -r dist/* /home/wcdq4d18mj5g/public_html/cell24x7.com/

if [ $? -ne 0 ]; then
    echo "[ERROR] Copying files failed!"
    exit 1
fi

echo "=========================================="
echo "Deployment successful on Server!"
echo "=========================================="
