import React, { FC, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppContext } from '../context/AppContext';
import CurrencyAutocomplete from './CurrencyAutocomplete';


const WalletInput: FC<{
}> = () => {

  const { setLatestCurrencySent, setIsLoading, selectedCurrency, setTokens, walletAddress, setWalletAddress } = useAppContext();
  const handleGetTokensClick = () => {
    const queryParameters = selectedCurrency?.address ? `&contractAddress=${selectedCurrency.address}` : '';
    fetch(`http://localhost:3001/tokens?walletAddress=${walletAddress}${queryParameters}`)
      .then((response) => response.json())
      .then((data) => {
        setLatestCurrencySent(selectedCurrency)
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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const startTimer = () => {
    console.log('se ejeu')
    if (intervalId) {
      console.log('detuvo')
      clearInterval(intervalId);
      setIntervalId(null);
    }
    console.log('inicia')
    const newIntervalId = setInterval(() => {
      handleGetTokensClick()
    }, 10000);

    setIntervalId(newIntervalId);

  };
  useEffect(() => {
    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
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
        onClick={() => {
          setIsLoading(true)
          handleGetTokensClick();
          startTimer(); // Iniciar el temporizador
        }}
        sx={{ display: 'block', margin: '0 auto', marginTop: '20px' }}
      >
        Get Balance
      </Button>
    </div>
  );
};

export default WalletInput;
