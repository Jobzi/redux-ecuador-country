import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, HandleLogin, handleLogOut } = useUser()
  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    try {
      await HandleLogin({ email, password })
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error('ERROR WITH AUTH')
    }
  }
  return <>
    {user === null
      ? <form onSubmit={handleLoginSubmit}>
            <input
                    type='text'
                    value = {email}
                    name='Email'
                    placeholder='Email'
                    onChange={({ target }) => setEmail(target.value)}
            />
            <input
                    type='password'
                    value = {password}
                    name='Password'
                    placeholder='Password'
                    onChange={({ target }) => setPassword(target.value)}
            />
            <button>Login</button>
         </form>
      : <button onClick={handleLogOut}> LogOut</button>}
  </>
}
export default Login
