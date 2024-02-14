import  { useState } from "react";
import { ISignupState } from "../interfaces/ISignup";
import { FormInputlist } from "../data/data";
import Button from "../Components/authForms/Button";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot"
import { registerUser } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/authForms/FormInput";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [signup, setSignup] = useState<ISignupState>({
    englishFullName: "",
    arabicFullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    clinicAddress: "",
    nationalID: "",
    phoneNumber: "",
    birthdate : new Date(),
    gender : ""
  });

 const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
 const phoneregx = /^01[0-2]\d{8}$/;

 
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup({
        ...signup,
        [e.target.name]: e.target.value
    }); 
     };

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        }); 
    };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!passwordregx.test(signup.password)){
        toast.error("Password must contain at least 8 characters, including UPPER/lowercase and numbers");
        return;
    }
    if (signup.password !== signup.confirmPassword) {
     toast.error("Password and Confirm Password must be the samee");
        return;
    }
    if(!phoneregx.test(signup.phoneNumber)){
      toast.error("Phone number must be 11 digits and starts with 01");
        return;
    }
    console.log(signup);
    setIsLoading(true);
    try {
      await registerUser(signup);
      toast.success('Signed up successfully, Please Verify your email', {
        duration: 8000
      });
      navigate('/login');
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    finally {
      setIsLoading(false);
    }   
    }
  
const renderFormInputList = FormInputlist.map(input => (
    <div key={input.id}>
      <FormInput
        label={input.label}
        type={input.type}
        id={input.id}
        name={input.name}
        value={signup[input.name as keyof ISignupState]}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          if (input.type === "select") {
            handleChangeSelect(e as React.ChangeEvent<HTMLSelectElement>);
          } else {
            handleChange(e as React.ChangeEvent<HTMLInputElement>);
          }
        }}
        placeholder={input.placeholder}
        options={input.options}
        signup
      />
    </div>
));
 
return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mb-4">Signup</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
        <form 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl py-10 px-5 xl:px-10 xl:py-12" 
          onSubmit={handleSubmit}
        >
          {renderFormInputList}
          <div className="relative lg:mt-20 lg:top-11 lg:left-25 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
            <Button text="Signup" disabled={isLoading} />
            <HaveAccountOrNot type="signup" />
          </div>
        </form>
        </div>
      </div>
    </div>
  );  
}

export default Signup

 
