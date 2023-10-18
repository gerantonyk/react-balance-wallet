import { Button, Container, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const WalletContainer: FC = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <TextField id="outlined-basic"
            label="Address"
            variant="outlined"
          />

          <Button variant="contained" >GetBalance</Button>
        </Box>

      </Container>
    </React.Fragment>
  );
};

export default WalletContainer;
