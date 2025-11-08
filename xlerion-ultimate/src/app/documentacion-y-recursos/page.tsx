"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function DocumentacionYRecursos() {
  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/documentacion-recursos-parallax.jpg"
        title="Documentación y Recursos"
        subtitle="Encuentra aquí toda la información que necesitas."
        height="70vh"
      />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Manuales Técnicos y Guías</Card.Title>
                <Card.Text>
                  Accede a nuestros manuales técnicos y guías detalladas para el uso de nuestras soluciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Videos Demostrativos</Card.Title>
                <Card.Text>
                  Visualiza videos demostrativos de nuestros productos y funcionalidades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">FAQs y Soporte</Card.Title>
                <Card.Text>
                  Preguntas frecuentes y opciones de soporte para resolver tus dudas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}