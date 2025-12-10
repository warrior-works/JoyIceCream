"use client";
import React, {
  Suspense,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Navbar from "../../components/Navbar";
import { Bebas_Neue, Montez } from "next/font/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import coconut from "../../app/assets/HERO-SECTION/sunlover-cocco-1.webp";
import choclate from "../../app/assets/HERO-SECTION/CHOCOLATE.webp";
import berry from "../../app/assets/HERO-SECTION/straw.webp";
import caramel from "../../app/assets/HERO-SECTION/caramel.webp";
import flower from "../../app/assets/HERO-SECTION/sunlover-vanilla-1.webp";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import useMeasure from "react-use-measure";
import newRound from "@/app/assets/HERO-SECTION/hero-bg.webp";
import heroCircleMob from "../../app/assets/MOBILE/hero-circle-mob.png";
import { useLenisScroll } from "@/components/SmoothScroll";
import stage from "../../app/assets/HERO-SECTION/icestage.png";
import SecondSection from "./SecondSection";
import choclateDub from "../../app/assets/HERO-SECTION/choc.png";
import spanishDub from "../../app/assets/HERO-SECTION/spanish.png";
import { useSpring, a } from "@react-spring/three";


const thunder = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const thunderSemiBold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "500",
});

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
});

// -----STARWBERRY TUB CODE----

function Dub2Model({ value, rotateY }) {
  const glb = useGLTF("/assets/HERO 3D/Strawberry.glb");
  const modelRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    glb.scene.traverse((child) => {
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
  }, [glb, gl]); // Add gl to dependency array

  useFrame(() => {
    if (rotateY && modelRef.current) {
      modelRef.current.rotation.y += 0.01;  // Smooth Y-axis rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.6, 0]}
      rotation={[0, value * 0.009, 0]} // Adjust rotation
    />
  );
}

// Spotlight for dynamic lighting based on scroll position
function SpotlightFollower({ value }) {
  const spotlightRef = useRef();

  useFrame(() => {
    if (spotlightRef.current) {
      const normalizedValue = Math.min(value / 300, 1);
      spotlightRef.current.position.x = 3 - normalizedValue * 6;
      spotlightRef.current.position.y = 4 - normalizedValue * 2;

      // Adjust light intensity dynamically
      if (value > 400) {
        spotlightRef.current.intensity = 15 + Math.sin(Date.now() * 0.002) * 3;
      } else {
        spotlightRef.current.intensity = 12;
      }
    }
  });

  return (
    <spotLight
      ref={spotlightRef}
      position={[3, 4, 5]}
      angle={0.3}
      penumbra={0.9}
      intensity={12}
      distance={15}
      color="#ffffff"
      castShadow
    />
  );
}

// ---------ENDS HERE--------

function Dub1Model() {
  const glb = useGLTF("/assets/HERO 3D/SPANISH.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.7; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
    />
  );
}

function Dub3Model() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATE.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        child.material.roughness = 0.6; // Adjust value between 0-1
        child.material.metalness = 0.7; // Adjust value between 0-1
        child.material.needsUpdate = true;
      }
    });
  }, [glb]);

  return (
    <primitive
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
    />
  );
}

// -----MOBILE-MODELS----

function Dub1ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/SPANISHMOB.glb");

  const materialProps = useMemo(
    () => ({
      roughness: 0.6,
      metalness: 0.7,
    }),
    []
  );

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        Object.assign(child.material, materialProps);
        child.material.needsUpdate = true;
      }
    });
    // }, [glb]);
  }, []);

  return (
    <primitive
      object={glb.scene}
      scale={[3, 3, 3]}
      position={[1, -1.3, 0]}
      rotation={[0, 0, Math.PI / 6]} // Rotate 30 degrees on Z-axis
    />
  );
}

