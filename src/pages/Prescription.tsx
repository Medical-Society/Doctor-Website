import { PrescriptionList } from "../data/data";
import FormPrescription from "../Components/authForms/FormPrescription";
import InfoPrescription from "../Components/authForms/InfoPrescription";
import {IPrescription} from "../interfaces"
import { ChangeEvent, useState } from "react";
import {validatePescriptions} from  "../validations/index"
import { v4 as uuidv4 } from 'uuid';
const Prescription = () => {
    
   const defaultPrescription : IPrescription =
   {
      Diagnose : '' ,
      Diseases : '',
      Medicine : [] ,
   }
   const [errors, setErrors] = useState<IPrescription>({
    Diagnose: '',
    Diseases: '',
    Medicine: [''],
});

   const [prescription , setPrescription] = useState<IPrescription>(defaultPrescription);
   const [addingMedicine, setAddingMedicine] = useState(false);

    // Separate medicine prescriptions from other prescriptions
    const medicinePrescriptions = PrescriptionList.filter(prescription => prescription.name === 'Medicine');
    const otherPrescriptions = PrescriptionList.filter(prescription => prescription.name !== 'Medicine');

    const handleAddMedicine = () => {
        setPrescription((prevPrescription) => ({
            ...prevPrescription,
            Medicine: [...prevPrescription.Medicine, ""],
        }));
        setAddingMedicine(true); // Resetting addingMedicine state after adding a medicine
    };
    
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'Medicine') {
            setPrescription(prevPrescription => ({
                ...prevPrescription,
                Medicine: [...prevPrescription.Medicine, value]
            }));
        } else {
            setPrescription(prevPrescription => ({
                ...prevPrescription,
                [name]: value
            }));
        }
        setErrors({
            ...errors,
            [name]: ''
        });
    };
    
    
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validatePescriptions(prescription);
        const hasErrorMsg = Object.values(validationErrors).some((errMsg) => errMsg !== '');
        console.log(validationErrors);
        console.log(prescription);
        if (hasErrorMsg) {
            setErrors(validationErrors);
            return;
        }
        setAddingMedicine(false); // Set addingMedicine state back to false after form submission
    };
    
    // Render other prescriptions
   // Rendered form for adding a new medicine
   const AddMedicineForm = () => {
    return (
        <FormPrescription
            key={uuidv4()}
            id={uuidv4()}
            label="Add Medicine"
            name="Medicine"
            placeholder="Enter medicine name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                handleChange(e as React.ChangeEvent<HTMLInputElement>);
            }}
            value={prescription.Medicine[prescription.Medicine.length - 1]}
            errorMsg={errors.Medicine[errors.Medicine.length - 1] as string}
        />
    );
};

      
    const renderOtherPrescriptions = otherPrescriptions.map((prescription, index) => (
        <FormPrescription
            key={index}
            id={prescription.id}
            label={prescription.label}
            name={prescription.name}
            placeholder={prescription.placeholder}
            type={prescription.type}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                handleChange(e as React.ChangeEvent<HTMLInputElement>);
            }}
            value={prescription[prescription.name as keyof typeof prescription] as string}
            errorMsg={errors[prescription.name as keyof typeof errors]as string}
            />
            ));

            // Render medicine prescriptions in grid-cols-2
            const renderMedicinePrescriptions = medicinePrescriptions.map((prescription, index) => (
        <FormPrescription
                    key={index}
                    id={prescription.id}
                    label={prescription.label}
                    name={prescription.name}
                    placeholder={prescription.placeholder}
                    type={prescription.type}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                        handleChange(e as React.ChangeEvent<HTMLInputElement>);
                    }}
                  value={prescription[prescription.name as keyof typeof prescription] as string}
                  errorMsg={errors[prescription.name as keyof typeof errors]as string}
                    />
                    ));

                    

      return (
        <div className="flex md:flex-row flex-col ">
    
        <InfoPrescription />
     
        <div className=" md:mt-16 mt-10 md:ml-auto ml-2 mr-2 relative md:right-5 ">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-violet-950 text-[32px] font-medium font-['Cairo'] ">Your report</h1>
                <div className=" rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 lg:min-w-max mb-4">
                    <form className="grid gap-2 bg-white rounded-xl py-1 px-1"  onSubmit={handleSubmit}>
                        {/* Render other prescriptions */}
                        <div className="grid grid-cols-1 gap-2">
                            {renderOtherPrescriptions}
                        </div>
                        {/* Render medicine prescriptions in grid-cols-2 */}
                        <div className="grid  grid-cols-1 sm:grid-cols-2">
                            {renderMedicinePrescriptions}
                             {addingMedicine && <AddMedicineForm />}

                        </div>
                        <div className="flex flex-col gap-5 m-5 ">
                            <button type="button" className="text-xl py-2 border-2 rounded-full border-primary to-secondary text-violet-950 md:text-2xl sm:py-2 sm:px-4 " onClick={handleAddMedicine}>Click to add more medicine</button>
                            <button className="text-xl bg-gradient-to-l from-violet-950 to-slate-900 text-white py-2 rounded-full md:text-2xl md:py-2 md:px-4"
                            >Done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
               </div>    
    );}
    export default Prescription;