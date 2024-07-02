interface IProps {
    text: string;
    disabled?: boolean;
    className?: string;
}

const Button = ({text, disabled , className }: IProps) => {
  return (
    <button 
    className={`bg-primary text-white w-full rounded-[10px] p-2 ${className}`}
    type='submit' disabled={disabled}>
      {disabled ? 'Loading...' : text}
    </button>
  )
}

export default Button