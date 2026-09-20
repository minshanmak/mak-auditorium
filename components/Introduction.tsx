"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Introduction() {
    return (
        <section id="about" className="py-16 md:py-36 bg-secondary text-primary">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl md:text-5xl font-serif leading-tight">
                            Spaces Designed for <br />
                            <span className="italic text-accent">Your Events</span>
                        </h2>
                        <div className="w-16 h-px bg-accent/50" />
                        <p className="text-base md:text-xl text-primary/70 leading-relaxed max-w-lg">
                            MAK Auditorium offers a spacious and functional layout suitable for weddings, corporate gatherings, and large-scale celebrations.
                        </p>
                        <p className="text-base text-primary/60 leading-relaxed max-w-lg">
                            With a focus on practicality and comfort, our venue provides the essential infrastructure and hospitality services needed to host your guests effortlessly.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden flex shadow-2xl">
                            <Image
                                src="/images/entry.png"
                                alt="MAK Auditorium Grand Entrance"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 md:-bottom-12 md:-left-12 aspect-square w-1/2 md:w-2/5 p-2 bg-secondary shadow-xl">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/car-porche.png"
                                    alt="Car Porche"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
