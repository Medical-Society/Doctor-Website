import { NavLink } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Cookies from 'js-cookie'
import { useState } from "react";
interface IProps {

}

const Navbar = ({}: IProps) => {

  const { auth, setAuth } = useAuth();

  // change navbar color on scroll
  const [scrolled, setScrolled] = useState(false);
  const changeNavbarColor = () => {
    if(window.scrollY >= 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', changeNavbarColor);
  

  const handleLogout = () => {
    setAuth({
      token: '',
      doctor: {
        _id: '',
        englishFullName: '',
        arabicFullName: '',
        email: '',
        password: '',
        specialization: '',
        clinicAddress: '',
        nationalID: '',
        phoneNumber: '',
        age: 0,
        createdAt: '',
        updatedAt: '',
        status: '',
        gender: '',
        isVerified: false,
        __v: 0
      }
    });
    Cookies.remove('token');
    Cookies.remove('doctor');

  }
  return (
    <div className="z-50 fixed top-0 w-full"> 
      <nav className={`duration-300 h-16 w-full flex justify-between items-center px-4 ${scrolled ? 'bg-white-90 shadow-md' : 'bg-transparent'} md:p-8 lg:p-10`}>
        <NavLink 
          to="/" 
          className={`text-xl ${scrolled ? 'text-primary' : 'text-white'} font-cinzel-decorative md:text-2xl`}
        >
          MEDICAL SOCIETY
        </NavLink>
        <div className="flex gap-5">
            
            { !auth.token ? (<>

              <NavLink 
                to="/login" 
                className={`text-xl py-1 px-4 border rounded-full ${scrolled ? 'border-primary' : 'border-white'} ${scrolled ? 'text-primary' : 'text-white'} hover:bg-white hover:text-primary active:bg-primary active:text-white md:text-2xl md:py-2 md:px-6`}
              >
                Login
              </NavLink>

              <NavLink 
                to="/signup" 
                className={`text-xl py-1 px-4 border rounded-full ${scrolled ? 'bg-primary' : 'bg-white'} ${scrolled ? 'text-white' : 'text-primary'} md:text-2xl md:py-2 md:px-6`}
              >
                Signup
              </NavLink> 

            </>
            ) :
            <>
              <NavLink 
                to="/profile" 
                className={`text-xl py-1 px-4 border rounded-full ${scrolled ? 'border-primary' : 'border-white'} ${scrolled ? 'text-primary' : 'text-white'} hover:bg-white hover:text-primary active:bg-primary active:text-white md:text-2xl md:py-2 md:px-6`}
              >
                profile
              </NavLink>

              <button 
                className={`text-xl py-1 px-4 border rounded-full ${scrolled ? 'bg-primary' : 'bg-white'} ${scrolled ? 'text-white' : 'text-primary'} md:text-2xl md:py-2 md:px-6`}
                onClick={handleLogout}
              > 
              Logout
              </button>

            </>
            }
        </div>
      </nav>
    </div>
  )
}

export default Navbar