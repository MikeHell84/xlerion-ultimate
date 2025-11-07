"use client";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp, FaArtstation, FaBehance, FaLinkedinIn, FaInstagram, FaXTwitter, FaKickstarter, FaGithub, FaYoutube, FaLightbulb } from 'react-icons/fa6';

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
  additionalEmails?: string[]; // New field for additional emails
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

export default function Contacto() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/contacto');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend endpoint
    console.log('Form submitted:', formData);
    alert('Mensaje enviado! (Esta es una simulación)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="my-5 text-white">
      <h1>Contacto</h1>
      <p>Aquí puedes encontrar nuestras formas de contacto y enviarnos un mensaje:</p>

      {contactInfo ? (
        <Row className="mt-4">
          <Col md={6}>
            <h2 className="text-primary">Información de Contacto</h2>
            <ul className="list-unstyled">
              {contactInfo.email && (
                <li><FaEnvelope className="me-2" /> Email Principal: <a href={`mailto:${contactInfo.email}`} className="text-white-50">{contactInfo.email}</a></li>
              )}
              {contactInfo.whatsapp && (
                <li><FaWhatsapp className="me-2" /> WhatsApp Game Studio: <a href={contactInfo.whatsapp} className="text-white-50">Enviar Mensaje</a></li>
              )}
              {contactInfo.whatsappLab && (
                <li><FaWhatsapp className="me-2" /> WhatsApp Lab: <a href={contactInfo.whatsappLab} className="text-white-50">Enviar Mensaje Lab</a></li>
              )}
            </ul>

            {contactInfo.additionalEmails && contactInfo.additionalEmails.length > 0 && (
              <div className="mt-4">
                <h3 className="text-primary">Correos Adicionales</h3>
                <ul className="list-unstyled">
                  {contactInfo.additionalEmails.map((email, index) => (
                    <li key={index}><FaEnvelope className="me-2" /> <a href={`mailto:${email}`} className="text-white-50">{email}</a></li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <h3 className="text-primary">Síguenos en Redes Sociales</h3>
              <div className="d-flex gap-3">
                {contactInfo.socialMedia.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white-50 fs-4 social-icon-hover">
                    {getIconComponent(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="text-primary">Envíanos un Mensaje</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark text-white border-secondary"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tu@ejemplo.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark text-white border-secondary"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-dark text-white border-secondary"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      ) : (
        <p>Cargando información de contacto...</p>
      )}
    </Container>
  );
}