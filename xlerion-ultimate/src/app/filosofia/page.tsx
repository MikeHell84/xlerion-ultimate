"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';
export default function Filosofia() {
  const valores = [
    'Empatía técnica',
    'Autosuficiencia creativa',
    'Documentación como legado',
    'Modularidad como principio',
    'Impacto cultural y territorial',
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/filosofia-parallax.jpg"
        title="Nuestra Filosofía"
        subtitle="Principios que guían nuestra innovación y desarrollo."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 bg-dark text-white card-glassmorphism">
              <Card.Body>
                <Card.Title as="h2" className="text-primary">Misión</Card.Title>
                <Card.Text>
                  Potenciar el desarrollo técnico moderno con soluciones modulares que anticipan errores, optimizan procesos y promueven colaboración sostenible entre creadores, técnicos y comunidades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 bg-dark text-white card-glassmorphism">
              <Card.Body>
                <Card.Title as="h2" className="text-primary">Visión</Card.Title>
                <Card.Text>
                  Ser referente latinoamericano en el diseño de toolkits inteligentes que integren técnica, creatividad, documentación y escalabilidad para la industria cultural y tecnológica.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card className="h-100 bg-dark text-white card-glassmorphism">
              <Card.Body>
                <Card.Title as="h2" className="text-primary">Valores</Card.Title>
                <ul>
                  {valores.map((valor, index) => (
                    <li key={index}>{valor}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}