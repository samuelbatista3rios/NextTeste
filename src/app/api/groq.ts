import axios from 'axios';
import { NextResponse } from 'next/server';

const GROQ_API_URL = 'https://api.groq.com/v1/generate';
const GROQ_API_KEY= process.env.GROQ_API_KEY


if (!GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY is not defined');
}

export default async function POST(request: Request) {
  try {
    const { jobDescription } = await request.json();

    const prompt = `Analyze the following job description and provide a detailed technology breakdown and study roadmap:\n\n${jobDescription}`;
    
    const response = await axios.post(GROQ_API_URL, {
      prompt,
      model: 'llama-3.1',
    }, {
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`, // Corrigir a variável da chave da API
        'Content-Type': 'application/json',
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error);
    return NextResponse.error();
  }
}
