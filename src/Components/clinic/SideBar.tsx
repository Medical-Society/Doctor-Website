import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";

interface IProps {}

const SideBar = ({}: IProps) => {
  return (
    <div className="w-full lg:w-80 h-36 lg:h-full lg:p-6 bg-white shadow-lg rounded-lg">
      <nav className="w-full flex flex-col justify-center lg:gap-5 gap-3 mb-5">
        <NavLink
          to="appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "bg-blue-100 text-blue-600" : ""
            }`
          }
        >
          <FaCalendarAlt />
          Appointments
        </NavLink>
        <NavLink
          to="doctor-room"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "bg-blue-100 text-blue-600" : ""
            }`
          }
        >
          <FaUserMd />
          Doctor Room
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
