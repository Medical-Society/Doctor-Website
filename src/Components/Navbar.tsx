import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import DropDown from "./ui/DropDown";

interface IProps {
  path: string;
}

const Navbar = ({ path }: IProps) => {
  const { auth } = useAuth();

  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled, path);

  // Function to handle scroll event
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
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
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
        <div className="flex">
          <NavLink
            to="all-appoinments"
            className={`text-xl ${
              scrolled ? "text-primary" : "text-white"
            } hover:text-primary`}
          >
            All Appointments
          </NavLink>
        </div>
        <div className="flex gap-5">
          {!auth.token ? (
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
