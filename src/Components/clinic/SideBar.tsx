import { NavLink } from "react-router-dom";

interface IProps {

}

const SideBar = ({}: IProps) => {
  return (
    <div className="flex h-full flex-col justify-center gap-5">
      <NavLink
        to="appointments"
        className={({ isActive }) =>
          `text-xl text-primary hover:text-primary ${isActive ? 'border-b-2 border-primary' : ''}`
        }
      >
        Appointments
      </NavLink>
      <NavLink
        to="doctor-room"
        className={({ isActive }) =>
          `text-xl text-primary hover:text-primary ${isActive ? 'border-b-2 border-primary' : ''}`
        }
      >
        Doctor Room
      </NavLink>
    </div>
  );
}

export default SideBar;
