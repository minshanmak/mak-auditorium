"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Loader2, KeyRound } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password })
            });

            if (res.ok) {
                // Instantly teleport authenticated user directly into the dashboard!
                window.location.href = "/admin";
            } else {
                setError(true);
                setIsLoading(false);
            }
        } catch (err) {
            setError(true);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
            {/* Dark background texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                    src="/images/hall-stage.png"
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Brand Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif text-secondary tracking-widest uppercase">
                        MAK <span className="font-light">Admin</span>
                    </h1>
                    <div className="flex justify-center mt-6">
                        <div className="w-16 h-16 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                            <Lock className="text-accent w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Secure Form */}
                <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl border border-secondary/10 p-8 rounded-xl shadow-2xl relative">
                    <h2 className="text-xl text-secondary font-medium mb-1 truncate text-center">Dashboard Access</h2>
                    <p className="text-secondary/50 text-sm text-center mb-8">Enter your master password to continue</p>

                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <KeyRound className="h-4 w-4 text-secondary/40" />
                        </div>
                        <input
                            type="password"
                            placeholder="Master Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-primary/50 text-secondary border border-secondary/20 rounded-lg block w-full pl-11 pr-4 pt-3 pb-3 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all placeholder:text-secondary/30"
                        />
                        {error && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-2 absolute -bottom-6 left-0">
                                Incorrect password. Please try again.
                            </motion.p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-accent hover:bg-white text-primary font-medium py-3 rounded-lg transition-all flex items-center justify-center group mt-4 relative overflow-hidden"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <span className="mr-2">Authorize Protocol</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-xs text-secondary/30 mt-8">
                    Secure Socket • Encrypted Session
                </p>
            </motion.div>
        </div>
    );
}
