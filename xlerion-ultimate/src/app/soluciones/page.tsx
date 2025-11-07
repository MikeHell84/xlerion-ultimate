"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Soluciones() {
  const servicios = [
    'Toolkits modulares con interfaces jerárquicas y adaptativas',
    'Sistemas de logging, diagnóstico y comparadores de rendimiento',
    'Branding técnico-creativo con lógica visual y simbólica',
    'Documentación estructurada para mantenimiento y transferencia de conocimiento',
    'Integración con motores como Unreal Engine, Unity y Blender',
  ];

  return (
    <div className="main-content-area">
      <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
        <video autoPlay loop muted className="parallax-video-background">
          <source src="/parallaxX.mp4" type="video/mp4" />
        </video>
        <Container className="parallax-content">
          <h1 className="display-2 fw-bold mb-4">Nuestras Soluciones</h1>
          <p className="lead fs-6 mb-5">
            Xlerion ofrece herramientas técnicas diseñadas para entornos exigentes como videojuegos AAA, multimedia avanzada y visión por computadora. Cada solución está pensada para ser modular, escalable y autosuficiente.
          </p>
          
          <Row className="g-4">
            {servicios.map((servicio, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 bg-dark text-white card-glassmorphism">
                  <Card.Body>
                    <Card.Title as="h5" className="text-primary">{`0${index + 1}`}</Card.Title>
                    <Card.Text>{servicio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}