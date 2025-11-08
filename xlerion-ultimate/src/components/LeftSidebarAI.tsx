"use client";

import * as React from 'react';
import type { JSX } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { Offcanvas, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaRobot, FaPaperPlane, FaInfoCircle, FaTools, FaUser, FaProjectDiagram, FaEnvelope, FaBrain, FaHandshake, FaBook, FaLightbulb, FaNewspaper, FaTimesCircle } from 'react-icons/fa';
import MagneticEffect from './MagneticEffect';

const menuIcons: { [key: string]: JSX.Element } = {
  "1": <FaInfoCircle className="me-2" />,
  "2": <FaTools className="me-2" />,
  "3": <FaUser className="me-2" />,
  "4": <FaProjectDiagram className="me-2" />,
  "5": <FaEnvelope className="me-2" />,
  "6": <FaBrain className="me-2" />,
  "7": <FaHandshake className="me-2" />,
  "8": <FaBook className="me-2" />,
  "9": <FaLightbulb className="me-2" />,
  "10": <FaNewspaper className="me-2" />,
  "11": <FaTimesCircle className="me-2" />, // For "Salir"
};

interface MenuContent {
  intro: string;
  options: string[];
}

interface ResponseContent {
  text: string;
  link?: string; // link is optional
}

interface Message {
  sender: 'user' | 'ai';
  text: string | MenuContent | ResponseContent;
}

interface LeftSidebarAIProps {
  show: boolean;
  handleClose: () => void;
  startPageTransition: (href: string) => void;
}

const renderMessageContent = (msg: Message, handleSendMessage: (message: string) => void, startPageTransition: (href: string) => void) => {
    if (msg.sender === 'user') {
      return msg.text as string;
    } else if (msg.sender === 'ai') {
      if (typeof msg.text === 'string') {
        return msg.text;
      } else if ('intro' in msg.text && 'options' in msg.text) {
        const menuContent = msg.text as MenuContent;
        return (
          <div>
            <p className="mb-2">{menuContent.intro.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
            <div className="d-flex flex-column gap-2 mt-2">
              {menuContent.options.map((option, idx) => {
                const match = option.match(/^(\d+)\.\s*(.*)/);
                if (match) {
                  const optionNumber = match[1];
                  const optionText = match[2];
                  return (
                  <MagneticEffect key={idx}>
                    <Button
                      variant="outline-light"
                      className="text-start d-flex align-items-center"
                      onClick={() => handleSendMessage(optionText)}
                      style={{ marginBottom: '8px' }}
                    >
                      {menuIcons[optionNumber]} {optionText}
                    </Button>
                  </MagneticEffect>
                  );
                }
                return <p key={idx}>{option}</p>;
              })}
            </div>
          </div>
        );
      } else if ('text' in msg.text) {
        const responseContent = msg.text as ResponseContent;
        return (
          <div>
            <p>{responseContent.text}</p>
                        {responseContent.link && responseContent.link !== '#' && responseContent.link !== '' && (
                          <MagneticEffect>
                            <Button
                              variant="link"
                              onClick={() => startPageTransition(responseContent.link!)}
                              className="p-0 mt-2 text-decoration-none silver-link"
                            >
                              Ver más
                            </Button>
                          </MagneticEffect>
                        )}
          </div>
        );
      }
    }
    return null; // Fallback for unexpected types, though ideally all cases should be covered
  };

export default function LeftSidebarAI({ show, handleClose, startPageTransition }: LeftSidebarAIProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (show && messages.length === 0) {
      // Fetch initial menu when sidebar is shown for the first time
      handleSendMessage('menu');
    }
  }, [show]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (initialMessage: string = '') => {
    const userMessage = initialMessage || input.trim();
    if (userMessage) {
      if (!initialMessage) { // Only add to messages if it's a user-typed message
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userMessage }]);
      }
      setInput('');

      try {
        let data;
        if (userMessage === 'menu') {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/menu`, {
            method: 'GET',
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const menuItems = await response.json();
          data = {
            answer: {
              intro: '¡Hola! Soy tu asistente de Xlerion. ¿En qué puedo ayudarte hoy? Selecciona una opción o escribe tu pregunta:',
              options: menuItems.map((item: any, index: number) => `${index + 1}. ${item.title}`),
            },
          };
        } else {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ask?question=${encodeURIComponent(userMessage)}`, {
            method: 'GET',
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          data = await response.json();
        }
        setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: data.answer }]);
      } catch (error) {
        console.error('Error sending message to AI backend:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: 'Lo siento, no pude conectar con el asistente de IA. Por favor, inténtalo de nuevo más tarde.' },
        ]);
      }
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-dark text-primary futuristic-border" style={{ zIndex: 10003, top: '120px', height: 'calc(100vh - 120px)' }}>
      <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
        <Offcanvas.Title className="text-primary">Xlerion AI</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column p-3" style={{ height: '100%' }}>
        <div className="flex-grow-1 overflow-auto mb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #555' }}>
          {messages.map((msg, index) => (
                          <div
                            key={index}
                            className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                          >
                            <div
                              className={`p-2 rounded-3 shadow-sm ${msg.sender === 'user' ? 'bg-primary text-white' : 'ai-message-bubble text-primary d-flex align-items-start'}`}
                              style={{ maxWidth: '75%' }}
                            >
                              {msg.sender === 'ai' && <FaRobot className="me-2 mt-1" size={20} />}
                              <div>{renderMessageContent(msg, handleSendMessage, startPageTransition)}</div>
                            </div>
                          </div>          ))}
          <div ref={messagesEndRef} />
        </div>
        <InputGroup className="mt-auto">
          <FormControl
            placeholder="Escribe tu mensaje..."
            aria-label="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            className="bg-secondary text-white border-secondary"
          />
          <MagneticEffect>
            <Button variant="primary" onClick={() => handleSendMessage()}>
              <FaPaperPlane />
            </Button>
          </MagneticEffect>
        </InputGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}