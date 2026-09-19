"use client";

import Link from "next/link";
import { LayoutDashboard, Settings, LogOut, FileText, Mail } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-secondary flex w-full">
            {/* Sidebar - Desktop */}
            <aside className="w-64 bg-primary text-secondary hidden md:flex flex-col">
                <div className="h-24 flex items-center px-8 border-b border-white/5">
                    <Link href="/" className="text-2xl font-serif text-accent tracking-wider">
                        MAK <span className="block text-xs font-sans tracking-widest text-secondary/50 mt-1">Admin Panel</span>
                    </Link>
                </div>

                <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
                    <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Main</div>
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-accent rounded-sm transition-colors border-l-2 border-accent">
                        <LayoutDashboard size={18} />
                        <span className="font-medium tracking-wide">Dashboard</span>
                    </Link>
                    <Link href="/admin/enquiries" className="flex items-center gap-3 px-4 py-3 text-secondary/70 hover:bg-white/5 hover:text-secondary rounded-sm transition-colors border-l-2 border-transparent hover:border-white/20">
                        <Mail size={18} />
                        <span className="font-medium tracking-wide">Enquiries</span>
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 text-secondary/70 hover:bg-white/5 hover:text-secondary rounded-sm transition-colors border-l-2 border-transparent hover:border-white/20">
                        <FileText size={18} />
                        <span className="font-medium tracking-wide">Bookings</span>
                    </Link>

                    <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/30 mb-2 mt-6">Config</div>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-secondary/70 hover:bg-white/5 hover:text-secondary rounded-sm transition-colors border-l-2 border-transparent hover:border-white/20">
                        <Settings size={18} />
                        <span className="font-medium tracking-wide">Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-secondary/70 hover:bg-white/5 hover:text-red-400 rounded-sm transition-colors group">
                        <LogOut size={18} className="group-hover:text-red-400" />
                        <span className="font-medium tracking-wide">Secure Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Mobile Header Top-Bar */}
                <div className="md:hidden h-16 bg-primary flex items-center justify-between px-6 shrink-0 z-20 shadow-md">
                    <span className="text-xl font-serif text-accent tracking-wider">MAK <span className="font-sans text-xs text-white/50">Admin</span></span>
                    <button className="text-secondary/70"><LayoutDashboard size={20} /></button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-[#F7F7F6] p-6 md:p-10 w-full overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