function Dub2ModelMob({ mobileValue, rotateY }) {
  const glb = useGLTF("/assets/HERO 3D/StrawberryMOB.glb");
  const modelRef = useRef();
  const { gl } = useThree();
  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Enhance materials for better reflections

        // child.material.roughness = 0.1; // Lower roughness for more reflective surface
        // child.material.metalness = 0.7; // Higher metalness for better reflections

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

        // Adjust for plastic-like material
        child.material.roughness = 0.5; // Adjust value between 0-1
        child.material.metalness = 0.3; // Adjust value between 0-1
        child.material.envMapIntensity = 1.5; // Keep environment reflections
        child.material.needsUpdate = true;

        // Enable shadows
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [glb, gl]);

  useFrame(() => {
    if (rotateY && modelRef.current) {
      modelRef.current.rotation.y += 0.01; //Adjustment of Y rotation mobile
    }
  });
  return (
    <primitive
      ref={modelRef}
      object={glb.scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, -1.65, 0]}
      rotation={[0, mobileValue * 0.0106, 0]} //Adjustment of facing position on stage mobile
    />
  );
}

function Dub3ModelMob() {
  const glb = useGLTF("/assets/HERO 3D/CHOCOLATEMOB.glb");

  const materialProps = useMemo(
    () => ({
      roughness: 0.6,
      metalness: 0.7,
    }),
    []
  );

  useEffect(() => {
    glb.scene.traverse((child) => {
      if (child.isMesh) {
        // Add roughness to all materials
        Object.assign(child.material, materialProps);
        child.material.needsUpdate = true;
      }
    });
    // }, [glb]);
  }, []);

  return (
    <primitive
      object={glb.scene}
      scale={[3, 3, 3]}
      position={[-1, -1.3, 0]}
      rotation={[0, 0.09, -Math.PI / 6]} // Rotate 30 degrees on Z-axis
    />
  );
}

