import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Components/ui/Modal";
import Posts from "../Components/Profile/Posts";
import Reviews from "../Components/Profile/Reviews";
import DoctorCard from "../Components/Profile/DoctorCard";
import { updateProfile } from "../services/profile";
import toast from "react-hot-toast";
import { updateDoctor } from "../app/features/authSlice";
import { IDoctor } from "../interfaces";
import Cookies from "js-cookie";

const Profile = () => {
    const [isActivePage, setIsActivePage] = useState<"Posts" | "Reviews">("Posts");
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const [isEditProfileLoading, setIsEditProfileLoading] = useState(false);
    const doctor: IDoctor = JSON.parse(Cookies.get("doctor") || "{}");
    console.log(doctor);
    const dispatch = useDispatch();
    const [profileData, setProfileData] = useState({
        specialization: doctor?.specialization || "",
        clinicAddress: doctor?.clinicAddress || "",
        phoneNumber: doctor?.phoneNumber || "",
    });

    const handleEditProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsEditProfileLoading(true);
        try {
            await updateProfile( profileData.specialization, profileData.clinicAddress, profileData.phoneNumber);
            toast.success("Profile updated successfully");
            const updatedDoctor: IDoctor = { ...doctor, ...profileData };
            console.log(updatedDoctor);
            dispatch(updateDoctor(updatedDoctor));
        } catch (error) {
            toast.error("Failed to update profile");
        } finally {
            setIsEditProfileLoading(false);
            setIsEditProfileModalOpen(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileData({ ...profileData, [name]: value });
    }

    const handlePageChange = (page: "Posts" | "Reviews") => {
        setIsActivePage(page);
    };

    return (
        <div className="relative flex flex-col items-center bg-gray-100 py-10 min-h-screen">
            <button
                className="absolute top-4 right-4 hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base  border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
                onClick={() => setIsEditProfileModalOpen(true)} // Open modal on click
            >
                Edit Profile
            </button>
            <DoctorCard />
            <div className="flex font-cairo w-full h-16 border-b-2 border-gray-300 justify-around text-lg font-semibold mt-6">
                <button
                    onClick={() => handlePageChange("Posts")}
                    className={`py-2 px-4 transition-colors duration-200 ${
                        isActivePage === "Posts" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    Posts
                </button>
                <button
                    onClick={() => handlePageChange("Reviews")}
                    className={`py-2 px-4 font-cairo transition-colors duration-200 ${
                        isActivePage === "Reviews" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    Reviews
                </button>
            </div>
            <div className="w-full mt-6">
                {isActivePage === "Posts" ? <Posts /> : <Reviews />}
            </div>
            <Modal
                isOpen={isEditProfileModalOpen}
                closeModal={() => setIsEditProfileModalOpen(false)}
                title="Edit Profile"
            >
                <form onSubmit={handleEditProfile} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="specialization" className="text-sm font-medium text-gray-700">
                            Specialization
                        </label>
                        <input
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={profileData.specialization}
                            onChange={handleChange}
                            className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="clinicAddress" className="text-sm font-medium text-gray-700">
                            Clinic Address
                        </label>
                        <input
                            type="text"
                            id="clinicAddress"
                            name="clinicAddress"
                            value={profileData.clinicAddress}
                            onChange={handleChange}
                           className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={profileData.phoneNumber}
                            onChange={handleChange}
                            className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-800 rounded-full py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200"
                            onClick={() => setIsEditProfileModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200"
                            disabled={isEditProfileLoading}
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Profile;
