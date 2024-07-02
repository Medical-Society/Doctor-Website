import { useState } from "react";
import GradientBorder from "../ui/GradientBorder";

interface IProps {
  patientNumber: number;
  patientName: string;
  day: string;
  date: string;
  time: string;
  age: number;
  status: string;
  paidbutton?: boolean;
}

const PatientCard = ({
  paidbutton,
  patientNumber,
  patientName,
  date,
  time,
  age,
  day,
  status,
}: IProps) => {
  const [paid, setPaid] = useState(false);
  const handlePaid = () => {
    setPaid((prev) => !prev);
  };

  return (
    <div className="relative w-80 rounded-lg overflow-hidden bg-white transform transition-all duration-300 hover:scale-105">
      {paidbutton && (
        <button
          className={`absolute top-0 right-0 px-3 py-1 rounded-bl-2xl font-semibold ${
            paid
              ? "bg-gradient-to-r from-green-400 to-green-600"
              : "bg-gradient-to-r from-red-400 to-red-600"
          } text-white`}
          onClick={handlePaid}
        >
          {paid ? "Paid" : "Pending"}
        </button>
      )}

      <div className="flex flex-col px-4 py-6 gap-3">
        <div className="flex items-center">
          <div className="rounded-full bg-gradient-to-r from-violet-700 to-blue-600 text-white flex items-center justify-center w-11 h-11 font-bold">
            {patientNumber}
          </div>
          <h1 className="text-lg text-primary font-medium ml-3">{patientName}</h1>
        </div>

        <div className="flex items-center">
          <h1 className="text-lg text-primary font-medium">{day}</h1>
          <span className="text-lg ml-2">{date}</span>
        </div>

        <div className="flex items-center">
          <h1 className="text-lg text-primary font-medium">Time:</h1>
          <span className="text-lg ml-2">{time}</span>
        </div>

        <div className="flex items-center">
          <h1 className="text-lg text-primary font-medium">Age:</h1>
          <span className="text-lg ml-2">{age}</span>
        </div>

        <div className="flex items-center">
          <h1 className="text-lg text-primary font-medium">Status:</h1>
          <span
            className={`text-lg ml-2 font-semibold ${
              status === "PENDING" ? "text-yellow-500" : "text-green-500"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      <span 
        style={GradientBorder({ borderRadius: "15px"  })}
        className="-z-10 absolute inset-0 "
      />
    </div>
  );
};

export default PatientCard;
