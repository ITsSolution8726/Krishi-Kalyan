"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Sprout,
  GraduationCap,
  Tractor,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  Leaf,
  BadgeCheck,
  Phone,
  Quote,
  Target,
  Eye,
  Award,
  Store,
  FlaskConical,
  Globe2,
  Wheat,
  CheckCircle2,
  RefreshCcw,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { FadeIn, SectionEyebrow } from "@/components/Section";


const services = [
  {
    icon: Sprout,
    en: "Agri Inputs & Dealership",
    bn: "কৃষি বীজ ও কীটনাশক",
    desc: "Govt-approved seeds, fertilizers, pesticides and crop-specific advisory.",
  },
  {
    icon: GraduationCap,
    en: "Farmer Training & Workshops",
    bn: "চাষি প্রশিক্ষণ",
    desc: "DAESI-led extension, field visits and skill development for youth.",
  },
  {
    icon: Leaf,
    en: "Mushroom Farming Projects",
    bn: "মাশরুম চাষ প্রকল্প",
    desc: "Setup, training and buy-back model under Forest Cap Mushroom.",
  },
  {
    icon: TrendingUp,
    en: "Investment-Based Models",
    bn: "বিনিয়োগ পরিকল্পনা",
    desc: "Structured agri-business plans with potential monthly income.",
  },
  {
    icon: Tractor,
    en: "Machinery & Irrigation",
    bn: "যন্ত্রপাতি ও সেচ",
    desc: "Spray machines, modern equipment and drip/fountain solutions.",
  },
  {
    icon: ShieldCheck,
    en: "Crop Protection & Soil Care",
    bn: "শস্য সুরক্ষা",
    desc: "Soil testing, pH analysis, pest & disease management.",
  },
  {
    icon: Store,
    en: "Dealer Network",
    bn: "ডিলার নেটওয়ার্ক",
    desc: "Local dealer network, FPO and farmer group support.",
  },
  {
    icon: FlaskConical,
    en: "Consultancy & Extension",
    bn: "কৃষি পরামর্শ",
    desc: "Crop planning, soil testing and expert field visits.",
  },
  {
    icon: Wheat,
    en: "Horticulture & Allied",
    bn: "উদ্যান কৃষি",
    desc: "Capsicum, dragon fruit, dates, nursery & roof gardening.",
  },
  {
    icon: Globe2,
    en: "Market & Export Linkage",
    bn: "বাজার সংযোগ",
    desc: "Buyer/mandi connections and export-import guidance.",
  },
];

const usp = [
  { k: "40+", v: "Years of agri-trade legacy" },
  { k: "DAESI", v: "Govt. certified dealer" },
  { k: "10+", v: "Service verticals" },
  { k: "₹30k", v: "Potential monthly income*" },
];

const projects = [
  {
    tag: "Flagship",
    name: "Project DASAVUJA",
    bn: "প্রকল্প দশভুজা",
    img: "./seedling.jpg",
    desc: "A 10-pillar farmer ecosystem covering crop science, horticulture, soil health, irrigation, training, retail, exports and market linkage — the central framework of Krishi Kalyan.",
    pillars: [
      "Crop Science",
      "Horticulture",
      "Soil Health",
      "Crop Protection",
      "Irrigation",
      "Agri Extension",
      "Trade & Export",
      "Training",
      "Dealer Network",
      "Market Linkage",
    ],
  },
  {
    tag: "Investment",
    name: "Forest Cap Mushroom",
    bn: "ফরেস্ট ক্যাপ মাশরুম",
    img: "./mushrooms.jpg",
    desc: "Modern mushroom cultivation venture under K. Krishi Kalyan Group, FSSAI registered, with insurance support and assured buy-back. Designed for first-time agri entrepreneurs.",
    pillars: [
      "Setup support",
      "Spawn & substrate",
      "Training",
      "Insurance",
      "Buy-back",
      "Monthly income*",
    ],
  },
  {
    tag: "Community",
    name: "Farming for Youth",
    bn: "যুবদের জন্য কৃষি",
    img: "./training.jpg",
    desc: "Skill-building program for rural youth with workshops on potato & winter vegetable farming, agricultural problem-solving, and awards for innovative farmers.",
    pillars: [
      "Workshops",
      "Mentoring",
      "Awards",
      "DAESI guidance",
      "Field practice",
      "Networking",
    ],
  },
];

