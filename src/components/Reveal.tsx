import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <motion.header
      className="section-head"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.header>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  amount = 0.15,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}