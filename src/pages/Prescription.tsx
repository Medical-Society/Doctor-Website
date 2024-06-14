import InfoPrescription from "../Components/authForms/InfoPrescription";
import { IPrescription } from "../interfaces";
import { useState } from "react";

const Prescription = () => {
  const defaultPrescription: IPrescription = {
    patientId: "",
    diseases: "",
    diagnose: "",
    Medicine: [{ name: "", time: "" }],
  };

  const [prescription, setPrescription] =
    useState<IPrescription>(defaultPrescription);

  // Handle adding more medicine
  const handleAddMedicine = () => {
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      Medicine: [...prevPrescription.Medicine, { name: "", time: "" }],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = e.target.dataset.index;

    if (index !== undefined) {
      // Update specific medicine details
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        Medicine: prevPrescription.Medicine.map((medicine, i) =>
          i === Number(index) ? { ...medicine, [name]: value } : medicine
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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prescription);
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

  const renderMedicines = prescription.Medicine.map((medicine, index) => {
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

  return (
    <div className="flex md:flex-row flex-col ">
      <InfoPrescription />

      <div className="md:mt-16 mt-10 md:ml-auto ml-2 mr-2 relative md:right-5 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-violet-950 text-[32px] font-medium font-['Cairo'] ">
            Your report
          </h1>
          <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
            <form
              className="grid gap-2 bg-white rounded-xl py-1 px-1"
              onSubmit={handleSubmit}
            >
              {/* Render other prescriptions */}
              <div className="grid grid-cols-1 gap-2">
                {renderPrescription(prescription)}
              </div>
              {/* Render medicine prescriptions in grid-cols-2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
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
  );
};

export default Prescription;
