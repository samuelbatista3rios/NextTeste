"use client"

import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import axios from 'axios';

const { TextArea } = Input;
const { Title } = Typography;

const Home = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [userLevel, setUserLevel] = useState('');
const [userStack, setUserStack] = useState('');
const [userTechnologies, setUserTechnologies] = useState('');

  const handleAnalyze = async () => {
    const response = await axios.post('/api/analyze', { 
      jobDescription,
    userLevel,
    userStack,
    userTechnologies
    });
    setAnalysis(response.data.analysis);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title>Job Analyzer</Title>

      <TextArea 
        rows={10} 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)} 
        placeholder="Cole a descrição da vaga aqui" 
      />

<Input 
    value={userLevel} 
    onChange={(e) => setUserLevel(e.target.value)} 
    placeholder="Seu nível atual" 
  />
  <Input 
    value={userStack} 
    onChange={(e) => setUserStack(e.target.value)} 
    placeholder="Sua stack atual" 
  />
  <Input 
    value={userTechnologies} 
    onChange={(e) => setUserTechnologies(e.target.value)} 
    placeholder="Tecnologias que domina" 
  />
      <Button type="primary" onClick={handleAnalyze} style={{ marginTop: '20px' }}>
        Analisar Vaga
      </Button>
      {analysis && (
        <div style={{ marginTop: '20px' }}>
          <Markdown source={analysis} />
        </div>
      )}
    </div>
  );
};

export default Home;
