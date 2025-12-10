'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import loadingSvg from '@/app/assets/image.svg';
import localFont from 'next/font/local';

const thunder = localFont({
  src: "../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "100 900",
});

const Loading = ({ onComplete, progress = 0 }) => {
  const [percent, setPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle responsive layout
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateLoader = () => {
      if (percent < progress) {
        setPercent(prev => Math.min(prev + 1, progress));
      } else if (progress >= 100) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    };

    const interval = setInterval(updateLoader, 30);
    return () => clearInterval(interval);
  }, [percent, progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-[#cc0000] h-screen w-screen text-white overflow-hidden" style={{ fontFamily: thunder.style.fontFamily }}>
        <div className={`h-full flex flex-col justify-between ${isMobile ? 'items-center' : 'items-start'} ${isMobile ? 'px-0' : 'pl-[120px] pr-[-100px]'}`}>
          <div className={`${isMobile ? 'text-[4rem]' : 'text-[7rem]'} font-bold ${isMobile ? 'mt-[50px]' : 'mt-0'} tracking-[2px] ${isMobile ? 'text-center' : 'text-left'}`}>
            LOADING...
          </div>
          <div className={`flex ${isMobile ? 'justify-center' : 'justify-end'} items-end mb-[50px] ${isMobile ? 'mr-0' : 'mr-[50px]'} w-full`}>
            <div className={`relative ${isMobile ? 'w-[220px] h-[260px]' : 'w-[300px] h-[340px]'} flex justify-center items-center`}>
              <Image
                src={loadingSvg}
                alt="Loading bucket"
                width={300}
                height={340}
                className="absolute top-0 left-0 w-full h-full"
              />
              <div 
                className={`${thunder.className} ${isMobile ? 'text-[3.5rem]' : 'text-[4.5rem]'} text-[#cc0000] font-bold relative z-[2] tracking-[1px]`}
              >
                {percent}%
              </div>
              <div 
                className="absolute bottom-0 left-0 w-full bg-[#cc0000] rounded-b-[30px] z-[1] transition-[height] duration-300 ease-in-out"
                style={{ height: `${100 - percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;