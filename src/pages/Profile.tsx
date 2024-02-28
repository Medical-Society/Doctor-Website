import  { useState } from "react";
import Posts from "../Components/Profile/Posts";
import Reviews from "../Components/Profile/Reviews";
import DoctorCard from "../Components/Profile/DoctorCard";

const Profile = () => {
    /* --------------------- States --------------------- */
    const [isActivePage, setIsActivePage] = useState<"Posts" | "Reviews">("Posts");

    /* -------------------- Handlers -------------------- */
    const handlePostClick = () => {
        setIsActivePage("Posts");
    };
    const handleReviewClick = () => {
        setIsActivePage("Reviews");
    };
        
    return (
        <div className="flex flex-col items-center">
            <button className= "text-[#060B73] rounded-full border-2 border-[#060B73] shadow-md hover:shadow-lg py-2 px-20 text-xl font-semibold w-fit md:ml-auto m-10">
                Edit Profile
            </button>
            <DoctorCard />
            <div className="flex w-full h-16 border justify-around text-lg font-semibold">
                <button
                    onClick={handlePostClick}
                    style={{ color: isActivePage === "Posts" ? "blue" : "" }}
                >
                    Posts
                </button>
                <button
                    onClick={handleReviewClick}
                    style={{ color: isActivePage === "Reviews" ? "blue" : "" }}
                >
                    Reviews
                </button>
            </div>
            {
                isActivePage === "Posts" ? <Posts/> : <Reviews />
            }
        
        </div>
    );
}
export default Profile;
