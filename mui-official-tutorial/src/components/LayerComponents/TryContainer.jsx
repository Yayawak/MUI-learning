import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";


const TryContainer = () => {
    return (
        <>
            {/* <Container maxWidth='sm'>
                AAAA
            </Container> */}
            <React.Fragment> 
                <CssBaseline />
                <Container maxWidth='sm'>
                    {/* <Box sx={{ bgcolor: 'primary.dark', height:'100vh'}}/> */}
                    <Box sx={{ backgroundColor: '#cfe8fc', height:'100vh'}}>
                        AAA
                    </Box>
                </Container>
            </React.Fragment>

        </>
    )
}

export default TryContainer