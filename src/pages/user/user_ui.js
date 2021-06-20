import { useContext, useEffect } from 'react'
import UserContext from '../../context/userContext'
import { useLocation } from 'wouter'
export default function UserUI () {
  // eslint-disable-next-line no-unused-vars
  const [, navigate] = useLocation()
  const { user } = useContext(UserContext)
  useEffect(() => {
    if (!user) {
      navigate('/')
      console.log('no logged')
    }
  }, [user])
  return (
    <div>
        <h1>User Data</h1>
        <h1>{user ? user.user : 'estoy null'}</h1>
    </div>
  )
}
