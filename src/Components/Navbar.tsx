import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import NotificationBadge from "./ui/NotificationBadge";
import DropDown from "./ui/DropDown";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
      <NavLink
        to="/"
        className="text-xl text-primary font-cinzel-decorative hidden md:block hover:text-gray-800"
      >
        MEDICAL SOCIETY
      </NavLink>

      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary hover:text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {token && (
        <div
          className={`md:block w-80 md:w-auto ${
            isOpen ? "block absolute top-14" : "hidden"
          }`}
          id="menu"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <NavLink
              to="/clinic"
              className="text-xl text-primary hover:text-gray-800"
            >
              Clinic
            </NavLink>
            <NavLink
              to="/models"
              className="text-xl text-primary hover:text-gray-800"
            >
              Models
            </NavLink>
          </div>
        </div>
      )}

      <div className="flex gap-3 items-center py-1 md:flex-row md:gap-3">
        {!token ? (
          <>
            <NavLink
              to="/login"
              className="text-xl py-1 px-3 border rounded-full border-primary text-primary hover:bg-white hover:text-primary active:bg-primary active:text-white md:px-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="text-xl py-1 px-4 border rounded-full bg-primary text-white md:px-6 hover:bg-white hover:text-primary active:bg-primary active:text-white"
            >
              Signup
            </NavLink>
          </>
        ) : (
          <div className="flex gap-3">
            <NavLink to="/chats" className="hover:text-gray-800">
              <NotificationBadge notificationCount={1} />
            </NavLink>
            <DropDown />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