const plans = [
  {
    name: "Starter",
    units: "1 Unit",
    price: "₹2 Lakh",
    income: "₹15,000",
    popular: false,
    perks: [
      "Setup & training",
      "Spawn & substrate",
      "Field guidance",
      "Buy-back support",
    ],
  },
  {
    name: "Standard",
    units: "2 Units",
    price: "₹4 Lakh",
    income: "₹30,000",
    popular: true,
    perks: [
      "Everything in Starter",
      "Insurance by Krishi Kalyan",
      "Priority advisory",
      "Modern equipment access",
      "Monthly income model*",
    ],
  },
  {
    name: "Pro",
    units: "4 Units",
    price: "₹8 Lakh",
    income: "₹60,000",
    popular: false,
    perks: [
      "Everything in Standard",
      "Dedicated mentor",
      "Dealer network access",
      "Export-import guidance",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <Image
            src="./hero-field.jpg"
            alt=""
            fill
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/10 px-4 py-2 backdrop-blur"
          >
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background">
              Govt. Certified DAESI Dealer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight text-background md:text-7xl lg:text-[88px]"
          >
            From Farming
            <br />
            to <span className="text-gradient-gold italic">Earning.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-bengali mt-5 text-2xl font-semibold text-accent md:text-3xl"
          >
            অনেক সমস্যার এক সমাধান — কৃষি কল্যাণ
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-background/85"
          >
            A farmer-centric agri-enterprise delivering complete agricultural
            solutions — inputs, training, consultancy and income-based farming
            models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#investment"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-bold text-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Explore Opportunities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/20"
            >
              Talk to Our Team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/10 backdrop-blur md:grid-cols-4"
          >
            {usp.map((s) => (
              <div key={s.k} className="bg-foreground/40 p-5 backdrop-blur">
                <div className="font-display text-3xl font-bold text-accent">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-background/75 leading-snug">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-b border-border bg-cream scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <FadeIn>
              <SectionEyebrow en="About Us" bn="আমাদের পরিচয়" />
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Built on trust. Rooted in{" "}
                <span className="italic text-clay">soil.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                From a small agri-input store in Singur, Hooghly, Krishi Kalyan
                grew into a complete farmer support ecosystem — handling inputs,
                advisory, training, machinery, mushroom projects and youth-led
                agri-business models. As a Govt. certified DAESI dealer, we
                operate as para-extension professionals — guiding farmers with
                scientific advice while maintaining deep local trust built over
                40+ years.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "DAESI Certified",
                  "BCB 40 Years",
                  "FSSAI Registered",
                  "Local Trust",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-clay" /> {t}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-3xl gradient-gold opacity-30 blur-2xl" />
                <img
                  src="./farmer.jpg"
                  alt="Indian farmer"
                  width={1080}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
                />
                <div className="absolute -bottom-5 -left-5 max-w-[260px] rounded-2xl bg-card p-5 shadow-soft border border-border">
                  <Quote className="h-5 w-5 text-clay" />
                  <p className="font-bengali mt-2 text-sm font-medium text-foreground leading-snug">
                    "চাষির পাশে, সবসময়।"
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    — Our promise to every farmer
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Vision / Mission */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl bg-card border border-border p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-hero">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Our Vision
                </h3>
                <p className="font-bengali mt-1 text-sm text-clay font-semibold">
                  আমাদের লক্ষ্য
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To empower farmers and rural youth by creating a sustainable,
                  profitable, knowledge-driven agricultural ecosystem — building
                  a self-reliant rural economy.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl gradient-hero p-8 md:p-10 text-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <Target className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Our Mission
                </h3>
                <p className="font-bengali mt-1 text-sm text-accent font-semibold">
                  আমাদের মিশন
                </p>
                <p className="mt-4 text-background/85 leading-relaxed">
                  Deliver complete agricultural solutions — from input supply to
                  income generation — through training, technology and trusted
                  advisory services.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                t: "Govt. DAESI Certified",
                d: "Recognized para-extension dealership network.",
              },
              {
                icon: Users,
                t: "Youth Empowerment",
                d: "Training and entrepreneurship for rural youth.",
              },
              {
                icon: Sprout,
                t: "End-to-End Solutions",
                d: "Inputs, training, projects, market linkage.",
              },
              {
                icon: Leaf,
                t: "Scientific + Practical",
                d: "Modern techniques rooted in local realities.",
              },
            ].map((u, i) => (
              <FadeIn key={u.t} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/10 text-clay">
                    <u.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold">{u.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {u.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="What we do" bn="আমাদের সেবা" />
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Complete agri solutions, end&nbsp;to&nbsp;end.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.en} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-primary/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    {s.en}
                  </h3>
                  <p className="font-bengali mt-1 text-sm font-medium text-clay">
                    {s.bn}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-secondary/40 bg-grain scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Projects" bn="আমাদের প্রকল্প" />
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Flagship initiatives shaping rural agriculture.
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-20">
            {projects.map((p, i) => (
              <FadeIn key={p.name}>
                <div
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-3 -z-10 rounded-3xl gradient-gold opacity-25 blur-2xl" />
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
                    />
                  </div>

                  <div>
                    <SectionEyebrow en={p.tag} />
                    <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
                      {p.name}
                    </h3>
                    <p className="font-bengali mt-2 text-xl text-clay font-semibold">
                      {p.bn}
                    </p>
                    <p className="mt-5 text-muted-foreground leading-relaxed md:text-lg">
                      {p.desc}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.pillars.map((x) => (
                        <span
                          key={x}
                          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground"
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Investment" bn="বিনিয়োগ পরিকল্পনা" />
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl max-w-3xl">
              Income-based farming models for rural entrepreneurs.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
              A transparent way to invest in modern agriculture — backed by
              training, insurance support and a structured buy-back model under
              Forest Cap Mushroom.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div
                  className={`relative h-full rounded-3xl border p-8 ${p.popular ? "gradient-hero text-background border-transparent shadow-glow" : "bg-card border-border"}`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-bold text-foreground shadow-soft">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${p.popular ? "text-accent" : "text-clay"}`}
                  >
                    {p.name}
                  </div>
                  <div className="mt-3 font-display text-2xl font-bold">
                    {p.units}
                  </div>
                  <div
                    className={`mt-5 font-display text-5xl font-bold ${p.popular ? "" : "text-foreground"}`}
                  >
                    {p.price}
                  </div>
                  <div
                    className={`mt-1 text-sm ${p.popular ? "text-background/70" : "text-muted-foreground"}`}
                  >
                    one-time investment
                  </div>

                  <div
                    className={`mt-6 rounded-2xl ${p.popular ? "bg-background/10" : "bg-secondary"} p-4`}
                  >
                    <div
                      className={`text-xs uppercase tracking-wider ${p.popular ? "text-accent" : "text-clay"}`}
                    >
                      Potential income*
                    </div>
                    <div className="font-display text-2xl font-bold mt-1">
                      {p.income}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${p.popular ? "text-background/70" : "text-muted-foreground"}`}
                    >
                      per month, model-based
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {p.perks.map((x) => (
                      <li
                        key={x}
                        className={`flex items-start gap-2 text-sm ${p.popular ? "text-background/90" : "text-foreground"}`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 mt-0.5 ${p.popular ? "text-accent" : "text-primary"}`}
                        />
                        {x}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${p.popular ? "gradient-gold text-foreground" : "bg-foreground text-background"}`}
                  >
                    Get started
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            *Indicative figures based on proper management, market conditions
            and the Forest Cap Mushroom model. Returns are not guaranteed.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                t: "Insurance Support",
                d: "Investment insured by Krishi Kalyan / Forest Cap.",
              },
              {
                icon: RefreshCcw,
                t: "Buy-Back Model",
                d: "Guaranteed buy-back of produce at fair rates.",
              },
              {
                icon: TrendingUp,
                t: "Trained Mentorship",
                d: "DAESI experts guide setup, growth and harvest.",
              },
            ].map((u, i) => (
              <FadeIn key={u.t} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-card border border-border p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <u.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{u.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {u.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-cream border-t border-border scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Contact" bn="যোগাযোগ" />
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl max-w-3xl">
              We're here for every farmer & agri-entrepreneur.
            </h2>
            <p className="font-bengali mt-3 text-2xl font-semibold text-clay md:text-3xl">
              আমরা আপনার পাশে আছি
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <FadeIn>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    t: "Phone",
                    v: "+91 79803 34730",
                    href: "tel:+917980334730",
                  },
                  {
                    icon: MessageCircle,
                    t: "WhatsApp",
                    v: "Krishi Kalyan – 7980334730",
                    href: "https://wa.me/917980334730",
                  },
                  {
                    icon: Mail,
                    t: "Email",
                    v: "kkfc2025.1@gmail.com",
                    href: "mailto:kkfc2025.1@gmail.com",
                  },
                  {
                    icon: MapPin,
                    t: "Address",
                    v: "Kaluraytala, Ratanpur, Singur, Hooghly, West Bengal",
                  },
                ].map((c) => (
                  <a
                    key={c.t}
                    href={c.href ?? "#"}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-clay">
                        {c.t}
                      </div>
                      <div className="mt-0.5 font-medium text-foreground">
                        {c.v}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-10 md:p-16 shadow-soft">
              <img
                src="./seedling.jpg"
                alt=""
                className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full object-cover opacity-25 blur-sm md:opacity-40"
              />
              <div className="relative max-w-2xl">
                <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                  <Users className="h-4 w-4" /> Join Krishi Kalyan
                </div>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-background md:text-6xl">
                  Smart farming. <br />
                  Secure income.
                </h2>
                <p className="font-bengali mt-3 text-xl text-accent">
                  কৃষির সুরক্ষা — চাষির কল্যাণ
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+917980334730"
                    className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-bold text-foreground shadow-glow"
                  >
                    <Phone className="h-4 w-4" /> Call 79803 34730
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur hover:bg-background/20"
                  >
                    Send a message <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft"
    >
      <h3 className="font-display text-2xl font-bold">Send us a message</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us a bit about your farm or interest.
      </p>

      {sent ? (
        <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/20 p-6 text-center">
          <div className="font-display text-xl font-bold text-primary">
            ধন্যবাদ! Message received.
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team will reach out shortly.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Phone" name="phone" required type="tel" />
          </div>
          <Field label="Email" name="email" type="email" />
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-clay">
              Interested in
            </label>
            <select
              name="topic"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            >
              <option>Agri inputs & advisory</option>
              <option>Mushroom investment</option>
              <option>Training & youth program</option>
              <option>Dealership / FPO</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-clay">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Send message <Send className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-clay">
        {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
