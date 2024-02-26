import  { useState } from "react";
import ReviewsOnDoc from "../Components/ReviewsOnDoc";
import { DoctorsPosts, ReviewList } from "../data/data";
import PostsDoc from "../Components/Posts-doctor";
 

const DoctorsProfile = () => {
    /* --------------------- States --------------------- */
    const [isPostClicked, setIsPostClicked] = useState(false);
    const [isReviewClicked, setIsReviewClicked] = useState(false);

    /* -------------------- Handlers -------------------- */
    const handlePostClick = () => {
        setIsPostClicked(true);
        setIsReviewClicked(false);  

    };

    const handleReviewClick = () => {
        setIsReviewClicked(true);
        setIsPostClicked(false);  
    };

    /* ---------------------Render--------------------- */
      const Reviews = ReviewList.map((review,index) => {
        return (
            <ReviewsOnDoc
                key={index}
                name={review.name}
                initialRating={review.initialRating}
                review={review.review}
            />
        )});  

    const doctorsPosts = DoctorsPosts.map((post,index) => {
        return (
            <PostsDoc
                key={index}
                postTitle={post.postTitle}
                postContent={post.postContent}
            />
        )});
        
    return (
            <div> 
              <div className="relative top-40 flex items-center min-h-16 border justify-around  text-lg font-semibold">
             <button
                onClick={handlePostClick}
                style={{ color: isPostClicked ? "blue" : "" }}
              >
                Posts
             </button>
             <button
                onClick={handleReviewClick}
                style={{ color: isReviewClicked ? "blue" : "" }}
             >
                Reviews
              </button>
             </div>
        {isReviewClicked && Reviews}
        {isPostClicked && doctorsPosts}
       </div> 
    );
};

export default DoctorsProfile;
