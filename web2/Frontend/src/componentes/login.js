import axios from "axios";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bubbleIcon from '../img/bubbleIcon.png';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-bootstrap';
import Box from "@mui/material/Box";

function LoginForm() {
	const [inputs, setInputs] = useState({ correo: "", password: "" });
	const [mensaje, setMensaje] = useState();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const { correo, password } = inputs;

	const HandleChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (correo !== "" && password !== "") {
		const Usuario = {
			correo,
			password,
		};
		setLoading(true);
		await axios
			.post("http://localhost:4000/login", Usuario)
			.then((res) => {
			console.log('Respuesta exitosa:', res.data);
			const { data } = res;
			setMensaje(data.mensaje);
			alert(data.mensaje);
			setTimeout(() => {
				setMensaje("");
				localStorage.setItem("token", data?.usuario.token);
				navigate(`/Home`);
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
		setInputs({ correo: "", password: "" });
		setLoading(false);
		}
		else{
		alert('Introduzca un correo y contraseña validos');
		}
	};

	return (
		<Container>
			<div className="esta" style={{ width: "100%", display: "flex"}}>
				<Col className="text-center" style={{ background: "#f0f8ff", height: "820.45px", width:"50%"}}>
					<Row style={{ height: "43%" }}></Row>
					<Row>
						<Col style={{ margin: "auto" }}>
							<img style={{ width: "150px", margin: "auto" }} src={bubbleIcon} alt="Bubble Icon"/>
						</Col>
					</Row>
					<Row style={{ height: "33%" }}></Row>
				</Col>
				<Col className="d-flex flex-column justify-content-center p-4">
					<Row></Row>
					<Row>
						<Col>
							<section >
								<Container>
									<Box sx={{ boxShadow: 3, borderRadius: 2, px: 4, py: 6, marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
										<Row className="mb-5">
											<h2 style={{color: "#4e82b4"}}>Bienvenido a BBL</h2>
											<p style={{color: "#4e82b4"}}>Inicia sesión</p>
										</Row>
										<Row className="d-flex justify-content-center">										
											<Card className="mb-5">
												<Card.Body className="d-flex flex-column align-items-center" >
													<Form onSubmit={(e) => onSubmit(e)}>
														<Form.Group className="text-center">
															<div className="mb-3">
																<input onChange={(e) => HandleChange(e)}
																value={correo}
																name="correo"
																id="correo"
																type="email"
																className="form-control" 
																placeholder="Correo"
																autoComplete="off" />
															</div>
															<div className="mb-3">
																<input onChange={(e) => HandleChange(e)} 
																value={password} 
																name="password" 
																id="password" 
																type="password" 
																className="form-control" 
																placeholder="Password" />
															</div>
															<div className="mb-3">
																<Button type="submit" variant="primary d-block w-100" style={{background: "#4470b3", border:"none"}}>
																	Login
																</Button>
															</div>
															<NavLink onClick={() => navigate('/registro')}>
																<a href="">
																	<p className="text-muted">¿No tienes cuenta?</p>
																</a>
															</NavLink>
														</Form.Group>
													</Form>
												</Card.Body>
											</Card>
										</Row>
									</Box>
								</Container>
							</section>
						</Col>
					</Row>
					<Row></Row>
				</Col>
			</div>
		</Container>
	);
}

export default LoginForm;