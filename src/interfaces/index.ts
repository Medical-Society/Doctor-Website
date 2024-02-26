import { ChangeEvent } from "react";

export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name: 'englishFullName' | 'arabicFullName' | 'email' | 'password' | 'confirmPassword' | 'specialization' | 'clinicAddress' | 'nationalID' | 'phoneNumber' | 'birthdate' | 'gender'
  value: string | Date;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: string[];
  signup?: boolean;
  ariaLabel?: string;
  errorMsg?: string;
}

export interface ISignupState {
    englishFullName: string;
    arabicFullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    specialization: string;
    clinicAddress: string;
    nationalID: string;
    phoneNumber: string;
    birthdate : Date;
    gender : string;
}

export interface IDoctor {
    _id: string;
    englishFullName: string;
    arabicFullName: string;
    email: string;
    password: string;
    specialization: string;
    clinicAddress: string;
    nationalID: string;
    phoneNumber: string
    age: number
    gender: string
    status: string
    isVerified: boolean
    createdAt: string
    updatedAt: string
    __v: number
}

export interface IAuth{
 token: string;
 doctor: IDoctor;
}

export interface ILoginState {
  email: string;
  password: string;
}

export interface ISignupErrors {
    englishFullName: string;
    arabicFullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    specialization: string;
    clinicAddress: string;
    nationalID: string;
    phoneNumber: string;
}

export interface ReviewsProps {
  name: string;
  initialRating?: number;
  review: string;
  }


  