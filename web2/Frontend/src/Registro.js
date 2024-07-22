import 'bootstrap/dist/css/bootstrap.min.css';

import RegistroUsuario from './componentes/registro';

function Registro() {
    return (
        <div className="App" style={{ background: "#f0f8ff", height: "100vh",display: "flex", alignContent: "center", justifyContent:"center"}}>
            <RegistroUsuario />
        </div>
    );
}

export default Registro;