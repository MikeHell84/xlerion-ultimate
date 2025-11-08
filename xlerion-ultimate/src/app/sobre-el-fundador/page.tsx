"use client";

import { Container, Row, Col, Image } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

export default function SobreElFundador() {
  const datosAdicionales = [
    'Fundador de Xlerion TechLab',
    'Autodidacta en entornos técnicos y creativos',
    'Defensor de derechos del consumidor y procesos autosuficientes',
    'Creador de la obra literaria Total Darkness',
  ];

  return (
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/fundador-parallax.jpg"
        title="Sobre el Fundador"
        subtitle="Conoce la mente detrás de Xlerion TechLab."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image src="/images/MikeProfile.jpg" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <p className="lead">
              Miguel Rodríguez Martínez es un creador empírico con enfoque neurodivergente, especializado en arte digital, modelado 3D, scripting y defensa legal. Su trayectoria autodidacta lo ha llevado a construir soluciones técnicas con impacto cultural desde territorios no centralizados.
            </p>
            <blockquote className="blockquote my-4">
              <p>“La frustración técnica y burocrática es mi combustible para crear soluciones que empoderan.”</p>
            </blockquote>
            <h5>Datos Adicionales:</h5>
            <ul>
              {datosAdicionales.map((dato, index) => (
                <li key={index}>{dato}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}