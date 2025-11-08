"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function ServiciosYProductos() {
  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/servicios-productos-parallax.jpg"
        title="Servicios y Productos"
        subtitle="Descubre lo que Xlerion TechLab tiene para ofrecer."
        height="70vh"
      />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Videojuegos, Simuladores y Toolkits</Card.Title>
                <Card.Text>
                  Descripción detallada de los videojuegos, simuladores y toolkits desarrollados por Xlerion TechLab.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Características Modulares y Escalables</Card.Title>
                <Card.Text>
                  Explicación de cómo nuestras soluciones son modulares y escalables para adaptarse a diversas necesidades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Beneficios y Casos de Uso</Card.Title>
                <Card.Text>
                  Exploración de los beneficios clave y ejemplos de casos de uso de nuestros servicios y productos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}