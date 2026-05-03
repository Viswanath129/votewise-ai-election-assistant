# VoteWise AI - Cloud Run Deployment Guide

## Prerequisites

1. Google Cloud SDK installed (`gcloud`)
2. Gemini API Key (from Google AI Studio)
3. Google Cloud Project with billing enabled

---

## Step 1: Set Up Environment Variables (Local)

Create `.env.local` file in project root (already gitignored):

```bash
# Windows PowerShell
$env:GEMINI_API_KEY = "AIzaSyChnJbt43Pdpp7ITyJLCMnzb7O02hT0x9Y"
```

---

## Step 2: Deploy to Cloud Run

### Option A: Direct Deploy (Recommended)

```bash
cd b:\projects\promptwars\votewise-ai

# Set your project
 gcloud config set project YOUR_PROJECT_ID

# Deploy with environment variable
gcloud run deploy votewise-ai-election-assistant `
  --source . `
  --region asia-south1 `
  --allow-unauthenticated `
  --set-env-vars "GEMINI_API_KEY=AIzaSyChnJbt43Pdpp7ITyJLCMnzb7O02hT0x9Y"
```

### Option B: Using Cloud Build

```bash
# Submit build with substitution
gcloud builds submit `
  --config cloudbuild.yaml `
  --substitutions=_GEMINI_API_KEY=AIzaSyChnJbt43Pdpp7ITyJLCMnzb7O02hT0x9Y
```

### Option C: Docker Build Locally

```bash
# Build
docker build -t gcr.io/YOUR_PROJECT_ID/votewise-ai .

# Run locally first to test
docker run -p 3000:3000 -e GEMINI_API_KEY=AIzaSyChnJbt43Pdpp7ITyJLCMnzb7O02hT0x9Y votewise-ai

# Push to GCR
docker push gcr.io/YOUR_PROJECT_ID/votewise-ai

# Deploy
gcloud run deploy votewise-ai `
  --image gcr.io/YOUR_PROJECT_ID/votewise-ai `
  --region asia-south1 `
  --allow-unauthenticated
```

---

## Step 3: Verify Deployment

After deployment, you'll see:
```
Service URL: https://votewise-ai-election-assistant-XXXXXX-uc.a.run.app
```

Test the AI chat:
1. Open the URL in browser
2. Type "How do I register to vote?"
3. You should get a Gemini-powered response

---

## Troubleshooting

### Issue: Build fails
```bash
# Clean and rebuild
rm -rf .next
npm run build
gcloud run deploy votewise-ai-election-assistant --source . --region asia-south1
```

### Issue: API key not working
- Verify key is active at https://aistudio.google.com/app/apikey
- Check API key has Gemini API access enabled

### Issue: Region not available
```bash
# List available regions
gcloud run regions list

# Deploy to different region
gcloud run deploy votewise-ai-election-assistant --source . --region us-central1
```

---

## Security Best Practices

✅ API key is passed via environment variable (not in code)
✅ .env.local is in .gitignore (won't be committed)
✅ Rate limiting protects against abuse (30 req/min)

---

## Quick Deploy Command (Copy & Paste)

```bash
cd b:\projects\promptwars\votewise-ai && gcloud run deploy votewise-ai-election-assistant --source . --region asia-south1 --allow-unauthenticated --set-env-vars "GEMINI_API_KEY=AIzaSyChnJbt43Pdpp7ITyJLCMnzb7O02hT0x9Y"
```

---

## After Deployment

Update these files with your actual URL:
1. `SUBMISSION.md` - Line 18: Replace with your Cloud Run URL
2. `README.md` - Update deployment section
3. LinkedIn post - Replace [CLOUD_RUN_URL] placeholder

---

**Ready to deploy! 🚀**
