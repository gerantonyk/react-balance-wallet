import React, { FC } from 'react';

const TokensList: FC<{ tokens: Array<{ tokenName: string }> }> = ({ tokens }) => {
  return (
    <div>
      {tokens.length > 0 ? (
        tokens.map((token: { tokenName: string }, index) => (
          <span key={index}>{token.tokenName}</span>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default TokensList;