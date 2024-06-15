import InfoPrescription from "../Components/authForms/InfoPrescription";
import useCustomQuery from "../hooks/useCustomQuery";
import { IPatient, IPrescription } from "../interfaces";
import { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../services/axios.config";
import Prescription from "../Components/clinic/Prescription";

const DoctorRoom = () => {
  const token = Cookies.get("token");
  const defaultPrescription: IPrescription = {
    diseases: "",
    diagnose: "",
    medicines: [{ name: "", time: "" }],
  };

  const [prescription, setPrescription] =
    useState<IPrescription>(defaultPrescription);
  const [queryVersion, setQueryVersion] = useState(0);
  const { isLoading, data } = useCustomQuery({
    // queryKey: ["all-appointments", 'queryVersion'],
    queryKey: [`all-appointments-${queryVersion}`],
    url: "doctors/appointments",
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  if (isLoading) return <h1>Loading...</h1>;
  let appointments = data?.data?.appointments;
  if (appointments) {
    appointments = appointments.sort((a: any, b: any) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  appointments = appointments.filter(
    (appointment: any) =>
      appointment.status === "PENDING" || appointment.status === "IN_PROGRESS"
  );
  console.log(appointments);
  let patient: IPatient = appointments[0].patient;

  // Handle adding more medicine
  const handleAddMedicine = () => {
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      medicines: prevPrescription.medicines.concat({ name: "", time: "" }),
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = Number(e.target.dataset.index);

    if (!isNaN(index)) {
      // Update specific medicine details
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        medicines: prevPrescription.medicines.map((medicine, i) =>
          i === index ? { ...medicine, [name]: value } : medicine
        ),
      }));
    } else {
      // Update other fields
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        [name]: value,
      }));
    }
  };

  const handleAddPrescription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prescription);

    // check if the fileds are empty
    if (prescription.diseases === "" || prescription.diagnose === "") {
      alert("Please fill all the fields");
      return;
    }
    // check if the medicine fields are empty
    for (let i = 0; i < prescription.medicines.length; i++) {
      if (
        prescription.medicines[i].name === "" ||
        prescription.medicines[i].time === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
    }
    // prescription.patientId = patient._id;
    // send the prescription to the server
    console.log(prescription);
    try {
      // patients/:patientId/prescriptions
      const res = await axiosInstance.post(
        "patients/" + patient._id + "/prescriptions",
        prescription,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinishAppointment = async () => {
    try {
      //doctors/appointments/:appointmentId
      const res = await axiosInstance.patch(
        "doctors/appointments/" + appointments[0]._id,
        {
          status: "FINISHED",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQueryVersion((prev) => prev + 1);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPatient = async () => {
    try {
      const res = await axiosInstance.patch(
        "doctors/appointments/" + appointments[0]._id,
        {
          status: "IN_PROGRESS",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQueryVersion((prev) => prev + 1);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex md:flex-row flex-col h-full">
      {appointments.length && appointments[0].status === "PENDING" ? (
        <div className="h-full w-full flex flex-col justify-center items-center ">
          <button
            className="bg-primary text-white p-2 rounded-md"
            onClick={handleGetPatient}
          >
            get patient
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center">
            <InfoPrescription patient={patient} />
            <Prescription
              prescription={prescription}
              handleChange={handleChange}
              handleAddMedicine={handleAddMedicine}
              handleAddPrescription={handleAddPrescription}
            />
          </div>
          <button
            className="bg-primary text-white p-2 rounded-md"
            onClick={handleFinishAppointment}
          >
            finish appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorRoom;
