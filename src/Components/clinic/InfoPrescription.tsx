import { useNavigate } from "react-router-dom";
import { IPatient } from "../../interfaces";
interface IProps {
  patient: IPatient;
}

const InfoPrescription = ({ patient }: IProps) => {
  const navigate = useNavigate();
  const birthDate = new Date(patient.birthdate);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const handleShowMedicalHistory = () => {
    navigate(`/patient/${patient._id}/medical-history`);
  };
  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex flex-row">
        <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">
          Name :
        </div>
        <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-10 pl-4">
          {patient.patientName}
        </span>
      </div>

      <div className="flex flex-row">
        <div className="text-neutral-800 text-[22px] font-medium font-['Cairo'] leading-relaxed">
          Age :
        </div>
        <span className="text-neutral-800 text-[22px] font-light font-['Cairo'] leading-relaxed md:pl-20 pl-10 ">
          {age}
        </span>
      </div>
      <button
        type="button"
        className="text-sm px-2 py-2 border-2 rounded-full border-primary to-secondary text-violet-950"
        onClick={handleShowMedicalHistory}
      >
        Show Medical History
      </button>
    </div>
  );
};

export default InfoPrescription;
