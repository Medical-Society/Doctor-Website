import useAuth from "../../hooks/useAuth"

interface IProps {
    
}

const DoctorCard = ({}: IProps) => {
    const {auth} = useAuth();
    console.log(auth)
    const {englishFullName, clinicAddress,  specialization, about, avatar} = auth.doctor
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-10/12 lg:flex-row">
            <img src={avatar} alt="Doctor Image" className="h-60" />
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl text-[#060B73] font-medium ">
                    DR: {englishFullName}
                </h1>
                <h4 className="text-2xl font-semibold">
                    {specialization}
                </h4>
                <p className="text-lg">
                    {about}
                </p>
                <div>
                    <h4 className="text-xl font-semibold">
                        clinic Address
                    </h4>
                    <p className="text-xl">
                        {clinicAddress}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default DoctorCard