import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface IProps {
  name: string;
  initialRating?: number;
  review: string;
  className?: string;
  createdAt?: string;
}

const ReviewsOnDoc = ({ name, initialRating = 0, review, className, createdAt }: IProps) => {
  /* --------------------- States --------------------- */
  const [rating, setRating] = useState<number | null>(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  /* -------------------- Handlers -------------------- */
  const handleRatingChange = (currentRating: number) => {
    if (!initialRating) {
      setRating(currentRating);
    }
  };

  const handleMouseEnter = (currentRating: number) => {
    if (!initialRating) {
      setHover(currentRating);
    }
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString() : '';

  /* --------------------- JSX --------------------- */
  return (
    <div className={`flex flex-col items-center  max-w-md ${className}`}>
      <div className="p-4 border rounded-2xl w-full bg-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name={`rating-${name}`}
                    value={currentRating}
                    onClick={() => handleRatingChange(currentRating)}
                    className="hidden"
                  />
                  <FaStar
                    className="cursor-pointer"
                    color={currentRating <= (hover || rating || 0) ? "blue" : "gray"}
                    onMouseEnter={() => handleMouseEnter(currentRating)}
                    onMouseLeave={handleMouseLeave}
                    size={15}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <p className="mb-4 text-lg font-medium text-gray-800 bg-gray-50 p-4 rounded-2xl">
          {review}
        </p>
        <p className="text-sm font-normal text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default ReviewsOnDoc;
