import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navBar'; 
import Footer from './componentes/footer';
import Publicacion from './componentes/postComponent';
import CajaComentario from './componentes/cajaComentario';
import Comentario from './componentes/comentario';
import ReplyComponent from './componentes/respuesta';

import Box from '@mui/material/Box';

function post() {
    return (
      <body style={{ color: "var(--bs-white)", background: "aliceblue" }}>
      <div className="App">
       <NavBar />
        <Box sx={{backgroundColor:'white', mx:10,mb:0,p:1,borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <Publicacion />
          <Comentario />
          <CajaComentario />
        </Box>
        <Footer />
      </div>
        </body>
    );
  }
  
  
  export default post;