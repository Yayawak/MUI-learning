import React from 'react'
import { Badge, createTheme, ButtonGroup, Divider, Box  } from '@mui/material'
import { Mail, ShoppingCart, Add, Remove,   } from '@mui/icons-material'
let theme = createTheme = () => {

}

const TryBadge = () => {
    const [count, setCount] = React.useState(1);
    const [invis, setInvis] = React.useState(false)
    return (
        <>
            <Badge>
                <Mail color='action.active'
                    sx={{ width: 100, height: 100 }} />
            </Badge>
            <Badge color='secondary' badgeContent={2}>
                <ShoppingCart />
            </Badge>
            <Divider />

            <Box sx={{
                color: 'action.active',
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                    marginBottom: 2,
                },
                '& .MuiBadge-root': {
                    marginRight: 4,
                },

            }}>
                <div>
                    <Badge color='secondary' badgeContent={count}>
                        <MailIcon />
                    </Badge>
                    <ButtonGroup aria-label='reduce'
                        onClick={()=>{
                            setCount(Math.max(count - 1, 0))
                        }}>

                    </ButtonGroup>
                </div>
            </Box>
        </>
    ) 
}

export default TryBadge