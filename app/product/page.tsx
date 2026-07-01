"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star, Truck, ShieldCheck, Award, Leaf, Sprout, Wheat, Apple, Carrot,
  Coins, Flower2, Home, Check, X, Phone, Mail, ChevronDown, ShoppingCart,
  Droplets, Heart, FlaskConical, Scale, Feather, Activity,
} from "lucide-react";
// import heroField from "@/assets/hero-field.jpg";
// import mushrooms from "@/assets/mushrooms.jpg";
// import farmerImg from "@/assets/farmer.jpg";
// import training from "@/assets/training.jpg";
// import seedling from "@/assets/seedling.jpg";

// ------------------------------ DATA ------------------------------

const stats = [
  { icon: Star, k: "4.7/5", v: "Verified Rating" },
  { icon: Heart, k: "50,000+", v: "Trusting Farmers" },
  { icon: Truck, k: "Free", v: "Delivery in Bengal" },
  { icon: Award, k: "Since 1985", v: "40 Years of Trust" },
];

const crops = [
  { icon: Wheat, en: "Grains", bn: "শস্য", list: "Rice, Wheat, Maize, Bajra, Jowar" },
  { icon: Apple, en: "Fruits", bn: "ফল", list: "Mango, Banana, Guava, Litchi, Papaya" },
  { icon: Carrot, en: "Vegetables", bn: "সবজি", list: "Potato, Tomato, Brinjal, Okra, Leafy greens" },
  { icon: Coins, en: "Cash Crops", bn: "অর্থকরী ফসল", list: "Jute, Cotton, Sugarcane, Groundnut" },
  { icon: Sprout, en: "Pulses", bn: "ডাল", list: "Chickpea, Lentils, Pigeon pea, Green gram" },
  { icon: Home, en: "Home Gardens", bn: "বাড়ির বাগান", list: "Pots, terrace gardens, kitchen gardens" },
];

const comparison = [
  ["Yield", "Short-term boost", "2× sustained increase"],
  ["Bags per acre", "5 bags", "2 bags (60% less)"],
  ["Cost per acre", "₹18,000–₹25,000", "₹5,500–₹8,000"],
  ["Pest spray cycle", "Every 10 days", "Once a month"],
  ["Soil health", "Degrades over time", "Improves permanently"],
  ["Water needs", "High", "20–30% lower"],
  ["Next season", "Need more chemicals", "Need even less input"],
  ["Reusable land", "No", "Yes, forever"],
];

const npk = [
  { icon: Leaf, color: "text-primary", title: "High Organic Carbon", desc: "Soil becomes rich, holds water better, feeds beneficial microbes." },
  { icon: Activity, color: "text-clay", title: "Nitrogen 1.5%", desc: "Bigger, greener leaves and strong vegetative growth." },
  { icon: Flower2, color: "text-clay", title: "Phosphorus 2.5%", desc: "Stronger roots, more flowers and better fruit setting." },
  { icon: ShieldCheck, color: "text-primary", title: "Potassium 2.5%", desc: "Disease resistance, drought tolerance, premium produce." },
  { icon: Scale, color: "text-primary", title: "Neutral pH", desc: "Works in acidic, neutral or alkaline soil — no adjustments." },
  { icon: Feather, color: "text-clay", title: "Light Weight", desc: "Easy to carry, spread and apply across the field." },
];

const timeline = [
  { week: "Week 1–2", title: "Leaves look fresher and greener", quote: "Within a week the leaves looked alive again.", who: "Radha B., Hooghly" },
  { week: "Week 3–4", title: "Stronger stems, visible new shoots", quote: "Two doses in three weeks — best growth I've seen.", who: "Samar S., Singur" },
  { week: "Month 1", title: "More flowers, better fruit set, fewer pests", quote: "Marigolds and chillies came in fuller and stronger.", who: "Karthik P., Burdwan" },
  { week: "Month 2–3", title: "Soil softens, water holds better", quote: "My soil became soft and healthy. Crops grew better.", who: "Raghu R., Nadia" },
  { week: "Harvest", title: "30–50% higher yield, premium quality", quote: "Yield went from 2 tonnes to nearly 5 tonnes per acre.", who: "Commercial Grower" },
  { week: "Next Season", title: "Healthier soil — need even less input", quote: "After six months the plants and trees are lush.", who: "Lathika G., Murshidabad" },
];

