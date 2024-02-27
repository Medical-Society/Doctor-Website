import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ReviewsProps } from '../interfaces';


const ReviewsOnDoc = ({name,initialRating=0,review} : ReviewsProps) => {
    /* --------------------- States --------------------- */
    const [rating, setRating] = useState<number | null>(initialRating);
    const [hover, setHover] = useState<number | null>(null);

    /* -------------------- Handlers -------------------- */
    const handleRatingChange = (currentRating: number) => {
        if(!initialRating)
        {
            setRating(currentRating);
        }
    };

    const handleMouseEnter = (currentRating: number) => {
        if (!initialRating)
        {
            setHover(currentRating);
        }
    };

    const handleMouseLeave = () => {
        setHover(null);
    };
     /* --------------------- JSX --------------------- */
    return (
        <div className=" top-60 left-16 flex flex-col items-center min-h-8 justify-around w-10/12 pt-5">
            <div className="p-1">
                <div className="flex items-center gap-5">
                    <h1 className="text-xl font-bold ">{name}</h1>
                    <div className="flex flex-row gap-2">
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
                                        color={currentRating <= (hover || rating||0 ) ? "yellow" : "gray"}
                                        onMouseEnter={() => handleMouseEnter(currentRating)}
                                        onMouseLeave={handleMouseLeave}
                                        size={20}
                                    />
                                </label>
                            )
                        })}
                    </div>
                </div>
                <p className="mt-4 border  rounded-2xl p-4 font-semibold text-md">
                    {review}
                </p>
            </div>
        </div>
    )
}

export default ReviewsOnDoc;
