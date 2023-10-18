import React, { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WalletInput from './WalletInput';
import TokensList from './TokensList';
import { useAppContext } from '../context/AppContext';

const WalletContainer: FC = () => {
  const { tokens } = useAppContext();





  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <WalletInput
          />
          {tokens ? <TokensList tokens={tokens} /> : <></>}
        </Box>
      </Container>
    </>
  );
};

export default WalletContainer;
