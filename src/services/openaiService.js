import axios from 'axios';

const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const openaiService = {
  async getConsultation(userInput) {
    try {
      if (!process.env.REACT_APP_OPENAI_API_KEY) {
        throw new Error('OpenAI API key is not configured');
      }

      const response = await axios.post(
        OPENAI_API_ENDPOINT,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are an advanced AI Medical Assistant, trained to provide helpful medical information and guidance. 
              Always maintain a professional and caring tone. Include relevant medical disclaimers when appropriate. 
              Format your responses clearly with line breaks and bullet points when listing information.
              Remember to:
              1. Ask clarifying questions when needed
              2. Provide evidence-based information
              3. Emphasize when immediate medical attention is needed
              4. Include preventive care advice when relevant`
            },
            {
              role: "user",
              content: userInput
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
          presence_penalty: 0.1,
          frequency_penalty: 0.1
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.data?.choices?.[0]?.message?.content) {
        throw new Error('Invalid response from OpenAI');
      }

      return response.data.choices[0].message.content;

    } catch (error) {
      console.error('OpenAI API Error:', error);

      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenAI API key configuration.');
      }

      if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a few moments.');
      }

      throw new Error('Failed to get AI consultation. Please try again.');
    }
  }
};

export default openaiService; 