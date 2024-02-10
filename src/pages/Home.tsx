import {useAuth} from '../hooks/useAuth'

interface IProps {

}

const Home = ({}: IProps) => {

  const {auth} = useAuth()
  console.log(auth)

  return (
    <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Welcome {auth?.doctor?.englishFullName}</h2>
    </div>
  )
}

export default Home