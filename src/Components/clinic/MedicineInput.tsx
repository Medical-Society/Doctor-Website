import { IMedicine } from "../../interfaces";

interface MedicineInputProps {
  index: number;
  medicine: IMedicine;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MedicineInput: React.FC<MedicineInputProps> = ({ index, medicine, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-1 gap-2">
            <label htmlFor={`name-${index}`} className="text-violet-950 text-lg">
                Medicine {index + 1}
            </label>
            <input
                type="text"
                name="name"
                data-index={index}
                value={medicine.name}
                onChange={onChange}
                className="border-2 rounded-md border-primary p-1"
            />
        </div>
        <div className="grid grid-cols-1 gap-2">
            <label htmlFor={`time-${index}`} className="text-violet-950 text-lg">
                Time
            </label>
            <input
                type="text"
                name="time"
                data-index={index}
                value={medicine.time}
                onChange={onChange}
                className="border-2 rounded-md border-primary p-1"
            />
        </div>
    </div>
  );
};

export default MedicineInput;
