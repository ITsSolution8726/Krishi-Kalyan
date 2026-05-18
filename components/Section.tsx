import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionEyebrow({ en, bn }: { en: string; bn?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-clay" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {en}
      </span>
      {bn && <span className="font-bengali text-xs text-clay">{bn}</span>}
    </div>
  );
}

type Direction = "up" | "down" | "left" | "right" | "none";

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  direction = "up",
  distance = 60,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
}) {
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  if (direction === "left") initial.x = -distance;
  else if (direction === "right") initial.x = distance;
  else if (direction === "down") initial.y = -y;
  else if (direction === "up") initial.y = y;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
