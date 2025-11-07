"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Documentacion() {
  const contenido = [
    'Manuales técnicos por módulo',
    'Diagramas de flujo y arquitectura',
    'Guías de instalación y configuración',
    'Filosofía de documentación como herramienta de empoderamiento',
  ];

  return (
    <div className="main-content-area">
      <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
        <video autoPlay loop muted className="parallax-video-background">
          <source src="/parallaxX.mp4" type="video/mp4" />
        </video>
        <Container className="parallax-content">
          <h1 className="display-2 fw-bold mb-4">Documentación</h1>
          <p className="lead fs-6 mb-5">
            La documentación es parte esencial del legado de Xlerion. Cada solución incluye guías claras, diagramas modulares y manuales de uso que permiten su mantenimiento, réplica y evolución.
          </p>
          
          <Row className="g-4">
            {contenido.map((item, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 bg-dark text-white card-glassmorphism">
                  <Card.Body>
                    <Card.Title as="h5" className="text-primary">{`0${index + 1}`}</Card.Title>
                    <Card.Text>{item}</Card.Text>
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