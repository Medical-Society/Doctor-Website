import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../services/auth";
import toast from "react-hot-toast";
import FormInput from "../Components/authForms/FormInput";
import Button from "../Components/authForms/Button";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams<{ token: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password must be the same");
            return;
        }

        try {
            await resetPassword(token ?? "", password, confirmPassword);
            toast.success("Password reset successfully");
            navigate("/login");
        }
        catch (error: any) {
            toast.error(error?.response.data.message || "An error occurred");
        }
        finally {
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
                <h1 className='text-primary text-3xl font-bold mb-4'>Reset Password</h1>
                <p className="text-gray-500 mb-4">Please enter your new password</p>
                <FormInput
                    label="password"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setPassword(e.target.value)}
                    ariaLabel="password"
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setConfirmPassword(e.target.value)}
                    ariaLabel="confirmPassword"
                />
                <Button text='Send' disabled={isLoading} />
            </form>
            </div>
        </div>
    );
};

export default ResetPassword;