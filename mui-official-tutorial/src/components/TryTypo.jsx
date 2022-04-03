import { styled, createTheme, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { Divider, ThemeProvider } from '@mui/material';
import React from 'react'

let themeA = createTheme({
    typography: {
        poster: {
            color: 'red',
            fontSize: 50
        },
        fontSize: 25,
        fontWeight: 0
    }
});
themeA.spacing(2)
const Div = styled('div')(({ theme }) => (
    {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1)
    }
))
const TryTypo = () => {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <ThemeProvider theme={themeA}>
                {/* margin all directions = m */}
                    <Typography m={20} variant='h1' component='table'>Heading</Typography>
                    <Typography varaint='h6' gutterBottom component='div'>h6 smallest size</Typography>
                    <Typography variant='body1' gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant='button' display='block'>button simp</Typography>
                    <Typography variant='poster' gutterBottom>Poster</Typography>
                </ThemeProvider>
            </Box>
            <Divider />
            <Div>{'this is mock button by div'}</Div>
            <Button variant='contained' color='primary'>Btn bts</Button>
        </>
    )
}

export default TryTypo