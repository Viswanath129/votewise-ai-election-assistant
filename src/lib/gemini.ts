import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const ELECTION_CONTEXT = `You are VoteWise AI, an educational assistant for Indian elections. 
Answer questions about:
- Voter registration process
- Required documents
- How to vote
- Election process
- EVM/VVPAT
- Vote counting
- Election dates and timelines
- NRI voting rules
- NOTA option

Keep responses factual, concise (2-3 sentences), and beginner-friendly.
If asked about non-election topics, politely redirect to election-related questions.
Always provide accurate information based on Election Commission of India guidelines.`;

export async function generateResponse(prompt: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    return 'AI service is temporarily unavailable. Please try again later.';
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const result = await model.generateContent({
      contents: [
        { role: 'user', parts: [{ text: ELECTION_CONTEXT }] },
        { role: 'model', parts: [{ text: 'I understand. I am VoteWise AI, ready to help with election-related questions.' }] },
        { role: 'user', parts: [{ text: prompt }] }
      ]
    });

    const response = result.response.text();
    return response || 'I apologize, but I could not generate a response. Please try again.';
  } catch (error) {
    console.error('Gemini API error:', error);
    return 'Sorry, I am having trouble connecting to my knowledge base. Please try again in a moment.';
  }
}
