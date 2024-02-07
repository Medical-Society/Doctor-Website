 export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  placeholder?: string;
}

const FormInput = ({label, type, id, name, value, onChange, ariaLabel}: FormInputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className='rounded-3xl p-2 border border-gray-300'
      />
    </div>
  )
}

export default FormInput

