"use client";

import styles from './Footer.module.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FaArtstation, FaBehance, FaLinkedinIn, FaInstagram, FaXTwitter, FaKickstarter, FaGithub, FaYoutube, FaEnvelope, FaWhatsapp, FaLightbulb } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

interface SocialMediaItem {
  name: string;
  url: string;
  icon?: string; // Optional icon name if needed for dynamic icon rendering
}

interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappLab?: string; // Optional for Xlerion Lab
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

export default function Footer({ isHomePage }: { isHomePage?: boolean }) {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

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

  return (
    <footer className={`${styles.footer} ${isHomePage ? styles.homepageFooter : ''} bg-dark text-white mt-5 p-4 shadow-lg`}>
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
    </footer>
  );
}
