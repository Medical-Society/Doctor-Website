import { ISignupState } from "../interfaces";

export const validateSignup = (values: ISignupState , step:number ) => {
    const errors: {
        englishFullName: string;
        arabicFullName: string;
        email: string;
        password: string;
        confirmPassword: string;
        specialization: string;
        clinicAddress: string;
        nationalID: string;
        phoneNumber: string;
        birthdate: string;
    } = {
        englishFullName: "",
        arabicFullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        specialization: "",
        clinicAddress: "",
        nationalID: "",
        phoneNumber: "",
        birthdate: ""
    };
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email);
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password);
 if(step === 0){
    if (!values.englishFullName.trim() || values.englishFullName.length < 10) {
        errors.englishFullName = "Full name is required";
    }
    if (!values.arabicFullName.trim() || values.arabicFullName.length < 10) {
        errors.arabicFullName = "Full name is required";
    }
    if (!values.email.trim() || !validEmail) {
        errors.email = "Valid email is required";
    }
    if (!values.password.trim() || !validPassword) {
        errors.password = "Password is at least 8 characters and one number";
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }
 } else if(step === 1){ 
    if (!values.specialization.trim()) {
        errors.specialization = "Specialization is required";
    }
    
    if (!values.nationalID.trim() || values.nationalID.length != 14) {
        errors.nationalID = "National ID is required";
    }
    if (!values.phoneNumber.trim() || values.phoneNumber.length != 11) {
        errors.phoneNumber = "valid phone number is required";
    }
    if (!values.birthdate) {
        errors.birthdate = "Birthdate is required";
    }
  
} else if(step === 2){
    if (!values.clinicAddress.trim()) {
        errors.clinicAddress = "Clinic address is required";
    }
}
    return errors;
}
