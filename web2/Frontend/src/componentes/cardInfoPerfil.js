import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Section from 'react-bootstrap/Section';

function UserCardPerfil() {
  return (
    <section className="py-4 py-xl-5">
      <div className="container">
        <Row className="mb-5">
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2>Perfil de Usuario</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center" style={{ background: "rgba(255,255,255,0.15)" }}>
          <Col md={6} xl={4} style={{ padding: 12 }}>
            <div className="card mb-5">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><img src="assets/img/annei.jpg" width="45px" style={{ borderRadius: 40, borderWidth: 0 }} alt="user avatar" /></div>
                <Form className="text-center" method="post">
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="Usuario" defaultValue="Usuario" style={{ color: "rgb(106,112,119)" }} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="d-block w-100 mb-3">Actualizar</Button>
                  <a href="index.html" className="text-muted">
                    <p>Regresar</p>
                  </a>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default UserCardPerfil;