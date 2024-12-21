import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import openaiService from '../services/openaiService';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (messages.length === 0) {
      setMessages([{
        type: 'ai',
        content: "Hello! I'm your AI Medical Assistant. I'm here to help provide medical information and guidance. Please describe your symptoms or health concerns, and I'll do my best to assist you. Remember that this is not a replacement for professional medical care."
      }]);
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      type: 'user',
      content: input.trim()
    };

    try {
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      // Get conversation history for context
      const conversationHistory = messages
        .slice(-4) // Get last 4 messages for context
        .map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));

      const response = await openaiService.getConsultation(
        userMessage.content,
        conversationHistory
      );
      
      setMessages(prev => [...prev, {
        type: 'ai',
        content: response
      }]);

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        type: 'ai',
        content: error.message || "I apologize, but I'm having trouble connecting. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          flex: 1, 
          mb: 2, 
          p: 2, 
          overflow: 'auto',
          backgroundColor: '#001100',
          border: '1px solid #00ff00',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: message.type === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Paper
              sx={{
                p: 2,
                maxWidth: '80%',
                backgroundColor: message.type === 'user' ? '#003300' : '#001100',
                border: '1px solid #00ff00',
              }}
            >
              <Typography
                sx={{
                  color: '#00ff00',
                  whiteSpace: 'pre-line',
                  fontFamily: 'Source Code Pro, monospace',
                }}
              >
                {message.type === 'ai' ? 'AI Doctor> ' : 'You> '}
                {message.content}
              </Typography>
            </Paper>
          </Box>
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
            <CircularProgress size={20} sx={{ color: '#00ff00' }} />
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Paper>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ 
          display: 'flex',
          gap: 2
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#00ff00',
              borderColor: '#00ff00',
              backgroundColor: '#001100',
              fontFamily: 'Source Code Pro, monospace',
              '& fieldset': {
                borderColor: '#00ff00',
              },
              '&:hover fieldset': {
                borderColor: '#00ff00',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ff00',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={isLoading || !input.trim()}
          sx={{
            color: '#00ff00',
            borderColor: '#00ff00',
            '&:hover': {
              borderColor: '#00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 255, 0, 0.3)',
              color: 'rgba(0, 255, 0, 0.3)',
            },
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatInterface; 