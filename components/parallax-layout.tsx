"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxLayoutProps {
    children: React.ReactNode;
    footer: React.ReactNode;
}

export default function ParallaxLayout({ children, footer }: ParallaxLayoutProps) {
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setFooterHeight(entry.contentRect.height);
            }
        });

        resizeObserver.observe(footerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="relative w-full">
            <div
                className="relative z-10 bg-background border-b border-border"
                style={{ marginBottom: footerHeight }}
            >
                {children}
            </div>

            <div
                ref={footerRef}
                className="fixed bottom-0 left-0 w-full z-0 h-screen"
                style={{ height: footerHeight ? footerHeight : "auto" }}
            >
                {footer}
            </div>
        </div>
    );
}
