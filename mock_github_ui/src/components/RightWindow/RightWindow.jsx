import React from 'react'
import {Box, Typography, Stepper, Divider, Paper, StepLabel, StepContent, Step,
  Card, CardContent, ButtonGroup, Button, Icon
} from '@mui/material'


export default function RightWindow () {
  return (
    <>
      <Box p={5}
        sx={{bgcolor:'#d9d6d699', 
        width:'100%', height:'100%', 
        justifyContent:'center',
        
        }}>
        <LatestChanges />
        <ExploreRepositories />
      </Box>
    </>
  )

}

//* SECTION 1
const ExploreRepositories = () => {
  return (
    <Box>
      <Typography>Explore repositories</Typography>
      <RepoCard header='flameshot-org' desc='fsdfjsdflj' language='C++' stars={19}/>
    </Box>
  )
}
const RepoCard = (props) => {
  const {header, desc, language, stars} = props
  return (
    <Card>
      <Typography variant='h6'>{header}</Typography>
      <Typography variant='subtitle1'>{desc}</Typography>
      <Paper elevation={2}>
        <Icon>{language}</Icon>
        <Icon>{stars}</Icon>
      </Paper>
    </Card>
  )
}



// * SECTION 2

const LatestChanges = () => {
  const [activeStep,setActiveStep] = React.useState(0)
  const handleNext = () => setActiveStep((prevStep) => prevStep+1)
  const handleBack = () => setActiveStep((prevStep) => prevStep-1)
  const handleReset = () => setActiveStep(0)
  return (
    <Box sx={{justifyContent:'center'}} >
      <ButtonGroup>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleBack}>Back</Button>
      </ButtonGroup>

      <Typography variant='h5'>Latest changes</Typography>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {
          steps.map((step, idx) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>              
              <StepContent>
                <Typography>{step.description}</Typography> 
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
    </Box>
  )
}

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];