import InfoPrescription from "../Components/authForms/InfoPrescription";
import useCustomQuery from "../hooks/useCustomQuery";
import { IPatient, IPrescription } from "../interfaces";
import { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../services/axios.config";

const Prescription = () => {
  const token = Cookies.get("token");
  const defaultPrescription: IPrescription = {
    // patientId: "",
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
      Medicine: [...prevPrescription.medicines, { name: "", time: "" }],
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

  const renderPrescription = (prescription: IPrescription) => {
    return (
      <div>
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
    );
  };

  const renderMedicines = prescription.medicines.map((medicine, index) => {
    return (
      <div key={index}>
        <label htmlFor={`name-${index}`} className="text-violet-950 text-lg">
          Medicine {index + 1}
        </label>
        <input
          type="text"
          name="name"
          data-index={index}
          value={medicine.name}
          onChange={handleChange}
          className="border-2 rounded-md border-primary p-1"
        />
        <label htmlFor={`time-${index}`} className="text-violet-950 text-lg">
          Time
        </label>
        <input
          type="text"
          name="time"
          data-index={index}
          value={medicine.time}
          onChange={handleChange}
          className="border-2 rounded-md border-primary p-1"
        />
      </div>
    );
  });

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
        <div className="flex flex-col justify-center items-center w-full">
          <div>
            <InfoPrescription patient={patient} />
            <div className="md:mt-16 mt-10 md:ml-auto ml-2 mr-2 relative md:right-5 ">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-violet-950 text-[32px] font-medium font-['Cairo'] ">
                  Your report
                </h1>
                <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
                  <form
                    className="grid gap-2 bg-white rounded-xl py-1 px-1"
                    onSubmit={handleAddPrescription}
                  >
                    {/* Render other prescriptions */}
                    <div className="grid grid-cols-1 gap-2">
                      {renderPrescription(prescription)}
                    </div>
                    {/* Render medicine prescriptions in grid-cols-2 */}
                    <div className="grid grid-cols-1">
                      {renderMedicines}
                    </div>
                    <div className="flex flex-col gap-5 m-5 ">
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
                </div>
              </div>
            </div>
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

export default Prescription;
