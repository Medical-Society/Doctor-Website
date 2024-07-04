import { IPrescription } from "../../interfaces";
import MedicineInput from "./MedicineInput";

interface IProps {
  prescription: IPrescription;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddMedicine: () => void;
  handleAddPrescription: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Prescription = ({
  prescription,
  handleChange,
  handleAddMedicine,
  handleAddPrescription,
}: IProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-violet-950 text-2xl font-medium font-Cairo mb-3">
        Prescription
      </h1>
      <form
        className="bg-white rounded-xl border border-primary p-4 w-full max-w-4xl"
        onSubmit={handleAddPrescription}
      >
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="diseases"
              className="text-violet-950 text-lg font-medium"
            >
              Diseases:
            </label>
            <input
              type="text"
              id="diseases"
              name="diseases"
              value={prescription.diseases}
              onChange={handleChange}
              className="border rounded-lg border-gray-300 shadow-sm p-2 focus:outline-none focus:border-secondary"
              placeholder="Enter diseases"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="diagnose"
              className="text-violet-950 text-lg font-medium"
            >
              Diagnose:
            </label>
            <input
              type="text"
              id="diagnose"
              name="diagnose"
              value={prescription.diagnose}
              onChange={handleChange}
              className="border rounded-lg border-gray-300 shadow-sm  p-2 focus:outline-none focus:border-secondary"
              placeholder="Enter diagnosis"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          {prescription.medicines.map((medicine, index) => (
            <MedicineInput
              key={index}
              index={index}
              medicine={medicine}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4  ">
          <button
            type="button"
            onClick={handleAddMedicine}
            className="  py-2 w-[550px]  border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            Add Medicine
          </button>
          <button
            type="submit"
            className=" py-1 w-[550px] ml-4 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary bg-primary text-white "
          > 
            Add Prescription
          </button>
        </div>
      </form>
    </div>
  );
};

export default Prescription;
