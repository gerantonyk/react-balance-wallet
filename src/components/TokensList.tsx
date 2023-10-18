import React, { FC } from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { Token } from '../types/token';
const TokensList: FC<{ tokens: Array<Token> }> = ({ tokens }) => {
  return (
    <div>
      {tokens.map((token, index) => (
        <div key={index} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Chip
                avatar={token.thumbnail ? (
                  <Avatar alt={token.tokenName} src={token.thumbnail} />
                ) : (
                  <Avatar>
                    <MonetizationOnRoundedIcon />
                  </Avatar>
                )}
                label={token.tokenName}
                clickable
                variant="outlined"
                color="primary"
              />
            </div>
            <div>
              <strong>${token.balanceUsd}</strong>
            </div>
          </div>
          <div>
            <span>{token.balance}</span>
          </div>
        </div>
      ))}
    </div>
  );
};



export default TokensList;