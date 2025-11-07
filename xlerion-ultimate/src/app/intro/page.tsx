"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const IntroPage = () => {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    if (videoEnded) {
      // Redirect after a short delay to ensure any transition can start
      const redirectTimer = setTimeout(() => {
        router.push('/');
      }, 500); // 0.5 second delay after video ends
      return () => clearTimeout(redirectTimer);
    }
  }, [videoEnded, router]);

  // Fallback: Redirect after a maximum time even if video doesn't end
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!videoEnded) {
        router.push('/');
      }
    }, 10000); // Redirect after 10 seconds if video hasn't ended
    return () => clearTimeout(fallbackTimer);
  }, [videoEnded, router]);

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
      zIndex: 9999,
    }}>
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src="/WebIntro.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroPage;
