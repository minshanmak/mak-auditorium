"use client";

import { motion } from "framer-motion";

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
    return (
        <section id="experience" className="py-16 md:py-36 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-3xl md:text-6xl font-serif text-secondary mb-4">
                    The Venue <span className="italic text-accent">Experience</span>
                </h2>
                <div className="w-24 h-px bg-accent/50" />
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 md:gap-12 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-6 md:px-12 pb-12 hide-scrollbar">
                    {experiences.map((exp, index) => (
                        <div key={index} className="w-[85vw] md:w-[900px] flex flex-col md:flex-row gap-6 md:gap-10 shrink-0 snap-start bg-secondary/5 border border-white/10 p-6 md:p-10 rounded-sm">
                            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] overflow-hidden relative shadow-2xl rounded-sm">
                                <div className="absolute inset-0 bg-primary/20 z-10" />
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <span className="text-accent tracking-widest text-sm uppercase mb-4 block">0{index + 1}</span>
                                <h3 className="text-2xl md:text-5xl font-serif text-secondary mb-4 md:mb-6">{exp.title}</h3>
                                <p className="text-secondary/70 leading-relaxed text-lg">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* Trailing padding spacer to prevent items from flush right-edge cuts on iOS */}
                    <div className="w-1 md:w-6 shrink-0" />
                </div>
            </div>
        </section>
    );
}
