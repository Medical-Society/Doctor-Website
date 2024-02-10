import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import router from "./router/router"
import Cookies from 'js-cookie'
import { useAuth } from "./hooks/useAuth"
function App() {
  
  const { setAuth } = useAuth()
  useEffect(() => {
    const token = Cookies.get('auth')
    if (token) {
      setAuth({ token })
    }
  }, [setAuth])

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
