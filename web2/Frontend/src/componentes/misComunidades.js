
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyCommunities() {
    return (
      <section>
        <div className="container">
          <Row className="d-xxl-flex justify-content-xxl-center align-items-xxl-center">
            <Col md={6} xl={4} style={{ padding: "12px" }}>
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <h1 style={{ color: "rgb(0,0,0)" }}>Mis comunidades</h1>
                  <ul className="list-group">
                    <li className="list-group-item"><span>Overwatch</span></li>
                    <li className="list-group-item"><span>Pixar</span></li>
                    <li className="list-group-item"><span>SIA</span></li>
                    <li className="list-group-item"><span>The Black Label</span></li>
                  </ul>
                  <input type="text" placeholder="Nombre comunidad" />
                  <button className="btn btn-primary" type="button">Agregar Nueva Comunidad</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }

  export default MyCommunities;