interface IProps {
    text: string;
    disabled?: boolean;
}

const Button = ({text, disabled}: IProps) => {
  return (
    <button className='bg-primary text-white w-full rounded-[10px] p-2' type='submit' disabled={disabled}>
      {disabled ? 'Loading...' : text}
    </button>
  )
}

export default Button