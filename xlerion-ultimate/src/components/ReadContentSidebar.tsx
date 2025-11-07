"use client";

import { useState, useEffect, useRef } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { FaPlay, FaPause, FaStop, FaTimesCircle } from 'react-icons/fa';
import MagneticEffect from './MagneticEffect';

interface ReadContentSidebarProps {
  show: boolean;
  handleClose: () => void;
}

const ReadContentSidebar: React.FC<ReadContentSidebarProps> = ({ show, handleClose }) => {
  const [pageContent, setPageContent] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (show) {
      const mainContentElement = document.querySelector('.main-content-area') || document.body;
      const content = (mainContentElement as HTMLElement).innerText || '';
      setPageContent(content);
    }
  }, [show]);

  useEffect(() => {
    if (!show) {
      handleStop();
    }
  }, [show]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(pageContent);
    utteranceRef.current = u;

    u.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    return () => {
      synth.cancel();
    };
  }, [pageContent]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    if (utteranceRef.current) {
      if (isPaused) {
        synth.resume();
      } else {
        synth.speak(utteranceRef.current);
      }
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark text-primary futuristic-border" style={{ zIndex: 10003, top: '120px', height: 'calc(100vh - 120px)' }}>
      <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
        <Offcanvas.Title className="text-primary">Lector de Contenido</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column p-3" style={{ height: '100%' }}>
        <div className="flex-grow-1 overflow-auto mb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #555' }}>
          <p>{pageContent}</p>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <MagneticEffect>
            <Button variant="outline-light" onClick={handlePlay} disabled={isSpeaking && !isPaused}>
              <FaPlay className="me-2" /> Play
            </Button>
          </MagneticEffect>
          <MagneticEffect>
            <Button variant="outline-light" onClick={handlePause} disabled={!isSpeaking || isPaused}>
              <FaPause className="me-2" /> Pause
            </Button>
          </MagneticEffect>
          <MagneticEffect>
            <Button variant="outline-light" onClick={handleStop} disabled={!isSpeaking}>
              <FaStop className="me-2" /> Stop
            </Button>
          </MagneticEffect>
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

export default ReadContentSidebar;
