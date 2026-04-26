import { useScroll, useTransform, useMotionTemplate, UseScrollOptions } from "framer-motion";
import { RefObject } from "react";

interface UseScrollAnimationOptions {
    offset?: UseScrollOptions["offset"];
    yRange?: number[];
    blurRange?: number[];
    opacityRange?: number[];
}

export function useScrollAnimation(
    ref: RefObject<HTMLElement | null>,
    options: UseScrollAnimationOptions = {}
) {
    const {
        offset = ["start end", "end start"],
        yRange = [50, 0, 0, -50],
        blurRange = [15, 0, 0, 15],
        opacityRange = [0, 1, 1, 0]
    } = options;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset
    });

    const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], yRange);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], opacityRange);
    const blurValue = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], blurRange);
    const filter = useMotionTemplate`blur(${blurValue}px)`;

    return {
        y,
        opacity,
        filter,
        blurValue,
        scrollYProgress
    };
}
