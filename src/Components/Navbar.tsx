import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import DropDown from "./ui/DropDown";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface IProps {
  path: string;
}

const Navbar = ({ path }: IProps) => {
  const { token } = useSelector((state: RootState) => state.auth)

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (path !== "/") {
      setScrolled(true);
      return;
    }
    if (window.scrollY >= 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (path !== "/") {
      setScrolled(true);
    }
    else {
      handleScroll();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    <div className="z-50 fixed top-0 w-full">
      <nav
        className={`duration-300 w-full flex justify-between items-center py-2 px-4 ${
          scrolled ? "bg-white-90 shadow-md" : "bg-transparent"
        } md:px-8`}
      >
        <NavLink
          to="/"
          className={`text-xl ${
            scrolled ? "text-primary" : "text-white"
          } font-cinzel-decorative`}
        >
          MEDICAL SOCIETY
        </NavLink>
        <div className="flex space-x-3">
          <NavLink
            to="all-appoinments"
            className={`text-xl ${
              scrolled ? "text-primary" : "text-white"
            } hover:text-primary`}
          >
            Appointments
          </NavLink>
          <NavLink
            to="Prescription"
            className={`text-xl ${
              scrolled ? "text-primary" : "text-white"
            } hover:text-primary`}
          >
            Prescription
        </NavLink>
        </div>
        <div className="flex gap-5">
          {!token ? (
            <>
              <NavLink
                to="/login"
                className={`text-xl py-1 px-3 border rounded-full ${
                  scrolled ? "border-primary" : "border-white"
                } ${
                  scrolled ? "text-primary" : "text-white"
                } hover:bg-white hover:text-primary active:bg-primary active:text-white md:px-4`}
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={`text-xl py-1 px-4 border rounded-full ${
                  scrolled ? "bg-primary" : "bg-white"
                } ${scrolled ? "text-white" : "text-primary"} md:px-6`}
              >
                Signup
              </NavLink>
            </>
          ) : (
            <DropDown />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
