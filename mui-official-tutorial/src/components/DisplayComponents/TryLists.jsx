import {List, ListItem, ListItemText, ListItemButton, Typography, Divider,
    Paper, ListItemIcon}
from '@mui/material'
import {Inbox, Drafts,} from '@mui/icons-material'
import React from 'react'
import {
    Link, Route, Routes, 
    MemoryRouter, useLocation
} from 'react-router-dom'

function ListItemLink(props) {
    const { icon, primary, to} = props
    return (
        <li>
            <ListItem button >
                <ListItemIcon> {icon} </ListItemIcon>
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    )
}
const TryLists = () => {
    return (
        <>
            <Paper elevation={20}>
                <List aria-label="main mailbox folders">
                    <ListItemLink to='/inbox' primary='Inbox' icon={<Inbox />}/>
                    <ListItemLink to='/drafts' primary='Drafts' icon={<Drafts/>} />
                </List>
                <Divider />
                <List aria-label="secondary mailbox folders">
                    <ListItemButton component='a' href='#'>
                        <ListItemText primary='Trash' />
                    </ListItemButton>
                    <ListItemButton component='a' href='#'>
                        <ListItemText primary='Spam' />
                    </ListItemButton>
                </List>

            </Paper>

        </>
    )
}

export default TryLists