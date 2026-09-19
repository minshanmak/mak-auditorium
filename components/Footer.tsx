import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary/95 text-secondary/60 py-10 md:py-20 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                <div className="space-y-4 md:col-span-1">
                    <Link href="/" className="text-3xl font-serif text-accent tracking-wider block">
                        MAK
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Premium convention center and marriage hall designed for unforgettable, elegant experiences.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-accent font-serif text-xl tracking-wide">Quick Links</h4>
                    <ul className="text-secondary/90 space-y-4">
                        <li>
                            <Link href="#about" className="hover:text-accent transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#facilities" className="hover:text-accent transition-colors">
                                Our Facilities
                            </Link>
                        </li>
                        <li>
                            <Link href="#gallery" className="hover:text-accent transition-colors">
                                Photo Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="#booking" className="hover:text-accent transition-colors">
                                Book Enquiry
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-accent transition-colors">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-accent font-serif text-xl tracking-wide">Contact Information</h4>
                    <ul className="text-secondary/90 space-y-5">
                        <li className="flex items-center gap-4">
                            <MapPin className="text-accent w-5 h-5 shrink-0" />
                            <span>Moonniyur, Kerala 676311</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone className="text-accent w-5 h-5 shrink-0" />
                            <a href="tel:+919846158750" className="hover:text-accent transition-colors">
                                +91 9846158750
                            </a>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail className="text-accent w-5 h-5 shrink-0" />
                            <a href="mailto:makauditorium@gmail.com" className="hover:text-accent transition-colors">
                                makauditorium@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-4">
                            <Instagram className="text-accent w-5 h-5 shrink-0" />
                            <a href="https://instagram.com/mak_auditorium" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                                @mak_auditorium
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 text-xs text-center text-secondary/40">
                &copy; {new Date().getFullYear()} MAK Auditorium. All rights reserved.
            </div>
        </footer>
    );
}
