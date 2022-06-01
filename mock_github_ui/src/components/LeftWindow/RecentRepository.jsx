import * as React from 'react';
import {Container, Box, Stack, ListItemText, Link, Avatar, ListItemAvatar,
    ListItem, Button, Divider, Typography, List
 } from '@mui/material'
import {MenuBook} from '@mui/icons-material'
import { TextField } from '@mui/material';

const RepositoryList = (props) => {
    const {name} = props
    return (
        <ListItem component='a'>
            <ListItemAvatar>
                <Avatar>Y</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name}/>
            {/* <Typography variant='h6'>{name}</Typography> */}
        </ListItem>
    )
}
const RecentRepository = () => {
    return (
        <>
            <Stack maxWidth="sm" direction='column' sx={{//>width:450, 
                height:'100%', display:'flex', alignItems:'center', 
                padding:'30px',
                // bgcolor:'#bbb3b3'
                bgcolor:'#ece7e7a4'
                }} spacing={3}
                >
                <Box sx={{width:300, height:150}}>
                    <Stack direction='row' spacing={4}>
                        <Typography variant='subtitle1' fontWeight='bold'>Recent Repositories</Typography>
                        <Button variant='contained' size='medium'
                            sx={{borderRadius:4, width:'20em', height:'4em'}}>
                            <MenuBook />
                            <Typography>New</Typography>
                        </Button>
                    </Stack>
                    <TextField variant='outlined' label='Find a repository...'
                        sx={{borderRadius:4, }}
                        fullWidth />
                </Box>
                <Box>
                    <List dense={true} justifyContent=''>
                        <RepositoryList name='Machine-learner' />
                        <RepositoryList name='15React-project' />
                        <RepositoryList name='MUI-learning' />
                        <RepositoryList name='Machine-learner' />
                        <RepositoryList name='15React-project' />
                        <RepositoryList name='MUI-learning' />
                        <ListItemText>Show more</ListItemText>
                    </List>
                </Box>
                <Divider variant='inset'/>
                <Stack>
                    <Typography variant='subtitle1'>Recent activity</Typography>
                    <Typography variant='subtitle2'>Lorem ipsm sdfs sdfs  dfsdflsdfjksdjf </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default RecentRepository