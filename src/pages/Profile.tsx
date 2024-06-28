import { useState } from "react";
import Posts from "../Components/Profile/Posts";
import Reviews from "../Components/Profile/Reviews";
import DoctorCard from "../Components/Profile/DoctorCard";

const Profile = () => {
    const [isActivePage, setIsActivePage] = useState<"Posts" | "Reviews">("Posts");

    const handlePageChange = (page: "Posts" | "Reviews") => {
        setIsActivePage(page);
    };

    return (
        <div className="relative flex flex-col items-center bg-gray-100 py-10 min-h-screen">
            <button className="absolute top-4 right-4 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200">
                Edit Profile
            </button>
            <DoctorCard />
            <div className="flex w-full h-16 border-b-2 border-gray-300 justify-around text-lg font-semibold mt-6">
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
                    className={`py-2 px-4 transition-colors duration-200 ${
                        isActivePage === "Reviews" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    Reviews
                </button>
            </div>
            <div className="w-full mt-6">
                {isActivePage === "Posts" ? <Posts /> : <Reviews />}
            </div>
        </div>
    );
};

export default Profile;
