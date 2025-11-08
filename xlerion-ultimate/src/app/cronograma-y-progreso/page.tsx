"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function CronogramaYProgreso() {
  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/cronograma-progreso-parallax.jpg"
        title="Cronograma y Progreso"
        subtitle="Sigue de cerca nuestros avances y logros."
        height="70vh"
      />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Cronograma Estratégico</Card.Title>
                <Card.Text>
                  Visualización de nuestro cronograma estratégico y los hitos importantes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Estado Actual de Entregables</Card.Title>
                <Card.Text>
                  Información sobre el estado actual de nuestros entregables y proyectos en curso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Indicadores Clave de Desempeño (KPIs)</Card.Title>
                <Card.Text>
                  Detalle de los KPIs que utilizamos para medir nuestro progreso y éxito.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}