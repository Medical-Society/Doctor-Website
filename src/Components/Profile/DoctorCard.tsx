import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {}

const DoctorCard = ({}: IProps) => {
  const { doctor } = useSelector((state: RootState) => state.auth);
  const { englishFullName, clinicAddress, specialization, about, avatar } =
    doctor || {};
  return (
    <div className="flex flex-col items-center justify-around gap-10 md:flex-row w-full py-5">
      <img
        src={avatar}
        alt="Doctor Image"
        className="w-40 h-40 shadow-lg md:self-start"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-[#060B73] font-medium text-xl md:text-3xl">
          DR: {englishFullName}
        </h1>
        <h4 className="font-semibold text-lg md:text-xl"
        >
            {specialization}
        </h4>
        <p className="text-lg">{about}</p>
        <div>
          <h4 className="text-lg md:text-xl"
          >
            Clinic Address: 
        </h4>
          <p className="text-lg md:text-xl"
          >{clinicAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
