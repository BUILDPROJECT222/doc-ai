import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatInterface from './ChatInterface';
import MatrixBackground from './MatrixBackground';

const Consultation = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartConsultation = () => {
    setIsStarted(true);
  };

  const handleBack = () => {
    setIsStarted(false);
  };

  return (
    <div id="consultation">
      <MatrixBackground />
      <Container maxWidth="md" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        {isStarted ? (
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid #00ff00',
              backdropFilter: 'blur(5px)',
            }}
          >
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h4" sx={{ color: '#00ff00' }}>
                AI Medical Consultation
              </Typography>
              <Button 
                onClick={handleBack}
                sx={{ 
                  color: '#00ff00',
                  borderColor: '#00ff00',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                  }
                }}
              >
                End Consultation
              </Button>
            </Box>
            <ChatInterface />
          </Paper>
        ) : (
          <Paper
            elevation={3}
            sx={{
              p: 6,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid #00ff00',
              textAlign: 'center',
              backdropFilter: 'blur(5px)',
            }}
          >
            <SmartToyIcon 
              sx={{ 
                fontSize: 80, 
                color: '#00ff00',
                mb: 3,
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': {
                    opacity: 1,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  },
                  '50%': {
                    opacity: 0.7,
                    textShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
                  },
                  '100%': {
                    opacity: 1,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  },
                },
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#00ff00',
                mb: 3,
                textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
              }}
            >
              AI Medical Consultation
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#00ff00',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Get instant medical guidance powered by advanced AI. Describe your symptoms
              or health concerns, and receive personalized recommendations.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={handleStartConsultation}
              sx={{
                color: '#00ff00',
                borderColor: '#00ff00',
                px: 4,
                py: 1.5,
                fontSize: '1.2rem',
                '&:hover': {
                  borderColor: '#00ff00',
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                },
              }}
            >
              Start Consultation
            </Button>
            <Typography 
              variant="body2" 
              sx={{ 
                mt: 4, 
                color: '#00ff00',
                opacity: 0.7 
              }}
            >
              * This AI consultation is for informational purposes only and should not replace professional medical advice.
            </Typography>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default Consultation; 