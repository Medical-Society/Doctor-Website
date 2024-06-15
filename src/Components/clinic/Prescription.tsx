import { IPrescription } from "../../interfaces";
import PrescriptionForm from "./PrescriptionForm"

interface IProps {
    prescription: IPrescription;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddMedicine: () => void;
    handleAddPrescription: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Prescription = ({handleAddMedicine, handleAddPrescription, handleChange, prescription}: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center ">
    <h1 className="text-violet-950 text-[32px] font-medium font-['Cairo'] ">
      Your report
    </h1>
    <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
      <PrescriptionForm
        prescription={prescription}
        handleChange={handleChange}
        handleAddMedicine={handleAddMedicine}
        handleSubmit={handleAddPrescription}
      />
    </div>
  </div>
  )
}

export default Prescription