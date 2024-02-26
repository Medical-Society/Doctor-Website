import { ReviewList } from "../data/data";
import ReviewsOnDoc from "./ReviewsOnDoc";

interface IProps {

}

const Reviews = ({}: IProps) => {

    const patientReviews = ReviewList.map((review,index) => {
        return (
            <ReviewsOnDoc
                key={index}
                name={review.name}
                initialRating={review.initialRating}
                review={review.review}
            />
        )});  
  return (
    <div className="w-full flex flex-col items-center gap-4">
        {patientReviews}    
    </div>
  )
}

export default Reviews