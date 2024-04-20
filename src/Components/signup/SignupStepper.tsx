import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { FormInputlist } from "../../data/data";
import FormInput from "../authForms/FormInput";
import { validateSignup } from "../../validations";
import { ISignupErrors } from "../../interfaces";

interface SignupStepperProps {
  signup: any;
  setSignup: React.Dispatch<React.SetStateAction<any>>;
  errors: any;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const steps = ["Account info", "Personal info", "Clinic info"];

const SignupStepper: React.FC<SignupStepperProps> = ({
  signup,
  setSignup,
  errors,
  setErrors,
  isLoading,
  handleSubmit,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const renderFormInputsForStep = (step: number) => {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
      const { name, value } = e.target;
      setSignup((prevSignup: any) => ({
        ...prevSignup,
        [name]: value,
      }));
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: "",
      }));
    };

    return (
      <div className="grid grid-cols-2 grid-rows-3 gap-3">
        {FormInputlist.filter((input) => {
          if (step === 0) {
            return [
              "englishFullName",
              "arabicFullName",
              "email",
              "password",
              "confirmPassword",
            ].includes(input.name);
          } else if (step === 1) {
            return [
              "specialization",
              "nationalID",
              "phoneNumber",
              "birthdate",
              "gender",
            ].includes(input.name);
          } else if (step === 2) {
            return ["clinicAddress"].includes(input.name);
          }
          return true;
        }).map((input) => (
          <div key={input.id} className="flex flex-col">
            <div>
              <FormInput
                label={input.label}
                type={input.type}
                id={input.id}
                name={input.name}
                value={signup[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                options={input.options}
                errorMsg={errors[input.name as keyof ISignupErrors]}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const validationErrors = validateSignup(signup, activeStep);
    const hasErrors = Object.values(validationErrors).some(
      (errMsg) => errMsg !== ""
    );

    if (hasErrors) {
      setErrors(validationErrors);
    } else {
      if (activeStep === steps.length - 1) {
        console.log("submitted");
        handleSubmit(e);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: { sm: "600px", md: "750px" },
        margin: "auto",
        marginRight: { md: "-350px", sm: "-350" },
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                StepIconProps={{ style: { color: "#060B73" } }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 3 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography component="div" sx={{ mt: 2, mb: -3 }}>
            {renderFormInputsForStep(activeStep)}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleNext(e)
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default SignupStepper;
