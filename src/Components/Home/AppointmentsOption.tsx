import appointments from '../../assets/appointments.png'

interface IProps {

}

const AppointmentsOption = ({} : IProps) => {
    return (
        <>
         <div className='md:flex md:flex-row md:justify-between md:space-x-56  m-auto  h-auto mb-20 mt-20'>
        <div className='md:space-y-10 md:w-2/5 space-y-5 mb-5 '>
          <h1 className="text-center text-violet-950 text-3xl font-semibold">Manage your appointments</h1>
          <h2   className='text-black text-2xl w-70 font-serif text-center'>Our system is going to help you to manage your appointments</h2>
        </div>
        <img src={appointments} alt="Your report" className="md:w-auto md:h-96" />
      </div> 
        </>
    )
    }

    export default AppointmentsOption; 

 