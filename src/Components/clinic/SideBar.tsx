import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const SideBar = ({children}: IProps) => {
  return (
    <div className="w-full lg:w-96 lg:h-full lg:p-6 bg-white rounded-lg">
      <nav className="w-full flex flex-col justify-center lg:gap-5 gap-3 mb-5 font-cairo">
        {children}
      </nav>
    </div>
  );
};

export default SideBar;
