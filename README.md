# VoteWise AI - Election Process Education Assistant

**Tagline:** Understand Elections. Vote Smarter.

## Problem Statement

Many Indian citizens lack awareness about:
- The election process and their democratic rights
- How to register as a voter
- Required documents and eligibility criteria
- How voting machines (EVM) work
- Election timelines and procedures

This knowledge gap leads to lower voter participation and uninformed voting decisions.

## Solution

VoteWise AI is an AI-powered educational platform that helps citizens understand Indian elections through:
- Interactive AI chat assistant (Gemini-powered)
- Step-by-step voter registration guide
- Required documents checklist
- FAQ section with common questions
- Myth vs Fact clarification
- Election timeline visualization
- Multi-language support (English, Hindi, Telugu)

## Features

### Core Features
- **AI Chat Assistant** - Ask questions about elections, registration, voting process
- **Registration Guide** - Step-by-step walkthrough for voter ID registration
- **Documents Guide** - Checklist of required documents with visual indicators
- **FAQ Section** - Comprehensive frequently asked questions
- **Myth vs Fact** - Interactive quiz to dispel election myths
- **Election Timeline** - Visual timeline of election phases

### Additional Features
- **Multi-language Support** - English, Hindi, Telugu
- **Dark/Light Mode** - Toggle between themes
- **Mobile Responsive** - Works on all devices
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- **Security** - Input sanitization, rate limiting, environment variable protection

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

### Backend
- Next.js API Routes
- Rate Limiting Middleware

### AI & Google Services
- **Gemini API** - AI chat responses
- **Firebase** - Firestore database (for future features)
- **Cloud Run** - Deployment platform

### Testing
- Vitest
- React Testing Library
- Jest DOM

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/votewise-ai.git
cd votewise-ai
```

2. Install dependencies
```bash
npm install
```

3. Environment Variables
Copy `env.example.txt` to `.env.local` and fill in your credentials:
```
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

4. Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing
```bash
npm test
```

## Deployment

### Deploy to Google Cloud Run

1. Build the Docker image
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/votewise-ai
```

2. Deploy to Cloud Run
```bash
gcloud run deploy votewise-ai \
  --image gcr.io/PROJECT_ID/votewise-ai \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=your_key_here
```

Or use the provided Dockerfile:
```bash
docker build -t votewise-ai .
docker run -p 3000:3000 -e GEMINI_API_KEY=your_key_here votewise-ai
```

## Project Structure
```
votewise-ai/
├── src/
│   ├── app/               # Next.js app routes
│   │   ├── api/chat/      # AI chat API endpoint
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Main page
│   ├── components/        # React components
│   │   ├── ui/            # UI components (Button, Card, etc.)
│   │   ├── sections/      # Page sections (Hero, Chat, etc.)
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Page footer
│   ├── contexts/          # React contexts
│   ├── lib/               # Utility libraries
│   ├── data/              # Static data (translations, FAQ)
│   └── types/             # TypeScript types
├── public/                # Static assets
├── Dockerfile             # Cloud Run deployment
├── vitest.config.ts       # Test configuration
└── README.md
```

## Security Features

- Input sanitization to prevent XSS
- Rate limiting (30 requests/minute per IP)
- Environment variables for API keys
- No secrets exposed in frontend
- Error handling with safe fallbacks

## Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- WCAG 2.1 AA compliant color contrast
- Screen reader friendly

## Google Services Integration

1. **Gemini API** - Provides AI-powered responses to election queries
2. **Cloud Run** - Serverless container deployment
3. **Firebase** - Ready for Firestore database integration

## API Endpoints

### POST /api/chat
Send election-related questions to the AI assistant.

**Request:**
```json
{
  "prompt": "How do I register to vote?"
}
```

**Response:**
```json
{
  "response": "You can register online at voters.eci.gov.in..."
}
```

## Screenshots

![Hero Section](./screenshots/hero.png)
![AI Chat](./screenshots/chat.png)
![Registration Guide](./screenshots/registration.png)

## Contributing

Contributions are welcome! Please follow the code style and add tests for new features.

## License

MIT License - see LICENSE file for details.

## Disclaimer

VoteWise AI is an educational platform and is not affiliated with the Election Commission of India. For official information, please visit eci.gov.in.

---

Built with Next.js, Gemini AI, and Tailwind CSS for the Hack2Skill PromptWars Challenge.

#BuildWithAI #PromptWarsVirtual #GoogleForDevelopers #Hack2Skill
