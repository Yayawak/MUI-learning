import * as React from 'react'
import {CssBaseline, Stack, Grid} from '@mui/material'
import {MainHeaderTab, } from './components/importHeaderTab'
import {RecentRepository} from './components/importLeftWindow'
import {MiddleWindow} from './components/importMiddleWindow'
import {RightWindow} from './components/importRightWindow'



function App() {
    return (
        <>
            {/* ? normalize to good-look css # like remove all bad margin */}
            <CssBaseline /> 

            <MainHeaderTab />
            {/* <Stack direction='row'
                spacing> */}
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <RecentRepository />
                </Grid>
                <Grid item xs={6}>
                    <MiddleWindow />
                </Grid>
                <Grid item xs={3}>
                    <RightWindow />
                </Grid>
            </Grid>
            {/* </Stack> */}

        </>
    );
}

export default App;
