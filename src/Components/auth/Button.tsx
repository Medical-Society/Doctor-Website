interface IProps {
    text: string;
    disabled?: boolean;
}

const Button = ({text, disabled}: IProps) => {
  return (
    <button className='bg-primary text-white w-full rounded-3xl p-2' type='submit' disabled={disabled}>
      {text}
    </button>
  )
}

export default Button