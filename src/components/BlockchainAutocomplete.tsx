
import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { blockchains } from '../common/const';


const BlockchainAutocomplete: FC = () => {
  const { selectedBlockchain, setSelectedBlockchain } = useAppContext()
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      sx={{ padding: '16px' }}
    >
      <Autocomplete
        sx={{ width: '250px' }}
        options={blockchains}
        getOptionLabel={(option) => `${option.name}`}
        defaultValue={blockchains[0]}
        value={selectedBlockchain}
        onChange={(_, newValue) => setSelectedBlockchain(newValue || blockchains[0])}
        renderInput={(params) => <TextField {...params} label="Select chain" sx={{ marginLeft: '8px', marginTop: '8px', maxWidth: '400px' }} />}
      />
    </Box>

  );
};

export default BlockchainAutocomplete;