"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-36 bg-secondary text-primary overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Contact Details</h2>
                            <div className="w-16 h-px bg-accent/50 mb-8" />
                            <p className="text-lg text-primary/70 leading-relaxed max-w-lg">
                                We are here to assist you with everything you need. Reach out to us for bookings, enquiries, or to schedule a venue tour.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-accent/10 p-3 rounded-full">
                                    <MapPin className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-accent font-serif text-xl mb-1">Address</h4>
                                    <p className="text-primary/70 leading-relaxed">
                                        Kalathingalpara, Kunnathparamb,<br />
                                        Moonniyur, Kerala 676311
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-accent/10 p-3 rounded-full">
                                    <Phone className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-accent font-serif text-xl mb-1">Phone & WhatsApp</h4>
                                    <a href="tel:+919846158750" className="text-primary/70 hover:text-accent transition-colors block">
                                        +91 98461 58750
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-accent/10 p-3 rounded-full">
                                    <Mail className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-accent font-serif text-xl mb-1">Email</h4>
                                    <a href="mailto:makauditorium@gmail.com" className="text-primary/70 hover:text-accent transition-colors block">
                                        makauditorium@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-2xl relative"
                    >
                        <iframe
                            className="absolute inset-0 w-full h-full border-0"
                            src="https://maps.google.com/maps?q=MAK%20Auditorium,%20Moonniyur,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MAK Auditorium Map Location"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
