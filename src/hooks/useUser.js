import { useContext } from 'react'
import useLocation from 'wouter/use-location'
import UserContext from '../context/userContext'
import { loginCredential } from '../services/login'

export function useUser () {
  const { user, setUser } = useContext(UserContext)
  const [, navigate] = useLocation()

  const HandleLogin = async ({ email, password }) => {
    try {
      const user = await loginCredential({ email, password })
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      setUser(user)
      navigate('/user')
    } catch (error) {
      console.log('Usuario no encontrado')
    }
  }

  const handleLogOut = () => {
    setUser(null)
    // noteservie.setToken('')
    window.localStorage.removeItem('loggedAppUser')
  }
  return { user, HandleLogin, handleLogOut }
}
