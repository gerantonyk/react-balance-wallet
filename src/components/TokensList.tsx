import React, { FC } from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import { useAppContext } from '../context/AppContext';
const TokensList: FC = () => {
  const { tokens, selectedBlockchain } = useAppContext()

  const handleClick = (param: string) => {
    window.open(param);
  };

  return (
    tokens.length > 0 ? (
      <div style={{ marginTop: '16px' }}>
        {tokens.map((token, index) => (
          <div key={index} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '16px', marginRight: '30px' }}>
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
                  onClick={() => handleClick(selectedBlockchain.blockExplorerUrl + (token?.contractAddress ? `/address/${token?.contractAddress}` : ''))}
                  variant="outlined"
                  color="primary"
                />
              </div>
              <div>
                <strong>{Number(token.balanceReferenceToken).toFixed(5)} {token?.currency} </strong>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '25px', marginRight: '30px' }}>
              <div>
                <span>{Number(token.balance).toFixed(5)} {token.tokenSymbol}</span>
              </div>
              <div>
                <strong>u$s{Number(token.balanceUsd).toFixed(5)}</strong>
              </div>
            </div>
          </div>
        ))
        }
      </div >
    ) : null
  );
};



export default TokensList;