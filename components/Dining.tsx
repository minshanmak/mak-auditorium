"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Dining() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section ref={containerRef} className="relative h-[70dvh] md:h-[100dvh] w-full overflow-hidden bg-primary flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 z-0 origin-center scale-110">
                <div className="absolute inset-0 bg-primary/60 z-10" />
                <img
                    src="/images/dining-view.png"
                    alt="Dining Area"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto backdrop-blur-sm bg-primary/30 p-6 md:p-16 border border-white/10 rounded-sm"
                >
                    <span className="text-accent tracking-widest text-sm uppercase mb-6 block">Dining Area</span>
                    <h2 className="text-3xl md:text-6xl font-serif text-secondary mb-6">
                        Spacious <span className="italic">Seating</span>
                    </h2>
                    <p className="text-secondary/80 text-base md:text-xl leading-relaxed">
                        Large dining halls capable of serving high numbers of guests efficiently, featuring a clean and hygienic space for catering and meals.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
