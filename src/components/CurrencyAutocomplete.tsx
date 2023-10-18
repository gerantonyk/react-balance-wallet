import React, { FC, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { Currency } from '../types/types';
const CurrencyAutocomplete: FC = () => {
  const { currencies, selectedCurrency, setSelectedCurrency, setCurrencies } = useAppContext();

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
  }, [setCurrencies]);

  return (
    <Autocomplete
      options={currencies}
      getOptionLabel={(option) => `${option.symbol} ${option.name}`}
      value={selectedCurrency}
      onChange={(_, newValue) => setSelectedCurrency(newValue)}
      renderInput={(params) => <TextField {...params} label="Select Currency" sx={{ marginLeft: '8px', marginTop: '8px', maxWidth: '400px' }} />}
    />
  );
};

export default CurrencyAutocomplete;