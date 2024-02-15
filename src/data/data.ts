import { FormInputProps } from "../interfaces";
export const FormInputlist : FormInputProps[] = [
    {
        label: "English Full Name",
        type: "text",
        id: "englishFullName",
        name: "englishFullName",
        value: "",
        onChange: () => {},
        placeholder: "Enter your English FullName"
    
    },
    {
        label: "Arabic Full Name",
        type: "text",
        id: "arabicFullName",
        name: "arabicFullName",
        value: "",
        onChange: () => {},
        placeholder: "Enter your Arabic Full name"
    },
    {   label: "Email",
        type: "email",
        id: "email",
        name: "email",
        value: "",
        onChange: () => {},
        placeholder: "Enter your email"
    },
    {   label: "Password",
        type: "password",
        id: "password",
        name: "password",
        value: "",
        onChange: () => {},
        placeholder: "Password",
    },
    {   label: "Confirm Password",
        type: "password",
        id: "confirmPassword",
        name: "confirmPassword",
        value: "",
        onChange: () => {},
        placeholder: "Confirm password"
    },
    {   label: "Specialization",
        type: "text",
        id: "specialization",
        name: "specialization",
        value: "",
        onChange: () => {},
        placeholder: "Enter your Specialization"
    },
    {   label: "Clinic_address",
        type: "text",
        id: "clinicAddress",
        name: "clinicAddress",
        value: "",
        onChange: () => {},
        placeholder: "Enter your clinic address"
    },
    {   label: "national_iD",
        type: "text",
        id: "nationalID",
        name: "nationalID",
        value: "",
        onChange: () => {},
        placeholder: "Enter your national_id"   
    },
    {   label: "Phone number",
         type :"number",
         id: "phoneNumber",
         name: "phoneNumber",
         value: "",
         onChange: () => {},
         placeholder: "Enter your phone number" 
     },
    {   
        label: "Birthdate",
        type :"date",
        id: "birthdate",
        name: "birthdate",
        value: "",
        onChange: () => {},
        placeholder: "Enter your birthdate"
    }, 
    {   
        label: "Gender",
        type :"select",
        id: "gender",
        name: "gender",
        value: "",
        onChange: () => {},
        options : ["male" , "female"],
        placeholder: "Select gender"
    },

]