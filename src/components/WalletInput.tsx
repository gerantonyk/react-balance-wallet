import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppContext } from '../context/AppContext';
import CurrencyAutocomplete from './CurrencyAutocomplete';


const WalletInput: FC<{
}> = () => {

  const { setTokens, walletAddress, setWalletAddress } = useAppContext();
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
  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };


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

      <CurrencyAutocomplete />
    </div>
  );
};

export default WalletInput;
