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
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-accent tracking-widest text-sm uppercase mb-6 block font-medium">Ready to Begin?</span>
                    <h2 className="text-3xl md:text-7xl font-serif mb-8 leading-tight">
                        Reserve Your <br />
                        <span className="italic font-light">Date</span>
                    </h2>
                    <p className="text-lg text-primary/70 mb-10 leading-relaxed">
                        Reach out to our event specialists to schedule a private tour and discuss how we can bring your vision to life.
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12 text-left" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Full Name</label>
                            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Phone Number</label>
                            <input type="tel" placeholder="Your Phone Number" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Email Address</label>
                            <input type="email" placeholder="Your Email" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Event Type</label>
                            <select defaultValue="" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary rounded-none h-10 w-full cursor-pointer appearance-none">
                                <option value="" disabled className="text-primary/40">Select Event Type</option>
                                <option value="wedding">Wedding / Reception</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="celebration">Party / Celebration</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Number of Guests (Approx.)</label>
                            <input type="number" placeholder="E.g., 500" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                        </div>

                        <div className="md:col-span-2 mt-6 text-center">
                            <Button type="submit" size="lg" className="w-full md:w-auto px-16 group">
                                Submit Enquiry
                                <motion.span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</motion.span>
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
