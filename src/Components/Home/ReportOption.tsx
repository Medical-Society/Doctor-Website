import {useEffect} from "react";
import yourreport from "../../assets/Your report.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

interface IProps {

}



const ReportOption = ({} : IProps) => {
  useEffect(() => {
    AOS.init();
  }, []
  )
    return (
      <>
      <h1 className='text-center text-violet-950 text-3xl font-serif'>Benefits of our system</h1>
      <div className='md:flex md:flex-row md:justify-between md:space-x-56  m-auto  h-auto mb-20 mt-20'>
        <div className='md:space-y-10 md:w-2/5 space-y-5 mb-5 '>
          <h1 className="text-center text-violet-950 text-3xl font-semibold">Digital prescriptions</h1>
          <h2   data-aos="fade-up" data-aos-duration="2000"  className='text-black text-2xl w-70 font-serif text-center'>Level up your appointments with digital prescriptions</h2>
        </div>
        <img src={yourreport} alt="Your report" className="md:w-auto md:h-96" />
      </div> 
      </>
    )
    }

    export default ReportOption; 