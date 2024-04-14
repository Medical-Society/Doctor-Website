import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { ILoginState } from "../interfaces";
import toast from "react-hot-toast";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import ForgetPass from "../Components/authForms/ForgotPassLink";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot";
import OrLine from "../Components/authForms/OrLine";
import DoctorImg from "../Components/authForms/DoctorImg";
import { useLoginMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { loginReducer } from "../app/features/authSlice";

const Login = () => {
  const { setAuth } = useAuth();
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState<ILoginState>({
    email: '',
    password: ''
  });
  const [loginUser, {data, isSuccess, isLoading, isError, error}] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return toast.error('Please fill in all fields');
    }
    await loginUser(loginData);
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(loginReducer(data));
      toast.success('Login successful');
    }
    if (isError && error) {
      console.log(error);
      }
  }, [isSuccess, isError, data, error, setAuth]);


  return (
    <div className="h-full flex flex-col lg:flex-row">
      <div className='lg:w-1/2 flex flex-col justify-center items-center h-full'>
        <h1 className='text-primary text-3xl font-bold mb-4'>Login</h1>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
          <form
            className='flex flex-col bg-white rounded-2xl py-10 px-5 gap-4'
            onSubmit={handleLogin}
          >
            <FormInput
              label="Email"
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}
              ariaLabel="Email"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={loginData.password}
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