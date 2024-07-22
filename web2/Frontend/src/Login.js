import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './componentes/login';

function Login() {
    return (
        <div className="App" style={{ background: "#f0f8ff", height: "100vh", padding: "8% 0 8% 0"}}>
            <LoginForm />
        </div>
    );
}

export default Login;