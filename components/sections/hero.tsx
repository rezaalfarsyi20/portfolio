"use client";

import { useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionTemplate, motion } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";
import { InteractiveParticles } from "@/components/3d/interactive-particles";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contactOpen, setContactOpen] = useState(false);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);
    const scale = useTransform(scrollY, [0, 800], [1, 0.94]);
    const y = useTransform(scrollY, [0, 800], [0, -150]);
    const blurValue = useTransform(scrollY, [0, 800], [0, 10]);
    const filter = useMotionTemplate`blur(${blurValue}px)`;

    const scrollToProjects = useCallback(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            className="sticky top-0 h-screen w-full flex flex-col justify-between bg-background px-6 sm:px-12 md:px-16 pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden"
            id="home"
        >
            {/* Ambient Monochromatic Star/Snow Particles */}
            <InteractiveParticles />

            {/* Scroll Animating Content Container */}
            <motion.div
                style={{ opacity, scale, y, filter }}
                className="relative z-20 flex-1 flex flex-col justify-between w-full h-full will-change-[opacity,transform,filter]"
            >
                {/* Top Bar: Role on Left, Vertical Scroll Indicator on Right */}
                <div className="flex justify-end items-start w-full">

                    {/* Vertical Scroll Indicator (Top-Right) */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
                                animate={{
                                    y: ["0%", "100%", "0%"]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-muted-foreground [writing-mode:vertical-lr]">
                            SCROLL
                        </span>
                    </div>
                </div>

                {/* Center: Massive Bold Typography Name */}
                <div className="w-full my-auto flex flex-col justify-center">
                    <div className="overflow-hidden">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[200px] font-black tracking-tighter leading-[0.85] text-foreground uppercase whitespace-nowrap">
                            Hello <br />
                            World
                        </h1>
                    </div>
                </div>

                {/* Bottom Bar: Description & Buttons on Left, Interactive Chips on Right */}
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    {/* Left Column: Description & Buttons */}
                    <div className="md:col-span-6 lg:col-span-5 space-y-6">
                        <p className="text-sm sm:text-lg 2xl:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                            Istanbul raised, Turkey based. Building high-performance full-stack web applications, custom lightweight tools, and interactive digital solutions.
                        </p>

                        {/* Call to action buttons from the first design */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => setContactOpen(true)}
                                className="group relative flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border/50 bg-foreground px-6 text-background transition-all duration-500 ease-out hover:bg-background hover:border-foreground/30 hover:text-foreground shadow-2xl hover:-translate-y-0.5"
                            >
                                <div className="absolute inset-0 flex h-full w-full justify-center -translate-x-full -skew-x-12 group-hover:duration-1000 group-hover:translate-x-full">
                                    <div className="relative h-full w-8 bg-background/20 dark:bg-foreground/10" />
                                </div>
                                <span className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase">
                                    Connect
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button
                                onClick={scrollToProjects}
                                className="group relative flex h-12 cursor-pointer items-center justify-center px-6 text-muted-foreground transition-all duration-500 hover:text-foreground hover:bg-secondary/15 rounded-full border border-border sm:border-transparent hover:border-border/30 backdrop-blur-sm"
                            >
                                <span className="relative z-10 text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2">
                                    <Mouse className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    Explore Works
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="max-lg:hidden md:col-span-6 lg:col-span-7 flex flex-col sm:justify-end gap-3 items-end">
                        <button
                            onClick={() => setContactOpen(true)}
                            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/35 transition-all text-left cursor-pointer"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-mono tracking-wider text-green-400 font-semibold uppercase">
                                AVAILABLE FOR WORK
                            </span>
                        </button>

                        <div className="px-4 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-left flex items-center">
                            <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
        </section>
    );
}