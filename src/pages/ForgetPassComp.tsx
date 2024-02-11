import { useState } from "react";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import { forgotPassword } from "../services/auth";
import toast from "react-hot-toast";

interface IProps {

}

const ForgetPassComp = ({}: IProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEmail(e.target.value);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await forgotPassword(email);
      toast.success('Email sent successfully, Please check your email', {
          duration: 4000,
        });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
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