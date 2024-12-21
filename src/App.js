import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { hackerTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Consultation from './components/Consultation';
import DiagnosisConsultation from './components/DiagnosisConsultation';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <ThemeProvider theme={hackerTheme}>
      <CssBaseline />
      <MatrixBackground />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Features />
        <Consultation />
        <DiagnosisConsultation />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
