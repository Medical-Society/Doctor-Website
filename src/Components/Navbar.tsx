import { NavLink } from "react-router-dom";
import DropDown from "./ui/DropDown";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface IProps {
}

const Navbar = ({}: IProps) => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <nav
      className={`duration-300 w-full flex justify-between items-center py-2 px-4 bg-white-90 shadow-md 
        md:px-8`}
    >
      <NavLink
        to="/"
        className={`text-xl 
            text-primary font-cinzel-decorative`}
      >
        MEDICAL SOCIETY
      </NavLink>
      <NavLink to="/clinic" className="text-xl text-primary">
        Clinic
      </NavLink>
      <div className="flex gap-5">
        {!token ? (
          <>
            <NavLink
              to="/login"
              className={`text-xl py-1 px-3 border rounded-full border-primary text-primary hover:bg-white hover:text-primary active:bg-primary active:text-white md:px-4`}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={`text-xl py-1 px-4 border rounded-full bg-primary
                text-white md:px-6`}
            >
              Signup
            </NavLink>
          </>
        ) : (
          <DropDown />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
