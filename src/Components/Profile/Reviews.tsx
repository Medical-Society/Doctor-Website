import useCustomQuery from "../../hooks/useCustomQuery";
import ReviewsOnDoc from "./ReviewsOnDoc";
import Cookies from "js-cookie";

interface IProps {}

const Reviews = ({}: IProps) => {
  const doctor = Cookies.get("doctor");
  const id = doctor ? JSON.parse(doctor)._id : "";

  const { isLoading, data } = useCustomQuery({
    queryKey: ['reviews'],
    url: `doctors/${id}/reviews`
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  interface IReview {
    _id: string;
    patient: {
      patientName: string;
    };
    rating: number;
    comment: string;
    createdAt: string;
  }

  const patientReviews = data?.data?.reviews?.map((review: IReview) => {
    return (
      <ReviewsOnDoc
        key={review._id}
        name={review.patient.patientName}
        initialRating={review.rating}
        review={review.comment}
        createdAt={review.createdAt}
      />
    );
  });

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-8">Patient Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patientReviews}
      </div>
    </div>
  );
};

export default Reviews;
