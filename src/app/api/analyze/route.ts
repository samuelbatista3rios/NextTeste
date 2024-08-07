import { NextApiRequest, NextApiResponse } from 'next';
import { analyzeJob } from '../api/groq'; 



export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { jobDescription, userLevel, userStack, userTechnologies } = req.body;

    const prompt = `
Analyze the following job description and provide a detailed technology breakdown and study roadmap. 
User Level: ${userLevel}
User Stack: ${userStack}
User Technologies: ${userTechnologies}
Job Description: ${jobDescription}
`;


try {
    const analysis = await analyzeJob(prompt);
    res.status(200).json({ analysis });
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze job description' });
  }
};
