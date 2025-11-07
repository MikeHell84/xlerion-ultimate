"use client";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function BlogBitacora() {
  const entradas = [
    'Cómo nació Total Darkness',
    'Filosofía modular aplicada a videojuegos',
    'Documentar para empoderar',
    'Participación en Colombia 4.0',
    'Diagnóstico técnico como herramienta cultural',
  ];

  return (
    <div className="main-content-area">
      <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
        <video autoPlay loop muted className="parallax-video-background">
          <source src="/parallaxX.mp4" type="video/mp4" />
        </video>
        <Container className="parallax-content">
          <h1 className="display-2 fw-bold mb-4">Blog / Bitácora</h1>
          <p className="lead fs-6 mb-5">
            Reflexiones, avances y documentación viva del proceso creativo y técnico detrás de Xlerion.
          </p>
          
          <Row className="g-4">
            {entradas.map((entrada, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 bg-dark text-white card-glassmorphism">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title as="h5" className="text-primary">{entrada}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {/* Placeholder for a short description of the blog post */}
                      Una breve descripción sobre este interesante tema.
                    </Card.Text>
                    <Button variant="outline-primary" href="#">Leer más</Button>
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