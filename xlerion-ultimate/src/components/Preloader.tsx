"use client";

import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoEnd = () => {
    setIsVisible(false);
  };

  // Set a timeout as a fallback to hide the preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000); // 7 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
    }}>
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src="/intro_web_1.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
