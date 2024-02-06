import { useState } from "react";
import OrLine from "../Components/auth/OrLine";
import HaveAccountOrNot from "../Components/auth/HaveAccountOrNot";
import FormInput from "../Components/auth/FormInput";
import Button from "../Components/auth/Button";
import ForgetPass from "../Components/auth/ForgetPass";
import DoctorImg from "../Components/auth/DoctorImg";

interface ILoginState {
  email: string;
  password: string;
}

const Login = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
    // logic here
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
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
            <Button text='Login' />
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
