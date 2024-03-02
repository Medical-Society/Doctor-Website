import { DoctorsReviews } from "../../data/data";
import ReviewsOnDoc from "../Profile/ReviewsOnDoc";

interface IProps {

}

const ReviewsMedicalOption = ({} : IProps) => {
    const DoctorReview = DoctorsReviews.map((review,index) => {
        return (
            <ReviewsOnDoc
               imgUrl={review.imgUrl}
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
        <h1 className="text-center  text-violet-950 text-3xl font-serif">Reviews of Medical society</h1>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-5"> {DoctorReview}  </div>
        <button className="rounded-full border-2 border-primary bg-gradient-to-br
         from-blue-950 to-blue-800 shadow-md hover:shadow-lg text-white py-2 px-20 text-xl font-semibold  md:ml-auto mb-10 text-center">Show all reviews</button>
        </div>
    )
    }

    export default ReviewsMedicalOption; ``