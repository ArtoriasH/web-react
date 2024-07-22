import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bubbleIcon from '../img/bubbleIcon.png';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function RegistroUsuario() {
    const [inputs, setInputs] = useState({
        user: "",
        correo: "",
        password: "",
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { user, correo, password } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (user !== "" && password !== "" && correo !== "") {
        const Usuario = {
            user,
            correo,
            password,
        };
        setLoading(true);
        await axios
            .post("http://localhost:4000/register", Usuario)
            .then((res) => {
            console.log('Respuesta exitosa:', res.data);
            const { data } = res;
            //setMensaje(data.mensaje);
            setInputs({ user: "", password: "", correo: "" });
            //console.log('Registro exitoso');
            //alert(data.mensaje);
            alert(data.mensaje);
            setTimeout(() => {
                setMensaje("");
                navigate("/login");
            }, 1500);
            
            })
            .catch((error) => {
            if (error.response) {
                // Error de respuesta del servidor
                console.log('Código de estado:', error.response.status);
                console.log('Mensaje de error:', error.response.data);
                alert(error.response.data.mensaje);
            } else if (error.request) {
                // No se recibió una respuesta del servidor
                console.log('No se recibió respuesta del servidor');
                alert('No se recibió respuesta del servidor');
            } else {
                // Error durante la solicitud
                console.log('Error al realizar la solicitud:', error.message);
                alert('Hubo un error al realizar la solicitud');
            }
            /*  console.log('Error en el registro', error)
            alert(error);
            setTimeout(() => {
                setMensaje("");
            }, 1500); */
            });

        setLoading(false);
        }
    };

    return (
        <Container style={{display: "flex", flexDirection:"column", alignContent: "center", justifyContent:"center"}}>
            <Row className="mb-5">
                <Col md={8} xl={6} className="text-center mx-auto">
                    <h2 style={{color: "#4e82b4"}}>Registro de Usuario</h2>
                </Col>
            </Row>
            <Row className="justify-content-center"> 
                <Col md={6} xl={4}>
                    <Box sx={{ boxShadow: 3, borderRadius: 2, px: 4, py: 6,  display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div className="card-body d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                                <img src={bubbleIcon} width="45px" />
                            </div>
                            <Form className="text-center" onSubmit={(e) => onSubmit(e)}>
                                <Form.Group className="mb-3">
                                    <input
                                        onChange={(e) => HandleChange(e)}
                                        value={user}
                                        name="user"
                                        id="user"
                                        type="text"
                                        className="form-control" 
                                        placeholder="Usuario"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <input
                                        onChange={(e) => HandleChange(e)}
                                        value={correo}
                                        name="correo"
                                        id="correo"
                                        type="email"
                                        className="form-control" 
                                        placeholder="Correo"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                {/* <Form.Group className="mb-3">
                                <Form.Label style={{ color: 'rgb(0,0,0)' }}>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" />
                                </Form.Group> */}
                                <Form.Group className="mb-3">
                                    <input
                                        onChange={(e) => HandleChange(e)}
                                        value={password}
                                        name="password"
                                        id="password"
                                        type="password"
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button className="btn-primary d-block w-100" type="submit" style={{background: "#4470b3", border:"none"}}>
                                        Registrarse
                                    </Button>
                                </Form.Group>
                                <NavLink onClick={() => navigate(-1)}>
                                    <a href="">
                                        <p className="text-muted">Regresar</p>
                                    </a>
                                </NavLink>
                            </Form>
                        </div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistroUsuario;