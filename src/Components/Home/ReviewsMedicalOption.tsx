import { DoctorsReviews } from "../../data/data";
import ReviewsOnDoc from "../Profile/ReviewsOnDoc";

interface IProps {

}

const ReviewsMedicalOption = ({} : IProps) => {
    const DoctorReview = DoctorsReviews.map((review,index) => {
        return (
            <ReviewsOnDoc
                key={index}
                name={review.name}
                initialRating={review.initialRating}
                review={review.review}
                className={
                    (index === 1 || index === 4 ?  'xl:mt-5' : '') + // Red background for second and fifth cards
                    (index >= DoctorsReviews.length - 3 ? ' md:opacity-70' : '') // Reduced opacity for last three cards
                }
                
            />
        )});
        
    return (
        <div className="text-center mt-20">
        <h1 className="text-center  text-violet-950 text-3xl font-cinzel-decorative-regular">Reviews of medical society</h1>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 font-cairo"> {DoctorReview}  </div>
        </div>
    )
    }

    export default ReviewsMedicalOption; ``