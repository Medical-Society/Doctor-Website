import { useState } from "react";
import GradientBorder from "../ui/GradientBorder"

interface IProps {
  patientNumber: number;
  patientName: string;
  day: string;
  date: string;
  time: string;
  age: number;
  status: string;
}

const PatientCard = ({patientNumber, patientName, date, time, age, day, status}: IProps) => {

  const [paid, setPaid] = useState(false);
  const handlePaid = () => {
    setPaid(prev => !prev);
  }
  return (
        <div className="w-72 h-72 rounded overflow-hidden shadow-lg relative">
          <button 
            className="absolute top-0 right-0 px-2 py-1 bg-gradientbg text-white rounded-tr-2xl"
            onClick={handlePaid}
          >
            {paid ? 'Paid' : 'pending'}
            
          </button>

          <div className="flex flex-col px-4 py-4 gap-2">
            {/* patient name */}
            <div className="flex items-center">
              <div className="rounded-full bg-primary text-white flex items-center justify-center w-11 h-11">
                {patientNumber}
              </div>
              <h1 className="text-xl font-bold ml-3">{patientName}</h1>
            </div>
            {/* date */}
            <div className="flex items-center mt-2">
              <h1 className="text-lg text-primary">{day}</h1>
              <span className="text-lg ml-2"> {date}</span>
            </div>
            {/* time */}
            <div className="flex items-center mt-2">
              <h1 className="text-lg text-primary">Time:</h1>
              <span className="text-lg ml-2"> {time}</span>
            </div>
            {/* age */}
            <div className="flex items-center mt-2">
              <h1 className="text-lg text-primary">Age:</h1>
              <span className="text-lg ml-2"> {age}</span>
            </div>

            {/* status  */}

            <div className="flex items-center mt-2">
              <h1 className="text-lg text-primary">Status:</h1>
              <span className="text-lg ml-2"> {status}</span>
            </div>


            {/* <button className="relative text-primary px-4 py-2 rounded-md mt-4 z-10">
              Show Medical History
              <span style={GradientBorder({ borderRadius: '50px' })} />
            </button> */}

          </div>
          <span style={GradientBorder({ borderRadius: '15px' })} className="-z-10" />
        </div>
  )
}

export default PatientCard