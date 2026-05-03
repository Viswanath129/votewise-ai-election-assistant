#!/bin/bash

# Google Cloud Deployment Script for VoteWise AI
echo "🚀 Starting Google Cloud deployment for VoteWise AI..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK (gcloud) is not installed. Please install it first."
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is logged in
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q "@"; then
    echo "🔐 Please log in to Google Cloud:"
    gcloud auth login
fi

# Set the project (you may need to change this to your project ID)
PROJECT_ID="your-project-id"
echo "📋 Using project: $PROJECT_ID"

# Build and deploy using Cloud Build
echo "🏗️  Building and deploying with Cloud Build..."
gcloud builds submit --config=cloudbuild.yaml --region=europe-west1 .

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your app should be available at: https://votewise-ai-election-assistant-185003774821.europe-west1.run.app/"
    echo "🔍 Check the deployment with: gcloud run services describe votewise-ai --region=europe-west1"
else
    echo "❌ Deployment failed. Please check the logs above."
    exit 1
fi
