interface IProps {
    type: 'login' | 'signup';
}

const HaveAccountOrNot = ({type}: IProps) => {
  return (
      <p className='text-sm'>
        {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
        <a href="#" className='text-primary'>
          {type === 'login' ? ' Sign up' : ' Login'}
        </a>
      </p>
  )
}

export default HaveAccountOrNot