"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function NoticiasYEventos() {
  return (
    <Container className="my-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Noticias y Eventos</h1>
          <p className="lead">Mantente al tanto de las últimas novedades de Xlerion TechLab.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h2">Participación en Ferias y Ruedas de Negocio</Card.Title>
              <Card.Text>
                Información sobre nuestra participación en eventos clave del sector.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h2">Actualizaciones y Logros</Card.Title>
              <Card.Text>
                Descubre las últimas actualizaciones de nuestros proyectos y los logros alcanzados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}