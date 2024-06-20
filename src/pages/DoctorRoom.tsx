import { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../services/axios.config";
import useCustomQuery from "../hooks/useCustomQuery";
import InfoPrescription from "../Components/clinic/InfoPrescription";
import Prescription from "../Components/clinic/Prescription";
import { IPatient, IPrescription } from "../interfaces";

const DoctorRoom = () => {
  const token = Cookies.get("token");

  const defaultPrescription: IPrescription = {
    diseases: "",
    diagnose: "",
    medicines: [{ name: "", time: "" }],
  };

  const [prescription, setPrescription] = useState<IPrescription>(defaultPrescription);
  const [queryVersion, setQueryVersion] = useState(0);

  const { isLoading, data } = useCustomQuery({
    queryKey: [`all-appointments-${queryVersion}`],
    url: "doctors/appointments",
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  let appointments = data?.data?.appointments || [];
  appointments = appointments
    .filter((appointment: any) => appointment.status === "PENDING" || appointment.status === "IN_PROGRESS")
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const patient: IPatient = appointments[0]?.patient || null;

  const handleAddMedicine = () => {
    setPrescription(prev => ({
      ...prev,
      medicines: [...prev.medicines, { name: "", time: "" }],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset } = e.target;
    const index = Number(dataset.index);

    setPrescription(prev => {
      if (!isNaN(index)) {
        return {
          ...prev,
          medicines: prev.medicines.map((medicine, i) =>
            i === index ? { ...medicine, [name]: value } : medicine
          ),
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleAddPrescription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (prescription.diseases === "" || prescription.diagnose === "" || prescription.medicines.some(m => m.name === "" || m.time === "")) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await axiosInstance.post(`patients/${patient?._id}/prescriptions`, prescription, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Prescription added successfully");
    } catch (error) {
      console.error("Error adding prescription", error);
      alert("Error adding prescription");
    }
  };

  const handleFinishAppointment = async () => {
    try {
      await axiosInstance.patch(`doctors/appointments/${appointments[0]._id}`, { status: "FINISHED" }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQueryVersion(prev => prev + 1);
      alert("Appointment finished");
    } catch (error) {
      console.error("Error finishing appointment", error);
      alert("Error finishing appointment");
    }
  };

  const handleGetPatient = async () => {
    try {
      await axiosInstance.patch(`doctors/appointments/${appointments[0]._id}`, { status: "IN_PROGRESS" }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQueryVersion(prev => prev + 1);
      alert("Patient retrieved");
    } catch (error) {
      console.error("Error retrieving patient", error);
      alert("Error retrieving patient");
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl">No appointments available</h1>
      </div>
    );
  }

  return (
    <div className="flex md:flex-row flex-col h-full">
      {appointments[0].status === "PENDING" ? (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <button className="bg-primary text-white p-2 rounded-md" onClick={handleGetPatient}>
            Get Patient
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="flex lg:flex-row flex-col items-center gap-12">
            <InfoPrescription patient={patient} />
            <Prescription
              prescription={prescription}
              handleChange={handleChange}
              handleAddMedicine={handleAddMedicine}
              handleAddPrescription={handleAddPrescription}
            />
          </div>
          <button className="bg-primary text-white p-2 rounded-md" onClick={handleFinishAppointment}>
            Finish Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorRoom;
