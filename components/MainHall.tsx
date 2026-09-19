"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export function MainHall() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const y = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section ref={containerRef} className="relative h-[150dvh] bg-secondary text-primary">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ scale, willChange: "transform" }} className="absolute inset-x-0 mx-4 md:mx-12 h-[80dvh] overflow-hidden rounded-sm shadow-2xl">
                    <motion.div style={{ y, willChange: "transform" }} className="w-full h-[140%] relative -top-[20%]">
                        <div className="absolute inset-0 bg-primary/30 z-10" />
                        <Image
                            src="/images/balcony-ground-floor.png"
                            alt="Main Hall Overview"
                            fill
                            priority
                            quality={85}
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>

                <div className="relative z-20 text-center mix-blend-difference text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-6xl lg:text-8xl font-serif"
                    >
                        Spacious <br />
                        <span className="italic font-light">Interiors</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6 text-base md:text-xl font-medium tracking-wide w-11/12 md:w-3/4 mx-auto"
                    >
                        High ceilings and wide halls designed to maximize capacity.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
