import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Token, Currency, Blockchain } from '../types/types';
import { blockchains } from '../common/const';

type AppContextType = {
  currencies: Currency[];
  setCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>;
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
  selectedCurrency: Currency | null;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<Currency | null>>;
  tokens: Token[];
  setTokens: React.Dispatch<React.SetStateAction<Token[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  latestCurrencySent: Currency | null;
  setLatestCurrencySent: React.Dispatch<React.SetStateAction<Currency | null>>;
  selectedBlockchain: Blockchain;
  setSelectedBlockchain: React.Dispatch<React.SetStateAction<Blockchain>>;
};


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [latestCurrencySent, setLatestCurrencySent] = useState<Currency | null>(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState<Blockchain>(blockchains[0]);

  return (
    <AppContext.Provider value={{ selectedBlockchain, setSelectedBlockchain, latestCurrencySent, setLatestCurrencySent, currencies, setCurrencies, walletAddress, setWalletAddress, selectedCurrency, setSelectedCurrency, tokens, setTokens, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
};