import background from '../../assets/backgoroung-home.png'
import {useAuth} from '../../hooks/useAuth'

     
interface IProps {

}

const Welcome = ({} : IProps) => {  
    const { auth } = useAuth();
  console.log(auth);

    return ( 
<>
<img src={background} alt="background" className="w-full md:h-auto h-screen bg-black bg-opacity-20" />
    <h2 className="text-2xl text-opacity-95 tracking-widest text-white absolute top-1 text-center pt-36">
        WELCOME {auth?.doctor?.englishFullName.toUpperCase()} TO MEDICAL SOCIETY 
    </h2>   
     
    <div className='transform md:h-64 md:w-92 transition duration-500 hover:scale-125 flex md:flex-row flex-col justify-center items-center text-center gap-4 absolute top-80'>
        <p className="md:w-60  md:h-60  h-20 bg-slate-900 text-white bg-opacity-60 rounded-[20px] shadow flex justify-center items-center">
            Our system is going to help you to manage your appointments
        </p>
        <p className="md:w-60 md:h-60 bg-slate-900 p-6 text-white bg-opacity-60 rounded-[20px] shadow flex justify-center items-center">
            Level up your appointments with the digital prescriptions
        </p>
        <p className="md:w-60 md:h-60  bg-slate-900 p-6 text-white bg-opacity-60 rounded-[20px] shadow flex justify-center items-center">
            Create your portfolio to share your latest work and get feedback from your patients
        </p>
    </div>
    <button className=" absolute top-full w-[491px] h-[57px] px-20 py-2.5 rounded-[50px] border border-red justify-center items-center gap-2.5 inline-flex">
<div className="text-center text-white text-xl font-normal font-['Cairo']">Join us now</div>
</button>
 

</>

    )
    }
    export default Welcome; 
  