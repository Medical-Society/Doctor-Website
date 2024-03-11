import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../services/auth";
import { ILoginState } from "../interfaces";
import toast from "react-hot-toast";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import ForgetPass from "../Components/authForms/ForgotPassLink";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot";
import OrLine from "../Components/authForms/OrLine";
import DoctorImg from "../Components/authForms/DoctorImg";

const Login = () => {

  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState<ILoginState>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await loginUser(login);
      console.log(res);
      toast.success('Logged in successfully');
      setAuth({
        token: res.data.token,
        doctor: res.data.result
      });
      Cookies.set('token', res.data.token);
      Cookies.set('doctor', JSON.stringify(res.data.result));
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col lg:flex-row">
      <div className='lg:w-1/2 flex flex-col justify-center items-center h-full'>
        <h1 className='text-primary text-3xl font-bold mb-4'>Login</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
          <form
            className='flex flex-col bg-white rounded-2xl py-10 px-5 gap-4'
            onSubmit={handleSubmit}
          >
            <FormInput
              label="Email"
              type="email"
              id="email"
              name="email"
              value={login.email}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}
              ariaLabel="Email"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={login.password}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}
              ariaLabel="Password"
            />
            <ForgetPass />
            <Button text='Login' disabled={isLoading} />
            <HaveAccountOrNot type='login' />
            <OrLine />
          </form>
        </div>
      </div>
      <DoctorImg />
    </div>
  );
};

export default Login;