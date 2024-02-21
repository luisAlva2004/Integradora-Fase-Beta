import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Main/Navegacion/Nav'
import Inicio from './Main/Componentes/Inicio'
import AppMovil from './Main/Componentes/AppMovil'
import Producto from './Main/Componentes/Producto'
import LogIn from './Main/Componentes/LogIn'
import SignUp from './Main/Componentes/SignUp'
import Error from './Main/Componentes/Error'

export default function App() {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' exact Component={Inicio}/>
                <Route path='/AppMovil' exact Component={AppMovil}/>
                <Route path='/Producto' exact Component={Producto}/>
                <Route path='/SignUp' exact Component={SignUp}/>
                <Route path='/LogIn' exact Component={LogIn}/>
                <Route path='*' exact Component={Error}/>
            </Routes>
        </Router>
    </>
  )
}
