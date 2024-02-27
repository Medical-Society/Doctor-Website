import  { useState } from "react";
import Posts from "../Components/Posts";
import Reviews from "../Components/Reviews";

const DoctorsProfile = () => {
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
        <div className="py-20">
              <div className="flex items-center h-16 border justify-around text-lg font-semibold">
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
export default DoctorsProfile;
