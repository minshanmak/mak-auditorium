"use client";

import { motion } from "framer-motion";

export function Architecture() {
    return (
        <section className="py-16 md:py-36 bg-secondary text-primary">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-5 md:col-start-1"
                    >
                        <div className="aspect-[4/3] md:aspect-[3/4] relative overflow-hidden shadow-2xl">
                            <img
                                src="/images/outside-view.png"
                                alt="Architecture Details"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-6 md:col-start-7 space-y-8"
                    >
                        <h2 className="text-2xl md:text-5xl font-serif">
                            Modern <br />
                            <span className="italic text-accent">Design</span>
                        </h2>
                        <div className="w-16 h-px bg-accent/50" />
                        <p className="text-lg text-primary/70 leading-relaxed md:pr-12">
                            Our building features a clean, contemporary design with ample natural light. The spacious layout allows for easy movement of guests, providing a pleasant environment for any occasion.
                        </p>
                        <p className="text-base text-primary/60 leading-relaxed md:pr-12">
                            The combination of high-quality materials creates a robust and welcoming environment, ensuring both durability and visual appeal.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
