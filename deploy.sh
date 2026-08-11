#!/bin/bash

echo "=========================================="
echo "Starting Build and Deploy to cPanel..."
echo "=========================================="

# 1. Build the project locally
echo "Step 1: Running npm run build..."
npm run build
if [ $? -ne 0 ]; then
    echo "[ERROR] Build failed! Exiting."
    exit 1
fi

# 2. Upload to server
echo ""
echo "Step 2: Uploading dist files to server via SFTP..."
echo ""

node deploy_sftp.js

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] SFTP Upload failed! Please check the logs."
    exit 1
fi

echo ""
echo "=========================================="
echo "Deployment Successful!"
echo "=========================================="
