"use client";

import { useLanguage } from "@/context/language-context";

export default function ComingSoon() {
    const { content } = useLanguage();

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden border-t border-border">

            <div className="relative z-10 flex flex-col items-center gap-6">
                <p
                    className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold uppercase text-foreground/50"
                    style={{ animation: "breathe 4s ease-in-out infinite" }}
                >
                    {content.others.coming_soon}
                </p>

                <div className="flex items-center gap-3 text-muted-foreground/30">
                    <div className="w-12 h-px bg-current" />
                    <span className="text-xs uppercase tracking-[0.3em] font-medium">Stay Tuned</span>
                    <div className="w-12 h-px bg-current" />
                </div>
            </div>

        </section>
    );
}
