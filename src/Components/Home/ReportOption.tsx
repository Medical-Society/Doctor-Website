import {useEffect} from "react";
import yourreport from "../../assets/report.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReportOption = () => {
 useEffect(() => {
  AOS.init({
    duration: 2000,
    easing: 'ease-in-out',
    once: true
  });
}, []);

/* delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300" */
   return (
    <>
      <h1 className='text-center text-violet-950 text-3xl font-cairo mt-2'>Benefits of our system</h1>
      <div className='md:flex md:flex-row md:justify-between md:space-x-56 m-auto h-auto mb-20 mt-20'>
        <div className='md:space-y-10 md:w-2/5 space-y-5 mb-5'>
          <h1 className="text-center text-violet-950 text-3xl  font-cairo">Digital prescriptions</h1>
          <h2   className='text-black text-2xl w-70 font-cairo text-center'>Level up your appointments with digital prescriptions</h2>
        </div>
        <img src={yourreport} alt="Your report" className="md:w-auto md:h-96" />
      </div>
    </>
  );
};
 

    export default ReportOption; 