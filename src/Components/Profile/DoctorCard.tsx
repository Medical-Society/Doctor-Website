import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {}

const DoctorCard = ({}: IProps) => {
  const { doctor } = useSelector((state: RootState) => state.auth);
  const { englishFullName, clinicAddress, specialization, about, avatar } = doctor || {};

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row w-full p-5 rounded-lg">
      <img
        src={avatar}
        alt="Doctor Image"
        className="w-44 h-44 rounded-full shadow-md"
      />
      <div className="flex flex-col gap-4 w-full md:w-2/5">
        <h1 className="text-[#060B73] font-semibold text-2xl md:text-4xl text-center md:text-left">
          Dr. {englishFullName}
        </h1>
        <h4 className="font-medium text-lg md:text-2xl text-gray-700 text-center md:text-left">
          {specialization}
        </h4>
        <p className="text-md md:text-lg text-gray-600 text-center md:text-left">
          {about}
        </p>
        <div className="mt-4">
          <h4 className="font-medium text-lg md:text-xl text-gray-700 text-center md:text-left">
            Clinic Address:
          </h4>
          <p className="text-md md:text-lg text-gray-600 text-center md:text-left">
            {clinicAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
