import Footer from './components/footer/footer'
import Header from './components/header/header'
import BodyComponent from './components/content/content'
import CityDetail from './pages/detail/city_detail'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllCountryAction } from './reducer/country/countryReducer'
import { Route, Switch } from 'wouter'
// import Card from './components/Card'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCountryAction())
  }, [dispatch])
  return (
        <>
           <Header/>
                <Switch>
                    <Route path ='/'>
                        <BodyComponent/>
                    </Route>
                    <Route path ='/detail/:id' component={CityDetail}/>
                </Switch>
            <Footer/>
        </>
  )
}

export default App
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
