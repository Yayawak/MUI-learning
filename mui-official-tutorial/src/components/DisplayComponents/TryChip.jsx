import { Done, Delete, TagFaces } from '@mui/icons-material'
import { Chip, Stack, Typography, Avatar, Divider, Paper, styled, ListItem } from '@mui/material'
import React from 'react';
import giyu from '../../assets/Giyu.jpg' 
const LisItem = styled('li')(
    ({theme}) => ({
    margin: theme.spacing(0.5)
    })
)
const TryChip = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = chipToDelete => () => {
        setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
    }
    return (
        <>
            <Stack direction='row' spacing={1} >
                <Chip label='Manga' onClick={() => {

                }} />
                <Chip label='Running' variant='outlined' color='success' />
                <Chip label='Delete all items' variant='outlined' onDelete={() => {

                }} color='warning' />
                <Chip label='Clickable link'
                    color='primary'
                    component='a'
                    href='#basic-ship'
                    varaint='outlined'
                    clickable
                />
            </Stack>
            <Typography varaint='h2'>
                Custom delete icon
            </Typography>
            <Chip
                avatar={<Avatar src={giyu} />}
                size='small'
                label='delete me'
                deleteIcon={<Done />}
                onClick={() => { }}
            />
            <Divider />
            <Typography variant='h1' >
                Array with Chips
            </Typography>
            <Paper 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'noen',
                    p: 0.5,
                    m: 0,
                }}
                component='ul'
            >
                {
                    chipData.map(data => {
                        let icon;
                        if(data.label === 'React') { icon = <TagFaces />}
                        
                        return (
                            <ListItem key={data.key} >
                                <Chip 
                                    icon={icon}
                                    label={data.label}>
                                    onDelete={
                                        // data.label == 'React' ? '' : ''
                                    } 
                                </Chip>
                            </ListItem>
                        )
                    }
                    )
                    
                }
            </Paper>
        </>
    )
}

export default TryChip