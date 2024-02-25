import  { useState } from "react";
import ReviewsOnDoc from "../Components/ReviewsOnDoc";
import { ReviewList } from "../data/data";
 

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
      const reviews = ReviewList.map((review,index) => {
        return (
            <ReviewsOnDoc
                key={index}
                name={review.name}
                initialRating={review.initialRating}
                review={review.review}
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
        {isReviewClicked && reviews}
       </div> 
    );
};

export default DoctorsProfile;
