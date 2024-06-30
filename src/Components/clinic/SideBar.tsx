import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const SideBar = ({children}: IProps) => {
  return (
    <div className="w-full lg:w-80 lg:h-full lg:p-6 bg-white shadow-lg rounded-lg">
      <nav className="w-full flex flex-col justify-center lg:gap-5 gap-3 mb-5">
        {children}
      </nav>
    </div>
  );
};

export default SideBar;
