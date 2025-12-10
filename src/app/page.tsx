'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "../pages/Home/Hero";
import SectionThree from "../pages/Home/SectionThree";
import SectionFour from "../pages/Home/SectionFour"; 
import SectionFive from "../pages/Home/SectionFive";
import Footer from "../pages/Home/Footer";
import Loading from "@/components/Loading";

// Import all images
import mobileBg from '@/app/assets/MOBILE/HOME/mobile-background1.webp';
import coconut from '@/app/assets/HERO-SECTION/sunlover-cocco-1.webp';
import chocolate from '@/app/assets/HERO-SECTION/CHOCOLATE.webp';
import straw from '@/app/assets/HERO-SECTION/straw.webp';
import caramel from '@/app/assets/HERO-SECTION/caramel.webp';
import vanilla from '@/app/assets/HERO-SECTION/sunlover-vanilla-1.webp';
import heroBg from '@/app/assets/HERO-SECTION/hero-bg.webp';

//Import about page image
import tubBg from '../app/assets/ABOUT US/tub-bg.webp';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const isInitialLoad = !sessionStorage.getItem('initialLoadDone');

    if (isInitialLoad) {
      const preloadAssets = async () => {
        try {
          // Define GLB files
          const glbFiles = [
            '/assets/HERO 3D/SPANISH.glb',
            '/assets/HERO 3D/Strawberry.glb',
            '/assets/HERO 3D/CHOCOLATE.glb'
          ];

          // Define image files array with imported images
          const images = [mobileBg, coconut, chocolate, straw, caramel, vanilla, heroBg,tubBg];
          const totalAssets = glbFiles.length + images.length;
          let loadedAssets = 0;

          // GLB files loading with progress
          const glbPromises = glbFiles.map(file => 
            fetch(file)
              .then(res => {
                if (!res.ok) throw new Error(`Failed to load ${file}`);
                loadedAssets++;
                setLoadingProgress(Math.floor((loadedAssets / totalAssets) * 100));
                return res.blob();
              })
          );

          // Image loading with progress
          const imagePromises = images.map(img => 
            new Promise((resolve, reject) => {
              const image = new window.Image();
              image.src = img.src;
              image.onload = () => {
                loadedAssets++;
                setLoadingProgress(Math.floor((loadedAssets / totalAssets) * 100));
                resolve(null);
              };
              image.onerror = reject;
            })
          );

          // Wait for all assets to load
          await Promise.all([...glbPromises, ...imagePromises]);
          
          // Ensure we show 100% at the end
          setLoadingProgress(100);
          
          // Add a small delay before completion
          await new Promise(resolve => setTimeout(resolve, 1000));
          
        } catch (error) {
          console.error('Error loading assets:', error);
          setLoadingProgress(100);
        }
      };

      preloadAssets();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('initialLoadDone', 'true');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} progress={loadingProgress} />
      ) : (
        <div className="flex flex-col overflow-x-clip">
          <Hero />
          <SectionThree />
          <SectionFour/>
          <SectionFive />
          <Footer/>
        </div>
      )}
    </>
  );
}
