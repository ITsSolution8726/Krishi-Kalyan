import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionEyebrow({ en, bn }: { en: string; bn?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-clay" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{en}</span>
      {bn && <span className="font-bengali text-xs text-clay">{bn}</span>}
    </div>
  );
}

export function FadeIn({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrowEn, eyebrowBn, title, bnTitle, description }: {
  eyebrowEn: string; eyebrowBn?: string; title: string; bnTitle?: string; description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40 bg-grain">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <FadeIn>
          <SectionEyebrow en={eyebrowEn} bn={eyebrowBn} />
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          {bnTitle && (
            <p className="font-bengali mt-3 text-2xl font-semibold text-clay md:text-3xl">{bnTitle}</p>
          )}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
