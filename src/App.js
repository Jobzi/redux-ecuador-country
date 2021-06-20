import Footer from './components/footer/footer'
import Header from './components/header/header'
import CountryUI from './pages/country/country'
import CityDetail from './pages/detail/city_detail'
import SignInSide from './pages/login/login_ui'
import UserUI from './pages/user/user_ui'
import Error404 from './pages/Error/error404'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllCountryAction } from './reducer/country/countryReducer'
import { Route, Switch } from 'wouter'
import { UserContextProvider } from './context/userContext'
// import Card from './components/Card'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCountryAction())
  }, [dispatch])
  return (
    <>
      <UserContextProvider>
        <Header/>
          <Switch>
              <Route path ='/' component={CountryUI}/>
              <Route path ='/detail/:id' component={CityDetail}/>
              <Route path ='/signIn' component={SignInSide}/>
              <Route path ='/user' component={UserUI}/>
              <Route path ='/:rest*' component={Error404}/>
          </Switch>
        <Footer/>
      </UserContextProvider>
    </>
  )
}

export default App
// *{user === null && renderLoginForm()} es una manera condicional de renderizar componentes, se leeria lo siguiente
// (si usuario es igual a nulll entonces renderiza RrenderLoginForme)
/*  <div className='container mx-auto'>
        <h1>Tailwind CSS</h1>
        <h2>Incorporado con PostCss</h2>
        <button className="btn btn-blue btn-blue:hover">Botón</button>
        <div className="my-5 flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Card photo='https://picsum.photos/800/600' />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Card photo='https://picsum.photos/800/600' />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Card photo='https://picsum.photos/800/600' />
            </div>
        </div>
    </div> */
