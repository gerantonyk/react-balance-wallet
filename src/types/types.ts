export interface Token {
  tokenName: string;
  thumbnail: string;
  balanceUsd: string;
  balance: string;
  balanceReferenceToken: string;
  tokenSymbol: string;
  contractAddress?: string;
}

export interface Currency {
  address?: string;
  name: string;
  symbol: string;
}
