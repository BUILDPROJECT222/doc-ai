import { createTheme } from '@mui/material/styles';

// Import the font
import '@fontsource/source-code-pro/400.css'; // Regular weight
import '@fontsource/source-code-pro/700.css'; // Bold weight

export const hackerTheme = createTheme({
  typography: {
    fontFamily: '"Source Code Pro", monospace',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
    },
    secondary: {
      main: '#0f0',
    },
    background: {
      default: '#000000',
      paper: '#001100',
    },
    text: {
      primary: '#00ff00',
      secondary: '#00cc00',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#00ff00 #001100",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#001100",
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#00ff00",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#00ff00",
          },
        },
      },
    },
  },
}); 