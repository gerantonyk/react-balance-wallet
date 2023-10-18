export interface Token {
  tokenName: string;
  thumbnail: string;
  balanceUsd: string;
  balance: string;
  balanceReferenceToken: string;
  tokenSymbol: string;
  contractAddress?: string;
  currency?: string;
}

export interface Currency {
  address?: string;
  name: string;
  symbol: string;
}

export interface Blockchain {
  name: string;
  code: string;
  blockExplorerUrl: string;
  tokenSymbol: string;
  tokenName: string;
}
