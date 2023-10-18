import React from 'react';
import WalletContainer from './components/WalletContainer';
import './App.css';
import { AppProvider } from './context/AppContext';

function App() {

  return (
    <AppProvider>
      <WalletContainer></WalletContainer>
    </AppProvider>
  )
}

export default App;
