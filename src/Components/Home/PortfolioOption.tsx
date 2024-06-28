// import { ReviewList } from "../../data/data";
// import ReviewsOnDoc from "../Profile/ReviewsOnDoc";
 
 

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
           <div className="md:ml-10">
            {/* {PortfolioOption}  */}
            </div>
         <div className='md:space-y-10 md:w-5/12 md:ml-auto mt-5'>
          <h1 className="text-center text-violet-950 text-3xl font-semibold ">Portfolio</h1>
          <h2 data-aos="fade-up" data-aos-duration="2000"  className='text-black text-2xl w-70 font-serif text-center'>You would have your portfolio that shows your latest work and your reviews</h2>
        </div>
          <h1></h1>   
      </div>
    )
}


    export default PortfolioOption; 

   