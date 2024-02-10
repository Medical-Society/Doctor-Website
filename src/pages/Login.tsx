import { useState } from "react";
import OrLine from "../Components/authForms/OrLine";
import HaveAccountOrNot from "../Components/authForms/HaveAccountOrNot";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import ForgetPass from "../Components/authForms/ForgetPass";
import DoctorImg from "../Components/authForms/DoctorImg";
import { ILoginState } from "../interfaces/ILogin";
import { loginUser } from "../services/auth";

import toast from "react-hot-toast"
import { useAuth } from "../hooks/useAuth";
import Cookies from 'js-cookie';

const Login = () => {
  const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuth();
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
    if(!passwordregx.test(login.password)){
      toast.error("Password must contain at least 8 characters, including UPPER/lowercase and numbers");
        return;
    }
    setIsLoading(true);
    try {
      const res = await loginUser(login);
      toast.success('Logged in successfully');
      setAuth({
        token: res.data.token,
        doctor: res.data.doctor
      });
      Cookies.set('auth', res.data.token);
      
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
    finally {
    setIsLoading(false);
    } 
  }

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
              onChange={handleChange}
              ariaLabel="Email"
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={login.password}
              onChange={handleChange}
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
