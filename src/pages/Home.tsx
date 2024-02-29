import AppointmentsOption from '../Components/Home/AppointmentsOption';
import PortfolioOption from '../Components/Home/PortfolioOption';
import ReportOption from '../Components/Home/ReportOption';
import ReviewsMedicalOption from '../Components/Home/ReviewsMedicalOption';
import Welcome from '../Components/Home/Welcome';


interface IProps {
}

const Home = ({}: IProps) => {


  
  return (
    <div className="flex flex-col justify-center items-center">
      <Welcome />
    <ReviewsMedicalOption />
     <ReportOption />
     <PortfolioOption />
     <AppointmentsOption /> 
    </div>
  );
};

 
export default  Home