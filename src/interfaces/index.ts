import { ChangeEvent } from "react";

export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name:
    | "englishFullName"
    | "arabicFullName"
    | "email"
    | "password"
    | "confirmPassword"
    | "specialization"
    | "clinicAddress"
    | "nationalID"
    | "phoneNumber"
    | "birthdate"
    | "gender";
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
  birthdate: Date;
  gender: string;
}

export interface IPostsDoctor {
  images: string[];
  description: string;
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
  phoneNumber: string;
  birthdate: string;
  gender: string;
  status: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  posts: IPostsDoctor[];
  reviews: ReviewsProps[];
  __v: number;
  avatar: string;
  about: string;
  availableTime: AvailableTime; // Added availableTime
}

// Define the AvailableTime interface
interface AvailableTime {
  weekdays: {
    [key: string]: {
      from: {
        hour: number;
        minute: number;
      };
      to: {
        hour: number;
        minute: number;
      };
    };
  };
  limit: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuth {
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
  imgUrl?: string;
  name: string;
  initialRating?: number;
  review: string;
  className?: string;
}

export interface FormPrescriptionProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder: string;
  errorMsg?: string;
}

export interface IMedicine {
  name: string;
  time: string;
}

export interface IPrescription {
  diseases: string;
  diagnose: string;
  medicines: IMedicine[];
}

export interface IPatient {
  _id: string;
  patientName: string;
  email: string;
  birthdate: string;
  gender: string;
  address: string;
  phoneNumber: string;
  isVerified: boolean;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAppointment {
  _id: string;
  patient: IPatient;
  doctor: string;
  date: string;
  price: number;
  paid: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IMessage {
  _id: string;
  userId: string;
  text: string;
  seen: boolean;
  createdAt: string;
}

export interface IChat {
  _id: string;
  patient: IPatient;
  doctor: IDoctor;
  messages: IMessage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}