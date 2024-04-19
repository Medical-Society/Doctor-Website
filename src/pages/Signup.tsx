import  { useState, useEffect } from "react";
import { ISignupErrors, ISignupState } from "../interfaces";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { validateSignup } from "../validations";
import { useRegisterMutation } from "../services/authApi";
//import { FormInputlist } from "../data/data";
//import FormInput from "../Components/authForms/FormInput";
 import SignupStepper from "../Components/signup/SignupStepper";

const Signup = () => {
  const defaultDoctor: ISignupState = {
    englishFullName: '',
    arabicFullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    clinicAddress: '',
    nationalID: '',
    phoneNumber: '',
    birthdate: new Date(),
    gender: ''
  };

  const navigate = useNavigate();
  const [registerUser, {data, isSuccess, isLoading, isError, error}] = useRegisterMutation();
  const [signupData, setSignupData] = useState<ISignupState>(defaultDoctor);
  const [errors, setErrors] = useState<ISignupErrors>({
    englishFullName: '',
    arabicFullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    clinicAddress: '',
    nationalID: '',
    phoneNumber: '',
  });
/*    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({
        ...signupData,
        [name]: value
    }); 
    setErrors({
        ...errors,
        [name]: ''
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData({
        ...signupData,
        [name]: value
    });
  };  */
 
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const validationErrors = validateSignup(signupData,0);
    const hasErrorMsg = Object.values(validationErrors).some(errMsg => errMsg !== '');
    //console.log(validationErrors);
    if (hasErrorMsg) {
      setErrors(validationErrors);
      return;
    }
   const { confirmPassword, ...data } = signupData;
    await registerUser({ ...data });   
    console.log(signupData);
  }

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      toast.success('Signed up successfully, Please Verify your email', {
        duration: 8000
      });
      navigate('/login');
    }
    if (isError && error) {
      const errorMessage = error as {data: {message: string}};
      toast.error(errorMessage.data.message);
    }
  }, [isSuccess, isError, data, error]);
  
/*   const renderFormInputList = FormInputlist.map(input => (
    <div key={input.id}>
      <FormInput
        label={input.label}
        type={input.type}
        id={input.id}
        name={input.name}
        value={signupData[input.name]}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          if (input.type === "select") {
            handleChangeSelect(e as React.ChangeEvent<HTMLSelectElement>);
          } else {
            handleChange(e as React.ChangeEvent<HTMLInputElement>);
          }
        }}
        placeholder={input.placeholder}
        options={input.options}
        errorMsg={errors[input.name as keyof ISignupErrors]}
        signup
      />
    </div>
)); */
return (
    <div className="flex justify-center items-center mt-14">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mb-4">Signup</h1>
        <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
        <form 
          className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white rounded-xl py-8 px-5" 
  
        >
         <SignupStepper errors={errors} setErrors={setErrors} setSignup={setSignupData} signup={signupData} isLoading={isLoading} handleSubmit={handleSubmit} /> 
          
         <div className="lg:mt-80 lg:top-96 lg:left-16 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"> </div>
            <HaveAccountOrNot type="signup" />
     
        </form>
        </div>
      </div>
    </div>
  );  
}

export default Signup