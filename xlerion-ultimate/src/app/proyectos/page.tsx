"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function Proyectos() {
  const proyectos = [
    {
      title: 'Total Darkness – Pelijuego Interactivo',
      description: 'Adaptación de obra literaria original a experiencia narrativa inmersiva con decisiones ramificadas, entornos 3D y cinemáticas filosóficas.'
    },
    {
      title: 'Xlerion Toolkit',
      description: 'Conjunto de módulos activos para diagnóstico, logging y rendimiento, diseñado para entornos técnicos complejos.'
    },
    {
      title: 'Participación en Colombia 4.0',
      description: 'Presentación institucional y pitch de impacto cultural y técnico.'
    },
    {
      title: 'Postulación a CoCrea 2025',
      description: 'Proyecto cultural con enfoque empírico, neurodivergente y territorial.'
    }
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/proyectos-parallax.jpg"
        title="Nuestros Proyectos"
        subtitle="Cada proyecto de Xlerion es una manifestación de su filosofía: modularidad, documentación y empoderamiento técnico. Aquí presentamos nuestras iniciativas más representativas."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
        <Row className="g-4">
          {proyectos.map((proyecto, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 bg-dark text-white card-glassmorphism">
                <Card.Body>
                  <Card.Title as="h5" className="text-primary">{proyecto.title}</Card.Title>
                  <Card.Text>{proyecto.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}