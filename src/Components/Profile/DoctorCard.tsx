import useAuth from "../../hooks/useAuth"

interface IProps {
    
}

const DoctorCard = ({}: IProps) => {
    const {auth} = useAuth();
    const {englishFullName, clinicAddress,  specialization} = auth.doctor
    const description: string = "Doctor specializing in heart diseases, with 10 years of experience in the field. I have a clinic in the city center, and I am available for online consultations. I am also available for home visits in the city center. I am available for online consultations. I am also available for home visits in the city center. I am available for online consultations. I am also available for home visits in the city center."
    const imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkQdml7doThTYtvv80DP51Ek_7l1f64sOtg&usqp=CAU";
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-10/12 lg:flex-row">
            <img src={imgUrl} alt="Doctor Image" className="h-[417px] w-[417px]" />
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl text-[#060B73] font-medium ">
                    DR: {englishFullName}
                </h1>
                <h4 className="text-3xl font-semibold">
                    {specialization}
                </h4>
                <p className="text-lg">
                    {description}
                </p>
                <div>
                    <h4 className="text-2xl font-semibold">
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