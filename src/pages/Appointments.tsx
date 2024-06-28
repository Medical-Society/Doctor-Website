import PatientCard from "../Components/appointment/PatientCard";
import Cookies from 'js-cookie';
import useCustomQuery from "../hooks/useCustomQuery";

interface IProps {}

const Appointments = ({}: IProps) => {
  const token = Cookies.get('token');
  const { isLoading, data } = useCustomQuery({
    queryKey: ['all-appointments'],
    url: 'doctors/appointments',
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  console.log(data);

  const PatientsCards = () => {
    // sort the appointments by date
    let appointments = data?.data?.appointments;
    if (appointments) {
      appointments = appointments.sort((a: any, b: any) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }
    // filter the appointments by status pending
    appointments = appointments.filter(
      (appointment: any) => appointment.status === "PENDING" || appointment.status === "IN_PROGRESS"
    );
    return (
      <>
        {
          appointments.map((appointment: any, index: number) => {
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
            const timeArr = time.split(':');
            timeArr[0] = timeArr[0].length === 1 ? `0${timeArr[0]}` : timeArr[0];
            timeArr[1] = timeArr[1].length === 1 ? `0${timeArr[1]}` : timeArr[1];
            time = timeArr.join(':');

            const birthDate = new Date(appointment.patient.birthdate);
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);

            return (
              <PatientCard 
                key={appointment._id}
                patientName={appointment.patient.patientName}
                patientNumber={index + 1}
                date={formattedDate}
                time={time}
                day={day}
                age={age}
                status={appointment.status}
              />
            );
          })
        }
      </>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 py-5">
      <h1 className="text-3xl font-bold text-center">Today's Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        {
          isLoading ? 
            <div className="flex justify-center items-center h-full w-full">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          :
            <PatientsCards />
        }
      </div>
    </div>
  )
}

export default Appointments;
