import { useState } from "react";
import ShowpasswordIcon from "../../assets/visibility_off.jpg";
import ErrorMessage from "./ErrorMessage";
import { FormInputProps } from "../../interfaces";



const FormInput = ({ label, type, id, name, value, onChange, placeholder, options, signup, ariaLabel, errorMsg }: FormInputProps) => {


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Showpassword = (id: string) => {
    if (id === "password") {
      setShowPassword(!showPassword);
    }
    if (id === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  }
  
  return (
    <div className={`flex flex-col relative ${signup? 'lg:w-96 mx-3' : ''} min-h-20 md:ml-10`}>
      <label htmlFor={id} className="mb-[2px] text-sm font-medium text-violet-950">{label}</label>
      {type === "select" ? (
        <select
          name={name}
          id={id}
          value={value as string}
          onChange={onChange}
          className='border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-2 text-sm'
          aria-label={ariaLabel}
        >
          <option value="">{placeholder}</option>
          {options?.map((Option, index) => (
            <option key={index} value={Option}>{Option}</option>
          ))}
        </select>
      ) : (
        <input
          type={(id === 'password' && showPassword) || (id === 'confirmPassword' && showConfirmPassword) ? 'text' : type}
          name={name}
          id={id}
          value={typeof value === 'string' ? value : (value ? value.toISOString().split('T')[0] : '')} // Check if value is defined
          onChange={onChange}
          placeholder={placeholder}
          className='border-[1px] border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-2 py-2 text-sm md:w-80'
          aria-label={ariaLabel}
        />
      )}

      {(id === "password" || id === "confirmPassword") && ShowpasswordIcon ? (
        <div
          className="absolute top-11 right-7 transform -translate-y-1/2 focus:outline-none"
          onClick={() => Showpassword(id)}
        >
          <img
            src={ShowpasswordIcon} alt="Password"
          />
        </div>
      ) : null}
      <ErrorMessage msg={errorMsg} />
    </div>
  );
}

export default FormInput;