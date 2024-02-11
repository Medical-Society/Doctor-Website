import { ChangeEvent, useState } from "react";
import ShowpasswordIcon from "../../assets/visibility_off.jpg";

export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: string[];
  signup?: boolean;
  ariaLabel?: string;
}

const FormInput = ({ label, type, id, name, value, onChange, placeholder, options, signup, ariaLabel }: FormInputProps) => {


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
    <div className={`flex flex-col relative gap-1 ${signup? 'lg:w-96 mx-3' : ''}`}>
      <label>{label}</label>
      {type === "select" ? (
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className='rounded-3xl p-2 border border-gray-300'
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='rounded-3xl p-2 border border-gray-300'
          aria-label={ariaLabel}
        />
      )}

      {(id === "password" || id === "confirmPassword") && ShowpasswordIcon ? (
        <div
          className="absolute top-12 right-3 transform -translate-y-1/2 focus:outline-none"
          onClick={() => Showpassword(id)}
        >
          <img
            src={ShowpasswordIcon} alt="Password"
          />
        </div>
      ) : null}
    </div>
  );
}

export default FormInput;