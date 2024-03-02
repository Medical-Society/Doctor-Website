import { ReviewList } from "../../data/data";
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
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
        {patientReviews}    
    </div>
  )
}

export default Reviews