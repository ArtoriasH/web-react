import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './Registro';
import FormComunidad from './componentes/formComunidad';
import AdministrarBBL from './AdministrarComunidad';
import Login from './Login';
import LandingPage from './LandingPage';
import ResultadoBusqueda from './ResultadoBusqueda';
import Perfil from './Perfil';
import AppRouter from './routers/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);


//este requiere npm i react-reouter-dom sass
//y npm import axios