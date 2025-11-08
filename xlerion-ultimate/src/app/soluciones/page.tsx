"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function Soluciones() {
  const servicios = [
    'Toolkits modulares con interfaces jerárquicas y adaptativas',
    'Sistemas de logging, diagnóstico y comparadores de rendimiento',
    'Branding técnico-creativo con lógica visual y simbólica',
    'Documentación estructurada para mantenimiento y transferencia de conocimiento',
    'Integración con motores como Unreal Engine, Unity y Blender',
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/soluciones-parallax.jpg"
        title="Nuestras Soluciones"
        subtitle="Xlerion ofrece herramientas técnicas diseñadas para entornos exigentes como videojuegos AAA, multimedia avanzada y visión por computadora. Cada solución está pensada para ser modular, escalable y autosuficiente."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
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
    </>
  );
}