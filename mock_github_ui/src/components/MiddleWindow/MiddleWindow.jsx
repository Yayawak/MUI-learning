import React from 'react'
import {Box, Button, Typography, Paper, Badge, Stack, 
   Tabs, Tab, Icon, Divider,
   Card, CardContent, CardHeader, CardMedia, CardActions
} from '@mui/material'
import {} from '@mui/icons-material'
import { Avatar } from '@mui/material'

const detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
const dummy_img_url = 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png'

const PersonCard = (props) => {
  const {name, image, personActivity} = props
  return (
    <Card>
      <CardHeader avatar={
        <Avatar img={image} alt={name} />
        }
        title={name}
      />
      
      <CardContent>
        <Paper elevation={2} p={20} 
          sx={{width:'100%', height:'100px', display:'flex', alignContent:'center',
            justifyContent:'space-between'}}
        >
          <Stack direction='row'>
            <Typography variant='h6'>{}</Typography>
            <Typography variant='subtitle1'>{}</Typography>
          </Stack>
          <Stack direction='row' >
            <Stack direction='row'>
              <Avatar>R</Avatar>
              <Typography>AAA</Typography>
            </Stack>
            <Button variant='container'>Special button</Button>
          </Stack>
        </Paper>
      </CardContent>
    <Divider />
    </Card>
  )
}

export default function MiddleWindow() {
  const [contentTabIndex, setContentTabIndex] = React.useState(0)
  const handleContentTab = (e, newTab) => {
    // console.log(e.target);
    setContentTabIndex(newTab)
  }
  return (
    <>
      <Stack direction='column' padding={4} 
        // sx={{width:60}}
        >
        <Paper elevation={10} sx={{p:5}}>
          <Stack direction='row' sx={{justifyContent:'space-between'}}>
            <Typography variant='h4' gutterBottom>Join Github Global Campus!</Typography>
            <Button variant='text'>X</Button> 
          </Stack>
          <Typography variant='subtitle1' gutterBottom>{detail}</Typography>
          <Box component='img' 
            src={dummy_img_url}
            sx={{width:'100%', height:'100%'}} 
          />
          <Button variant='contained'
            sx={{borderRadius:4, width:'33%'}}
          >Join Global Campus</Button>
        </Paper>
        

        <Box>
          <Tabs value={contentTabIndex} onChange={handleContentTab}>
            <Tab label='Following'> </Tab>
            <Tab label='For you'> </Tab>
          </Tabs>
        </Box>
        <Divider />

        <Stack sx={{display:'flex', p:4, m:4}} direction='column'>
          <PersonCard name='dimi-fn' src=''/>
          <PersonCard name='gituser-A' personActivity='started following KK' src=''/>
          <PersonCard name='i am groot' src=''/>
        </Stack>

      </Stack>
    </>
  )
}