function Hero() {
  const [value, setValue] = useState(0);
  const [mobileValue, setMobileValue] = useState(0);
  const [stageTop, setStageTop] = useState(0);
  const [stageTopMobile, setStageTopMobile] = useState(0);
  const [dubTop, setDubTop] = useState(0);
  const [dubTopMobile, setDubTopMobile] = useState(0);
  const [limit, setLimit] = useState(500);
  const [limitMobile, setLimitMobile] = useState(500);
  const [rotateY, setRotateY] = useState(false);

  const scrollY = useLenisScroll();
  const containerRef = useRef();

  const hasSetDubTop = useRef(false); // Tracks if value was set
  const hasSetDubTopMobile = useRef(false); // Tracks if value was set

  const hasSetStageTop = useRef(false); // Tracks if value was set
  const hasSetStageTopMobile = useRef(false); // Tracks if value was set

  const [dubRef, dubBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });
  const [dubRefMobile, dubBoundsMobile] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  const [stageRef, stageBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  const [stageRefMobile, stageBoundsMobile] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  //Stop position adjustment of main Dub
  useEffect(() => {
    if (dubTop && stageTop) {
      setLimit(stageTop - dubTop + 50);
    }
  }, [dubTop, stageTop]);

  useEffect(() => {
    if (dubTopMobile && stageTopMobile) {
      setLimitMobile(stageTopMobile - dubTopMobile);
    }
  }, [dubTopMobile, stageTopMobile]);

  useEffect(() => {
    if (!hasSetDubTop.current) {
      setDubTop(dubBounds.top + dubBounds.height);
      if (dubBounds.top != 0) {
        hasSetDubTop.current = true;
      }
    }
  }, [dubBounds]);

  useEffect(() => {
    if (!hasSetDubTopMobile.current) {
      setDubTopMobile(dubBoundsMobile.top + dubBoundsMobile.height);
      if (dubBoundsMobile.top != 0) {
        hasSetDubTopMobile.current = true;
      }
    }
  }, [dubBoundsMobile]);

  useEffect(() => {
    if (!hasSetStageTop.current) {
      setStageTop(stageBounds.top);
      if (stageBounds.top != 0) {
        hasSetStageTop.current = true; // Prevent future updates
      }
    }
  }, [stageBounds]);

  useEffect(() => {
    if (!hasSetStageTopMobile.current) {
      setStageTopMobile(stageBoundsMobile.top);
      if (stageBoundsMobile.top != 0) {
        hasSetStageTopMobile.current = true; // Prevent future updates
      }
    }
  }, [stageBoundsMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -limit) {
        if (value !== limit) {
          setValue(limit);
          setRotateY(true);
        }
      } else if (containerTop < 0) {
        if (value !== -containerTop) {
          setValue(-containerTop);
          setRotateY(false);
        }
      } else {
        setValue(0);
        setRotateY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  // IF USING LENIS USE THIS USEEFFECT INSTEAD OF THE ABOVE ONE

  // useEffect(() => {
  //   if (!containerRef.current) return;
  // const containerTop = Math.round(scrollY);
  //   console.log(containerTop,"containertop");

  //   if (containerTop > limit) {
  //     if (value !== limit) {
  //       setValue(limit);
  //       setRotateY(true);
  //     }
  //   } else if (containerTop > 0) {
  //     if (value !== containerTop) {
  //       setValue(containerTop);
  //       setRotateY(false);
  //     }
  //   } else {
  //     setValue(0);
  //     setRotateY(false);
  //   }
  // }, [scrollY, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -limitMobile) {
        setMobileValue(limitMobile);
        setRotateY(true);
      } else if (containerTop < 0) {
        setMobileValue(-containerTop);
        setRotateY(false);
      } else {
        setMobileValue(0);
        setRotateY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limitMobile]);

  function WebGLContextHandler() {
    const { gl } = useThree();

    useEffect(() => {
      const handleContextLost = (event) => {
        event.preventDefault();
        console.warn("WebGL context lost. Attempting to restore...");
        window.location.reload(); // reload on lost of webgl context

        gl.forceContextRestore(); // Try to restore WebGL context
      };

      gl.domElement.addEventListener("webglcontextlost", handleContextLost);

      return () => {
        gl.domElement.removeEventListener(
          "webglcontextlost",
          handleContextLost
        );
      };
    }, [gl]);

    return null;
  }

  return (
    <>
      <div
        ref={containerRef}
        className=" w-screen h-[180vh] lg:h-[200vh] bg-gradient-to-b from-red-900 to-red-950  relative text-white overflow-clip"
      >
        {/* DESKTOP VERSION  */}
        <div className="hidden lg:block h-[200vh] w-screen relative">
          <div className=" relative w-screen flex flex-col justify-between h-[180vh]">
            <motion.div
            
              ref={dubRef}
              className={`sticky flex top-[50vh] w-screen items-center justify-center h-[22rem] z-20 `}
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                shadows
                dpr={[1, 2]} // High DPI rendering for better quality
                gl={{ antialias: true }} // Enable anti-aliasing
              >
                {/* Create environment for reflections */}
                {/* <Environment 
                     preset="sunset"
                    background={false}
                      intensity={0.3}
                       /> */}

                {/* Base ambient light */}
                <ambientLight intensity={2} />

                {/* Directional lights to enhance form and add edge highlights */}
                <directionalLight
                  position={[2, 0, 1]}
                  intensity={1}
                  shadow-camera-left={1}
                  shadow-camera-right={1}
                />

                <directionalLight position={[-2, 0, 1]} intensity={1} />
                {/* Rim light to create separation from background */}
                <spotLight
                  position={[-5, 2, -8]}
                  angle={0.5}
                  penumbra={0.8}
                  intensity={8}
                  color="#ff9999"
                />

                {/* Environmental reflection simulation */}
                <hemisphereLight
                  intensity={0.8}
                  groundColor="#111111"
                  color="#EA2424"
                />

                {/* Dynamic reflection effect that changes with scroll */}
                <SpotlightFollower value={value} />

                {/* Main model */}
                <Dub2Model value={value} rotateY={rotateY} />
              </Canvas>
            </motion.div>

            {/* FOR SIDE DUBS LIGHTNING (HIDDEN)  */}
            <motion.div
              initial={{ x: -180, rotateZ: 0 }}
              animate={{ x: 15, rotateZ: 30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className=" absolute z-10 hidden top-[60vh] left-1/2 -translate-x-1/2 h-[15rem] w-[20rem]  overflow-hidden"
            >
              <Canvas
                resize={{ scroll: false, debounce: 0 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
              >
                {/* Base ambient light */}
                <ambientLight intensity={4} />

                {/* Side specular highlight */}
                <spotLight
                  position={[8, 3, 8]}
                  angle={0.4}
                  penumbra={0.7}
                  intensity={22}
                  distance={12}
                />

                <directionalLight position={[2, 0, 1]} intensity={1.8} />

                <directionalLight position={[-2, 0, 1]} intensity={1.8} />

                {/* Environmental reflection simulation */}
                <hemisphereLight
                  intensity={1}
                  groundColor="#111111"
                  color="#EA2424"
                />

                <Dub3Model />
              </Canvas>
            </motion.div>

            <motion.div
              initial={{ x: -110, rotateZ: 0 }}
              animate={{ x: 50, rotateZ: 30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className=" absolute z-10 flex justify-center outline-none border-none top-[58vh] left-1/2 -translate-x-1/2 w-[13.5rem]  overflow-hidden"
            >
              <Image src={choclateDub} className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ x: 110, rotateZ: 0 }}
              animate={{ x: -50, rotateZ: -30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className="absolute top-[58vh] flex justify-center outline-none border-none right-1/2 translate-x-1/2 w-[13.5rem] z-10 overflow-hidden"
            >
              <Image src={spanishDub} className="w-full h-auto" />
            </motion.div>

            <div className="overflow-hidden w-screen">
              <SecondSection />
            </div>
          </div>
          <div className="flex w-screen  transform -translate-y-14 justify-center">
            <Image
              ref={stageRef}
              src={stage}
              alt="stage"
              width={600}
              className=""
            />
          </div>
          <div className="absolute top-[100vh] w-screen justify-center flex flex-col gap-5 items-center px-7 lg:px-20 z-10">
            <h1
              className={`${thunderSemiBold.className} text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-white`}
            >
              joy in every scoop
            </h1>
            <h1 className="w-[80%] lg:w-[30rem] text-white text-xs md:text-base leading-6 lg:leading-normal -mt-3 text-center">
              It’s about turning simple moments into delightful experiences. Ice
              cream isn’t just a dessert; it’s a way to bring happiness
            </h1>
          </div>
        </div>

        {/* MOBILE VERSION  NEW CONCEPT*/}
        <div className="h-[180vh] lg:hidden w-screen relative">
          <div className=" relative w-screen h-[160vh]">
            <motion.div
              ref={dubRefMobile}
              className="sticky top-[60vh] w-screen  flex items-center justify-center  h-[15rem] md:h-[25rem] overflow-hidden overflow-x-hidden   z-20"
            >
              <Canvas
                resize={{ scroll: false, debounce: 0 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
                shadows
                dpr={[1, 2]} // High DPI rendering for better quality
                gl={{ antialias: true, preserveDrawingBuffer: true }} // Enable anti-aliasing
              >
                <WebGLContextHandler />
                {/* Create environment for reflections */}
                {/* <Environment 
                     preset="sunset"
                     background={false}
                     intensity={0.3}
                   /> */}

                {/* Base ambient light */}
                <ambientLight intensity={2} />

                {/* Directional lights to enhance form and add edge highlights */}
                <directionalLight
                  position={[2, 0, 1]}
                  intensity={1}
                  shadow-camera-left={1}
                  shadow-camera-right={1}
                />

                <directionalLight position={[-2, 0, 1]} intensity={1} />

                {/* Rim light to create separation from background */}
                <spotLight
                  position={[-5, 2, -8]}
                  angle={0.5}
                  penumbra={0.8}
                  intensity={8}
                  color="#ff9999"
                />

                {/* Environmental reflection simulation */}
                <hemisphereLight
                  intensity={0.8}
                  groundColor="#111111"
                  color="#EA2424"
                />

                {/* Dynamic reflection effect that changes with scroll */}
                <SpotlightFollower value={value} />

                <Dub2ModelMob mobileValue={mobileValue} rotateY={rotateY} />
              </Canvas>
            </motion.div>

            {/* FOR SIDE DUBS LIGHTNING (HIDDEN)  */}
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className=" absolute hidden justify-center z-10  top-[65vh] left-1/2 -translate-x-1/2 h-[12rem] md:h-[22rem] w-[11rem] md:w-[21rem]  overflow-hidden"
            >
              <Canvas
                resize={{ scroll: false, debounce: 0 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
                dpr={[1, 2]} // High DPI rendering for better quality
                gl={{ antialias: true, preserveDrawingBuffer: true }} // Enable anti-aliasing
              >
                <WebGLContextHandler />
                {/* Base ambient light */}
                <ambientLight intensity={4} />

                {/* Side specular highlight */}
                <spotLight
                  position={[8, 3, 8]}
                  angle={0.4}
                  penumbra={0.7}
                  intensity={22}
                  distance={12}
                />

                <directionalLight position={[2, 0, 1]} intensity={1.8} />

                <directionalLight position={[-2, 0, 1]} intensity={1.8} />

                {/* Environmental reflection simulation */}
                <hemisphereLight
                  intensity={2}
                  groundColor="#111111"
                  color="#EA2424"
                />
                <Dub3ModelMob />
              </Canvas>
            </motion.div>

            {/* NEW CONCEPT  */}
            <motion.div
              initial={{ x: -70, rotateZ: 0 }}
              animate={{ x: 40, rotateZ: 30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className=" absolute flex justify-center outline-none border-none z-10  top-[67vh] left-1/2 -translate-x-1/2 h-auto w-[8.5rem] md:w-[14rem]  overflow-hidden"
            >
              <Image className="w-full h-auto" src={choclateDub} />
            </motion.div>

            <motion.div
              initial={{ x: 70, rotateZ: 0 }}
              animate={{ x: -40, rotateZ: -30 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className=" absolute flex justify-center  outline-none border-none z-10  top-[67vh] right-1/2 translate-x-1/2 h-auto w-[8.5rem] md:w-[14rem]   overflow-hidden"
            >
              <Image className="w-full h-auto" src={spanishDub} />
            </motion.div>
          </div>
          <div className=" w-screen flex transform -translate-y-8 md:-translate-y-12 justify-center ">
            <Image
              ref={stageRefMobile}
              src={stage}
              alt="stage"
              // width={300}
              className="w-[18.75rem] md:w-[30rem]"
            />
          </div>
          <div className="absolute top-[100vh] w-screen justify-center flex flex-col gap-5 items-center px-7 lg:px-20 z-10 overflow-hidden">
            <h1
              className={`${thunderSemiBold.className} text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-white`}
            >
              joy in every scoop
            </h1>
            <h1 className="w-[80%] lg:w-[30rem] text-white text-xs md:text-base leading-6 lg:leading-normal -mt-3 text-center">
              It’s about turning simple moments into delightful experiences. Ice
              cream isn’t just a dessert; it’s a way to bring happiness
            </h1>
          </div>
        </div>

        <div className="w-screen h-screen absolute hidden lg:block top-[40vh] z-0 ">
          <div className="w-screen h-full mx-auto">
            <Image src={newRound} alt="new" className="" />
          </div>
        </div>

        <div className="w-screen h-screen absolute  lg:hidden top-[70vh] md:top-[60vh] z-0 ">
          <div className="w-screen h-full mx-auto">
            <Image src={heroCircleMob} alt="new" className="" />
          </div>
        </div>

        <div className=" w-screen h-screen absolute top-0 left-0 pt-6 px-5 lg:px-20 ">
          {/* ----TEXT  CONTAINERS---- */}
          <div className="flex h-full w-full flex-col overflow-hidden">
            <div className=" flex flex-col gap-5 z-50">
              <Navbar />
              <hr />
            </div>
            <div className=" flex flex-col justify-between ">
              <div className=" w-full  flex  lg:justify-center  ">
                <h1
                  className={`mt-10 leading-none w-full justify-center lg:text-[16vw] xl:text-[16.5vw] hidden lg:flex ${thunder.className} text-white font-extrabold`}
                >
                  SHARING THE JOY!
                </h1>
              </div>
              {/* ----MOBILE VERSION--- */}
              <div className=" w-full lg:hidden  flex justify-evenly gap-16 lg:gap-0  flex-col ">
                <h1
                  className={`text-[38.5vw] w-full leading-none lg:text-[18vw] ${thunder.className} text-white flex justify-center font-extrabold`}
                >
                  SCOOP
                </h1>
                <h1
                  className={`text-[30vw] w-full leading-none lg:text-[18vw] flex justify-center text-white flex-1 ${thunder.className}  -mt-24 lg:mt-0`}
                >
                  THE JOY!
                </h1>
              </div>
              <h1
                className={` ${manrope.className} w-full lg:-mt-8 lg:w-72 leading-7 lg:leading-9 text-center lg:text-start  text-white text-xl md:text-2xl lg:text-[1.75rem] font-semibold`}
              >
                Indulge in the creamiest flavors, crafted with love!
              </h1>
            </div>
          </div>

          {/* ----FRUITS ICONS----- */}
          <div className=" w-screen h-screen absolute top-0 left-0 flex justify-between overflow-hidden overflow-x-hidden">
            <div className="hidden lg:flex items-center gap-32 w-screen justify-between overflow-hidden">
              <motion.div
                initial={{ x: 300, y: 200, opacity : 0 }}
                animate={{ x: 0, y: 0, opacity : 1  }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" -ml-20 mt-20 z-50 "
              >
                <Image alt="coconut" src={coconut} width={200} className=" transform -translate-y-1/2 animate-float-fast" />
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 300, opacity : 0 }}
                animate={{ x: 0, y: 0, opacity : 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" relative -mt-[30rem] ml-16 bg-whit   z-50 flex flex-shrink-0"
              >
                <Image
                  alt="choclate"
                  src={choclate}
                  width={130}
                  className="z-50 mt-44 transform -translate-y-1/2 animate-float-fast"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 300, opacity : 0 }}
                animate={{ x: 0, y: 0, opacity :1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" z-50 -mt-32  ml-56 flex flex-shrink-0 "
              >
                <Image alt="berry" src={berry} width={120} className="transform -translate-y-1/2 animate-float-fast" />
              </motion.div>
              <motion.div
                className="z-50 -mt-56 "
                initial={{ x: 0, y: 300, opacity : 0 }}
                animate={{ x: 0, y: 0, opacity : 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                <Image alt="caramel" src={caramel} width={140} className="transform -translate-y-1/2 animate-float-fast" />
              </motion.div>
              <motion.div
                initial={{ x: -300, y: 300, opacity : 0 }}
                animate={{ x: 0, y: 0, opacity:1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className=" z-20 -mt-54 -mr-16 -mt-28 "
              >
                <Image alt="flower" src={flower} width={160} className="transform -translate-y-1/2 animate-float-fast" />
              </motion.div>
            </div>

            {/* ---MOBILE VERSION---- */}
            <div className="lg:hidden relative h-screen w-screen overflow-hidden">
              <motion.div
                initial={{ x: 100, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute top-[10rem] -left-9 transform -translate-y-1/2 animate-float-fast"
              >
                <Image
                  alt="coconut"
                  src={coconut}
                  className="w-[5.5rem] md:w-[8rem]"
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute z-20 top-[7rem] left-[10.5rem] md:left-[22.5rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
              >
                <Image
                  alt="choclate"
                  src={choclate}
                  className="w-[4.1rem] md:w-[7rem]"
                />
              </motion.div>
              <motion.div
                initial={{ x: 0, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute z-20 top-[14rem] md:top-[24rem] left-[9.5rem] md:left-[20rem] flex flex-shrink-0 transform -translate-y-1/2 animate-float-fast"
              >
                <Image
                  alt="berry"
                  src={berry}
                  className="w-[4.1rem] md:w-[7rem]"
                />
              </motion.div>
              <motion.div
                className="absolute z-20 top-[16.5rem] md:top-[32rem] left-[15.5rem] md:left-[35rem] -translate-y-1/2 animate-float-fast"
                initial={{ x: -20, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                <Image
                  alt="caramel"
                  src={caramel}
                  width={90}
                  className=" transform w-[5.6rem] md:w-[8rem] "
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
                className="absolute -right-10 top-[7rem] transform -translate-y-1/2 animate-float-fast"
              >
                <Image
                  src={flower}
                  alt="flower"
                  className="w-[5.5rem] md:w-[8rem]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
