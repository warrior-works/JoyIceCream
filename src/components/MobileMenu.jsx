"use client";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useEffect, Suspense, useState } from "react";
import { IoClose } from "react-icons/io5";
import menuStage from "../app/assets/MOBILE/menu-stage.png";
import dub from "../app/assets/HERO-SECTION/132.png";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import useMeasure from "react-use-measure";
import { useThree } from '@react-three/fiber';

const thunderMedium = localFont({
  src: "../app/fonts/Thunder-LC.ttf",
  weight: "400",
});
const thunderSemibold = localFont({
  src: "../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

function IceCreamModel() {
  const gltf = useGLTF("/assets/MENU 3D/Strawberry.glb");
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // Fix blurring issue by adjusting material properties
        child.material.roughness = 0.5;
        child.material.metalness = 0.3;
        child.material.envMapIntensity = 1.5;

        // Fix rendering issues
        child.material.transparent = false;
        child.material.depthWrite = true;
        child.material.depthTest = true;

        // Improve texture clarity
        const texture = child.material.map;
        if (texture) {
          texture.anisotropy = gl.capabilities.getMaxAnisotropy();
          texture.needsUpdate = true;
        }

        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
      }
    });
  }, [gltf, gl]); // Updated dependency array with correct variable names
  
  return (
    <primitive
      object={gltf.scene}
      scale={[4.5, 4.5, 4.5]}
      rotation={[-6.3, Math.PI / 50, 0]}
      position={[0, -2, 0]}
    />
  );
}

const MobileMenu = ({ showMenu, setShowMenu }) => {

  const [stageHeight,setStageHeight] = useState(50)

  const [stageRef, stageBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  useEffect(() => {
    if(stageBounds.height){
      setStageHeight(stageBounds.height)
    }
  },[stageBounds])

  //---CONTROLLING SCROLL IN MENU ----
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } overflow-hidden z-50 fixed top-0 left-0 w-screen h-screen p-3 bg-gradient-to-b from-red-900 to-red-500 text-white`}
    >
      <div className="px-4 py-4">
        <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-between ">
          <h1 className={`text-3xl md:text-5xl text-white ${thunderMedium.className}`}>MENU</h1>
          <IoClose className="text-3xl md:text-5xl" onClick={() => setShowMenu(false)} />
        </div>
        <hr />
        </div>
        <div className="w-full h-full flex flex-col gap-[18rem] justify-between relative">
          <div className=" w-full h-screen flex items-center justify-center absolute top-0 left-0">
            <div className=" flex flex-col justify-between pb-20 w-full h-full">
              <div className={` w-full flex flex-col text-white mt-5  `}>
                <Link onClick={() => setShowMenu(false)} href={"/"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl md:text-7xl py-1.5  `}
                  >
                    HOME
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/about"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl md:text-7xl py-1.5`}
                  >
                    ABOUT
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/catalog"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl md:text-7xl py-1.5`}
                  >
                    CATALOG
                  </button>
                </Link>
                <Link onClick={() => setShowMenu(false)} href={"/contact"}>
                  <button
                    className={`${thunderSemibold.className} text-5xl md:text-7xl py-1.5`}
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
           
              <div className="w-full flex  items-center" >
                <div className="relative w-full  flex lg:hidden flex-col items-center  ">
                  {/* Increased container size from 400px to 500px for both width and height */}
                  <div
                    className={`h-[18rem] md:h-[30rem] w-[20rem] md:w-[25rem] z-20`}
                    style={{ 
                      // bottom: `${stageHeight-65}px`,
                      background: 'transparent' 
                    }}
                  >
                    <Canvas
                      gl={{ 
                        antialias: true,
                        alpha: true,
                        preserveDrawingBuffer: true
                      }}
                      dpr={[1, 2]}
                      style={{ background: 'transparent' }}
                    >
                      <Suspense fallback={null}>
                        <ambientLight intensity={2} />
                        
                        <directionalLight
                          position={[2, 0, 1]}
                          intensity={1}
                          shadow-camera-left={1}
                          shadow-camera-right={1}
                        />

                        <directionalLight 
                          position={[-2, 0, 1]} 
                          intensity={1} 
                        />

                        <spotLight
                          position={[-5, 2, -8]}
                          angle={0.5}
                          penumbra={0.8}
                          intensity={8}
                          color="#ff9999"
                        />

                        <hemisphereLight
                          intensity={0.8}
                          groundColor="#111111"
                          color="#EA2424"
                        />

                        <IceCreamModel />
                        <OrbitControls
                          enableZoom={false}
                          autoRotate
                          autoRotateSpeed={4}
                          minPolarAngle={Math.PI / 2}
                          maxPolarAngle={Math.PI / 2}
                        />
                      </Suspense>
                    </Canvas>
                  </div>
                 
                  <Image
                  ref={stageRef}
                    src={menuStage}
                    alt="stage"
                    className="w-[80%] md:w-[65%] transform -translate-y-14 md:-translate-y-24 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
