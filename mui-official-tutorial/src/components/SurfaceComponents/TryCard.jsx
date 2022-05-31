import * as React from 'react'
import {
    Box, Card, CardActions, CardContent, 
    Button, Typography,
    SvgIcon
} from '@mui/material'

import {TextFields, Javascript} from '@mui/icons-material'


function CustomizedCard(props) {
    const {name, icon} = props

    return (
        <Card sx={{display:'inline-block', minWidth:300}}>
            <CardContent>
                <Typography sx={{fontsize:14}} color='text.secondary' gutterBottom>
                    This is ig
                </Typography>
                <Typography variant='h3' component='div'> {name} </Typography>
                <SvgIcon sx={{fontSize:140}} inheritViewBox>{icon}</SvgIcon>
            </CardContent>
            <CardActions>
                <Button size='small'> Learn More </Button>
            </CardActions>
        </Card>
    )
}
export default function TryCard() {
    return (
        <>
            <CustomizedCard name='Vim' icon={<TextFields />}/>
            <CustomizedCard name='Javascript' icon={<Javascript/>} />
        </>
    )
}