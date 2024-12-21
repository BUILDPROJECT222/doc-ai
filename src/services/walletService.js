export const connectPhantomWallet = async () => {
  try {
    // Check if Phantom is installed
    const { solana } = window;

    if (!solana?.isPhantom) {
      throw new Error('Phantom wallet is not installed. Please install it from https://phantom.app/');
    }

    // Connect to wallet
    const response = await solana.connect();
    return response.publicKey.toString();
  } catch (error) {
    console.error('Wallet connection error:', error);
    throw error;
  }
};

export const disconnectPhantomWallet = async () => {
  try {
    const { solana } = window;
    
    if (!solana?.isPhantom) {
      throw new Error('Phantom wallet is not installed');
    }

    await solana.disconnect();
    return true;
  } catch (error) {
    console.error('Wallet disconnection error:', error);
    throw error;
  }
}; 