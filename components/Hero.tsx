"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
    return (
        <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/40 z-10" />
                <Image
                    src="/images/outside-view.png"
                    alt="MAK Auditorium Exterior"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center text-secondary">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium"
                >
                    Welcome to
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-9xl font-serif mb-6 md:mb-8 max-w-4xl mx-auto leading-tight"
                >
                    MAK <br className="md:hidden" />
                    <span className="italic font-light text-accent">Auditorium</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-secondary/80 px-6 md:px-0"
                >
                    A premium convention center and event space located in the heart of the city, built to comfortably accommodate large gatherings.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Button size="lg" className="px-6 md:px-12 w-full md:w-auto" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
