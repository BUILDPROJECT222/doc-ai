import axios from 'axios';

const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const TWITTER_API_ENDPOINT = 'YOUR_BACKEND_ENDPOINT/tweet'; // You'll need a backend for Twitter API

const generateTweetContent = async () => {
  try {
    const response = await axios.post(
      OPENAI_API_ENDPOINT,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are HiDoc AI, an advanced medical AI assistant. Create engaging tweets about:
            1. Health tips and advice
            2. Medical technology innovations
            3. AI in healthcare
            4. Preventive care
            5. Mental health awareness
            Keep the tone professional yet approachable. Include relevant hashtags.
            Format: Tweet text (max 280 chars) + hashtags`
          },
          {
            role: "user",
            content: "Generate a medical advice tweet"
          }
        ],
        temperature: 0.7,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating tweet:', error);
    throw error;
  }
};

const postTweet = async (tweetContent) => {
  try {
    const response = await axios.post(TWITTER_API_ENDPOINT, {
      text: tweetContent
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TWITTER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
};

export { generateTweetContent, postTweet }; 