import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaLightbulb, FaTools, FaProjectDiagram, FaBook, FaUser, FaHandshake, FaEnvelope, FaNewspaper, FaBalanceScale } from 'react-icons/fa';
import MagneticEffect from './MagneticEffect';

interface MenuItem {
  href: string;
  title: string;
  shortTitle: string; // Ensure shortTitle is part of the interface
  isDropdown?: boolean;
  dropdownItems?: { href: string; title: string }[];
}

const menuIcons: { [key: string]: JSX.Element } = {
  "Inicio": <FaHome className="me-2" />,
  "Filosofía": <FaLightbulb className="me-2" />,
  "Soluciones": <FaTools className="me-2" />,
  "Proyectos": <FaProjectDiagram className="me-2" />,
  "Docs": <FaBook className="me-2" />,
  "Fundador": <FaUser className="me-2" />,
  "Alianzas": <FaHandshake className="me-2" />,
  "Contacto": <FaEnvelope className="me-2" />,
  "Blog": <FaNewspaper className="me-2" />,
  "Legal": <FaBalanceScale className="me-2" />,
};

interface ClientNavbarProps {
  startPageTransition: (href: string) => void;
  handleToggleAISidebar: () => void;
  topOffset?: string;
  onHeightChange?: (height: number) => void; // New prop to report height changes
}

export default function ClientNavbar({ startPageTransition, handleToggleAISidebar, topOffset, onHeightChange }: ClientNavbarProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navbarRef = useRef<HTMLDivElement>(null); // Ref for the Navbar DOM element

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/menu', { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: MenuItem[] = await response.json(); // Cast data to MenuItem[]
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
        // Optionally, set some default/fallback menu items
      }
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    if (navbarRef.current && onHeightChange) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          onHeightChange(entry.contentRect.height);
        }
      });
      observer.observe(navbarRef.current);
      // Initial height report
      onHeightChange(navbarRef.current.offsetHeight);
      return () => observer.disconnect();
    }
  }, [onHeightChange]);

  return (
    <Navbar ref={navbarRef} bg="dark" variant="dark" expand="lg" className="shadow-sm" style={{ overflowX: 'hidden', zIndex: 10004, top: topOffset, position: 'fixed', width: '100%' }}>
      <Container>
        <MagneticEffect>
          <Navbar.Brand
            onClick={() => startPageTransition('/')}
            className="text-white fw-bold fs-4"
            style={{ cursor: 'pointer' }}
          >
            <img src="/LogoX-01.svg" alt="Xlerion Ultimate Logo" style={{ height: '40px' }} />
          </Navbar.Brand>
        </MagneticEffect>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item, index) => {
              if (item.isDropdown && item.dropdownItems) {
                return (
                  <MagneticEffect key={item.href}>
                    <NavDropdown title={<><span className="d-flex align-items-center">{menuIcons[item.shortTitle]} {item.shortTitle}</span></>} id={`basic-nav-dropdown-${index}`} className="text-white mx-2 text-uppercase text-nowrap">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          onClick={() => startPageTransition(dropdownItem.href)}
                          className="dropdown-item text-uppercase text-nowrap"
                          style={{ cursor: 'pointer' }}
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </NavDropdown>
                  </MagneticEffect>
                );
              }
              return (
              <MagneticEffect key={item.href}>
                <a
                  onClick={() => startPageTransition(item.href)}
                  className="nav-link text-white mx-2 text-uppercase text-nowrap d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  {menuIcons[item.shortTitle]} {item.shortTitle}
                </a>
              </MagneticEffect>
              );
            })}

          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="animated-laser-line"></div>
    </Navbar>
  );
}