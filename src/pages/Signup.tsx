import  { useState } from "react";
import { ISignupState } from "../interfaces/ISignup";
import { FormInputlist } from "../data/data";
import Button from "../Components/authForms/Button";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot"
import icon from "../assets/visibility_off.jpg"
import { registerUser } from "../services/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    age : "",
    gender : ""
  });

 const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
 const phoneregx = /^01[0-2]\d{8}$/;
 const [showPassword, setShowPassword] = useState(false);
 const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
 const Showpassword = (field: string) => {
    if (field === "password") setShowPassword(!showPassword);
    if (field === "confirmPassword")  setShowConfirmPassword(!showConfirmPassword);
     console.log(field)
   };
 
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
      const res = await registerUser(signup);
      console.log(res);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    finally {
      setIsLoading(false);
    }   
    }
  
  
const renderFormInputList = FormInputlist.map(input => (
    <div key={input.id}>
       <div className='flex flex-col gap-1 relative lg:w-96 mx-5'>
            <label>{input.label}</label>
            {input.type === "select" ? (
                <select
                    name={input.name}
                    id={input.id}
                    value={signup[input.name as keyof ISignupState]} 
                    onChange={handleChangeSelect}
                    className='rounded-3xl p-2 border border-gray-300'
                >
                   <option value="">{input.placeholder}</option>
                   {input.options?.map((Option,index)=>(
                    <option key={index} value={Option}>{Option}</option>
                   ))}
                 </select>
            ) : (
                <input
                    type={(input.id === 'password'  && showPassword) || ( input.id === 'confirmPassword' && showConfirmPassword) ? 'text' : input.type}
                    name={input.name}
                    id={input.id}
                    value={signup[input.name as keyof ISignupState]} 
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    className='rounded-3xl p-2 border border-gray-300'
                />
            )}   
           
            {input.id === "password" || input.id==="confirmPassword" ? ( 
                <div
                    className="absolute top-12 right-3 transform -translate-y-1/2 focus:outline-none"
                    onClick={()=>Showpassword(input.id)}   
                >
                    <img
                        src={icon}  alt="Password Visibility"
                    />
                </div>
            ) : null }
        </div>  
    </div>
));

      
 
return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:w-1/2 w-full max-w-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mb-4">Signup</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md lg:min-w-max mb-4">
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-white rounded-2xl py-10 px-5 xl:px-10 xl:py-12 " onSubmit={handleSubmit}>
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

 
