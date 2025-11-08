"use client";

import { Container, Accordion } from 'react-bootstrap';
import ParallaxImageSection from '../../components/ParallaxImageSection';

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
    <>
      <ParallaxImageSection
        imageUrl="/images/parallax/legal-privacidad-parallax.jpg"
        title="Legal y Privacidad"
        subtitle="Información importante sobre nuestros términos y condiciones."
        height="70vh"
      />
      <Container className="my-5 text-white"> {/* Main content container */}
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
    </>
  );
}