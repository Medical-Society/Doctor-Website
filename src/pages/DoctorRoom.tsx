import { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../services/axios.config";
import useCustomQuery from "../hooks/useCustomQuery";
import InfoPrescription from "../Components/clinic/InfoPrescription";
import Prescription from "../Components/clinic/Prescription";
import { IPatient, IPrescription } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

const DoctorRoom = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const defaultPrescription: IPrescription = {
    diseases: "",
    diagnose: "",
    medicines: [{ name: "", time: "" }],
  };

  const [prescription, setPrescription] = useState<IPrescription>(defaultPrescription);
  const [queryVersion, setQueryVersion] = useState(0);

  const { isLoading, data } = useCustomQuery({
    queryKey: [`all-appointment-${queryVersion}`],
    url: "doctors/appointments?limit=50",
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
  });

  const appointments = data?.data?.appointments || [];
  const filteredAppointments = appointments.filter(
    (appointment: any) =>
      appointment.status === "PENDING" || appointment.status === "IN_PROGRESS"
  );

  const handleShowMedicalHistory = () => {
    navigate(`/patient/${filteredAppointments[0]?.patient?._id}/medical-history`);
  };

  const handleGetPatient = async () => {
    try {
      await axiosInstance.patch(`doctors/appointments/${filteredAppointments[0]?._id}`, { status: "IN_PROGRESS" }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQueryVersion((prev) => prev + 1);
      toast.success("Patient retrieved");
    } catch (error) {
      console.error("Error retrieving patient", error);
      toast.error("Error retrieving patient");
    }
  };

  const handleAddMedicine = () => {
    setPrescription((prev) => ({
      ...prev,
      medicines: [...prev.medicines, { name: "", time: "" }],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPrescription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPrescription = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      prescription.diseases === "" ||
      prescription.diagnose === "" ||
      prescription.medicines.some((m) => m.name === "" || m.time === "")
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      await axiosInstance.post(
        `patients/${filteredAppointments[0]?.patient?._id}/prescriptions`,
        prescription,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Prescription added successfully");
      setPrescription(defaultPrescription);
      setQueryVersion((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding prescription", error);
      toast.error("Error adding prescription");
    }
  };

  const handleFinishAppointment = async () => {
    try {
      await axiosInstance.patch(
        `doctors/appointments/${filteredAppointments[0]?._id}`,
        { status: "FINISHED" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setQueryVersion((prev) => prev + 1);
      toast.success("Appointment finished");
    } catch (error) {
      console.error("Error finishing appointment", error);
      toast.error("Error finishing appointment");
    }
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <CircularProgress size={48} />
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl">No appointments available</h1>
      </div>
    );
  }

  const patient: IPatient = filteredAppointments[0]?.patient;

  return (
    <div className="flex flex-col items-center h-full">
      {appointments[0].status === "PENDING" ? (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl">No patient in the room</h1>
          <button
            className="bg-primary text-white p-2 rounded-md mt-4"
            onClick={handleGetPatient}
          >
            Get Patient
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="w-full p-4 rounded-xl">
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
              <InfoPrescription patient={patient} />
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <button
                  type="button"
                  className="text-sm py-2 px-4 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
                  onClick={handleShowMedicalHistory}
                >
                  Show Medical History
                </button>
                <button
                  className="bg-gradient-to-l py-2 px-4 from-violet-950 to-slate-900 text-white rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary"
                  onClick={handleFinishAppointment}
                >
                  Finish Appointment
                </button>
              </div>
            </div>
            <Prescription
              prescription={prescription}
              handleChange={handleChange}
              handleAddMedicine={handleAddMedicine}
              handleAddPrescription={handleAddPrescription}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorRoom;
