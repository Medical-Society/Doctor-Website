import { IPatient } from "../../interfaces";

interface IProps {
  patient: IPatient | null;
}

const InfoPrescription = ({ patient }: IProps) => {

  const calculateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  if (!patient) return null;

  const age = calculateAge(patient.birthdate);



  return (
    <div className="flex flex-col gap-4 md:ml-8">
      <div className="flex items-center">
        <div className="text-neutral-800 text-lg font-medium">Name:</div>
        <div className="ml-2 text-neutral-900 text-lg font-normal truncate md:w-40 lg:w-auto">{patient.patientName}</div>
      </div>

      <div className="flex items-center">
        <div className="text-neutral-800 text-lg font-medium">Age:</div>
        <div className="ml-2 text-neutral-900 text-lg font-normal">{age}</div>
      </div>


    </div>
  );
};

export default InfoPrescription;
