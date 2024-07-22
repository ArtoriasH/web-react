import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navBar'; 
import Footer from './componentes/footer'; 
import FormComunidad from './componentes/formComunidad';
import EncabezadoComunidad from './componentes/encabezadoComunidad';


function AdministrarBBL() {
    return (
      <body style={{ color: "var(--bs-white)"}}>
      <div className="App">
       <NavBar />
       <FormComunidad />
        <Footer />
      </div>
        </body>
    );
  }
  
  
  export default AdministrarBBL;