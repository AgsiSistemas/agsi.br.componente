import React, { useEffect, useState, Fragment } from 'react'
import './CustomStepForm.scss'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { Button } from '@mui/material';

const CustomStepForm = ({ labelSteps, activeStep, setActiveStep, labelContent }) => {

  const [step, setStep] = useState(activeStep | 0)

  useEffect(() => {
    if (setActiveStep !== 0)
      setStep(setActiveStep)
  }, [setActiveStep])

  const handleNextStep = () => {
    if (labelSteps.length == (step + 1)) return
    setStep(curr => (curr + 1))
  }

  const handleBackStep = () => {
    if (step == 0) return
    setStep(curr => (curr - 1))
  }


  return (
    <Fragment>

      <Box className='custom-step-form-content-stepper'>
        <Stepper activeStep={step} className="custom-step-form-stepper">
          {labelSteps?.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {
        labelContent?.map((item) => (item))[step]
      }
      <Box className='custom-step-form-content-buttons'>
        <Button
          variant='outlined'
          className='custom-step-form-back-button'
          onClick={() => handleBackStep()}
          disabled={step == 0}
        >Voltar</Button>
        <Button
          variant='contained'
          className='custom-step-form-next-button'
          onClick={() => handleNextStep()}
          disabled={labelSteps?.length == step + 1}
        >Avançar</Button>
      </Box>

    </Fragment>
  )
}

export default CustomStepForm
