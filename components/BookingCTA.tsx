"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

export function BookingCTA() {
    return (
        <section className="relative py-20 md:py-48 overflow-hidden bg-secondary text-primary">
            <div className="absolute inset-x-0 -top-1/4 h-[150%] opacity-10 pointer-events-none">
                <Image
                    src="/images/outside-view.png"
                    alt="Background Texture"
                    fill
                    quality={60}
                    className="object-cover grayscale"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <span className="text-accent tracking-widest text-sm uppercase mb-6 block font-medium">Ready to Begin?</span>
                    <h2 className="text-3xl md:text-7xl font-serif mb-8 leading-tight">
                        Reserve Your <br />
                        <span className="italic font-light">Date</span>
                    </h2>
                    <p className="text-lg text-primary/70 mb-10 leading-relaxed">
                        Reach out to our event specialists to schedule a private tour and discuss how we can bring your vision to life.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent border-b border-primary/20 pb-2 px-4 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/40 rounded-none h-12"
                        />
                        <Button type="submit" size="md" className="md:w-auto w-full group">
                            Inquire Now
                            <motion.span
                                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                            >
                                →
                            </motion.span>
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
