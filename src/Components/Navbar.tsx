import { NavLink } from "react-router-dom"

interface IProps {

}

const Navbar = ({}: IProps) => {
  return (
    <div className="fixed top-0 z-2 left-0 w-full drop-shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-black">Navbar</h1>
        <div className="flex gap-4">
            <NavLink to="/" className="text-xl text-black hover:text-primary active:text-primary">Home</NavLink>
            <NavLink to="/login" className="text-xl text-black hover:text-primary active:text-primary">Login</NavLink>
            <NavLink to="/signup" className="text-xl text-black hover:text-primary active:text-primary">Signup</NavLink>
        </div>
    </div>
  )
}

export default Navbar