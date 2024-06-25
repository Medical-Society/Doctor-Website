import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import NotificationBadge from "./ui/NotificationBadge";
import DropDown from "./ui/DropDown";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="duration-300 w-full flex justify-between items-center py-2 px-4 bg-white-90 shadow-md md:px-8 relative">
      <NavLink to="/" className="text-xl text-primary font-cinzel-decorative hidden md:block">
        MEDICAL SOCIETY
      </NavLink>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div
        ref={menuRef}
        className={`absolute top-0 right-0 w-full h-30 md:w-auto bg-white z-10 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:items-center md:gap-3 md:bg-transparent md:transform-none`}
      >
        <button className="md:hidden absolute top-2 right-2 text-primary" onClick={closeMenu} aria-label="Close menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:hidden">
          <NavLink to="/clinic" className="text-xl text-primary py-2 px-4 md:text-base" onClick={closeMenu}>
            Clinic
          </NavLink>
          <NavLink to="/models" className="text-xl text-primary py-2 px-4 md:text-base" onClick={closeMenu}>
            Models
          </NavLink>
        </div>
      </div>

      {/* Render links for larger screens */}
      <div className="hidden md:flex gap-3">
        <NavLink to="/clinic" className="text-xl text-primary">
          Clinic
        </NavLink>
        <NavLink to="/models" className="text-xl text-primary">
          Models
        </NavLink>
      </div>

      <div className="flex flex-col gap-3 items-center py-1 md:flex-row md:gap-3">
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
              className="text-xl py-1 px-4 border rounded-full bg-primary text-white md:px-6"
            >
              Signup
            </NavLink>
          </>
        ) : (
          <div className="flex gap-3">
            <NavLink to="/chats">
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
