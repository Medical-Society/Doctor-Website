import { IPrescription } from "../../interfaces";
import MedicineInput from "./MedicineInput";

interface PrescriptionFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    prescription: IPrescription;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddMedicine: () => void;
}

const PrescriptionForm = ({handleSubmit, prescription, handleChange, handleAddMedicine  }: PrescriptionFormProps) => {


  return (
    <form className="grid gap-2 bg-white rounded-xl py-1 px-1" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="diseases" className="text-violet-950 text-lg">
          Diseases
        </label>
        <input
          type="text"
          name="diseases"
          value={prescription.diseases}
          onChange={handleChange}
          className="border-2 rounded-md border-primary p-1"
        />
        <label htmlFor="diagnose" className="text-violet-950 text-lg">
          Diagnose
        </label>
        <input
          type="text"
          name="diagnose"
          value={prescription.diagnose}
          onChange={handleChange}
          className="border-2 rounded-md border-primary p-1"
        />
      </div>
      <div className="grid grid-cols-1">
        {prescription.medicines.map((medicine, index) => (
          <MedicineInput key={index} index={index} medicine={medicine} onChange={handleChange} />
        ))}
      </div>
      <div className="flex flex-col gap-5 m-5">
        <button
          type="button"
          className="text-xl py-2 border-2 rounded-full border-primary to-secondary text-violet-950 md:text-2xl sm:py-2 sm:px-4"
          onClick={handleAddMedicine}
        >
          Click to add more medicine
        </button>
        <button className="text-xl bg-gradient-to-l from-violet-950 to-slate-900 text-white py-2 rounded-full md:text-2xl md:py-2 md:px-4">
          Done
        </button>
      </div>
    </form>
  );
};

export default PrescriptionForm;
