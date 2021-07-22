import { Link } from 'wouter'
import { useUser } from '../../hooks/useUser'
import './header.css'
const Header = () => {
  const { isLogged, handleLogOut } = useUser()
  return (
    <>
        <nav className="header" >
          <Link href='/'>
            <button className ="headerButtom">Inicio</button>
          </Link>
            <button className ="headerButtom">Hola</button>
          {!isLogged
            ? <Link href='/signIn'>
                <button className ="headerButtom" style={{ backgroundColor: 'green', color: 'white' }}>Sign In</button>
              </Link>
            : <>
                <Link href='/user'>
                  <button className ="headerButtom">User</button>
                </Link>
                <button className ="headerButtom" style={{ backgroundColor: 'red', color: 'white' }}onClick={handleLogOut}>Log Out</button>
              </>}
        </nav>
    </>
  )
}
export default Header
