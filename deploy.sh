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

# 2. Upload to cPanel
echo ""
echo "Step 2: Uploading dist files to cPanel server..."
echo "(It might prompt you for your SSH password)"
echo ""

# Note: If your SSH port is not 22, add "-P port_number" (capital P) like this:
# scp -P 2200 -r dist/* wcdq4d18mj5g@cell24x7.com:public_html/cell24x7.com/
scp -r dist/* wcdq4d18mj5g@cell24x7.com:public_html/cell24x7.com/

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Upload failed! Please check if your SSH connection details are correct."
    exit 1
fi

echo ""
echo "=========================================="
echo "Deployment Successful!"
echo "=========================================="
