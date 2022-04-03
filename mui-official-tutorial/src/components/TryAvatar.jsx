import React from 'react'
import { Avatar, AvatarGroup, Stack, } from '@mui/material'
import { Abc, AirplanemodeActive, LunchDining } from '@mui/icons-material'
import giyu from './../assets/Giyu.jpg'
import muichiro from './../assets/Muichiro.jpg'
import { createTheme, ThemeProvider } from '@mui/material'
// let theme = createTheme({
//     Avatar: {
//         width: '200px',
//         height: 200
//     }
// })

const StyledAvatar = ({ children, ...props}) => (
    <Avatar sx={{height: '70px', width: '70px' }} {...props} >
        {children}
    </Avatar>
)
const TryAvatar = () => {
    return (
        <>
            <AvatarGroup max={4}>
                    <StyledAvatar variant='square'>
                        <Abc />
                    </StyledAvatar>
                    <AirplanemodeActive />
                    <Avatar src={muichiro} />
                    <StyledAvatar src={giyu} />
                    <Avatar>
                        <LunchDining />
                    </Avatar>

            </AvatarGroup>
        </>
    )
}

export { TryAvatar }