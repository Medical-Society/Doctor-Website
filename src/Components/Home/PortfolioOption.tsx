// import { ReviewList } from "../../data/data";
// import ReviewsOnDoc from "../Profile/ReviewsOnDoc";
import portfolio from "../../assets/portfolio.jpeg"
 
 

interface IProps {

}

const PortfolioOption = ({} : IProps) => {
//  const PortfolioOption = ReviewList.slice(0, 2).map((items,index)=> {
//     return (
//         // <ReviewsOnDoc
//         //     key={index}
//         //     name={items.name}
//         //     initialRating={items.initialRating}
//         //     review={items.review}
//         // />
//         <></>
//     )});  
 
    return (
      <div className=" md:flex md:flex-row justify-between w-auto h-auto mb-20 mt-20 m-auto">
           <div >
            {/* {PortfolioOption}  */}
            <img src={portfolio} alt="Your report" className="md:w-auto md:h-96" />
            </div>
         <div className='md:space-y-10 md:w-5/12 md:ml-auto mt-5'>
          <h1 className="text-center text-violet-950 text-3xl  font-cairo">Portfolio</h1>
          <h2   className='text-black text-2xl w-70  font-cairo text-center'>You would have your portfolio that shows your latest work and your reviews</h2>
        </div>
          <h1></h1>   
      </div>
    )
}


    export default PortfolioOption; 

   