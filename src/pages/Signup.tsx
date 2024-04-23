import { useState, useEffect } from "react";
import { ISignupErrors, ISignupState } from "../interfaces";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot";
import toast from "react-hot-toast";
import { validateSignup } from "../validations";
import { useRegisterMutation } from "../services/authApi";
import { FormInputlist } from "../data/data";
import FormInput from "../Components/authForms/FormInput";
import {
  Box,
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const Signup = () => {
  const steps = ["Account info", "Personal info", "Clinic info"];

  const defaultDoctor: ISignupState = {
    englishFullName: "",
    arabicFullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    clinicAddress: "",
    nationalID: "",
    phoneNumber: "",
    birthdate: new Date(),
    gender: "",
  };

  const [activeStep, setActiveStep] = useState(0);
  const [signupData, setSignupData] = useState<ISignupState>(defaultDoctor);
  const [registerUser, { data, isSuccess, isLoading, isError, error }] =
    useRegisterMutation();
  const [errors, setErrors] = useState<ISignupErrors>({
    englishFullName: "",
    arabicFullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    clinicAddress: "",
    nationalID: "",
    phoneNumber: "",
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const validationErrors = validateSignup(signupData, 0);
    const hasErrorMsg = Object.values(validationErrors).some(
      (errMsg) => errMsg !== ""
    );
    //console.log(validationErrors);
    if (hasErrorMsg) {
      setErrors(validationErrors);
      return;
    }
    const { confirmPassword, ...data } = signupData;
    await registerUser({ ...data });
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      toast.success("Signed up successfully, Please Verify your email", {
        duration: 8000,
      });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (isError && error) {
      console.log(error);
      const errorMessage = error as { data: { message: string } };
      toast.error(errorMessage.data.message);
    }
  }, [isSuccess, isError, data, error]);

  const renderFormInputsForStep = (step: number) => {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
      const { name, value } = e.target;
      setSignupData((prevSignup: any) => ({
        ...prevSignup,
        [name]: value,
      }));
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: "",
      }));
    };

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                value={signupData[input.name]}
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
    const validationErrors = validateSignup(signupData, activeStep);
    const hasErrors = Object.values(validationErrors).some(
      (errMsg) => errMsg !== ""
    );

    if (hasErrors) {
      setErrors(validationErrors);
    } else {
      if (activeStep === steps.length - 1) {
        console.log("submitted");
        handleSubmit(e);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mb-4">Signup</h1>
        <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
          <form className="flex flex-col bg-white rounded-xl py-4 px-5">
            <Stepper activeStep={activeStep} sx={{ 
              display: "flex",
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              gap: 1,
            }}>
              {steps.map((label) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: { optional?: React.ReactNode } = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>

              {activeStep === steps.length ? (
                <>
                  <Typography component="div" sx={{ mt: 2, mb: 1 }}>
                    <h1 className="text-primary text-2xl font-bold mb-4">
                      All steps completed - you&apos;re finished
                    </h1>
                    <p className="text-gray-500 text-lg">
                      Please verify your email
                    </p>
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", pt: 3 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                  </Box>
                </>
              ) : (
                <>
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
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => handleNext(e)}
                      disabled={isLoading} 
                    >
                      {isLoading ? (
                        <CircularProgress size={24} /> 
                      ) : activeStep === steps.length - 1 ? (
                        "Finish"
                      ) : (
                        "Next"
                      )}
                    </Button>
                  </Box>
                </>
              )}
            <HaveAccountOrNot type="signup" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
