import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link as ScrollLink } from 'react-scroll';

const Features = () => {
  const contractAddress = "GV6oVWimyCvhxxYaF5QYSHdeapRuCR9i84dY71Q8pump";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    alert('Contract address copied to clipboard!');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Contract Address Section */}
      <Box 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
          gap: 2,
          p: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ff00',
          borderRadius: 1,
          flexWrap: 'wrap'
        }}
      >
        <Box 
          component="img"
          src="/solana-sol-logo.svg" // Make sure to add this image to your public folder
          alt="Solana Logo"
          sx={{ 
            height: 30,
            width: 30,
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0.7 },
              '100%': { opacity: 1 },
            },
          }}
        />
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#00ff00',
            fontFamily: 'Source Code Pro, monospace',
          }}
        >
          Contract Address:
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#00ff00',
            fontFamily: 'Source Code Pro, monospace',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            padding: '4px 8px',
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.2)',
            }
          }}
          onClick={handleCopyAddress}
        >
          {contractAddress}
        </Typography>
        <Tooltip title="Copy Address">
          <IconButton 
            onClick={handleCopyAddress}
            sx={{
              color: '#00ff00',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
              }
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Existing Grid Container */}
      <Grid container spacing={4}>
        {/* Medical Consultation Card */}
        <Grid item xs={12} md={6}>
          <ScrollLink to="consultation" smooth={true} duration={500} offset={-100}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid #00ff00',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  backgroundColor: 'rgba(0, 17, 0, 0.95)',
                },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <SmartToyIcon 
                  sx={{ 
                    fontSize: 60, 
                    color: '#00ff00',
                    mb: 2,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0.7 },
                      '100%': { opacity: 1 },
                    },
                  }} 
                />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#00ff00',
                    mb: 2,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  Medical Consultation
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#00ff00',
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  Get instant medical guidance from our AI assistant
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#00ff00',
                    borderColor: '#00ff00',
                    '&:hover': {
                      borderColor: '#00ff00',
                      backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    },
                  }}
                >
                  Start Consultation
                </Button>
              </Box>
            </Paper>
          </ScrollLink>
        </Grid>

        {/* Diagnosis Card */}
        <Grid item xs={12} md={6}>
          <ScrollLink to="diagnosis" smooth={true} duration={500} offset={-100}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid #00ff00',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  backgroundColor: 'rgba(0, 17, 0, 0.95)',
                },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <HealthAndSafetyIcon 
                  sx={{ 
                    fontSize: 60, 
                    color: '#00ff00',
                    mb: 2,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0.7 },
                      '100%': { opacity: 1 },
                    },
                  }} 
                />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#00ff00',
                    mb: 2,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  AI Diagnosis
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#00ff00',
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  Advanced AI-powered symptom analysis and diagnosis
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#00ff00',
                    borderColor: '#00ff00',
                    '&:hover': {
                      borderColor: '#00ff00',
                      backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    },
                  }}
                >
                  Start Diagnosis
                </Button>
              </Box>
            </Paper>
          </ScrollLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features; 
