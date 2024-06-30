import { IPrescription } from "../../interfaces";
import PrescriptionForm from "./PrescriptionForm";

interface IProps {
  prescription: IPrescription;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMedicine: () => void;
  handleAddPrescription: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Prescription = ({ prescription, handleChange, handleAddMedicine, handleAddPrescription }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-violet-950 text-3xl font-medium font-Cairo mb-4">
        Prescription
      </h1>
        <PrescriptionForm
          prescription={prescription}
          handleChange={handleChange}
          handleAddMedicine={handleAddMedicine}
          handleSubmit={handleAddPrescription}
        />
      </div>
  );
};

export default Prescription;
