"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-accent text-primary hover:bg-opacity-90",
            secondary: "bg-secondary text-primary hover:bg-opacity-90",
            outline: "border border-accent text-accent hover:bg-accent hover:text-primary",
            ghost: "text-secondary hover:bg-white/10 hover:text-white",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...(props as any)}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
