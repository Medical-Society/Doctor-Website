import useCustomQuery from "../../hooks/useCustomQuery";
import Cookies from 'js-cookie';
interface IProps {

}

const InfoCard = ({ children }: { children: React.ReactNode, up?: boolean }) => {
  return (
    <p 
        className={`text-center text-zinc-700 text-base font-normal font-['Cairo'] border rounded-full py-4`}
        style={{ fontFamily: "Cairo" }}
    >
      {children}
    </p>
  );
};
const InfoPrescription = ({} : IProps) => {
  const token = Cookies.get('token');
  const {isLoading, data} = useCustomQuery({
    queryKey: ['all-appointments'],
    url: '/appointments',
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  })
  if (isLoading) return <h1>Loading...</h1>;
  let appointments = data?.data?.appointments;
  if (appointments) {
    appointments = appointments.sort((a: any, b: any) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  const birthDate = new Date(appointments[0].patient.birthdate);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(appointments);
    return ( 
       <div className="md:mt-32 md:ml-10 ml-5 mt-20 md:w-[641.50px] ">
         <div className="flex flex-row">
           <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">Name :</div>
              <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-10 pl-4">{appointments[0].patient.patientName}</span>
         </div>

         <div className="flex flex-row">
         <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">Age :</div>
              <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-20 pl-10 ">{age}</span>
        </div>
         

        <div className="flex flex-col">
         <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed ">Diseases :</div>
          <div className="grid grid-cols-2 gap-2 items-center w-auto mr-2 md:mr-8 "> 
          <InfoCard>
            {/* Disease name */}
            Skin disease
          </InfoCard>
          </div>
          <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed ">Medicine :</div>
            <div className="grid grid-cols-2 gap-2 items-center w-auto mr-2 md:mr-8 "> 
                 <InfoCard>
                  {/* Medicine name */}
                  Panadol
                </InfoCard>
                 <InfoCard>
                  {/* Medicine name */}
                  Panadol
                </InfoCard>       
            </div>
        </div>
       </div>
    )
}

export default InfoPrescription; 