const safetyGroups = [
  { icon: Apple, title: "Safe for Food Crops", points: ["No chemical residue on produce", "Export-quality certification ready", "Safe to eat immediately after harvest", "Compliant with organic standards"] },
  { icon: Sprout, title: "Safe for Soil", points: ["Improves soil microbiome naturally", "No salinity or toxicity buildup", "Never burns the root zone", "Reusable land — gets better every season"] },
  { icon: Droplets, title: "Safe for Water", points: ["Doesn't contaminate groundwater", "Zero chemical runoff into rivers", "Improves water retention in soil", "Reduces water waste"] },
  { icon: Heart, title: "Safe for Your Family", points: ["No skin irritation — touch without gloves", "Safe if children or pets touch", "No harmful fumes or odour", "Won't trigger allergies"] },
];

const tiers = [
  {
    tag: "Popular Choice", size: "5 kg", price: "₹899", strike: "₹1,350", save: "Save 33%",
    best: "25–30 plants, home & terrace gardens", lasts: "Lasts 2–3 months", featured: false,
  },
  {
    tag: "Best Value", size: "10 kg", price: "₹1,199", strike: "₹2,500", save: "Save 52%",
    best: "Large garden, small farm (0.25–0.5 acre)", lasts: "Lasts a full season", featured: true,
  },
  {
    tag: "Farmer's Choice", size: "25 kg", price: "₹2,599", strike: "₹6,200", save: "Save 58%",
    best: "1 acre field, commercial farming", lasts: "Full crop cycle coverage", featured: false,
  },
];

const faqs = [
  { q: "Is it really better than DAP or Urea?", a: "Yes. Farmers consistently report ~2× yield with only 2 bags instead of 5 — and with zero soil damage. DAP and urea give a short-term boost but kill beneficial microbes. Krishi Mitra heals the soil permanently and the results compound every season." },
  { q: "Will it work for my specific crop?", a: "It works for every soil-grown crop — paddy, jute, vegetables, fruits, flowers, pulses, cotton and sugarcane. If it grows in soil, this works." },
  { q: "How much do I actually need?", a: "Field crops: 25–50 kg per acre (at most 2 bags). Home gardens: 50–100 g per pot. Most farmers replace 5 bags of chemical fertiliser with 2 bags of Krishi Mitra." },
  { q: "When will I see results?", a: "Days 7–15: greener, fresher leaves. Weeks 3–4: stronger growth and more flowers. Harvest: 30–50% higher yield in most fields." },
  { q: "Is it safe for vegetables I'll eat?", a: "100% safe. Zero chemical residue. You can harvest and eat the same day. Safe for children and pets — perfect for export-grade organic produce." },
  { q: "What if my soil is badly damaged by chemicals?", a: "It is ideal for restoration. One farmer reported soil going from dry and cracked to soft and healthy in a single season — driven by high organic carbon and the live microbe culture." },
  { q: "Why should I trust Krishi Kalyan Group?", a: "We're a DAESI-certified agri-enterprise serving Bengal for 40 years, with lab-tested batches, thousands of verified reviews and a dealer network across the state." },
];

// ------------------------------ UI HELPERS ------------------------------

function CtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#pricing"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-bold uppercase tracking-wide text-gold-foreground shadow-glow transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <ShoppingCart className="h-5 w-5" /> {children}
    </a>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ------------------------------ PAGE ------------------------------

