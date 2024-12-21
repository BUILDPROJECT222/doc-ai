import axios from 'axios';

const GROK_API_ENDPOINT = 'https://api.grok.x.ai/v1/chat/completions';
const GROK_API_KEY = process.env.REACT_APP_GROK_API_KEY;

const grokService = {
  async getConsultation(symptoms) {
    try {
      const response = await axios.post(
        GROK_API_ENDPOINT,
        {
          model: "grok-1",
          messages: [
            {
              role: "system",
              content: "You are DoctorAI, a medical consultant. Provide clear, professional medical advice while noting that you're an AI and serious conditions require real medical attention."
            },
            {
              role: "user",
              content: symptoms
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': `Bearer ${GROK_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Grok API Error:', error);
      throw new Error('Failed to get AI consultation');
    }
  }
};

export default grokService; 