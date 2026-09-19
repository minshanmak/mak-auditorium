"use client";
import { motion } from "framer-motion";

const images = [
    "/images/outside-side-view.png",
    "/images/car-porche.png",
    "/images/entry.png",
    "/images/dining-view.png",
    "/images/stage-view.png",
];

export function Gallery() {
    return (
        <section id="gallery" className="py-16 md:py-36 bg-secondary text-primary overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-3xl md:text-6xl font-serif mb-6">
                        Photo <span className="italic text-accent">Gallery</span>
                    </h2>
                    <div className="w-16 h-px bg-accent/50" />
                </div>
                <p className="text-primary/70 max-w-md">
                    Explore the various spaces of MAK Auditorium to see our facilities layout and design.
                </p>
            </div>

            <div className="relative w-full">
                <div className="flex gap-3 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-12 hide-scrollbar">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative w-[80vw] md:w-[500px] aspect-[4/5] md:aspect-video shrink-0 snap-center rounded-sm overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                            <img
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
