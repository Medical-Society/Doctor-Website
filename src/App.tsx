import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import router from "./router/router"
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux"
import { loginReducer } from "./app/features/authSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      const token = Cookies.get('token');
      const doctor = Cookies.get('doctor');
      if (token && doctor) {
          dispatch(loginReducer({token, doctor: JSON.parse(doctor)}));
      }
  }, [])

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
