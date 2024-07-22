import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navBar'; 
import Footer from './componentes/footer'; 
import UserCardPerfil from './componentes/cardInfoPerfil';
import MyCommunities from './componentes/misComunidades';



function Perfil() {
    return (
      <body style={{ color: "var(--bs-white)", background: "var(--bs-blue)" }}>
      <div className="App">
       <NavBar />
       <UserCardPerfil />
       <MyCommunities />
        <Footer />
      </div>
        </body>
    );
  }
  
  
  export default Perfil;