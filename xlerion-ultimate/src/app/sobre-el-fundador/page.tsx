"use client";

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function SobreElFundador() {
  const datosAdicionales = [
    'Fundador de Xlerion TechLab',
    'Autodidacta en entornos técnicos y creativos',
    'Defensor de derechos del consumidor y procesos autosuficientes',
    'Creador de la obra literaria Total Darkness',
  ];

  return (
    <div className="main-content-area">
      <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
        <video autoPlay loop muted className="parallax-video-background">
          <source src="/parallaxX.mp4" type="video/mp4" />
        </video>
        <Container className="parallax-content">
          <h1 className="display-2 fw-bold mb-4">Sobre el Fundador</h1>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src="https://placehold.co/300x300" roundedCircle fluid />
            </Col>
            <Col md={8}>
              <p className="lead">
                Miguel Eduardo Rodríguez Martínez es un creador empírico con enfoque neurodivergente, especializado en arte digital, modelado 3D, scripting y defensa legal. Su trayectoria autodidacta lo ha llevado a construir soluciones técnicas con impacto cultural desde territorios no centralizados.
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
      </div>
    </div>
  );
}