import PatientCard from "../Components/appointment/PatientCard"
import Cookies from 'js-cookie';
import useCustomQuery from "../hooks/useCustomQuery"

interface IProps {

}

const AllApointments = ({}: IProps) => {
  const token = Cookies.get('token');
  const {isLoading, data, isFetching} = useCustomQuery({
    queryKey: ['all-appointments'],
    url: '/appointments',
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  })

  const PatientsCards = () => {
    // sort the appointments by date
    let appointments = data?.data?.appointments;
    if (appointments) {
      appointments = appointments.sort((a: any, b: any) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }
    return (
      <>
        {
          isLoading ? <h1>Loading...</h1> : 
          appointments.map((appointment: any, index:number) => {
            // Create a new Date object from the appointment date
            const date = new Date(appointment.date);

            // Format the date to "24/3/2024"
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

            // Get the day of the week
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[date.getDay()];

            // Get the time in 24-hour format
            let time = `${date.getHours()}:${date.getMinutes()}`;

            // make the time 2 digits
            // 9:5 => 09:05
            const timeArr = time.split(':');
            timeArr[0] = timeArr[0].length === 1 ? `0${timeArr[0]}` : timeArr[0];
            timeArr[1] = timeArr[1].length === 1 ? `0${timeArr[1]}` : timeArr[1];
            time = timeArr.join(':');
            

            return (
              <PatientCard 
                key={appointment._id}
                patientName="Mina Magdy"
                patientNumber={index + 1}
                date={formattedDate}
                time={time}
                day={day}
                age={20}
              />
            );
          })
        }
      </>
    )
  }


  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="text-3xl font-bold text-center mt-10">All Apointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center">

        {
          isLoading ? 
            <h1>Loading...</h1> 
          :
          <PatientsCards /> 
          
        }
        


      </div>

        
    </div>
  )
}

export default AllApointments