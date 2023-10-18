import React, { FC, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppContext } from '../context/AppContext';
import CurrencyAutocomplete from './CurrencyAutocomplete';


const WalletInput: FC<{
}> = () => {

  const { selectedBlockchain, setLatestCurrencySent, setIsLoading, selectedCurrency, setTokens, walletAddress, setWalletAddress } = useAppContext();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  let error = false
  const handleGetTokensClick = async () => {
    let queryParameters = selectedCurrency?.address ? `&contractAddress=${selectedCurrency.address}` : '';
    queryParameters += `&blockchain=${selectedBlockchain.code}`;

    try {
      const response = await fetch(`http://localhost:3001/tokens?walletAddress=${walletAddress}${queryParameters}`);

      if (!response.ok) {
        alert('Invalid address');
        console.error('Error getting balance');
        console.log('salgo por aca', error)
        error = true
        setTokens([]);
        return;
      }
      error = false
      const data = await response.json();
      setLatestCurrencySent(selectedCurrency);
      setTokens(data.tokens);
    } catch (error) {
      alert('Invalid address');
      console.error('Error getting balance', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const startTimer = () => {
    console.log('pasti', error)
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    console.log(error)
    if (!error) {
      const newIntervalId = setInterval(() => {
        handleGetTokensClick()
      }, 5000);

      setIntervalId(newIntervalId);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

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
        onClick={async () => {
          await setIsLoading(true)
          await handleGetTokensClick();
          await startTimer();
        }}
        sx={{ display: 'block', margin: '0 auto', marginTop: '20px' }}
      >
        Get Balance
      </Button>
    </div>
  );
};

export default WalletInput;
