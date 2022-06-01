import * as React from 'react'
import { styled } from '@mui/material'
import { Box, Paper, Grid } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1a2027' : '#72c0ff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  height: '100px',
  color: theme.palette.text.secondary //gray
})
)

const BasicGrid = () => {
  return (
    // use 12-column grid
    <Box sx={{flexGrow:1 }}>
      <Grid container spacing={4}>
        <Grid item xs={8} >
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>

      </Grid>
    </Box> 
  )
}
const ResponsiveGrid = () => {
  return (
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
        {
          Array.from(Array(9)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item sx={{bgcolor: 'wheat'}}>xs=2</Item>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
export default function TryGrid() {
  return (
    <>
      <BasicGrid />
      <ResponsiveGrid />
    </>
  )
}