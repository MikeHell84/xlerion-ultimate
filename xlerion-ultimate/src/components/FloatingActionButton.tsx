"use client";

import React from 'react';
import { useButton } from '@react-aria/button';
import { useRef } from 'react';

interface FloatingActionButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  isSidebarOpen?: boolean;
  style?: React.CSSProperties;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress, children, isSidebarOpen, style }) => {
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
        left: isSidebarOpen ? sidebarWidth : 0,
        transform: 'translateY(-50%)',
        width: '60px',
        height: '60px',
        borderRadius: '0 8px 8px 0',
        backgroundColor: '#0dcaf0',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        zIndex: 10000,
        transition: 'left 0.3s ease',
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default FloatingActionButton;
