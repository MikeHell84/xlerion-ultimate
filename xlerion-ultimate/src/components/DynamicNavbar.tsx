
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// A futuro, estos datos vendrán de una API (Paso 3 del Plan)
const menuItems = [
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/servicios-y-productos', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

const DynamicNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Xlerion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link key={item.href} href={item.href}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DynamicNavbar;
