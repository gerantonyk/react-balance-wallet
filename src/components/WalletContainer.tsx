import React, { FC, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WalletInput from './WalletInput';
import TokensList from './TokensList';
import { Token } from '../types/types';

const WalletContainer: FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [tokens, setTokens] = useState<Array<Token>>([]);

  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const handleGetTokensClick = () => {
    fetch(`http://localhost:3001/tokens?walletAddress=${walletAddress}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.tokens)
        setTokens(data.tokens);
      })
      .catch((error) => {
        console.error('Error getting balance', error);
      });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <WalletInput
            walletAddress={walletAddress}
            handleWalletAddressChange={handleWalletAddressChange}
            handleGetTokensClick={handleGetTokensClick}
          />
          {tokens ? <TokensList tokens={tokens} /> : <></>}
        </Box>
      </Container>
    </>
  );
};

export default WalletContainer;
