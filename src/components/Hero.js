import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ff00',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Lines */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `
              repeating-linear-gradient(
                90deg,
                #00ff00 0px,
                #00ff00 1px,
                transparent 1px,
                transparent 30px
              ),
              repeating-linear-gradient(
                0deg,
                #00ff00 0px,
                #00ff00 1px,
                transparent 1px,
                transparent 30px
              )
            `,
            animation: 'move 20s linear infinite',
            '@keyframes move': {
              '0%': { transform: 'translate(0, 0)' },
              '100%': { transform: 'translate(30px, 30px)' },
            },
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <LocalHospitalIcon 
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
            variant="h2"
            component="h1"
            sx={{
              color: '#00ff00',
              fontFamily: 'Source Code Pro, monospace',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
              animation: 'glitch 1s linear infinite alternate',
              '@keyframes glitch': {
                '2%, 64%': {
                  transform: 'translate(2px,0) skew(0deg)',
                },
                '4%, 60%': {
                  transform: 'translate(-2px,0) skew(0deg)',
                },
                '62%': {
                  transform: 'translate(0,0) skew(5deg)',
                },
              },
            }}
          >
            HiDoc AI
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#00ff00',
              fontFamily: 'Source Code Pro, monospace',
              mb: 4,
              opacity: 0.9,
              position: 'relative',
              '&::before': {
                content: '">>"',
                marginRight: '8px',
                opacity: 0.7,
              },
              animation: 'typing 3.5s steps(40, end)',
              whiteSpace: 'nowrap',
              '@keyframes typing': {
                from: { width: '0' },
                to: { width: '100%' },
              },
            }}
          >
            Your personal AI medical consultant
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#00ff00',
              fontFamily: 'Source Code Pro, monospace',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.8,
              lineHeight: 1.8,
              position: 'relative',
              '&::before': {
                content: '"$"',
                marginRight: '8px',
                opacity: 0.7,
              },
            }}
          >
            Combining advanced artificial intelligence with empathetic healthcare guidance
            for better health outcomes. Experience the future of medical consultation
            powered by cutting-edge AI technology.
          </Typography>

          {/* Decorative Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              color: '#00ff00',
              opacity: 0.3,
              fontFamily: 'Source Code Pro, monospace',
              animation: 'blink 1s infinite',
              '@keyframes blink': {
                '0%, 100%': { opacity: 0.3 },
                '50%': { opacity: 0.1 },
              },
            }}
          >
            {`<AI/>`}
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              color: '#00ff00',
              opacity: 0.3,
              fontFamily: 'Source Code Pro, monospace',
              animation: 'blink 1s infinite',
              '@keyframes blink': {
                '0%, 100%': { opacity: 0.3 },
                '50%': { opacity: 0.1 },
              },
            }}
          >
            {`</Health>`}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Hero; 