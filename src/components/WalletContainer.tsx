import React, { FC, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WalletInput from './WalletInput';
import TokensList from './TokensList';

const WalletContainer: FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [tokens, setTokens] = useState([]);

  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const handleGetTokensClick = () => {
    // Realizar una solicitud fetch aquí
    // Por ejemplo:
    fetch(`http://localhost:3001/tokens?walletAddress=${walletAddress}`)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado del saldo con la respuesta del servidor
        console.log('asi viene', data);
        setTokens(data.tokens);
      })
      .catch((error) => {
        console.error('Error al obtener el saldo:', error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <WalletInput
            walletAddress={walletAddress}
            handleWalletAddressChange={handleWalletAddressChange}
            handleGetTokensClick={handleGetTokensClick}
          />
          <TokensList tokens={tokens} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default WalletContainer;
