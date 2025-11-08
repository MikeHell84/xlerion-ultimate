"use client";

import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ParallaxImageSection from '../../components/ParallaxImageSection';



interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface Section {
  title: string;
  text: string;
  icon: string;
  imageUrl?: string; // Optional image for sections like 'Historia y Visión'
  fullText?: string; // Optional full text for 'see more' functionality
  teamMembers?: TeamMember[]; // Optional for team section
}

interface CTA {
  text: string;
  link: string;
}

interface SobreNosotrosData {
  title: string;
  lead: string;
  heroImage: string;
  heroVideo?: string; // Optional hero video
  sections: Section[];
  cta: CTA;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function SobreNosotros() {
  const [data, setData] = useState<SobreNosotrosData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', text: '', imageUrl: '' });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (title: string, text: string, imageUrl: string = '') => {
    setModalContent({ title, text, imageUrl });
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sobre-nosotros');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Container className="my-5 text-center"><h2>Cargando...</h2></Container>;
  }

  if (!data) {
    return <Container className="my-5 text-center"><h2>Error al cargar el contenido.</h2></Container>;
  }

  return (
    <>
      {/* Parallax Image Section */}
      <ParallaxImageSection
        imageUrl={data.heroImage}
        title={data.title}
        subtitle={data.lead}
        height="70vh"
      />

      <Container className="my-5">
        {data.sections.map((section, index) => {
          // Special rendering for 'Historia y Visión' section
          if (section.title === "Historia y Visión" && section.imageUrl && section.fullText) {
            return (
              <Row className="justify-content-center mb-5 align-items-center" key={index}>
                <Col md={6} className="mb-4">
                  <img src={section.imageUrl} alt={section.title} className="img-fluid rounded shadow-lg" />
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 text-white card-glassmorphism">
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-3 fs-1 text-center">{section.icon}</div>
                      <Card.Title as="h2" className="fs-3 text-primary text-center">{section.title}</Card.Title>
                      <Card.Text className="fs-6 flex-grow-1">
                        {truncateText(section.text, 250)}
                      </Card.Text>
                      <Button variant="outline-primary" className="mt-3" onClick={() => handleShowModal(section.title, section.fullText || '', section.imageUrl || '')}>Ver más</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          }

          // Default rendering for other sections
          return (
            <div key={index}>
              <Row className="justify-content-center mb-4">
                <Col>
                  <Card className="h-100 text-white card-glassmorphism">
                    <Card.Body className="text-center d-flex flex-column">
                      <div className="mb-3 fs-1">{section.icon}</div>
                      <Card.Title as="h2" className="fs-3 text-primary">{section.title}</Card.Title>
                      <Card.Text className="fs-6">
                        {section.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {section.teamMembers && section.teamMembers.length > 0 && (
                <Row className="justify-content-center mb-5">
                  {section.teamMembers.map((member, memberIndex) => (
                    <Col md={4} className="mb-4" key={memberIndex}>
                      <Card className="h-100 text-white card-glassmorphism">
                        <Card.Img variant="top" src={member.imageUrl} alt={member.name} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        <Card.Body className="text-center">
                          <Card.Title as="h5" className="text-primary">{member.name}</Card.Title>
                          <Card.Text>{member.role}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          );
        })}

        {/* Call to Action */}
        {data.cta && (
          <Row className="text-center mt-5">
            <Col>
              <Link href={data.cta.link} passHref legacyBehavior>
                <Button variant="primary" size="lg" className="glow-on-hover">
                  {data.cta.text}
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </Container>

      {/* Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg" dialogClassName="modal-dark modal-glowing-border">
        <Modal.Header closeButton closeVariant="white" className="bg-dark text-white border-bottom border-secondary">
          <Modal.Title className="text-primary">{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {modalContent.imageUrl && <img src={modalContent.imageUrl} alt={modalContent.title} className="img-fluid mb-3" style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />}          <p>{modalContent.text}</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark border-top border-secondary">
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



  