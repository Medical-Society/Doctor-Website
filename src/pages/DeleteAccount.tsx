import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../services/settingsService";
import Cookies from "js-cookie";

interface IProps {}

const DeleteAccount: React.FC<IProps> = () => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setError(null);
    try {
      await deleteAccount();
      setSuccess(true);
      Cookies.remove('token');
      Cookies.remove('doctor');
      navigate("/login");
    } catch (err) {
        console.log(err);
      setError("An error occurred while deleting your account. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
        {!isConfirming ? (
          <>
            <p className="mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
            <button
              onClick={() => setIsConfirming(true)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete My Account
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">Please confirm that you want to delete your account. This action is irreversible.</p>
            <div className="flex justify-between">
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsConfirming(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">Your account has been deleted successfully.</p>}
      </div>
    </div>
  );
};

export default DeleteAccount;

