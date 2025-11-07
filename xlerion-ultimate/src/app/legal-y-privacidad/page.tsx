"use client";

import { Container, Accordion } from 'react-bootstrap';

export default function LegalYPrivacidad() {
  const legalSections = [
    {
      title: 'Política de privacidad de datos',
      content: 'Aquí se detalla cómo Xlerion maneja los datos de los usuarios, qué información se recopila y con qué fines. Cumplimos con todas las regulaciones de protección de datos vigentes.'
    },
    {
      title: 'Términos de uso del sitio y los toolkits',
      content: 'Estos son los términos y condiciones que rigen el uso de nuestro sitio web y de las herramientas que ofrecemos. Al utilizar nuestros servicios, usted acepta estos términos.'
    },
    {
      title: 'Licencias de software y contenido',
      content: 'Información sobre las licencias bajo las cuales se distribuye nuestro software y contenido. Se especifican los derechos y obligaciones de los usuarios.'
    },
    {
      title: 'Declaración de derechos del consumidor',
      content: 'En Xlerion, respetamos sus derechos como consumidor. Aquí encontrará información sobre sus derechos y cómo ejercerlos en relación con nuestros productos y servicios.'
    }
  ];

  return (
    <div className="main-content-area">
      <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
        <video autoPlay loop muted className="parallax-video-background">
          <source src="/parallaxX.mp4" type="video/mp4" />
        </video>
        <Container className="parallax-content">
          <h1 className="display-2 fw-bold mb-4">Legal y Privacidad</h1>
          
          <Accordion defaultActiveKey="0" flush>
            {legalSections.map((section, index) => (
              <Accordion.Item eventKey={String(index)} key={index} className="bg-dark text-white border border-secondary rounded mb-2">
                <Accordion.Header className="bg-dark text-white">{section.title}</Accordion.Header>
                <Accordion.Body className="bg-dark text-white-50">
                  {section.content}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
    </div>
  );
}