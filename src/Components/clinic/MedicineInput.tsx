import { IMedicine } from "../../interfaces";

interface MedicineInputProps {
  index: number;
  medicine: IMedicine;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MedicineInput: React.FC<MedicineInputProps> = ({ index, medicine, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`name-${index}`} className="text-violet-950 text-lg font-medium">
          Medicine Name:
        </label>
        <input
          type="text"
          id={`name-${index}`}
          name="name"
          data-index={index}
          value={medicine.name}
          onChange={onChange}
          className="border rounded-lg border-gray-300 shadow-sm  p-2 focus:outline-none focus:border-secondary"
          placeholder="Enter medicine name"
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={`time-${index}`} className="text-violet-950 text-lg font-medium">
          Time:
        </label>
        <input
          type="text"
          id={`time-${index}`}
          name="time"
          data-index={index}
          value={medicine.time}
          onChange={onChange}
          className="border rounded-lg border-gray-300 shadow-sm  p-2 focus:outline-none focus:border-secondary"
          placeholder="Enter time"
          required
        />
      </div>
    </div>
  );
};

export default MedicineInput;
