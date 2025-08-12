#!/bin/bash

# Exit on error
set -e

# Display commands being executed
set -x

# Install dependencies
npm install

# Build the application
npm run build

# Create a dist directory if it doesn't exist
mkdir -p dist

# Copy the build output to the dist directory
cp -r dist/* dist/

echo "Build completed successfully!"
echo "The application is ready for deployment."
echo "You can deploy the contents of the 'dist' directory to your hosting provider."