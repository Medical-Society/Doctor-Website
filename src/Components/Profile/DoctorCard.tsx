import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {}

const DoctorCard = ({}: IProps) => {
  const { doctor } = useSelector((state: RootState) => state.auth);
  const { englishFullName, clinicAddress, specialization, about, avatar, availableTime } = doctor || {};
  console.log(availableTime?.weekdays);

  return (
    <div className="flex flex-col md:pl-24 items-center gap-6 md:flex-row w-full p-5 rounded-lg">
      <img
        src={avatar}
        alt="Doctor Image"
        className="w-64 h-64 border-2 mt-2"
      />
      <div className="flex flex-col gap-2 w-full md:w-2/5">
        <h1 className="text-[#060B73] font-cairo text-2xl md:text-4xl text-center md:text-left">
          Dr. {englishFullName}
        </h1>
        <h4 className="font-medium font-cairo text-lg md:text-2xl text-gray-700 text-center md:text-left">
          {specialization}
        </h4>
        <p className="text-md md:text-lg text-gray-600 text-center md:text-left font-cairo">
          {about}
        </p>
        <div className="mt-4">
          <h4 className="font-medium  font-cairo text-lg md:text-xl text-gray-700 text-center md:text-left">
            Clinic Address:
          </h4>
          <p className="text-md md:text-lg font-cairo text-gray-600 text-center md:text-left">
            {clinicAddress}
          </p>
        </div>
          <div className="mt-4">
            <h4 className="font-medium font-cairo text-lg md:text-xl text-gray-700 text-center md:text-left">
              Available Time:
            </h4>
            <div className="text-md md:text-lg font-cairo text-gray-600 text-center md:text-left">
              {Object.keys(availableTime?.weekdays || {}).map((day) => (
                <p key={day}>
                  {day}: {availableTime?.weekdays[day].from.hour}:
                  {availableTime?.weekdays[day].from.minute} -{" "}
                  {availableTime?.weekdays[day].to.hour}:
                  {availableTime?.weekdays[day].to.minute}
                </p>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default DoctorCard;
