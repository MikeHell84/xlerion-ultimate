"use client";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function BlogBitacora() {
  const entradas = [
    'Cómo nació Total Darkness',
    'Filosofía modular aplicada a videojuegos',
    'Documentar para empoderar',
    'Participación en Colombia 4.0',
    'Diagnóstico técnico como herramienta cultural',
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/blog-bitacora-parallax.jpg"
        title="Blog / Bitácora"
        subtitle="Reflexiones, avances y documentación viva del proceso creativo y técnico detrás de Xlerion."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
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
    </>
  );
}