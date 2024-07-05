import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import NotificationBadge from "./ui/NotificationBadge";
import NavbarDropDown, { MenuItem } from "./DropDownMenu";
import { logoutReducer } from "../app/features/authSlice";
import { disconnectSocket } from "../services/socket";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const { token, doctor } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutReducer());
    navigate("/login");
    disconnectSocket();
  };

  const profileMenuItems: MenuItem[] = [
    { type: "navlink", label: "Profile", path: "/profile" },
    { type: "navlink", label: "Settings", path: "/settings" },
    { type: "button", label: "Logout", onClick: handleLogout },
  ];

  const navMenuItems: MenuItem[] = [
    { type: "navlink", label: "Clinic", path: "/clinic" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between py-1 px-3 md:px-10 w-full bg-[#060B73] h-14">
      <NavLink
        to="/"
        className={`text-xl text-white font-cinzel-decorative-regular ${
          token ? "hidden md:block" : "block"
        } `}
      >
        Medical society
      </NavLink>

      {token && (
        <NavbarDropDown
          menuItems={navMenuItems}
          buttonClassName="md:hidden inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold text-white focus:outline-none"
          menuClassName="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          itemClassName="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10 hover:bg-white/10"
          buttonLabel="Menu"
          hideOnDesktop
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
        </NavbarDropDown>
      )}

      <div className={`md:block w-80 md:w-auto hidden`} id="menu">
        {token &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && (
            <NavLink
              to="/clinic"
              className="text-2xl text-white font-cinzel-decorative-regular"
            >
              Clinic
            </NavLink>
          )}
      </div>

      <div className="flex gap-3 items-center py-1 md:flex-row md:gap-3">
        {!token &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && (
            <>
              <NavLink
                to="/login"
                className="text-lg py-1 px-3 md:px-6 rounded-[10px] border border-primary text-primary bg-white hover:bg-primary hover:text-white active:bg-primary active:text-white hover:border-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="text-lg py-1 px-4 border rounded-[10px] bg-primary text-white md:px-6 hover:bg-white hover:text-primary active:bg-primary active:text-white"
              >
                Signup
              </NavLink>
            </>
          )}
        {token && (
          <div className="flex gap-3 items-center">
            <NavLink to="/chats" className="hover:text-gray-800">
              <NotificationBadge notificationCount={1} />
            </NavLink>
            <NavbarDropDown
              menuItems={profileMenuItems}
              buttonClassName="inline-flex w-full justify-center px-3 py-1 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 rounded-3xl"
              menuClassName="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              itemClassName="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100"
              buttonLabel="Actions"
            >
              <div className="flex items-center gap-2">
                <img
                  src={doctor?.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="white">DR {doctor?.englishFullName}</span>
              </div>
            </NavbarDropDown>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
