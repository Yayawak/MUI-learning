import {List, ListSubheader, ListItemButton,
    ListItemIcon, ListItemText, Collapse,
    Paper
} from '@mui/material'
import {
    Inbox, Drafts, Send, ExpandLess, ExpandMore, StarBorder, StarPurple500
} from '@mui/icons-material'
import React from 'react'


const TryNestedList = () => {
    const [open, setOpen] = React.useState(true)
    const [star, setStar] = React.useState(true)
    const handleClick = () =>  setOpen(!open) 
    const handleStar = () => setStar(!star)
    return (
        <Paper elavation={9}>
            <List>
                <ListItemButton>
                    <ListItemIcon><Send /></ListItemIcon>
                    <ListItemText primary='Send meil' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon><Drafts /></ListItemIcon>
                    <ListItemText primary='Drafts' />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon><Inbox /></ListItemIcon>
                    <ListItemText primary='Inbox' />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleStar}>
                            <ListItemIcon> 
                                {star ? <StarBorder /> : <StarPurple500 />}
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Paper>
    )
}
export default TryNestedList