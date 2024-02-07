import  { useState } from "react";
import { ISignupState } from "../interfaces/interface";
import { FormInputlist } from "../data/data";
import Button from "../Components/auth/Button";
import HaveAccountOrNot from "../Components/auth/HaveAccountOrNot"
import icon from "../assets/visibility_off.jpg"

const Signup = () => {

  const [signup, setSignup] = useState<ISignupState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    Specialization: '',
    clinic_address: '',
    national_id: '',
    id_card:'',
    Personal_photograph: '',
    phoneNumber: '',
    age : '',
    Gender : ''
  });

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
  const handleCliker = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("signup");
    console.log(signup);
  }
const renderFormInputList = FormInputlist.map(input => (
    <div key={input.id}>
       <div className='flex flex-col gap-1 relative'>
            <label>{input.label}</label>
            <input
                type={(input.id === 'password'  && showPassword) || ( input.id === 'confirmPassword' && showConfirmPassword) ? 'text' : input.type}
                name={input.name}
                id={input.id}
                value={signup[input.name as keyof ISignupState]} 
                onChange={handleChange}
                placeholder={input.placeholder}
                className='rounded-3xl p-2 border border-gray-300'
              />

            {input.id === "password" || input.id==="confirmPassword" ? ( 
            <div
              className="absolute top-12 right-3 transform -translate-y-1/2 focus:outline-none"
               onClick={()=>Showpassword(input.id)}   
            >
              <img
                src={icon}  alt="Password Visibility"
              />
            </div>
        ) :null }
        </div>  
    </div>
));
      
 
return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:w-1/2 w-full max-w-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold mb-4">Signup</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
          <form className="flex flex-col bg-white rounded-2xl py-10 px-5 gap-4  xl:justify-start" onSubmit={handleCliker}>
            {renderFormInputList}
            <Button text="Signup" />
            <HaveAccountOrNot type="signup" />
          </form>
        </div>
      </div>
    </div>
  );
  
  
}

export default Signup

 