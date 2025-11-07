"use client";

import { useState, useEffect } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa';
import MagneticEffect from './MagneticEffect';

interface RightSidebarReaderProps {
  show: boolean;
  handleClose: () => void;
}

const RightSidebarReader: React.FC<RightSidebarReaderProps> = ({ show, handleClose }) => {
  const [pageContent, setPageContent] = useState<string>('');

  useEffect(() => {
    if (show) {
      // Attempt to read the main content of the page
      // This is a basic implementation and might need refinement for complex layouts
      const mainContentElement = document.querySelector('main') || document.body;
      setPageContent(mainContentElement.innerText || '');
    }
  }, [show]);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark text-primary futuristic-border" style={{ zIndex: 10003, top: '120px', height: 'calc(100vh - 120px)' }}>
      <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
        <Offcanvas.Title className="text-primary">Lector de Página</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column p-3" style={{ height: '100%' }}>
        <div className="flex-grow-1 overflow-auto mb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #555' }}>
          <p>{pageContent}</p>
        </div>
        <MagneticEffect>
          <Button variant="outline-light" onClick={handleClose} className="text-start d-flex align-items-center">
            <FaTimesCircle className="me-2" /> Cerrar
          </Button>
        </MagneticEffect>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RightSidebarReader;
