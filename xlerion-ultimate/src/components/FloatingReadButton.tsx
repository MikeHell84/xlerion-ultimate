"use client";

import React from 'react';
import { useButton } from '@react-aria/button';
import { useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa'; // Using a book icon for reading content

interface FloatingReadButtonProps {
  onPress: () => void;
  isSidebarOpen?: boolean;
  style?: React.CSSProperties;
}

const FloatingReadButton: React.FC<FloatingReadButtonProps> = ({ onPress, isSidebarOpen, style }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ onPress }, ref);

  const sidebarWidth = 400; // Default Offcanvas width

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="floating-button-glow"
      style={{
        position: 'fixed',
        top: '50%',
        right: isSidebarOpen ? sidebarWidth : 0,
        transform: 'translateY(-50%)',
        width: '60px',
        height: '60px',
        borderRadius: '8px 0 0 8px', // Make it look like a tab
        backgroundColor: '#0dcaf0', // Bootstrap primary color
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        zIndex: 10001,
        transition: 'right 0.3s ease',
        ...style,
      }}
      aria-label="Leer contenido de la página"
    >
      <FaBookOpen />
    </button>
  );
};

export default FloatingReadButton;
