import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import ErrorMessage from "./ErrorMessage";
import { FormInputProps } from "../../interfaces";

const FormInput = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  ariaLabel,
  errorMsg,
}: FormInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`flex flex-col`}> 
      <label htmlFor={id} className="mb-2 font-medium font-cairo text-violet-950">
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          id={id}
          value={value as string}
          onChange={onChange}
          className="border border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-2 text-sm"
          aria-label={ariaLabel}
        >
          <option value="">{placeholder}</option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative w-full">
          <input
            type={id === "password" && isPasswordVisible ? "text" : type}
            name={name}
            id={id}
            value={
              typeof value === "string"
                ? value
                : value
                ? value.toISOString().split("T")[0]
                : ""
            }
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-2 text-sm w-full"
            aria-label={ariaLabel}
          />
          {id === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {isPasswordVisible ? (
                <MdOutlineVisibilityOff className="w-5 h-5 text-gray-500" />
              ) : (
                <MdOutlineVisibility className="w-5 h-5 text-gray-500" />
              )}
            </button>
          )}
        </div>
      )}
      <ErrorMessage msg={errorMsg} />
    </div>
  );
};

export default FormInput;
