import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      <footer className="text-center" style={{ background: '#ffffff' }}>
        <Container className="text-muted py-4 py-lg-5">
          <Row>
            <Col className="text-center">
              <ul className="list-inline">
                <li className="list-inline-item me-4"><a className="link-secondary" href="#">Web design</a></li>
                <li className="list-inline-item me-4"><a className="link-secondary" href="#">Development</a></li>
                <li className="list-inline-item"><a className="link-secondary" href="#">Hosting</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <ul className="list-inline">
                {/* Agrega cualquier otro elemento de lista que necesites */}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="mb-0">Copyright © 2023 BBL</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

  export default Footer;