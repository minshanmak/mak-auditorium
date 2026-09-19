import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

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
                            <a href="#about" className="hover:text-accent transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#facilities" className="hover:text-accent transition-colors">
                                Our Facilities
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className="hover:text-accent transition-colors">
                                Photo Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-accent transition-colors">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-accent font-serif text-xl tracking-wide">Contact Information</h4>
                    <ul className="text-secondary/90 space-y-5">
                        <li className="flex items-center gap-4">
                            <MapPin className="text-accent w-5 h-5 shrink-0" />
                            <span>Kalathingalpara, Kunnathparamb, Moonniyur, Kerala 676311</span>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent w-5 h-5 shrink-0">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <a href="https://instagram.com/mak_auditorium" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                                @mak_auditorium
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-secondary/60">
                <p>&copy; {new Date().getFullYear()} MAK Auditorium. All rights reserved.</p>
                <p>
                    Developed By <a href="https://mishga.vercel.app/" target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4 transition-all">MishGa</a>
                </p>
            </div>
        </footer>
    );
}
