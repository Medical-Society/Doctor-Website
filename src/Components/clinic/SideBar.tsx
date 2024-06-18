import { NavLink } from "react-router-dom";

interface IProps {}

const SideBar = ({}: IProps) => {
  return (
    <div className="m-auto md:h-36 md:w-1/5 md:p-6 flex flex-col">
      <nav className="w-full flex flex-col md:gap-5 gap-3 mb-5">
        <NavLink
          to="appointments"
          className={({ isActive }) =>
            `text-lg font-medium text-gray-700 hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''} transition duration-200 ease-in-out`
          }
        >
          Appointments
        </NavLink>
        <NavLink
          to="doctor-room"
          className={({ isActive }) =>
            `text-lg font-medium text-gray-700 hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''} transition duration-200 ease-in-out`
          }
        >
          Doctor Room
        </NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
