import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import XIcon from './icons/XIcon';
import { connectPhantomWallet, disconnectPhantomWallet } from '../services/walletService';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [connecting, setConnecting] = useState(false);

  const handleConnectWallet = async () => {
    try {
      setConnecting(true);
      const address = await connectPhantomWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert(error.message);
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnectPhantomWallet();
      setWalletAddress('');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      alert(error.message);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <LocalHospitalIcon sx={{ color: '#00ff00', mr: 2 }} />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: '#00ff00',
            fontFamily: 'Source Code Pro, monospace',
          }}
        >
          AI Doctor
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Follow HiDoc AI on X">
            <IconButton
              href="https://x.com/Hidocaiagent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HiDoc AI on X"
              sx={{
                color: '#00ff00',
                border: '1px solid #00ff00',
                padding: '8px',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                },
              }}
            >
              <XIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>

          {walletAddress ? (
            <Tooltip title="Click to copy address">
              <Button
                variant="outlined"
                onClick={() => {
                  navigator.clipboard.writeText(walletAddress);
                  alert('Address copied to clipboard!');
                }}
                onDoubleClick={handleDisconnectWallet}
                sx={{
                  color: '#00ff00',
                  borderColor: '#00ff00',
                  '&:hover': {
                    borderColor: '#00ff00',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                  },
                }}
              >
                {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`}
              </Button>
            </Tooltip>
          ) : (
            <Button
              onClick={handleConnectWallet}
              disabled={connecting}
              variant="outlined"
              startIcon={<AccountBalanceWalletIcon />}
              sx={{
                color: '#00ff00',
                borderColor: '#00ff00',
                '&:hover': {
                  borderColor: '#00ff00',
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                },
              }}
            >
              {connecting ? 'Connecting...' : 'Connect Wallet'}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 