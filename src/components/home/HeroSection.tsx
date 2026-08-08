"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Sparkles, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PurePhotoCardProps {
  imageSrc: string;
  angleRad: number;
  baseRadiusDesktop: number;
  baseRadiusMobile: number;
  expandRadiusDesktop: number;
  expandRadiusMobile: number;
  spinDirection: number; // +1 for Clockwise, -1 for Counter-Clockwise
  spinSpeedRad: number;
  progress: any;
  shouldReduceMotion: boolean | null;
  isMobile: boolean;
}

function PurePhotoCard({
  imageSrc,
  angleRad,
  baseRadiusDesktop,
  baseRadiusMobile,
  expandRadiusDesktop,
  expandRadiusMobile,
  spinDirection,
  spinSpeedRad,
  progress,
  shouldReduceMotion,
  isMobile,
}: PurePhotoCardProps) {
  const baseRadius = isMobile ? baseRadiusMobile : baseRadiusDesktop;
  const expandRadius = isMobile ? expandRadiusMobile : expandRadiusDesktop;

  const x = useTransform(progress, (s: number) => {
    if (shouldReduceMotion) return Math.cos(angleRad) * baseRadius;
    const currentRadius = baseRadius + s * expandRadius;
    const currentAngle = angleRad + s * spinDirection * spinSpeedRad;
    return Math.cos(currentAngle) * currentRadius;
  });

  const y = useTransform(progress, (s: number) => {
    if (shouldReduceMotion) return Math.sin(angleRad) * baseRadius;
    const currentRadius = baseRadius + s * expandRadius;
    const currentAngle = angleRad + s * spinDirection * spinSpeedRad;
    return Math.sin(currentAngle) * currentRadius;
  });

  const scale = useTransform(
    progress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.0, 0.72]
  );

  const opacity = useTransform(
    progress,
    [0, 0.75, 1],
    [0.92, 0.70, 0.05]
  );

  return (
    <motion.div
      style={{
        left: "50%",
        top: "42%",
        x,
        y,
        scale,
        opacity,
      }}
      whileHover={{ zIndex: 30 }}
      transition={{ duration: 0.3 }}
      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10"
    >
      {/* 1:1 Pure Photograph Card (Exact 72x72 Mobile / 120x120 Desktop, 14px Radius, 1px rgba(255,255,255,0.12) border) */}
      <div className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] rounded-[14px] overflow-hidden border border-white/[0.12] bg-[#10151D] shadow-lg shadow-black/80 transition-all duration-300 group cursor-pointer hover:border-white/25 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]">
        <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-[#0B0F14]">
          <Image
            src={imageSrc}
            alt="IEDC Photo"
            fill
            sizes="(max-width: 640px) 72px, 120px"
            className="object-cover opacity-92 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  });

  const textY = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : 50]);
  const textOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.85, 0]);

  // Inner Ring: 8 Photos (Clockwise Rotation)
  const innerRingPhotos = [
    "/images/gallery/workshop-1.jpg",
    "/images/gallery/hackcraft-1.jpg",
    "/images/gallery/expo-1.jpg",
    "/images/gallery/ignite-1.jpg",
    "/images/gallery/design-1.jpg",
    "/images/gallery/web3-1.jpg",
    "/images/gallery/execom-1.jpg",
    "/images/gallery/achievement-1.jpg",
  ];

  // Outer Ring: 14 Photos (Counter-Clockwise Rotation)
  const outerRingPhotos = [
    "/images/gallery/aarambh-1.jpg",
    "/images/gallery/hackcraft-2.jpg",
    "/images/gallery/expo-2.jpg",
    "/images/gallery/workshop-2.jpg",
    "/images/gallery/ignite-2.jpg",
    "/images/gallery/design-2.jpg",
    "/images/gallery/web3-2.jpg",
    "/images/gallery/legal-1.jpg",
    "/images/gallery/aarambh-2.jpg",
    "/images/gallery/hackcraft-3.jpg",
    "/images/gallery/legal-2.jpg",
    "/images/gallery/aarambh-3.jpg",
    "/images/gallery/aarambh-4.jpg",
    "/images/gallery/workshop-1.jpg",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] bg-[#050608] text-white flex items-center justify-center overflow-hidden pt-36 pb-24 sm:pt-40 sm:pb-28 border-b border-white/[0.08]"
    >
      {/* Background Lighting: Deep Black with Soft Blue Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#3B82F6]/15 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]" />
      </div>

      {/* Two Concentric Circular Photo Rings (Safe Zone Protected) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Inner Ring: 8 Photos (Clockwise Rotation: spinDirection = 1) */}
        {innerRingPhotos.map((img, i) => {
          const angleRad = (i * 2 * Math.PI) / 8;
          return (
            <PurePhotoCard
              key={`inner-${i}`}
              imageSrc={img}
              angleRad={angleRad}
              baseRadiusDesktop={410}
              baseRadiusMobile={210}
              expandRadiusDesktop={240}
              expandRadiusMobile={120}
              spinDirection={1} // Clockwise
              spinSpeedRad={Math.PI / 5}
              progress={smoothProgress}
              shouldReduceMotion={shouldReduceMotion}
              isMobile={isMobile}
            />
          );
        })}

        {/* Outer Ring: 14 Photos (Counter-Clockwise Rotation: spinDirection = -1) */}
        {outerRingPhotos.map((img, j) => {
          const angleRad = (j * 2 * Math.PI) / 14 + Math.PI / 14;
          return (
            <PurePhotoCard
              key={`outer-${j}`}
              imageSrc={img}
              angleRad={angleRad}
              baseRadiusDesktop={600}
              baseRadiusMobile={320}
              expandRadiusDesktop={300}
              expandRadiusMobile={140}
              spinDirection={-1} // Counter-Clockwise
              spinSpeedRad={Math.PI / 6}
              progress={smoothProgress}
              shouldReduceMotion={shouldReduceMotion}
              isMobile={isMobile}
            />
          );
        })}
      </div>

      {/* Middle Zone: Center Hero Content (Strict Spacing & Order) */}
      <div className="w-[92%] sm:max-w-[640px] lg:max-w-[760px] mx-auto relative z-30 text-center">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B82F6]/10 border border-[#60A5FA]/35 text-white text-xs sm:text-sm font-bold tracking-[0.2px] mb-8 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.35)]"
          >
            <Sparkles className="w-4 h-4 text-[#60A5FA]" strokeWidth={1.8} />
            <span>IEDC • College of Engineering Karunagappally</span>
          </motion.div>

          {/* Headline (Font Weight 900, Line Height 1.0, Gradient ONLY on Breakthroughs. & Founders.) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-[340px] sm:max-w-[700px] font-black tracking-[-0.02em] leading-[1.0] text-4xl sm:text-6xl lg:text-7xl text-white mb-6"
          >
            Incubating{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#00E5FF] bg-clip-text text-transparent">
              Breakthroughs.
            </span>
            <br />
            Launching{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#00E5FF] bg-clip-text text-transparent">
              Founders.
            </span>
          </motion.h1>

          {/* Description (Max-W: 340px Mobile / 580px Desktop, Color: rgba(255,255,255,0.72), Leading: 1.7) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-[340px] sm:max-w-[580px] text-sm sm:text-base text-white/72 font-normal leading-[1.7] mb-10 mx-auto text-center"
          >
            The official innovation ecosystem of CEKNPY. Empowering student innovators to build high-impact technical prototypes, launch registered startup ventures, and secure seed grants.
          </motion.p>

          {/* Buttons (Height: 56px, Radius: 999px, Hover: Blue glow & 1.02 scale limit) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-16"
          >
            <Button
              href="/events"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center text-base bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/35 border border-[#3B82F6]/60 h-[56px] px-8 rounded-full hover:scale-[1.02] transition-transform duration-300"
              icon={<Calendar className="w-5 h-5 text-white" strokeWidth={1.8} />}
            >
              Explore Events
            </Button>
            <Button
              href="/pitch-idea"
              variant="glass"
              size="lg"
              className="w-full sm:w-auto justify-center text-base border border-white/[0.08] bg-[#10151D]/80 text-white hover:bg-white/[0.08] hover:border-[#3B82F6]/40 h-[56px] px-8 rounded-full hover:scale-[1.02] transition-transform duration-300"
              icon={<Lightbulb className="w-5 h-5 text-[#60A5FA]" strokeWidth={1.8} />}
            >
              Pitch Your Idea
            </Button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-12 max-w-lg w-full"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">50+</div>
              <div className="text-xs text-white/48 font-medium mt-0.5">Incubated Ideas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100+</div>
              <div className="text-xs text-white/48 font-medium mt-0.5">Active Members</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">₹10L+</div>
              <div className="text-xs text-white/48 font-medium mt-0.5">Grants Disbursed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
