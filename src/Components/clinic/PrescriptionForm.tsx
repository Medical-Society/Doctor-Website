import { IPrescription } from "../../interfaces";
import MedicineInput from "./MedicineInput";

interface PrescriptionFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  prescription: IPrescription;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMedicine: () => void;
}

const PrescriptionForm = ({
  handleSubmit,
  prescription,
  handleChange,
  handleAddMedicine,
}: PrescriptionFormProps) => {
  return (
    <form className="bg-white rounded-xl shadow-md p-4 w-full max-w-4xl" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="diseases" className="text-violet-950 text-lg font-medium">
            Diseases:
          </label>
          <input
            type="text"
            id="diseases"
            name="diseases"
            value={prescription.diseases}
            onChange={handleChange}
            className="border rounded-md border-primary p-2 focus:outline-none focus:border-secondary"
            placeholder="Enter diseases"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="diagnose" className="text-violet-950 text-lg font-medium">
            Diagnose:
          </label>
          <input
            type="text"
            id="diagnose"
            name="diagnose"
            value={prescription.diagnose}
            onChange={handleChange}
            className="border rounded-md border-primary p-2 focus:outline-none focus:border-secondary"
            placeholder="Enter diagnosis"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        {prescription.medicines.map((medicine, index) => (
          <MedicineInput key={index} index={index} medicine={medicine} onChange={handleChange} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleAddMedicine}
          className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Add Medicine
        </button>
        <button
          type="submit"
          className="bg-gradient-to-l from-violet-950 to-slate-900 text-white py-2 px-4 ml-4 rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Add Prescription
        </button>
      </div>
    </form>
  );
};

export default PrescriptionForm;
