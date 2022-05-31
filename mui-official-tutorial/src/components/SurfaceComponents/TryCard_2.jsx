import * as React from 'react'
import { styled } from '@mui/system'
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea,
    Collapse, Avatar, IconButton, Typography, Paper
} from '@mui/material'
import {
    Favorite, Share, ExpandMore as ExpandMoreIcon, MoreVert, Hearing
} from '@mui/icons-material'
import {red} from '@mui/material/colors'
import Tengen from '../../assets/Tengen.jpg'

const ExpandMore = styled((props) => {
    const {expand, ...other} = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto', 
    // transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    // })
})

)

const CharacterCard = () => {
    const [expanded, setExpanded] = React.useState(false)
    return (
            <Card sx={{maxWidth:300, margin:'25px'}}>
                <CardHeader 
                    avatar={ 
                        <Avatar sx={{bgcolor: red[500]}} aria-label='recipe'>
                            <Hearing /> 
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVert />
                        </IconButton>
                    }
                    title='LaTeX'
                    subheader="September 14, 2016"
                />
                <CardActionArea>
                    <CardMedia component='img' height='195' alt='Destroyer of Demon'
                        image={Tengen}/>
                        <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions disableSpacing>
                    <IconButton aria-label='add to favorite'>
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label='share'>
                        <Share />
                    </IconButton>
                    <ExpandMore expand={expanded} onClick={()=>!setExpanded(!expanded)} 
                        aria-label='show more' aria-expanded={expanded}>
                        <ExpandMoreIcon />
                    </ExpandMore>
                    {/* <ExpandMoreIcon /> */}

                </CardActions>

                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent variant='h6'>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
 
    )
}

export default function TryCard_2() {
    return (
        <Paper elevation={10} sx={{display:'inline-flex'}}>
            <CharacterCard />
            <CharacterCard />
       </Paper>
    )
}
