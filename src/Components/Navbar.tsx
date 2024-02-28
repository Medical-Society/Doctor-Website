import { NavLink } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Cookies from 'js-cookie'
interface IProps {

}

const Navbar = ({}: IProps) => {

  const { auth, setAuth } = useAuth();
  

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
    <div className="z-50 sticky top-0"> 
      <nav className="duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-white px-5 py-3 z-50 shadow-md">
      <h1 className="text-black">Navbar</h1>
        <div className="flex gap-4">
            <NavLink 
              to="/" 
              className="text-2xl text-black hover:text-primary active:text-primary"
            >
              Home
            </NavLink>

            { !auth.token ? (<>

              <NavLink 
                to="/login" 
                className="text-2xl text-black hover:text-primary active:text-primary"
              >
                Login
              </NavLink>

              <NavLink 
                to="/signup" 
                className="text-2xl text-black hover:text-primary active:text-primary"
              >
                Signup
              </NavLink> 

            </>
            ) :
            <>
              <NavLink 
                to="/profile" 
                className="text-2xl text-black hover:text-primary active:text-primary"
              >
                profile
              </NavLink>

              <button 
                className="text-2xl text-black hover:text-primary active:text-primary"
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