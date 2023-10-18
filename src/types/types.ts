export interface Token {
  tokenName: string;
  thumbnail: string;
  balanceUsd: string;
  balance: string;
}

export interface Currency {
  address?: string;
  name: string;
  decimals: number;
  symbol: string;
  thumbnail: string;
}