import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary/95 text-secondary/60 py-10 md:py-20 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-4">
                    <Link href="/" className="text-3xl font-serif text-accent tracking-wider block">
                        MAK
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Premium convention center and marriage hall designed for unforgettable, elegant experiences.
                    </p>
                </div>

                <div>
                    <h4 className="text-secondary font-medium tracking-widest uppercase text-sm mb-6">Contact</h4>
                    <address className="not-italic text-sm space-y-3">
                        <p>123 Luxury Avenue</p>
                        <p>Metropolis, NY 10001</p>
                        <p>
                            <a href="mailto:info@makauditorium.com" className="hover:text-accent transition-colors">
                                info@makauditorium.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                                +1 (234) 567-890
                            </a>
                        </p>
                    </address>
                </div>

                <div>
                    <h4 className="text-secondary font-medium tracking-widest uppercase text-sm mb-6">Links</h4>
                    <ul className="text-sm space-y-3 flex flex-col">
                        <li>
                            <Link href="#venue" className="hover:text-accent transition-colors">
                                Venue
                            </Link>
                        </li>
                        <li>
                            <Link href="#gallery" className="hover:text-accent transition-colors">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="#terms" className="hover:text-accent transition-colors">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-secondary font-medium tracking-widest uppercase text-sm mb-6">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-accent transition-colors underline underline-offset-4">Instagram</a>
                        <a href="#" className="hover:text-accent transition-colors underline underline-offset-4">Facebook</a>
                        <a href="#" className="hover:text-accent transition-colors underline underline-offset-4">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-xs text-center text-secondary/40">
                &copy; {new Date().getFullYear()} MAK Auditorium. All rights reserved.
            </div>
        </footer>
    );
}
