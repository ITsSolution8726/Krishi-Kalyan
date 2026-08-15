"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star, ShieldCheck, Award, Check, X, Phone, Mail, ChevronDown, ShoppingCart, CheckCircle2, MapPin,
} from "lucide-react";
import Image from "next/image";
import { stats, crops, comparison, npk, timeline, safetyGroups, tiers, faqs, } from '@/data/product';

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
  const [selectedTier, setSelectedTier] = useState<(typeof tiers)[number] | null>(null);

  const [orderForm, setOrderForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
  });

  const [orderErrors, setOrderErrors] = useState({
    name: "",
    whatsapp: "",
    address: "",
  });

  const handleBuyNow = (tier: (typeof tiers)[number]) => {
    setSelectedTier(tier);

    // Reset form whenever a new pack is selected
    setOrderForm({
      name: "",
      whatsapp: "",
      address: "",
    });

    setOrderErrors({
      name: "",
      whatsapp: "",
      address: "",
    });
  };

  const validateOrderForm = () => {
    const errors = {
      name: "",
      whatsapp: "",
      address: "",
    };

    // Name validation
    const name = orderForm.name.trim();

    if (!name) {
      errors.name = "Please enter your name.";
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s.'-]+$/.test(name)) {
      errors.name = "Please enter a valid name.";
    }

    // WhatsApp number validation
    const whatsapp = orderForm.whatsapp.replace(/\D/g, "");

    if (!whatsapp) {
      errors.whatsapp = "Please enter your WhatsApp number.";
    } else if (whatsapp.length !== 10) {
      errors.whatsapp = "WhatsApp number must be exactly 10 digits.";
    } else if (!/^[6-9]\d{9}$/.test(whatsapp)) {
      errors.whatsapp = "Please enter a valid Indian mobile number.";
    }

    // Address validation
    if (!orderForm.address.trim()) {
      errors.address = "Please enter your delivery address.";
    } else if (orderForm.address.trim().length < 10) {
      errors.address = "Please enter a complete delivery address.";
    }

    setOrderErrors(errors);

    return !Object.values(errors).some(Boolean);
  };

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedTier) return;

    const isValid = validateOrderForm();

    if (!isValid) return;

    const companyWhatsapp = "917980334730";

    const message = `
Hello Krishi Kalyan,

I would like to place an order for Krishi Mitra.

*Selected Pack*
Pack: ${selectedTier.size}
Price: ${selectedTier.price}
${selectedTier.tag ? `Type: ${selectedTier.tag}` : ""}

*Customer Details*
Name: ${orderForm.name.trim()}
WhatsApp Number: ${orderForm.whatsapp}
Address: ${orderForm.address.trim()}

Please confirm my order and delivery details.

Thank you.
`.trim();

    const whatsappUrl = `https://wa.me/${companyWhatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="bg-background text-foreground">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[oklch(0.28_0.06_210)] text-[oklch(0.985_0.012_95)]">
        {/* Before / After split */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-3 pt-8 md:px-6 md:pt-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-l-2xl">
            <img src={"./before.png"} alt="Tired soil before" className="h-full w-full object-cover grayscale-[40%]" />
            <span className="absolute left-3 top-3 rounded-full bg-clay px-3 py-1 text-xs font-bold uppercase text-clay-foreground">Before</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-r-2xl">
            <img src={"./after.png"} alt="Lush field after" className="h-full w-full object-cover" />
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
          <FadeUp delay={0.08}>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="./Hero-Product.png"
                alt="Krishi Mitra Organic Bio Fertilizer"
                className="w-full object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mx-auto mt-12 max-w-6xl">

              {/* Section Header */}
              <div className="mb-10 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-black uppercase text-gold-foreground">
                  <Award className="h-4 w-4" />
                  100% Money-Back Guarantee
                </div>

                <h3 className="mt-5 w-full text-center font-display text-3xl font-bold leading-tight text-gold md:text-4xl max-w-5xl">
                  If you don't see the results, get your money back!
                </h3>
              </div>

              {/* Two Column Layout */}
              <div className="grid items-center gap-4 lg:grid-cols-2">

                {/* Left - Image */}
                <div className="flex justify-center">
                  <img
                    src="./money_back.png"
                    alt="Krishi Mitra organic bio-fertilizer pack"
                    className="h-auto w-full max-w-md rounded-2xl object-contain shadow-glow ring-4 ring-gold/40"
                  />
                </div>

                {/* Right - Features */}
                <div>
                  <ul className="space-y-4 text-base text-white/85 text-xl">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-gold" />
                      ISO-grade manufacturing
                    </li>

                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-gold" />
                      Lab-tested every batch
                    </li>

                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-gold" />
                      Free home delivery
                    </li>

                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-gold" />
                      Cash on Delivery (COD) available
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <s.icon className="mx-auto h-5 w-5 text-gold" />
                  <div className="mt-2 font-display text-2xl font-bold text-white">{s.k}</div>
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
      <section className="bg-[oklch(0.22_0.05_150)] py-8 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-black md:text-4xl">
              Works for Every Crop You Grow
            </h2>

            <p className="mt-3 mx-auto max-w-2xl text-center text-white/70">
              One organic fertilizer. Multiple crops. Proven performance across
              vegetables, grains and commercial farming.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((crop, i) => (
              <FadeUp key={crop.en} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10">  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={crop.image}
                      alt={crop.bn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {/* Crop Name */}
                    <div className="absolute bottom-7 left-7 z-10">
                      <h3 className="mt-2 font-bengali tex-2xl md:text-4xl font-bold leading-none text-gold drop-shadow-lg">
                        {crop.bn}
                      </h3>
                    </div>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-14 text-center">
            <CtaButton>Order Now — Free Delivery</CtaButton>
          </div>
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
          <div className="mt-14">
            <FadeUp>
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <img
                  src="./npk.png"
                  alt="Krishi Mitra"
                  className="w-full aspect-[21/12] object-cover"
                />
              </div>
            </FadeUp>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {npk.map((n, i) => (
                <FadeUp key={n.title} delay={i * 0.05}>
                  <div
                    className="
          group flex h-full min-h-[180px] flex-col
          rounded-2xl border border-border
          bg-card p-4
          shadow-soft
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:border-gold/40
          hover:shadow-2xl hover:shadow-gold/10
        "
                  >
                    {/* Icon + Title */}
                    <div className="mb-5 flex items-center gap-4">
                      <div
                        className={`
      flex h-14 w-14 shrink-0 items-center justify-center
      rounded-2xl bg-primary/10
      transition-all duration-500
      group-hover:scale-110
      group-hover:rotate-6
      ${n.color}
    `}
                      >
                        <n.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      <h3 className="font-display text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-gold">
                        {n.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-7 text-muted-foreground">
                      {n.desc}
                    </p>

                    {/* Bottom Accent */}
                    <span className="mt-2 h-1 w-12 rounded-full bg-gold/30 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
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
                <div className="font-display text-lg font-bold text-destructive">Your Current Cost / Bigha</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ["IFFCO/DAP: 3 bags @ ₹1,350", "₹4,050"],
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
                <div className="font-display text-lg font-bold text-primary">With Krishi Mitra / Bigha</div>
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

          <div className="relative mt-14">
            {/* center line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <FadeUp key={t.week} delay={i * 0.05}>
                  <div
                    className={`relative grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                  >
                    {/* LEFT SIDE */}
                    <div
                      className={`${i % 2 ? "md:pl-10" : "md:pr-10 md:text-right"
                        }`}
                    >
                      <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                        {t.week}
                      </span>

                      <h3 className="mt-4 font-display text-2xl font-bold">
                        {t.title}
                      </h3>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={`${i % 2 ? "md:pr-10" : "md:pl-10"}`}>
                      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        {/* IMAGE */}
                        <div className="overflow-hidden">
                          <img
                            src={t.image}
                            alt={t.title}
                            className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                          <p className="italic text-muted-foreground">
                            "{t.quote}"
                          </p>

                          <div className="mt-5 flex items-center justify-between">

                            <div>
                              <div className="font-semibold">
                                {t.who}
                              </div>

                              <div className="mt-2 flex text-gold">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    className="h-4 w-4 fill-current"
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              Verified Farmer
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>

                    {/* CENTER DOT */}
                    <div className="absolute left-4 top-7 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-gold md:block md:left-1/2" />
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

                  <button
                    type="button"
                    onClick={() => handleBuyNow(t)}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${t.featured
                      ? "bg-gold text-gold-foreground shadow-glow"
                      : "bg-primary text-primary-foreground shadow-soft"
                      }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </button>
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

      {/* ---------- FINAL CTA ---------- */}
      <section className="relative overflow-hidden py-20">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,34,28,.78), rgba(8,34,28,.82)), url('/cta-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center text-white">

          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold-foreground">
            <Award className="h-4 w-4" />
            Limited Time Offer
          </span>

          <h2 className="mt-6 font-display text-4xl font-black leading-tight md:text-5xl">
            Grow More.
            <br />
            Spend Less.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Join <span className="font-bold text-gold">50,000+ farmers</span> already
            growing healthier crops with Krishi Mitra.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold" />
              Up to 60% Lower Cost
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold" />
              30–50% Higher Yield
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold" />
              Money-Back Guarantee
            </div>

          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <CtaButton className="px-10 py-4 text-base">
              Order Now
            </CtaButton>

            <a
              href="tel:+917980334730"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>

          </div>

        </div>
      </section>

      {/* ---------- ORDER OVERLAY ---------- */}
      {selectedTier && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTier(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedTier(null)}
              aria-label="Close order form"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-destructive hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="bg-primary p-6 text-primary-foreground">
              <div className="pr-10">
                <div className="text-xs font-bold uppercase tracking-wider text-gold">
                  Place Your Order
                </div>

                <h2 className="mt-1 font-display text-2xl font-black">
                  Krishi Mitra
                </h2>

                <p className="mt-1 text-sm text-primary-foreground/75">
                  Enter your details and we'll confirm your order on WhatsApp.
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* Selected Pack */}
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-clay">
                  Selected Pack
                </div>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-black">
                      {selectedTier.size}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {selectedTier.tag}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="font-display text-2xl font-black text-primary">
                      {selectedTier.price}
                    </div>

                    <div className="text-sm text-muted-foreground line-through">
                      {selectedTier.strike}
                    </div>
                  </div>
                </div>

                <div className="mt-3 inline-block rounded-md bg-gold/20 px-2 py-1 text-xs font-bold text-clay">
                  {selectedTier.save}
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handleOrderSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="order-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    id="order-name"
                    type="text"
                    value={orderForm.name}
                    onChange={(e) => {
                      const value = e.target.value;

                      setOrderForm((prev) => ({
                        ...prev,
                        name: value,
                      }));

                      if (orderErrors.name) {
                        setOrderErrors((prev) => ({
                          ...prev,
                          name: "",
                        }));
                      }
                    }}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={`w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 ${orderErrors.name
                        ? "border-destructive"
                        : "border-border focus:border-primary"
                      }`}
                  />

                  {orderErrors.name && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {orderErrors.name}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="order-whatsapp"
                    className="mb-2 block text-sm font-semibold"
                  >
                    WhatsApp Number
                  </label>

                  <div
                    className={`flex overflow-hidden rounded-xl border bg-card transition focus-within:ring-2 focus-within:ring-primary/20 ${orderErrors.whatsapp
                        ? "border-destructive"
                        : "border-border focus-within:border-primary"
                      }`}
                  >
                    <span className="flex items-center border-r border-border bg-secondary px-4 text-sm font-semibold">
                      +91
                    </span>

                    <input
                      id="order-whatsapp"
                      type="tel"
                      inputMode="numeric"
                      value={orderForm.whatsapp}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        setOrderForm((prev) => ({
                          ...prev,
                          whatsapp: value,
                        }));

                        if (orderErrors.whatsapp) {
                          setOrderErrors((prev) => ({
                            ...prev,
                            whatsapp: "",
                          }));
                        }
                      }}
                      placeholder="9876543210"
                      autoComplete="tel"
                      maxLength={10}
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
                    />
                  </div>

                  {orderErrors.whatsapp && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {orderErrors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="order-address"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Delivery Address
                  </label>

                  <div
                    className={`relative rounded-xl border bg-card transition focus-within:ring-2 focus-within:ring-primary/20 ${orderErrors.address
                        ? "border-destructive"
                        : "border-border focus-within:border-primary"
                      }`}
                  >
                    <MapPin className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <textarea
                      id="order-address"
                      value={orderForm.address}
                      onChange={(e) => {
                        setOrderForm((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }));

                        if (orderErrors.address) {
                          setOrderErrors((prev) => ({
                            ...prev,
                            address: "",
                          }));
                        }
                      }}
                      placeholder="Enter your complete delivery address"
                      rows={4}
                      autoComplete="street-address"
                      className="w-full resize-none bg-transparent py-3 pl-12 pr-4 text-sm outline-none placeholder:text-muted-foreground"
                    />
                  </div>

                  {orderErrors.address && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {orderErrors.address}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Continue on WhatsApp
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your order details will be sent to Krishi Kalyan on WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
