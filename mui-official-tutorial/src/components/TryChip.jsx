import { Chip, Stack } from '@mui/material'
import React from 'react';

const TryChip = () => {
    return (
        <>
            <Stack direction='row' spacing={1} >
                <Chip label='Manga' />
                <Chip label='Running' />
            </Stack>
        </>
    )
}
