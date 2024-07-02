interface IProps {
    type: 'login' | 'signup';
}
import { Link } from "react-router-dom";

const HaveAccountOrNot = ({type}: IProps) => {
  return (
      <p className='text-sm font-cairo'>
        {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
        <Link to={type === 'login' ? '/signup' : '/login'} className=' text-primary font-cairo hover:underline'>{type === 'login' ? ' Signup' : ' Login'}</Link>
      </p>
  )
}

export default HaveAccountOrNot