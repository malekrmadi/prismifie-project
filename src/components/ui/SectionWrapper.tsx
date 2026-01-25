import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function SectionWrapper({ children, className, id, delay = 0.2 }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("section-wrapper", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="section-container"
            >
                {children}
            </motion.div>
        </section>
    );
}
