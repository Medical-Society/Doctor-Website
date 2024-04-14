import { useState, useEffect } from "react";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import toast from "react-hot-toast";
import { useForgotPasswordMutation } from "../services/authApi";

const ForgetPassComp = () => {
  const [email, setEmail] = useState('');
  const [forgotPassword, {data, isSuccess, isLoading, isError, error}] = useForgotPasswordMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please fill in all fields');
    }
    await forgotPassword(email);
  }

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
      toast.success('Email sent successfully, Please check your email', {
        duration: 4000,
      });
    }
    if (isError && error) {
      console.log(error);
      const errorMessage = error as {data: {message: string}};
      toast.error(errorMessage.data.message);
    }
  }, [isSuccess, isError, data, error]);


  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5 w-10/12 max-w-md">
          <form
            className='flex flex-col bg-white rounded-2xl py-10 px-5 gap-4'
            onSubmit={handleSubmit}
          >
            <h1 className='text-primary text-3xl font-bold mb-4'>Forget Password</h1>
            <p className="text-gray-500 mb-4">Please enter your email to reset your password</p>
            <FormInput
              label="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}
              ariaLabel="Email"
            />
            <Button text='Send' disabled={isLoading} />
          </form>
        </div>
    </div>
  )
}

export default ForgetPassComp