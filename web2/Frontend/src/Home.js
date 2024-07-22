import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navBar'; 
import Footer from './componentes/footer'; 
import EncabezadoComunidad from './componentes/encabezadoComunidad';
import CajaComentario from './componentes/cajaComentario';
import Publicacion from './componentes/postComponent';
import ReplyComponent from './componentes/respuesta';

import Box from '@mui/material/Box';

function Home() {
    return (
      <body style={{ color: "var(--bs-white)", background: "aliceblue" }}>
      <div className="App">
       <NavBar />
        <EncabezadoComunidad />
        <Box sx={{backgroundColor:'white', mx:10,mb:0,p:1,borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <CajaComentario />
          <a href="/post" style={{ textDecoration: "none" }}>
            <Publicacion />
          </a>
        </Box>
        <Footer />
      </div>
        </body>
    );
  }
  
  
  export default Home;