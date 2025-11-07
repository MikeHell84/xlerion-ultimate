"use client";

import ClientNavbar from './ClientNavbar';

interface MenuBarProps {
  startPageTransition: (href: string) => void;
  handleToggleAISidebar: () => void;
  topOffset: string;
  onHeightChange: (height: number) => void;
}

export default function MenuBar({ startPageTransition, handleToggleAISidebar, topOffset, onHeightChange }: MenuBarProps) {
  return (
    <ClientNavbar startPageTransition={startPageTransition} handleToggleAISidebar={handleToggleAISidebar} topOffset={topOffset} onHeightChange={onHeightChange} />
  );
}