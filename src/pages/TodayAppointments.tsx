import { useEffect } from "react";
import PatientCard from "../Components/appointment/PatientCard";
import Cookies from 'js-cookie';
import useCustomQuery from "../hooks/useCustomQuery";
import { CircularProgress } from "@mui/material";

interface IProps {}

const TodayAppointments = ({}: IProps) => {
  const token = Cookies.get('token');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(today.toISOString());
  const { isLoading, data, isError } = useCustomQuery({
    queryKey: ['todayAppointments'],
    url: 'doctors/appointments?limit=50&startDate='+today.toISOString()+'&endDate='+tomorrow.toISOString(),
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    pollInterval: 60000
  });

  console.log(data);

  useEffect(() => {
    if (isError) {
      console.error("Failed to fetch appointments");
    }
  }, [isError]);

  const PatientsCards = () => {
    let appointments = data?.data?.appointments || [];

    // Sort appointments by date
    appointments = appointments.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Filter appointments by status
    appointments = appointments.filter((appointment: any) => 
      appointment.status === "PENDING" || appointment.status === "IN_PROGRESS"
    );

    return (
      <>
        {appointments.map((appointment: any, index: number) => {
          const date = new Date(appointment.date);
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const day = days[date.getDay()];
          let time = `${date.getHours()}:${date.getMinutes()}`;

          // Ensure time is in 2 digits
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
              paidbutton
            />
          );
        })}
      </>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 py-5">
      <h1 className="text-primary text-3xl font-medium font-cairo mb-4 -ml-80">Today's Appointments</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <CircularProgress size={48} />
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center h-full w-full text-red-500">
          <p>Failed to load appointments. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-items-center">
          <PatientsCards />
        </div>
      )}
    </div>
  );
}
 
export default TodayAppointments;
