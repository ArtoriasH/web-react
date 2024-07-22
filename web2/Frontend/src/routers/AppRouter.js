import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdministrarBBL from '../AdministrarComunidad'
import Home from '../Home'
import LandingPage from '../LandingPage'
import Login from '../Login'
import Registro from '../Registro'
import ResultadoBusqueda from '../ResultadoBusqueda'
import post from '../post'


export default function AppRouter() {
  return (

    
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/registro" Component={Registro} />
        <Route exact path="/administrarcomunidad" Component={AdministrarBBL} />
        <Route exact path="/resultadobusqueda" Component={ResultadoBusqueda} />
        <Route exact path="/comunidad" Component={Home} />
        <Route exact path="/post" Component={post} />
      </Routes>
    </Router>
  )
}