"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { CheckCircle2, Loader2 } from "lucide-react";

export function BookingCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const responseData = await res.json();
                alert("System Error: The live database completely rejected the submission! \n\nReason: " + JSON.stringify(responseData.debug || "Unknown database drop"));
            }
        } catch (error) {
            console.error("Submission failed", error);
            alert("Network Error: Could not connect to the booking server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="booking" className="relative py-20 md:py-48 overflow-hidden bg-secondary text-primary">
            <div className="absolute inset-x-0 -top-1/4 h-[150%] opacity-10 pointer-events-none">
                <Image
                    src="/images/outside-view.png"
                    alt="Background Texture"
                    fill
                    sizes="100vw"
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

                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/5 border border-primary/10 p-12 rounded-lg max-w-lg mx-auto flex flex-col items-center justify-center text-center mt-12"
                            >
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="text-green-600 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-serif text-primary mb-3">Enquiry Received</h3>
                                <p className="text-primary/70">
                                    Thank you for reaching out. Our event specialists will contact you shortly to confirm dates and arrange your tour.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12 text-left"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col">
                                    <label className="flex gap-1 text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Full Name <span className="text-accent">*</span></label>
                                    <input required name="name" type="text" placeholder="Your Name" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="flex gap-1 text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Phone Number <span className="text-accent">*</span></label>
                                    <input required name="phone" type="tel" placeholder="Your Phone Number" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Email Address</label>
                                    <input name="email" type="email" placeholder="Your Email" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="flex gap-1 text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Event Date <span className="text-accent">*</span></label>
                                    <input required name="date" type="date" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full placeholder-transparent [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:invert" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="flex gap-1 text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Event Type <span className="text-accent">*</span></label>
                                    <select required name="eventType" defaultValue="" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary rounded-none h-10 w-full cursor-pointer appearance-none">
                                        <option value="" disabled className="text-primary/40">Select Event Type</option>
                                        <option value="wedding">Wedding / Reception</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="celebration">Party / Celebration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-xs uppercase tracking-widest text-primary/50 mb-2 font-medium">Number of Guests (Approx.)</label>
                                    <input name="guests" type="number" placeholder="E.g., 500" className="bg-transparent border-b border-primary/20 pb-2 focus:outline-none focus:border-accent transition-colors text-primary placeholder:text-primary/30 rounded-none h-10 w-full" />
                                </div>

                                <div className="md:col-span-2 mt-6 text-center">
                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto px-16 group disabled:opacity-70 disabled:cursor-not-allowed">
                                        {isSubmitting ? (
                                            <>Processing<Loader2 className="ml-2 w-4 h-4 animate-spin inline-block" /></>
                                        ) : (
                                            <>Submit Enquiry<motion.span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</motion.span></>
                                        )}
                                    </Button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
