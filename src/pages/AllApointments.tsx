import PatientCard from "../Components/appointment/PatientCard"

interface IProps {

}

const AllApointments = ({}: IProps) => {

  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="text-3xl font-bold text-center mt-10">All Apointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center">

        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        <PatientCard patientName="Fero" patientNumber={1} date="12/12/2021" time="12:00" age={23} day="Monday" />
        


      </div>

        
    </div>
  )
}

export default AllApointments