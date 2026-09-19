"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiences = [
    {
        title: "Grand Halls",
        description: "Expansive spaces designed to host hundreds of guests with ease.",
        image: "/images/hall-siting-view.png",
    },
    {
        title: "Elegant Balconies",
        description: "Open views from the upper levels, offering fresh air and extra space.",
        image: "/images/first-floor-balcony.png",
    },
    {
        title: "Sitouts",
        description: "Quiet areas for conversation and relaxation away from the main hall.",
        image: "/images/sitout.png",
    },
];

export function VenueExperience() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-66.66%"]);

    return (
        <section ref={targetRef} className="relative h-[250dvh] md:h-[300dvh] bg-primary">
            <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
                <div className="absolute top-20 md:top-24 left-6 md:left-12 z-20">
                    <h2 className="text-3xl md:text-6xl font-serif text-secondary mb-4">
                        The Venue <span className="italic text-accent">Experience</span>
                    </h2>
                    <div className="w-24 h-px bg-accent/50" />
                </div>

                <motion.div style={{ x, willChange: "transform" }} className="flex w-[300vw] h-full items-center pt-24 pb-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="w-[100vw] h-[55dvh] md:h-[70dvh] flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center px-4 md:px-20 shrink-0">
                            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[4/3] overflow-hidden relative shadow-2xl">
                                <div className="absolute inset-0 bg-primary/20 z-10" />
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/3 md:pl-12">
                                <span className="text-accent tracking-widest text-sm uppercase mb-4 block">0{index + 1}</span>
                                <h3 className="text-2xl md:text-5xl font-serif text-secondary mb-4 md:mb-6">{exp.title}</h3>
                                <p className="text-secondary/70 leading-relaxed text-lg">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
