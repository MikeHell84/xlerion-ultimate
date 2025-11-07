"use client";

import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import TransitionOverlay from '../components/TransitionOverlay';

import FloatingActionButton from '../components/FloatingActionButton';
import { FaRobot } from 'react-icons/fa'; // Only FaRobot is needed here now

import { PageTransitionProvider } from '../contexts/PageTransitionContext';

const DynamicMenuBar = dynamic(() => import('../components/MenuBar'), { ssr: false });
const DynamicFooter = dynamic(() => import('../components/FloatingFooter'), { ssr: false });

const DynamicParallaxVideoScroll = dynamic(() => import('../components/ParallaxVideoScroll'), { ssr: false });
const DynamicLeftSidebarAI = dynamic(() => import('../components/LeftSidebarAI'), { ssr: false });

import ReadContentSidebar from '../components/ReadContentSidebar'; // Import the new sidebar
import FloatingReadButton from '../components/FloatingReadButton';


export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [displayedPathname, setDisplayedPathname] = useState(pathname);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isTransitioningOverlay, setIsTransitioningOverlay] = useState(false);
  const [nextHref, setNextHref] = useState("");
  const [isNavigating, setIsNavigating] = useState(false); // New state to track navigation
  const [colorConfigs, setColorConfigs] = useState<any[]>([]); // Array of configurations for each bar
    const [showAISidebar, setShowAISidebar] = useState(false); // State for AI sidebar visibility
    const [showReaderSidebar, setShowReaderSidebar] = useState(false); // State for Reader sidebar visibility
    const [navbarHeight, setNavbarHeight] = useState(0); // State to store navbar height
    const [isMobileView, setIsMobileView] = useState(false); // State to track mobile view

    const handleToggleAISidebar = useCallback(() => {
      setShowAISidebar((prev) => !prev);
      if (showReaderSidebar) {
        setShowReaderSidebar(false); // Close reader sidebar if AI sidebar is opened
      }
    }, [showReaderSidebar]);

    const handleToggleReaderSidebar = useCallback(() => {
      setShowReaderSidebar((prev) => !prev);
      if (showAISidebar) {
        setShowAISidebar(false); // Close AI sidebar if reader sidebar is opened
      }
    }, [showAISidebar]);

    const handleNavbarHeightChange = useCallback((height: number) => {
      setNavbarHeight(height);
    }, []);

    // Effect to determine mobile view
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
      };

      if (typeof window !== 'undefined') {
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    const fixedColorPalette = [
      { color: 'rgba(0, 200, 255, 0.5)', shadow: '0 0 15px 7px rgba(0, 200, 255, 0.7)' }, // Bright/Radioactive Blue
      { color: 'rgba(0, 0, 0, 0.5)', shadow: '0 0 15px 7px rgba(0, 0, 0, 0.7)' },       // Black
      { color: 'rgba(128, 128, 128, 0.5)', shadow: '0 0 15px 7px rgba(128, 128, 128, 0.7)' }  // Gray
    ];
  
    const shuffleArray = useCallback((array: any[]) => {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }, []);
  
    const individualBarAnimationPresets = {
      slideInFromLeft: { initial: { x: "-100vw" }, animate: { x: "0vw" }, exit: { x: "100vw" } },
      slideInFromRight: { initial: { x: "100vw" }, animate: { x: "0vw" }, exit: { x: "-100vw" } },
      slideInFromTop: { initial: { y: "-100vh" }, animate: { y: "0vh" }, exit: { y: "100vh" } },
      slideInFromBottom: { initial: { y: "100vh" }, animate: { y: "0vh" }, exit: { y: "-100vh" } },
      // Diagonal top-left to bottom-right
      diagonalTLBR: { initial: { x: "-100vw", y: "-100vh" }, animate: { x: "0vw", y: "0vh" }, exit: { x: "100vw", y: "100vh" } },
      // Diagonal bottom-right to top-left
      diagonalBRTL: { initial: { x: "100vw", y: "100vh" }, animate: { x: "0vw", y: "0vh" }, exit: { x: "-100vw", y: "-100vh" } },
    };
  
    useEffect(() => {
      if (pathname !== displayedPathname) {
        setDisplayedChildren(children);
      }
    }, [pathname, children, displayedPathname]);
  
    useEffect(() => {
      if (isNavigating && pathname === nextHref) {
        setIsTransitioningOverlay(false);
        setIsNavigating(false);
      }
    }, [pathname, nextHref, isNavigating]);
  
  
    const handleExitComplete = useCallback(() => {
      if (pathname !== displayedPathname) {
        setDisplayedPathname(pathname);
      }
    }, [pathname, displayedPathname]);
  
    const startPageTransition = useCallback((href: string) => {
      if (href === pathname) {
        return;
      }
      setNextHref(href);
  
      const shuffledColors = shuffleArray([...fixedColorPalette]);
      const animationPresetKeys = Object.keys(individualBarAnimationPresets);
  
      const newColorConfigs = shuffledColors.map((colorConfig, index) => {
        const randomPresetKey = animationPresetKeys[Math.floor(Math.random() * animationPresetKeys.length)];
        const animationPreset = individualBarAnimationPresets[randomPresetKey as keyof typeof individualBarAnimationPresets];
        return { ...colorConfig, ...animationPreset };
      });
      setColorConfigs(newColorConfigs);
  
      setIsTransitioningOverlay(true); // Start the overlay entry animation
  
      // Trigger navigation after the overlay has fully covered the screen
      setTimeout(() => {
        router.push(href);
        setIsNavigating(true);
      }, 700); // Slightly longer than the longest bar's entry animation (0.5s duration + 0.2s delay for last bar)
    }, [pathname, shuffleArray, individualBarAnimationPresets, router]);
  
    // This function is called by TransitionOverlay when its exit animation completes
    const onTransitionOverlayExitComplete = useCallback(() => {
      setIsTransitioningOverlay(false);
      setNextHref("");
      setColorConfigs([]); // Clear bar configs after transition
    }, []);
  
    const effectiveNavbarHeight = navbarHeight > 0 ? navbarHeight : 56; // Use a default of 56px if navbarHeight is 0
    
      return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
          <DynamicMenuBar startPageTransition={startPageTransition} handleToggleAISidebar={handleToggleAISidebar} topOffset={`0px`} onHeightChange={handleNavbarHeightChange} />

          <div style={{ flexGrow: 1, paddingTop: `${effectiveNavbarHeight + 25}px` }}>
            <div style={{ position: 'relative' }}>
              <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                <PageTransitionProvider startPageTransition={startPageTransition}>
                  <PageTransitionWrapper key={displayedPathname}>
                    {displayedChildren}
                  </PageTransitionWrapper>
                </PageTransitionProvider>
              </AnimatePresence>
              <AnimatePresence>
                {isTransitioningOverlay && colorConfigs.length > 0 && (
                  <TransitionOverlay
                    onExitComplete={onTransitionOverlayExitComplete}
                    isTransitioning={isTransitioningOverlay}
                    barConfigs={colorConfigs}
                  />
                )}
              </AnimatePresence>
    
              <DynamicParallaxVideoScroll />
              <DynamicLeftSidebarAI show={showAISidebar} handleClose={() => setShowAISidebar(false)} startPageTransition={startPageTransition} />
              <ReadContentSidebar show={showReaderSidebar} handleClose={() => setShowReaderSidebar(false)} /> {/* Use the new ReadContentSidebar */}
              <FloatingActionButton onPress={handleToggleAISidebar} isSidebarOpen={showAISidebar}>
                <FaRobot size={24} />
              </FloatingActionButton>
              <FloatingReadButton onPress={handleToggleReaderSidebar} isSidebarOpen={showReaderSidebar} /> {/* Use the new FloatingReadButton */}

            </div>
          </div>
          <DynamicFooter />
        </div>
      );
    }
