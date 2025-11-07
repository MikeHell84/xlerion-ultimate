"use client";

import styles from './FloatingFooter.module.css'; // New CSS module
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArtstation, FaBehance, FaLinkedinIn, FaInstagram, FaXTwitter, FaKickstarter, FaGithub, FaYoutube, FaEnvelope, FaWhatsapp, FaLightbulb } from 'react-icons/fa6'; // Added FaArrowUp and FaArrowDown

import { useState, useEffect, useCallback, useRef } from 'react';

interface SocialMediaItem {
  name: string;
  url: string;
  icon?: string;
}

interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappLab?: string;
  socialMedia: SocialMediaItem[];
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "ArtStation": return <FaArtstation />;
    case "Behance": return <FaBehance />;
    case "LinkedIn": return <FaLinkedinIn />;
    case "Instagram": return <FaInstagram />;
    case "X": return <FaXTwitter />;
    case "Indiegogo": return <FaLightbulb />;
    case "Kickstarter": return <FaKickstarter />;
    case "GitHub": return <FaGithub />;
    case "YouTube": return <FaYoutube />;
    default: return null;
  }
};

export default function FloatingFooter() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false); // State to control footer visibility
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contacto', { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContactInfo(data.contactInfo);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [isVisible, contactInfo]); // Recalculate on visibility change or when contact info loads

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return (
    <>
      <Button
        className={styles.floatingButton}
        variant="secondary"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Ocultar Footer" : "Mostrar Footer"}
        style={{ bottom: isVisible ? footerHeight : 0, transition: 'bottom 0.5s ease-out' }}
      >
        <FaEnvelope />
      </Button>

      <footer ref={footerRef} className={`${styles.footer} ${isVisible ? styles.footerVisible : ''} bg-dark text-white p-4 shadow-lg`}>
        <div style={{ position: 'relative' }}>
          <div className={`${styles.footerLaserLine} animated-laser-line`}></div>
          <Container>
            <Row>
              <Col md={4} className="mb-3 mb-md-0">
                <h5 className="text-white fw-bold">Xlerion</h5>
                <p className="text-white-50">Plataforma para soluciones multisectoriales.</p>
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <h5 className="text-white fw-bold">Contacto</h5>
                <ul className="list-unstyled">
                  {contactInfo?.email && (
                    <li><FaEnvelope className="me-2" /> Email: <a href={`mailto:${contactInfo.email}`} className="text-white-50">{contactInfo.email}</a></li>
                  )}
                  {contactInfo?.whatsapp && (
                    <li><FaWhatsapp className="me-2" /> WhatsApp Game Studio: <a href={contactInfo.whatsapp} className="text-white-50">Enviar Mensaje</a></li>
                  )}
                  {contactInfo?.whatsappLab && (
                    <li><FaWhatsapp className="me-2" /> WhatsApp Lab: <a href={contactInfo.whatsappLab} className="text-white-50">Enviar Mensaje Lab</a></li>
                  )}
                </ul>
              </Col>
              <Col md={4}>
                <h5 className="text-white fw-bold">Síguenos</h5>
                <div className="d-flex gap-3">
                  {contactInfo?.socialMedia.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white-50 fs-4 social-icon-hover">
                      {getIconComponent(social.name)}
                    </a>
                  ))}
                </div>
              </Col>
            </Row>
            <Row className="mt-3 border-top border-secondary pt-3">
              <Col className="text-center">
                <p className="text-white-.50">&copy; {new Date().getFullYear()} Xlerion. Todos los derechos reservados. Desarrollado con Next.js, React, Bootstrap y FastAPI.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
