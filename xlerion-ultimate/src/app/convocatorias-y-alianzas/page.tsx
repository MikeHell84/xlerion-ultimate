"use client";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function ConvocatoriasYAlianzas() {
  const contenido = [
    {
      title: 'Postulación a CoCrea 2025 (modalidad PAT)',
      description: 'Aplicación a la convocatoria para proyectos de impacto cultural con nuestro enfoque empírico y territorial.',
      link: '#'
    },
    {
      title: 'Participación en Hackathon IA COL4.0',
      description: 'Presentación de nuestras soluciones de diagnóstico y logging en el marco de la hackathon de inteligencia artificial.',
      link: '#'
    },
    {
      title: 'Invitación a Inversionistas Culturales',
      description: 'Buscamos aliados que compartan nuestra visión de impacto y sostenibilidad en la industria creativa y tecnológica.',
      link: '#'
    },
    {
      title: 'Carta de Intención de Aportes',
      description: 'Descarga nuestra carta de intención para formalizar tu apoyo como aliado estratégico.',
      link: '#', // Replace with actual link to the document
      download: true
    },
    {
      title: 'Espacio para Aliados Institucionales',
      description: 'Ofrecemos un espacio para la visibilidad de nuestros aliados institucionales que apoyan el desarrollo tecnológico desde el territorio.',
      link: '#'
    }
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/convocatorias-alianzas-parallax.jpg"
        title="Convocatorias y Alianzas"
        subtitle="Xlerion participa activamente en convocatorias culturales y tecnológicas, buscando alianzas que fortalezcan su impacto y validen su enfoque empírico."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
        <Row className="g-4">
          {contenido.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 bg-dark text-white card-glassmorphism">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5" className="text-primary">{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.description}</Card.Text>
                  {item.download ? (
                    <a href={item.link} download className="btn btn-outline-primary mt-auto">
                      Descargar
                    </a>
                  ) : (
                    <Button variant="outline-primary" href={item.link} className="mt-auto">
                      Ver más
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}