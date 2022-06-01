import React from "react";
import { Tabs, Tab, Box, Typography, Divider } from "@mui/material";
import { Brightness7, Favorite, Chat, TextSnippet } from "@mui/icons-material";


const LinkTab = (props) => {
  return (
    <Tab 
      sx={{marginLeft:'20px', borderColor:'royalblue'}}
      component='a'
      onClick={(e)=> e.preventDefault()} //prevent auto refresh page
      {...props}
    />
  )
};


export default function () {
  //* index of current tab (0 is first tab == relationship)
  const [currentTab, setCurrentTab] = React.useState(1) 
  const handleCurrentTab = (e, newTab) => {
    setCurrentTab(newTab)
    console.log('current tab is ' + newTab)
  }
  return (
    <>
      <Box sx={{ width: "100%", bgcolor:'ButtonHighlight', padding:'12px' }}>
        <Tabs aria-label="Super tabs" value={currentTab} onChange={handleCurrentTab}
          textColor="secondary" indicatorColor="secondary" centered
        >
        {/* {//if only this below line it won't show blue emphasizing underline} */}
        {/* <Tabs aria-label='Super tabs' >  */}
          <LinkTab label='Relationship' href='/relationship' icon={<Favorite />}/>
          <LinkTab label='ดูดวง' href='/mutaelu' icon={<Brightness7 />}/>
          <LinkTab label='ChatGroup' href='/chatgroup' icon={<Chat />}/>
          <Divider />
          <LinkTab label='เล่าประสบการณ์' href='/experiance' icon={<TextSnippet />}/>
        </Tabs>
      </Box>
    </>
  );
}
