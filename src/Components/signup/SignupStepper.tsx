  import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 

import { FormInputlist } from '../../data/data';
import FormInput from '../authForms/FormInput';
import { validateSignup } from '../../validations';
import { ISignupErrors } from '../../interfaces';

interface SignupStepperProps {
  signup: any;
  setSignup: React.Dispatch<React.SetStateAction<any>>;
  errors: any;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
}

const steps = ['Account info', 'Personal info', 'Clinic info'];

const SignupStepper: React.FC<SignupStepperProps> = ({
  signup,
  setSignup,
  errors,
  setErrors,
 
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const renderFormInputsForStep = (step: number) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      setSignup((prevSignup: any) => ({
        ...prevSignup,
        [name]: value,
      }));
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: '',
      }));
    };
    
      const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignup({
            ...signup,
            [name]: value
        });
      }; 


    return (
      <div className="grid grid-cols-2 grid-rows-3 gap-3">
        {FormInputlist.filter((input) => {
          if (step === 0) {
            return ['englishFullName', 'arabicFullName', 'email', 'password', 'confirmPassword'].includes(input.name);
          } else if (step === 1) {
            return ['specialization', 'nationalID', 'phoneNumber', 'birthdate', 'gender'].includes(input.name);
          } else if (step === 2) {
            return ['clinicAddress'].includes(input.name);
          }
          return true;
        }).map((input) => (
          <div key={input.id}>
            <div>
              <FormInput
                label={input.label}
                type={input.type}
                id={input.id}
                name={input.name}
                value={signup[input.name]}
               onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            if (input.type === "select") {
              handleChangeSelect(e as React.ChangeEvent<HTMLSelectElement>);
            } else {
              handleChange(e as React.ChangeEvent<HTMLInputElement>);
            }
          }}
                placeholder={input.placeholder}
                options={input.options}
                errorMsg={errors[input.name  as keyof ISignupErrors]}
                signup
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleNext = () => {
    const validationErrors = validateSignup(signup);
    const hasErrors = Object.values(validationErrors).some((errMsg) => errMsg !== '');

    if (hasErrors) {
      setErrors(validationErrors);
     
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
      <Stepper activeStep={activeStep} className=''>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps} className="flex flex-col">
              <StepLabel {...labelProps} StepIconProps={{ style: { color: '#060B73' } }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', pt: 3 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: -3 }}>{renderFormInputsForStep(activeStep)}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default SignupStepper;
 