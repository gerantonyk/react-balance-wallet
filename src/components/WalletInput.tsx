import React, { FC, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Autocomplete } from '@mui/material';
import { Currency } from '../types/types';


const WalletInput: FC<{
  walletAddress: string;
  handleWalletAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetTokensClick: () => void;
}> = ({ walletAddress, handleWalletAddressChange, handleGetTokensClick }) => {

  const [currencies, setCurrencies] = useState<Array<Currency>>([])
  const [selectedCurrency, SetSelectedCurrency] = useState<Currency | null>(null)
  useEffect(() => {
    fetch(`http://localhost:3001/currencies`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueCurrencies: Array<Currency> = [];
        const seenSymbols = new Set();
        const returnedCurrencies: Array<Currency> = data.currencies
        returnedCurrencies.forEach((currency) => {
          if (!seenSymbols.has(currency.symbol + currency.name)) {
            seenSymbols.add(currency.symbol + currency.name); // Agregamos el símbolo al Set para marcarlo como "visto".
            uniqueCurrencies.push(currency);   // Agregamos la moneda a la lista de monedas únicas.
          }
        });
        setCurrencies(uniqueCurrencies);
        console.log(uniqueCurrencies)
      })
      .catch((error) => {
        console.error('Error getting currencies', error);
      });
  }, []);

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

      {currencies ? <Autocomplete
        options={currencies}
        getOptionLabel={(option) => `${option.symbol} ${option.name} `}
        value={selectedCurrency}
        onChange={(_, newValue) => SetSelectedCurrency(newValue)}
        renderInput={(params) => <TextField {...params} label="Select Currency" />}
      /> : <></>}
    </div>
  );
};

export default WalletInput;
