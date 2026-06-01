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
echo "Step 2: Uploading dist files to server..."
echo "(It might prompt you for your SSH password)"
echo ""

scp -r dist/* adm.Cell24X7@154.210.160.223:/home/adm.Cell24X7/cmt-react/cmtmedia/dist/

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Upload failed! Please check if your SSH connection details are correct."
    exit 1
fi

echo ""
echo "=========================================="
echo "Deployment Successful!"
echo "=========================================="
