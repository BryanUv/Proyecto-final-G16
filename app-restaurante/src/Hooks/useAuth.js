import { useState } from "react"


const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('auth')) || { email: ''}
  )

  const isAuth = Boolean(user?.email) // ¡Sí esta logueado!

  const setAuth = (user) => {
    setUser(user)

    localStorage.setItem('auth', JSON.stringify(user))
  }

  const logout = () => {
    setUser({ email: '  '})

    localStorage.removeItem('auth')
  }

  return {
    user,
    isAuth,
    setAuth,
    logout
  }
}

export default useAuth