import React from 'react'
import { PropTypes } from '@mui/material'
import {
    Tabs, Tab, Typography, Box, Paper
} from '@mui/material'


export default function MainHeaderTab(){
    return (
        <>
            <Tabs>
                <Tab label='Item-One' aria-label='AAA'/>
            </Tabs>
        </>
    )
}
{/* <Box sx={{width:'100%'}}>
            <Box sx={{borderBottom:1, borderColor: 'divinder'}}>
                <Tabs>
                    <Tab label='Item-One'/>
                </Tabs> 
            </Box>
            <Box>
            </Box>
        </Box> */}