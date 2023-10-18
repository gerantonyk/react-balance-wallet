import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppContext } from '../context/AppContext';
import CurrencyAutocomplete from './CurrencyAutocomplete';


const WalletInput: FC<{
}> = () => {

  const { setIsLoading, selectedCurrency, setTokens, walletAddress, setWalletAddress } = useAppContext();
  const handleGetTokensClick = () => {
    setIsLoading(true)
    const queryParameters = selectedCurrency?.address ? `&contractAddress=${selectedCurrency.address}` : '';
    fetch(`http://localhost:3001/tokens?walletAddress=${walletAddress}${queryParameters}`)
      .then((response) => response.json())
      .then((data) => {
        setTokens(data.tokens);
      })
      .catch((error) => {
        alert('invalid address')
        console.error('Error getting balance', error);
      }).finally(() => { setIsLoading(false) });
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
        sx={{ marginLeft: '8px', marginTop: '8px' }}
      />
      <CurrencyAutocomplete />
      <Button
        variant="contained"
        onClick={handleGetTokensClick}
        sx={{ display: 'block', margin: '0 auto', marginTop: '20px' }}
      >
        Get Balance
      </Button>
    </div>
  );
};

export default WalletInput;
