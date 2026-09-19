"use client";

import { motion } from "framer-motion";
import { Check, Wind, Car, Coffee, Shield, Wifi } from "lucide-react";

const facilities = [
    { name: "Centralized A/C", icon: Wind, description: "Climate-controlled environments for maximum comfort." },
    { name: "Ample Parking", icon: Car, description: "Spacious and secure parking area for 500+ vehicles." },
    { name: "Premium Catering", icon: Coffee, description: "Extensive culinary options with dedicated dining spaces." },
    { name: "24/7 Security", icon: Shield, description: "Comprehensive security personnel and CCTV surveillance." },
    { name: "High-Speed Wi-Fi", icon: Wifi, description: "Reliable connectivity throughout the premises." },
    { name: "100% Power Backup", icon: Check, description: "Uninterrupted celebrations with full generator support." },
];

export function Facilities() {
    return (
        <section id="facilities" className="py-16 md:py-36 bg-primary text-secondary">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        World-Class <span className="italic text-accent">Amenities</span>
                    </h2>
                    <div className="w-16 h-px bg-accent/50 mx-auto mb-6" />
                    <p className="text-secondary/70 text-lg">
                        Every detail is considered to ensure your event runs flawlessly, providing unparalleled convenience for you and your guests.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
                    {facilities.map((fac, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-4 md:p-8 border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-colors group"
                        >
                            <fac.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-base md:text-xl font-serif mb-2 md:mb-3 tracking-wide">{fac.name}</h3>
                            <p className="text-secondary/60 text-xs md:text-sm leading-relaxed">{fac.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
