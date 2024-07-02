import { FormPrescriptionProps } from '../../interfaces';
import ErrorMessage from "./ErrorMessage";
 
const FormPrescription = ({ id, label, name, onChange, placeholder, type, value,errorMsg   }: FormPrescriptionProps) => {
    
    return (
        
        <div className="flex flex-col ml-5 mr-5 mt-2">
            <label htmlFor={id} className="text-neutral-500 text-[25px] font-medium 'Cairo'] leading-relaxed ">{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                 value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`border-[2px] lg:w-[300px] w-auto border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-5 text-lg ${name=='Diagnose'? 'p-5 lg:w-[580px] w-auto' : ''} ${name=='Medicine' ?'p-1 lg:w-[280px]  w-auto':''} `}
            />
             <ErrorMessage msg={errorMsg} />
        </div>
        
    )
}

    export default FormPrescription; 
 