"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";


const slides = ["./hero-field.jpg", "./polytunnel.jpg", "./allcert.png", "./mushrooms.jpg", "./seedling.jpg"];

const usp = [
  { k: "40+", v: "Years of agri-trade legacy" },
  { k: "DAESI", v: "Govt. certified dealer" },
  { k: "10+", v: "Service verticals" },
  { k: "₹30k", v: "Potential monthly income*" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={i}
            src={slides[i]}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/10 px-4 py-2 backdrop-blur"
        >
          <BadgeCheck className="h-4 w-4 text-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background">
            Govt. Certified DAESI Dealer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none tracking-tight text-background md:text-7xl lg:text-[88px]"
        >
          From Farming<br />to <span className="text-gradient-gold italic">Earning.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="font-bengali mt-5 text-2xl font-semibold text-accent md:text-3xl"
        >
          অনেক সমস্যার এক সমাধান — কৃষি কল্যাণ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-background/85"
        >
          A farmer-centric agri-enterprise delivering complete agricultural solutions — inputs, training, consultancy and income-based farming models across Bengal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#investment" className="group inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-bold text-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Explore Opportunities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="tel:+917980334730" className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/20">
            <Phone className="h-4 w-4" /> Talk to Our Team
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/10 backdrop-blur md:grid-cols-4"
        >
          {usp.map((s) => (
            <div key={s.k} className="bg-foreground/40 p-5 backdrop-blur">
              <div className="font-display text-3xl font-bold text-accent">{s.k}</div>
              <div className="mt-1 text-xs text-background/75 leading-snug">{s.v}</div>
            </div>
          ))}
        </motion.div>

        {/* slider indicators */}
        <div className="mt-10 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-5 bg-background/40 hover:bg-background/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
