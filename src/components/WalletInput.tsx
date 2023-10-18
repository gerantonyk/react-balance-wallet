import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const WalletInput: FC<{
  walletAddress: string;
  handleWalletAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetTokensClick: () => void;
}> = ({ walletAddress, handleWalletAddressChange, handleGetTokensClick }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={walletAddress}
        onChange={handleWalletAddressChange}
      />
      <Button variant="contained" onClick={handleGetTokensClick}>
        Get Balance
      </Button>
    </div>
  );
};

export default WalletInput;
