
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './componentes/login';
import NavBar from './componentes/navBar'; 
import Footer from './componentes/footer'; 
//import Card from 'react-bootstrap/Form';

function App() {
  return (
    <body style={{ color: "var(--bs-white)", background: "var(--bs-blue)" }}>
    <div className="App">
     <NavBar />
      <LoginForm />
      <Footer />
    </div>
      </body>
  );
}


export default App;
