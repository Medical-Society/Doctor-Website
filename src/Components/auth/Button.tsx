interface IProps {
    text: string;
}

const Button = ({text}: IProps) => {
  return (
    <button className='bg-primary text-white w-full rounded-3xl p-2' type='submit'>
      {text}
    </button>
  )
}

export default Button