export default function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-background text-foreground">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[oklch(0.28_0.06_210)] text-[oklch(0.985_0.012_95)]">
        {/* Before / After split */}
        <div className="mx-auto grid max-w-6xl gap-1 px-3 pt-8 md:grid-cols-2 md:px-6 md:pt-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-l-2xl">
            <img src={"./seedling.jpg"} alt="Tired soil before" className="h-full w-full object-cover grayscale-[40%]" />
            <span className="absolute left-3 top-3 rounded-full bg-clay px-3 py-1 text-xs font-bold uppercase text-clay-foreground">Before</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-r-2xl">
            <img src={"./hero-field.jpg"} alt="Lush field after" className="h-full w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-gold-foreground">After</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-5 py-12 text-center md:py-16">
          <FadeUp>
            <h1 className="font-display text-4xl font-black leading-[1.05] md:text-6xl">
              50,000 Farmers Can't Be Wrong — See the Results
            </h1>
            <p className="font-bengali mt-4 text-xl text-gold md:text-2xl">
              ৫০,০০০ চাষি ভুল হতে পারে না — ফলাফলেই প্রমাণ
            </p>
            <p className="mt-6 text-base text-white/80 md:text-lg">
              Get more yield at <span className="font-bold text-gold">60% less cost.</span>{" "}
              They tried, they tested, they recommend. That's the Krishi Mitra difference.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-md gap-6 sm:max-w-2xl sm:grid-cols-[1fr_auto] sm:items-center">
              <img
                src={"./mushrooms.jpg"}
                alt="Krishi Mitra organic bio-fertilizer pack"
                className="mx-auto h-64 w-full max-w-xs rounded-2xl object-cover shadow-glow ring-4 ring-gold/40 sm:h-72"
              />
              <div className="text-left sm:pl-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase text-gold-foreground">
                  <Award className="h-3.5 w-3.5" /> 100% Money-Back Guarantee
                </div>
                <p className="mt-3 font-display text-2xl font-bold leading-tight text-gold">
                  If you don't see the results, get your money back!
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-white/85">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> ISO-grade manufacturing</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Lab-tested every batch</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Free home delivery</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> COD available</li>
                </ul>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <s.icon className="mx-auto h-5 w-5 text-gold" />
                  <div className="mt-2 font-display text-xl font-bold text-white">{s.k}</div>
                  <div className="text-xs text-white/70">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-white">4.7/5 from verified farmers</span>
            </div>

            <div className="mt-8"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
          </FadeUp>
        </div>

        {/* Farmer crowd banner */}
        <div className="mx-auto max-w-6xl px-3 pb-10 md:px-6">
          <img src={"./training.jpg"} alt="Thousands of farmers trust Krishi Mitra" className="h-48 w-full rounded-2xl object-cover md:h-72" />
        </div>
      </section>

      {/* ---------- CROPS ---------- */}
      <section className="bg-[oklch(0.22_0.05_150)] py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Works for Every Crop You Grow</h2>
            <p className="mt-3 text-center text-white/70">From small kitchen gardens to large commercial farms across India.</p>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((c, i) => (
              <FadeUp key={c.en} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-gold/40 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-lg font-bold">{c.en}</div>
                      <div className="font-bengali text-sm text-gold/90">{c.bn}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{c.list}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-10 text-center"><CtaButton>Order Now — Free Delivery</CtaButton></div>
        </div>
      </section>

      {/* ---------- COMPARISON ---------- */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Chemicals vs Krishi Mitra — The Real Numbers</h2>
            <p className="mt-3 text-center italic text-muted-foreground">
              From 2 tonnes to 5 tonnes per acre. Only 2 bags instead of 5. Pesticide use down 70%.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="px-4 py-3 text-sm font-bold uppercase tracking-wide">What Matters</div>
                <div className="border-l border-white/10 px-4 py-3 text-sm font-bold uppercase">Chemical Fertilisers</div>
                <div className="border-l border-white/10 px-4 py-3 text-sm font-bold uppercase">Krishi Mitra</div>
              </div>
              {comparison.map(([label, bad, good], i) => (
                <div key={label} className={`grid grid-cols-3 text-sm md:text-base ${i % 2 ? "bg-cream" : "bg-card"}`}>
                  <div className="px-4 py-3 font-semibold text-foreground">{label}</div>
                  <div className="flex items-center gap-2 border-l border-border px-4 py-3 text-muted-foreground">
                    <X className="h-4 w-4 shrink-0 text-destructive" /> <span className="min-w-0">{bad}</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-border px-4 py-3 font-medium text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> <span className="min-w-0">{good}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <div className="mt-10 text-center"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
        </div>
      </section>

      {/* ---------- NPK BREAKDOWN ---------- */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <div className="text-center">
              <span className="font-bengali text-sm font-semibold text-clay">১০০% জৈব এনপিকে</span>
              <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
                100% Organic NPK Bio-Fertilizer with Microorganisms
              </h2>
              <p className="mt-3 italic text-muted-foreground">What this actually means for your field.</p>
            </div>
          </FadeUp>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <FadeUp>
              <div className="relative">
                <img src={"./mushrooms.jpg"} alt="Krishi Mitra product" className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
                <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 place-items-center rounded-full bg-gold text-center font-display text-sm font-black leading-tight text-gold-foreground shadow-glow sm:grid">
                  Lab<br />Tested
                </div>
              </div>
            </FadeUp>
            <div className="grid gap-4 sm:grid-cols-2">
              {npk.map((n, i) => (
                <FadeUp key={n.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <n.icon className={`h-6 w-6 ${n.color}`} />
                    <div className="mt-2 font-display text-base font-bold">{n.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
        </div>
      </section>

      {/* ---------- REAL MATH ---------- */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Real Math from Real Farmers</h2>
            <p className="mt-4 text-center text-lg italic text-muted-foreground">
              "We now harvest 4–5 tonnes daily instead of 2. Same land. Only 2 bags instead of 5."
              <span className="mt-1 block text-sm font-semibold not-italic text-clay">— Ajay, commercial grower</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-destructive/30 bg-card p-6 shadow-soft">
                <div className="font-display text-lg font-bold text-destructive">Your Current Cost / Acre</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ["DAP: 3 bags @ ₹1,350", "₹4,050"],
                    ["Urea: 2 bags @ ₹266", "₹532"],
                    ["NPK: 1 bag @ ₹1,200", "₹1,200"],
                    ["Pesticides (frequent)", "₹3,000–5,000"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-3 border-b border-border/60 pb-2 last:border-0">
                      <span className="text-muted-foreground">{k}</span><span className="font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-center font-display text-lg font-bold text-destructive">
                  Total: ₹8,782 – ₹10,782
                </div>
              </div>
              <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-glow">
                <div className="font-display text-lg font-bold text-primary">With Krishi Mitra / Acre</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ["Krishi Mitra: 2 bags (50 kg)", "₹5,000"],
                    ["No separate DAP or Urea", "—"],
                    ["No separate NPK", "—"],
                    ["Pesticides (much less)", "₹1,000–2,000"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-3 border-b border-border/60 pb-2 last:border-0">
                      <span className="text-muted-foreground">{k}</span><span className="font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-primary/10 p-3 text-center font-display text-lg font-bold text-primary">
                  Total: ~₹7,000
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-8 rounded-2xl bg-primary p-6 text-center text-primary-foreground shadow-soft">
              <div className="font-display text-2xl font-black md:text-3xl">
                Direct Savings: ₹1,500 – ₹3,500 per acre, per season
              </div>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Lower input cost + double output + better price = triple profit increase.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Double yield", "Double the income from the same land."],
                ["Export-grade produce", "20–30% higher market price."],
                ["Less crop failure", "No losses from damaged produce."],
                ["Healthier next season", "Even less fertiliser & pesticide needed."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3 rounded-xl bg-card p-4 shadow-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="mt-10 text-center"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
        </div>
      </section>

      {/* ---------- SAFETY ---------- */}
      <section
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `linear-gradient(oklch(0.22 0.05 150 / 0.85), oklch(0.22 0.05 150 / 0.92)), url(${"./hero-field.jpg"})` }}
      >
        <div className="mx-auto max-w-6xl px-5 text-white">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">
              100% Certified Organic. Zero Chemicals. Zero Risk.
            </h2>
            <p className="mt-3 text-center text-white/75">How do you know it's safe? Here's the short answer.</p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {["ISO-grade manufacturing", "Organic-farming compliant", "Export quality approved", "DAESI-certified network"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" /> {b}
                </span>
              ))}
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {safetyGroups.map((g, i) => (
              <FadeUp key={g.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <g.icon className="h-7 w-7 text-gold" />
                  <div className="mt-3 font-display text-lg font-bold">{g.title}</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                    {g.points.map((p) => (
                      <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{p}</li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">
              The Krishi Mitra Timeline — What to Expect
            </h2>
            <p className="mt-3 text-center text-muted-foreground">From the first dose to your next season.</p>
          </FadeUp>

          <div className="relative mt-12">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
            <div className="space-y-6 md:space-y-10">
              {timeline.map((t, i) => (
                <FadeUp key={t.week} delay={i * 0.04}>
                  <div className={`relative grid gap-4 md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`md:${i % 2 ? "pl-8 text-left" : "pr-8 text-right"}`}>
                      <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        {t.week}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold">{t.title}</h3>
                    </div>
                    <div className={`md:${i % 2 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                        <p className="text-sm italic text-foreground">"{t.quote}"</p>
                        <div className="mt-2 flex items-center gap-1 text-gold">
                          {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-current" />)}
                          <span className="ml-2 text-xs font-semibold text-muted-foreground">{t.who}</span>
                        </div>
                      </div>
                    </div>
                    <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background md:left-1/2" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Real Farmers. Real Results.</h2>
          </FadeUp>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { name: "Verified Commercial Farmer", text: "Earlier I used 5 fertiliser bags per acre. Now with Krishi Mitra, only 2 bags — and yield more than doubled. We harvest 4–5 tonnes daily from the same land." },
              { name: "Samar Suresh, Singur", text: "After using Krishi Mitra for six months, the plants and trees are lush and noticeably healthier — and the soil feels alive again." },
              { name: "R. Rajagopal, Burdwan", text: "Remarkable improvement in flowering plants — they started yielding far more flowers within a few weeks." },
            ].map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.05}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-1 text-gold">
                    {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm text-foreground/85">"{t.text}"</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <img src={"./farmer.jpg"} alt="" className="h-10 w-10 rounded-full object-cover" />
                    <span className="text-sm font-semibold">{t.name}</span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section id="pricing" className="scroll-mt-24 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Select Based on Your Need</h2>
            <p className="mt-3 text-center text-muted-foreground">Free home delivery across Bengal. COD available.</p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <FadeUp key={t.size} delay={i * 0.05}>
                <div className={`relative flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1 ${t.featured ? "border-primary ring-2 ring-primary/40" : "border-border"}`}>
                  {t.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-foreground shadow-glow">
                      Most Popular
                    </span>
                  )}
                  <div className="text-sm font-bold uppercase tracking-wider text-clay">{t.tag}</div>
                  <div className="mt-1 font-display text-3xl font-black">{t.size}</div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-black text-primary">{t.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{t.strike}</span>
                  </div>
                  <div className="mt-1 inline-block w-fit rounded-md bg-gold/20 px-2 py-0.5 text-xs font-bold text-clay">{t.save}</div>

                  <div className="my-5 h-px bg-border" />
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Best for</div>
                  <p className="mt-1 text-sm">{t.best}</p>

                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {["Free home delivery", "Extra 10% off prepaid", "COD available", t.lasts].map((p) => (
                      <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${t.featured ? "bg-gold text-gold-foreground shadow-glow" : "bg-primary text-primary-foreground shadow-soft"}`}
                  >
                    <ShoppingCart className="h-4 w-4" /> Buy Now
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-border bg-secondary p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <div className="font-display text-lg font-bold">Need bulk pricing?</div>
                <div className="text-sm text-muted-foreground">For orders above 100 kg, talk to our team.</div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-end">
                <a href="tel:+917980334730" className="inline-flex items-center gap-2 font-semibold text-primary"><Phone className="h-4 w-4" /> +91 79803 34730</a>
                <a href="mailto:sales@krishikalyan.in" className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Mail className="h-4 w-4" /> sales@krishikalyan.in</a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">Your Questions, Answered</h2>
          </FadeUp>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <FadeUp key={f.q} delay={i * 0.03}>
                  <div className={`overflow-hidden rounded-2xl border bg-card shadow-soft transition-colors ${open ? "border-primary" : "border-border"}`}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-display text-base font-bold md:text-lg">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
          <div className="mt-10 text-center"><CtaButton>Order Now — Up to 60% Off</CtaButton></div>
        </div>
      </section>

      {/* ---------- TRUST / CONTACT ---------- */}
      <section id="contact" className="scroll-mt-24 bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          <FadeUp>
            <div className="font-bengali text-sm text-gold">আমাদের সম্পর্কে</div>
            <h3 className="mt-1 font-display text-2xl font-black">Trusted Quality. Since 1985.</h3>
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/85">
              {["40 years in agri-trade", "DAESI-certified dealership", "Lab-tested every batch", "Lakhs of bags delivered", "4.7/5 verified rating", "Pan-Bengal delivery"].map((x) => (
                <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{x}</li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="font-bengali text-sm text-gold">আমরা কারা</div>
            <h3 className="mt-1 font-display text-2xl font-black">Who We Are</h3>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/85">
              Krishi Kalyan Group is a DAESI-certified agri-enterprise based in Singur, Hooghly.
              For 40 years we have supported Bengal's farmers with quality inputs, scientific
              training and modern farming projects — from mushroom cultivation to organic
              bio-fertilisers like Krishi Mitra.
            </p>
            <h3 className="mt-6 font-display text-xl font-black">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
              Close the gap in Indian agriculture with honest, high-quality organic products that
              raise farmer income while healing the soil. No shortcuts, no false promises — just
              results you can see in the field.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="font-bengali text-sm text-gold">যোগাযোগ</div>
            <h3 className="mt-1 font-display text-2xl font-black">Contact Us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> sales@krishikalyan.in</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> +91 79803 34730</li>
              <li className="flex items-center gap-3"><FlaskConical className="h-4 w-4 text-gold" /> Mon – Sat, 9 AM – 6 PM</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.07] p-5">
              <div className="font-display text-lg font-bold">Join 50,000+ farmers today.</div>
              <p className="mt-1 text-sm text-primary-foreground/80">Limited stock. Free delivery. COD accepted.</p>
              <CtaButton className="mt-4 w-full">Order Now — Up to 60% Off</CtaButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
