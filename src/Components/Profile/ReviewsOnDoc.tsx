import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ReviewsProps } from '../../interfaces';


const ReviewsOnDoc = ({name,initialRating=0,review,imgUrl,className} : ReviewsProps) => {
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

    const hasImage = imgUrl; 
     /* --------------------- JSX --------------------- */
    return (
        <div className={`items-center min-h-8 pt-5 bg ${className}`}>
            <div className={`p-1 ${hasImage?'border rounded-3xl' : ''}`}>
                <div className={`${hasImage?'flex md:gap-10 gap-6' : 'flex justify-between ml-5 md:items-center md:gap-20 '}`}>
                {imgUrl && <img src={imgUrl} alt={name} className="w-15 h-10 rounded-full border" />}
                    <h1 className="text-xl font-bold  ">{name}</h1>
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
                <p className={`mt-4 ${hasImage?'' : 'border'} w-96 rounded-3xl p-4 font-semibold text-md`}>
                    {review}
                </p>
            </div>
        </div>
    )
}

export default ReviewsOnDoc;
