"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroVideoPage() {
  console.log('IntroVideoPage component is rendering');
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
        autoPlay
        muted
        playsInline
        controls // Added for debugging
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cover the entire container
        }}
      >
        {/* Source for vertical video (mobile general) */}
        <source src="/WebIntro-vertical.mp4" media="(max-width: 767px)" />
        {/* Default source for desktop and larger screens */}
        <source src="/intro_web_1.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

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
      {videoSrc && ( // Only render video if videoSrc is set
        <video
          src={videoSrc}
          autoPlay
          muted
          playsInline
          poster="/images/LogoXlerion.png" // Placeholder poster image
          onError={(e) => console.error("Video playback error:", e)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Cover the entire container
          }}
        />
      )}
    </div>
  );
}
