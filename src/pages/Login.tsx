import React, { useState, useEffect } from "react";
import { ILoginState } from "../interfaces";
import toast from "react-hot-toast";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import ForgetPass from "../Components/authForms/ForgotPassLink";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot";
/* import OrLine from "../Components/authForms/OrLine"; */
import DoctorImg from "../Components/authForms/DoctorImg";
import { useLoginMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { loginReducer } from "../app/features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<ILoginState>({
    email: '',
    password: ''
  });
  const [loginUser, { data, isSuccess, isLoading, isError, error }] = useLoginMutation();

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
      console.log(data);
      dispatch(loginReducer({ token: data.data.token, doctor: data.data.result }));
      toast.success('Login successful');
      setLoginData({
        email: '',
        password: ''
      });
      navigate('/clinic');
    }
    if (isError && error) {
      const errorMessage = error as { data: { message: string } };
      toast.error(errorMessage.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className="h-full flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center h-full p-6 lg:p-12 -mt-8">
        <h1 className="text-primary text-4xl font-cairo mb-8">Login</h1>
        <div className="rounded-[10px] bg-gradient-to-r from-primary to-secondary p-0.5 w-full max-w-md">
          <form
            className="flex flex-col bg-white rounded-[10px] py-10 px-8 gap-3 "
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
              signup={false}
              placeholder="Enter your email address"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}
              ariaLabel="Password"
              signup={false}
              placeholder="Enter your password"
            />
            <ForgetPass />
            <Button text="Login" disabled={isLoading} className="font-cairo" />
            <HaveAccountOrNot type="login" />
           {/*<OrLine />*/} 
          </form>
        </div>
      </div>
      <DoctorImg />
    </div>
  );
};

export default Login;
