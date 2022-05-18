import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const TextFieldComp = (props) => {
    const [value, setValue] = useState('');

    const { label, options } = props;
    
    const handleChange = (e) => {setValue(e.target.value)};

    return (
    <Box mt={3} width="100%">
        <FormControl fullWidth>
            <TextField
              onChange={handleChange}
              variant="outlined"
              label={label}
              type='text'
              size='small'
            />
        </FormControl>
    </Box>
    )
}

export default TextFieldComp;