import { useNavigate } from "react-router-dom";
import { IPatient } from "../../interfaces";

interface IProps {
  patient: IPatient | null;
}

const InfoPrescription = ({ patient }: IProps) => {
  const navigate = useNavigate();

  const calculateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  if (!patient) return null;

  const age = calculateAge(patient.birthdate);

  const handleShowMedicalHistory = () => {
    navigate(`/patient/${patient._id}/medical-history`);
  };

  return (
    <div className="flex flex-col gap-2 md:ml-30">
      <div className="flex flex-row items-center">
        <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">
          Name:
        </div>
        <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-10 pl-4 w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {patient.patientName}
        </span>
      </div>
  
      <div className="flex flex-row items-center">
        <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">
          Age:
        </div>
        <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-20 pl-10">
          {age}
        </span>
      </div>
      
      <button
        type="button"
        className="text-sm px-2 py-2 border-2 rounded-full border-primary text-violet-950"
        onClick={handleShowMedicalHistory}
      >
        Show Medical History
      </button>
    </div>
  );
  };
  

export default InfoPrescription;
