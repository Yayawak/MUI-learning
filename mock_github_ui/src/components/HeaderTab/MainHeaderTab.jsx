import * as React from 'react'
import { Tabs, Tab, Typography, Box, Paper, Avatar, Badge, Icon,
    Stack, Autocomplete, TextField} from '@mui/material'
import {NotificationsNone, ArrowDropDown, NotificationsNoneOutlined } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'


const github_img = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' 
const plus_img = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/plus.png'
const CustomizedTab = (props) => {
    const {children, currentTab, index, label, ...other} = props
    return (
        <Tab component='Typography' label={label} {...other} 
            sx={{color:'#FFFFFF', fontSize:'16px', fontWeight:'bold' ,textAlign:'center'}}
        >
            {children}
            {/* <Typography variant='h4'>label</Typography> */}
        </Tab>
    )
}
const mockData = [{title:'A'}, {title:'B'}]
export default function MainHeaderTab(){
    const [currentTabIndex, setCurrentTabIndex] = React.useState(0)
    const handleCurrentTab = (e, newTab) => setCurrentTabIndex(newTab)

    return (
        <>
            <Stack sx={{width:'100%', height:'10%', margin:'0px', 
                    justifyContent:'space-between', alignItems:'flex-start',
                    padding:'20px', backgroundColor: '#24292F', }}  //? #24292F
                spacing={2} direction='row'>
                <Stack direction='row' spacing={4}>
                    <Avatar src={github_img}/>
                    <Autocomplete 
                        // freeSolo 
                        disablePortal
                        id='search box'
                        options={mockData.map((data)=>data.title)}
                        renderInput={(params)=> <TextField {...params} 
                            sx={{bgcolor:'#d4d4d7', borderRadius:4}}
                            label='Search bar'/>}
                        sx={{width:300 }}/>
                </Stack>
                <Box spacing={4}>
                    <Tabs sx={{padding:'4'}} value={currentTabIndex}
                        onChange={handleCurrentTab}>
                        <CustomizedTab label='Pull requests' currentTab={currentTabIndex} index={0}/>
                        <CustomizedTab label='Issues' currentTab={currentTabIndex} index={1}/>
                        <CustomizedTab label='Marketplace' currentTab={currentTabIndex} index={2}/>
                        <CustomizedTab label='Explore' currentTab={currentTabIndex} index={3}/>
                    </Tabs>
                </Box>
                <Stack direction='row' spacing={4} alignContent='center'>
                    <NotificationsNoneOutlined sx={{color:'white', fontSize:50}}/>
                    <Icon sx={{color:'white', fontSize:50}} >+</Icon>
                    <Icon sx={{color:'white', fontSize:50}}>Y
                        {/* <Avatar>Y</Avatar> */}
                    </Icon>
                </Stack>
            </Stack> 
        </>
    )
}