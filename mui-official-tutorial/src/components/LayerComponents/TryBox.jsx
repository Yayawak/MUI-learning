import * as React from 'react';
import {Box, Button} from '@mui/material'

export default function TryBox() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        
      }}
    />
  );
}


export function TryBoxComponent() {
    return (
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Button>Save</Button>
        </Box>
    );
}
