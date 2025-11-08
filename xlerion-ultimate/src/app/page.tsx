"use client";

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { usePageTransition } from '../contexts/PageTransitionContext';

interface MenuItem {
  href: string;
  title: string;
  summary?: string; // Optional summary for the card
  image?: string; // Optional image for the section card
  description?: string; // Optional full description for the section card
}

const sectionContentMap: { [key: string]: { description: string; image: string; } } = {
  "Inicio": {
    description: "Modularidad que transforma. Diagnóstico que empodera.",
    image: "/images/inicio.jpg" // Placeholder
  },
  "Filosofía": {
    description: "Potenciar el desarrollo técnico moderno con soluciones modulares que anticipan errores, optimizan procesos y promueven colaboración sostenible entre creadores, técnicos y comunidades.",
    image: "/images/filosofia.jpg" // Placeholder
  },
  "Soluciones": {
    description: "Xlerion ofrece herramientas técnicas diseñadas para entornos exigentes como videojuegos AAA, multimedia avanzada y visión por computadora. Cada solución está pensada para ser modular, escalable y autosuficiente.",
    image: "/images/soluciones.jpg" // Placeholder
  },
  "Proyectos": {
    description: "Cada proyecto de Xlerion es una manifestación de su filosofía: modularidad, documentación y empoderamiento técnico. Aquí presentamos nuestras iniciativas más representativas.",
    image: "/images/proyectos.jpg" // Placeholder
  },
  "Documentación": {
    description: "La documentación es parte esencial del legado de Xlerion. Cada solución incluye guías claras, diagramas modulares y manuales de uso que permiten su mantenimiento, réplica y evolución.",
    image: "/images/documentacion.jpg" // Placeholder
  },
  "Sobre el Fundador": {
    description: "Miguel Eduardo Rodríguez Martínez es un creador empírico con enfoque neurodivergente, especializado en arte digital, modelado 3D, scripting y defensa legal. Su trayectoria autodidacta lo ha llevado a construir soluciones técnicas con impacto cultural desde territorios no centralizados.",
    image: "/images/fundador.jpg" // Placeholder
  },
  "Convocatorias y Alianzas": {
    description: "Xlerion participa activamente en convocatorias culturales y tecnológicas, buscando alianzas que fortalezcan su impacto y validen su enfoque empírico.",
    image: "/images/alianzas.jpg" // Placeholder
  },
  "Contacto": {
    description: "¿Quieres colaborar, invertir o conocer más sobre Xlerion? Estamos listos para conversar.",
    image: "/images/contacto.jpg" // Placeholder
  },
  "Blog": { // Assuming "Blog / Bitácora" maps to "Blog" in menuItems
    description: "Reflexiones, avances y documentación viva del proceso creativo y técnico detrás de Xlerion.",
    image: "/images/blog.jpg" // Placeholder
  },
  "Legal": { // Assuming "Legal y Privacidad" maps to "Legal" in menuItems
    description: "Política de privacidad de datos",
    image: "/images/legal.jpg" // Placeholder
  }
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function Home() {
  const { startPageTransition } = usePageTransition();
  const [showModal, setShowModal] = useState(false);
  interface ModalContentState {
  title: string;
  image: string;
  text: string;
  list: string[];
}

  const [modalContent, setModalContent] = useState<ModalContentState>({ title: '', image: '', text: '', list: [] });
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleClose = () => setShowModal(false);
  const handleShow = (title: string, image: string, text: string, list: string[] = []) => {
    setModalContent({ title, image, text, list });
    setShowModal(true);
  };

  const misionText = 'Desarrollar soluciones modulares, autosuficientes y documentadas que transformen la producción creativa, la automatización técnica y el impacto cívico, empoderando a comunidades autodidactas, modders y ciudadanos para construir, escalar y defender sus derechos con tecnología accesible.';
  const visionText = 'Ser un referente latinoamericano en innovación autosuficiente, donde cada herramienta creada por Xlerion TechLab se convierta en un catalizador de aprendizaje, justicia y producción sostenible, demostrando que la excelencia técnica y el impacto social pueden coexistir sin depender de estructuras tradicionales.';
  const valoresList = [
    'Modularidad estratégica: Cada solución debe ser adaptable, escalable y documentada para su reutilización.',
    'Autosuficiencia creativa: Fomentamos la independencia técnica y legal para que cualquier persona pueda construir y defender su camino.',
    'Documentación como legado: Formalizamos cada proceso para que otros puedan aprender, replicar y mejorar.',
    'Empatía técnica: Diseñamos pensando en usuarios diversos, desde modders hasta ciudadanos en lucha institucional.',
    'Resiliencia transformadora: Convertimos la frustración en innovación, y los obstáculos en oportunidades de aprendizaje colectivo.',
  ];
  const valoresText = valoresList.map(item => item.replace(/<[^>]*>?/gm, '')).join(' '); // Combine and clean HTML tags

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/menu', { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: MenuItem[] = await response.json();
        const enrichedData = data.map(item => {
          const content = sectionContentMap[item.title];
          return {
            ...item,
            image: content?.image || '/images/default.jpg', // Default image if not found
            description: content?.description || item.summary || 'No description available.'
          };
        });
        setMenuItems(enrichedData);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <>
    <div className="main-content-area">
            <div className="parallax-section d-flex align-items-center justify-content-center text-white text-center" style={{ height: 'calc(100vh - 86px)' }}>
              <video autoPlay loop muted className="parallax-video-background">
                <source src="/parallaxX.mp4" type="video/mp4" />
              </video>
              <Container className="parallax-content">
                <h1 className="display-2 fw-bold mb-4">Xlerion – Soluciones Disruptivas</h1>
                <p className="lead fs-5 mb-2">Modularidad que transforma. Diagnóstico que empodera.</p>
                <p className="lead fs-6 mb-5">Desde Colombia, nace una propuesta empírica y neurodivergente que redefine la forma en que creamos, automatizamos y documentamos soluciones técnicas para la industria creativa. Xlerion es más que una empresa: es una filosofía modular con impacto cultural.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-center">
                  <Button variant="primary" size="lg" onClick={() => startPageTransition('/proyectos')} className="me-md-2 btn-portfolio">Ver portafolio</Button>
                  <Button variant="outline-light" size="lg" onClick={() => startPageTransition('/sobre-el-fundador')} className="btn-contact-founder">Contactar al fundador</Button>
                  <a href="/documentacion" download className="btn btn-outline-info btn-lg btn-download-dossier">Descargar dossier institucional</a>
                </div>
              </Container>
            </div>
      
            
              <Container className="my-5 mt-5">
                <Row className="text-center mb-5">
                  <Col>
                    <p className="lead fs-6">Descubre cómo Xlerion TechLab impulsa la innovación y el impacto social.</p>
                  </Col>
                </Row>
      
                <Row className="mb-5">
                  <Col md={4}>
                    <Card className="shadow-lg bg-dark text-white border-0 card-hover-effect h-100 card-rounded-corner">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#343a40', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>Misión</div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title as="h2" className="text-primary mb-3 fs-4">Misión</Card.Title>
                        <Card.Text className="fs-6 flex-grow-1">
                          {truncateText(misionText, 100)}
                        </Card.Text>
                        <Button variant="outline-primary" className="mt-3 btn-card-action" onClick={() => handleShow(
                          'Misión',
                          'https://via.placeholder.com/400x200?text=Mision',
                          misionText
                        )}>Ver más</Button>
                      </Card.Body>
                    </Card>
                  </Col>
      
                  <Col md={4}>
                    <Card className="shadow-lg bg-dark text-white border-0 card-hover-effect h-100 card-rounded-corner">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#343a40', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>Visión</div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title as="h2" className="text-primary mb-3 fs-4">Visión</Card.Title>
                        <Card.Text className="fs-6 flex-grow-1">
                          {truncateText(visionText, 100)}
                        </Card.Text>
                        <Button variant="outline-primary" className="mt-3 btn-card-action" onClick={() => handleShow(
                          'Visión',
                          'https://via.placeholder.com/400x200?text=Vision',
                          visionText
                        )}>Ver más</Button>
                      </Card.Body>
                    </Card>
                  </Col>
      
                  <Col md={4}>
                    <Card className="shadow-lg bg-dark text-white border-0 card-hover-effect h-100 card-rounded-corner">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#343a40', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem' }}>Valores</div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title as="h2" className="text-primary mb-3 fs-4">Valores</Card.Title>
                        <Card.Text className="fs-6 flex-grow-1">
                          {truncateText(valoresText, 100)}
                        </Card.Text>
                        <Button variant="outline-primary" className="mt-3 btn-card-action" onClick={() => handleShow(
                          'Valores',
                          'https://via.placeholder.com/400x200?text=Valores',
                          '',
                          valoresList
                        )}>Ver más</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
      
              {menuItems.length > 0 && (
                <Container className="my-5" style={{ minHeight: '300px' }}>
                  <h2 className="text-center text-white fw-bold mb-5">Explora Nuestras Secciones</h2>
                  <Row className="g-4">
                    {menuItems.map((item, index) => (
                      <Col key={index} md={4}>
                        <Card className="shadow-lg bg-dark text-white border-0 card-hover-effect h-100 card-rounded-corner">
                          {item.image && <Card.Img variant="top" src={item.image} alt={item.title} style={{ height: '180px', objectFit: 'cover' }} />}
                          <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title as="h5" className="text-primary mb-3">{item.title}</Card.Title>
                            {item.description && <Card.Text className="text-white-50">{truncateText(item.description, 100)}</Card.Text>}
                            <Button variant="outline-primary" onClick={() => startPageTransition(item.href)} className="btn-card-action">Ir a {item.title}</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              )}
            </div>
      <Modal show={showModal} onHide={handleClose} centered size="lg" dialogClassName="modal-dark modal-glowing-border">
        <Modal.Header className="bg-dark text-white border-bottom border-secondary">
          <Modal.Title className="text-primary">{modalContent.title}</Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={handleClose}
            aria-label="Close"
            title="Cerrar"
          ></button>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {modalContent.image && <img src={modalContent.image} alt={modalContent.title} className="img-fluid mb-3" style={{ maxHeight: '400px', width: '100%', objectFit: 'contain' }} />}
          {modalContent.text && <p>{modalContent.text}</p>}
          {modalContent.list.length > 0 && (
            <ul>
              {modalContent.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark border-top border-secondary">
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}