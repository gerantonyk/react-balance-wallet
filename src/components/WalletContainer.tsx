import React, { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WalletInput from './WalletInput';
import TokensList from './TokensList';
import { CircularProgress, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const WalletContainer: FC = () => {
  const { isLoading } = useAppContext()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
          <Typography variant="h3" align="center" sx={{ paddingTop: '20px', marginBottom: '30px' }}>
            Wallet Balance
          </Typography>
          <WalletInput
          />
          {isLoading ?

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: '20px' }}
            >
              <CircularProgress />
            </Box>
            : <TokensList />}
        </Box>
      </Container>
    </>
  );
};

export default WalletContainer;
