import { IPatient } from "../../interfaces";
interface IProps {
  patient: IPatient;
}


const InfoPrescription = ({patient} : IProps) => {
  
  const birthDate = new Date(patient.birthdate);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return ( 
       <div className="md:mt-32 md:ml-10 ml-5 mt-20 md:w-[641.50px] ">
         <div className="flex flex-row">
           <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">Name :</div>
              <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-10 pl-4">{patient.patientName}</span>
         </div>

         <div className="flex flex-row">
         <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">Age :</div>
              <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-20 pl-10 ">{age}</span>
        </div>
       </div>
    )
}

export default InfoPrescription; 