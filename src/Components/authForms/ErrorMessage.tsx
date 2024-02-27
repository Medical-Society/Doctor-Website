interface IProps {
    msg?: string
}

const ErrorMessage = ({msg}: IProps) => {
  return msg ? <span className="max-w-48 text-red-700 mt-[2px] text-sm md:max-w-72 lg:max-w-full"> {msg} </span> : null
}

export default ErrorMessage