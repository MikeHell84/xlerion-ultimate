"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function InversionistasYAlianzas() {
  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/inversionistas-alianzas-parallax.jpg"
        title="Inversionistas y Alianzas"
        subtitle="Oportunidades para crecer juntos."
        height="70vh"
      />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Información Financiera Resumida</Card.Title>
                <Card.Text>
                  Accede a un resumen de nuestra información financiera para inversionistas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Oportunidades de Inversión</Card.Title>
                <Card.Text>
                  Descubre las oportunidades de inversión y cómo puedes formar parte de Xlerion TechLab.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2">Testimonios y Alianzas Estratégicas</Card.Title>
                <Card.Text>
                  Conoce los testimonios de nuestros aliados y las alianzas estratégicas que hemos formado.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}