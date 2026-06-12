"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
        }, 1200);

        document.body.style.overflow = "hidden";

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, [theme]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-background pointer-events-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.4 } }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center gap-8"
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <motion.p
                                className="text-4xl font-black tracking-widest uppercase"
                                animate={{
                                    opacity: [1, 0.3, 1, 0.5, 1],
                                    x: [0, -3, 3, -2, 0],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                REZA ALFARSYI
                            </motion.p>
                            <motion.p
                                className="text-xs tracking-[0.5em] text-muted-foreground uppercase"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                AI Automation & Frontend
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
