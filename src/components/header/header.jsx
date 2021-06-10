import { Link } from 'wouter'
import './header.css'
const Header = () => {
  return (
    <>
        <div className="header" >
          <Link href='/'>
            <button className ="headerButtom">Inicio</button>
          </Link>
            <button className ="headerButtom">Hola</button>
            <button className ="headerButtom">como</button>
            <button className ="headerButtom">estas</button>
            <button className ="headerButtom">tu?</button>
        </div>
    </>
  )
}
export default Header
