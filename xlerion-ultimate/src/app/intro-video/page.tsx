"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroVideoPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999, // Ensure it's on top of everything
      backgroundColor: 'black', // Background behind the video
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <video
        src="/WebIntro.mp4"
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cover the entire container
        }}
      />
    </div>
  );
}
