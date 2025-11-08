"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function Documentacion() {
  const contenido = [
    'Manuales técnicos por módulo',
    'Diagramas de flujo y arquitectura',
    'Guías de instalación y configuración',
    'Filosofía de documentación como herramienta de empoderamiento',
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/documentacion-parallax.jpg"
        title="Documentación"
        subtitle="La documentación es parte esencial del legado de Xlerion. Cada solución incluye guías claras, diagramas modulares y manuales de uso que permiten su mantenimiento, réplica y evolución."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
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
    </>
  );
}