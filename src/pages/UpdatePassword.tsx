import { useState } from "react";
import { updatePassword } from "../services/settingsService";
import toast from "react-hot-toast";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

interface IProps {}

const UpdatePassword: React.FC<IProps> = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      return toast.error("Please fill all fields");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    setIsLoading(true);
    try {
      await updatePassword(oldPassword, newPassword);
      toast.success("Password updated successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleUpdatePassword}
        className="w-96 bg-white p-6 rounded-lg shadow-lg"
        aria-labelledby="update-password-form"
      >
        <h1 id="update-password-form" className="text-2xl font-semibold text-center">
          Update Password
        </h1>
        <div className="mt-4">
          <label
            htmlFor="old-password"
            className="block text-sm font-medium text-gray-700"
          >
            Old Password
          </label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              id="old-password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              aria-label="Old Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? (
                <MdOutlineVisibilityOff className="h-5 w-5 text-gray-500" />
              ) : (
                <MdOutlineVisibility className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              aria-label="New Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <MdOutlineVisibilityOff className="h-5 w-5 text-gray-500" />
              ) : (
                <MdOutlineVisibility className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              aria-label="Confirm Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <MdOutlineVisibilityOff className="h-5 w-5 text-gray-500" />
              ) : (
                <MdOutlineVisibility className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
