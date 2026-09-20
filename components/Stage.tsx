"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Stage() {
    return (
        <section className="py-16 md:py-48 bg-primary text-secondary overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative flex items-center">
                <div className="w-full md:w-1/2 relative z-20 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-6xl font-serif mb-6 leading-tight">
                            The <br className="hidden md:block" />
                            <span className="italic text-accent">Stage</span>
                        </h2>
                        <div className="w-16 h-px bg-accent/50" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-xl text-secondary/70 max-w-md leading-relaxed"
                    >
                        A large stage built for performances, presentations, and ceremonies, accommodating full lighting and audio setups.
                    </motion.p>
                </div>

                <motion.div
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[55%] aspect-square lg:aspect-[4/3] z-10 overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Image
                        src="/images/stage-view.png"
                        alt="The Stage"
                        fill
                        sizes="(max-width: 768px) 0vw, 55vw"
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Mobile Image */}
            <motion.div
                className="md:hidden w-full px-4 mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full aspect-[4/3] relative shadow-xl overflow-hidden rounded-sm">
                    <Image
                        src="/images/stage-view.png"
                        alt="The Stage"
                        fill
                        sizes="(max-width: 768px) 100vw, 0vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
