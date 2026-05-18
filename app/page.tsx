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
  FileText,
  Trophy,
  BookOpen,
  Coins,
  HeartHandshake,
  LineChart,
  Sun,
  X,
} from "lucide-react";
import { FadeIn, SectionEyebrow } from "@/components/Section";
import { HeroSlider } from "@/components/HeroSlider";

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
const benefits = [
  {
    icon: Coins,
    t: "Higher, Stable Income",
    bn: "নিশ্চিত আয়",
    d: "Income-based farming models (₹15k–₹60k/month potential) with structured buy-back so farmers don't depend on volatile mandi prices.",
  },
  {
    icon: BookOpen,
    t: "Scientific Knowledge Transfer",
    bn: "বৈজ্ঞানিক জ্ঞান",
    d: "DAESI-certified guidance on crop selection, spacing, soil pH, IPM and post-harvest — directly at the field, in Bengali.",
  },
  {
    icon: ShieldCheck,
    t: "Insurance & Buy-Back Safety",
    bn: "বিমা ও সুরক্ষা",
    d: "Forest Cap Mushroom projects come insured by Krishi Kalyan with a guaranteed buy-back, so your investment stays protected.",
  },
  {
    icon: Sun,
    t: "Year-Round Cropping",
    bn: "সারা বছর চাষ",
    d: "Polytunnels, drip irrigation and winter-vegetable rotations let farmers harvest across multiple seasons instead of one.",
  },
  {
    icon: HeartHandshake,
    t: "End-to-End Hand-Holding",
    bn: "পাশে থাকি",
    d: "From seed to sale — inputs, training, machinery, advisory and market linkage from one trusted local team.",
  },
  {
    icon: LineChart,
    t: "Youth Entrepreneurship",
    bn: "যুব উদ্যোগ",
    d: "Rural youth are trained as agri-entrepreneurs, dealers and mushroom-unit operators — building local livelihoods at home.",
  },
];
const achievements = [
  {
    img: "./cert-daesi-gold.jpg",
    title: "DAESI Gold Certificate — Highest Marks",
    date: "23 Sept 2025",
    desc: "Awarded the Gold Certificate by MANAGE, Hyderabad for securing the highest marks in TP No. 2884 of the one-year Diploma in Agricultural Extension Services for Input Dealers (DAESI), 2024–2025.",
    cert: "/certificates/daesi-gold.pdf",
  },
  {
    img: "./cert-daesi-diploma.jpg",
    title: "DAESI Diploma — First Division with Distinction",
    date: "Year 2024–2025",
    desc: "One-year Diploma in Agricultural Extension Services for Input Dealers, organised at ATC-Chinsurah through SAMETI – West Bengal under MANAGE, Govt. of India.",
    cert: "/certificates/daesi-diploma.pdf",
  },
  {
    img: "./cert-ai-extension.jpg",
    title: "Application of AI in Agricultural Extension",
    date: "25–28 Nov 2025",
    desc: "Executive Development Programme completed at Extension Education Institute (NE Region), Assam Agricultural University, Khanapara — Ministry of Agriculture & Farmers Welfare, GoI.",
    cert: "/certificates/ai-extension.pdf",
  },
  {
    img: "./cert-export-import.jpg",
    title: "Export-Import Business Training",
    date: "10 Jan 2025",
    desc: "6-day online training on Export-Import Business by Global EXIM Institute — strengthening Krishi Kalyan's farm-to-export advisory under the Trust India Export vertical.",
    cert: "/certificates/export-import-training.pdf",
  },
  {
    img: "./certificate-export.jpg",
    title: "SAMETI Certification — Export Orientation",
    date: "08–10 July 2025",
    desc: "Online training on Export Orientation in Agriculture & Allied Sectors completed at SAMETI-WB / ATC, Ramakrishna Mission Ashrama, Narendrapur.",
    cert: "/certificates/export.pdf",
  },
  {
    img: "./certificate-valuechain.jpg",
    title: "SAMETI Certification — Value Chain Mgmt.",
    date: "14–16 October 2025",
    desc: "Online training on Value Chain Management in Crops & Commodities completed at SAMETI-WB / ATC — strengthening our farm-to-market advisory.",
    cert: "/certificates/valuechain.pdf",
  },
  {
    img: "./forestcap-training-team.jpg",
    title: "Forest Cap Training Centre — Awards",
    date: "20 Nov 2025",
    desc: "Felicitation at the Forest Cap Training Centre — recognising our trainers and field team for outstanding contribution to farmer skill development across Hooghly.",
  },
  {
    img: "./atma-kvk-meeting.jpg",
    title: "ATMA, KVK & DDA Farmer Outreach",
    date: "14 June 2025",
    desc: "Joint awareness programme with ATMA, Krishi Vigyan Kendra and District Deputy Agriculture officials — bringing scientific extension talks directly to farmers.",
  },
  {
    img: "./team.jpg",
    title: "Krishi Kalyan Core Team",
    date: "Singur, Hooghly",
    desc: "Our 10-member core team behind Project Dasavuja — agronomists, dealers, trainers and field officers working with hundreds of farmers across Hooghly.",
  },
  {
    img: "./group-meeting.jpg",
    title: "Farmer Group Meeting — Ratanpur",
    date: "6 January 2026",
    desc: "Krishi-vishayak alochana-chakra at Ratanpur Palli Unnayan Samiti with SAI Crop Sciences. Crop-input demonstration and free samples distributed to participating farmers.",
  },
  {
    img: "./polytunnel.jpg",
    title: "Polytunnel Vegetable Cultivation",
    date: "Ratanpur Fields",
    desc: "Low-tunnel winter-vegetable demonstration plot — protected cultivation for early capsicum, cucurbits and leafy greens, raising both yield and farm-gate price.",
  },
  {
    img: "./poster-business.jpg",
    title: "Business Farming Outreach",
    date: "Ongoing",
    desc: '"Business Farming with Krishi Kalyan" weekly meetings — potato & winter vegetable training, problem-solving sessions and awards for innovative farmers.',
  },
  {
    img: "./forestcap-logo.jpg",
    title: "FSSAI-Registered Forest Cap Mushroom",
    date: "Reg. No. 22826088000098",
    desc: "Our mushroom vertical — button, oyster, shiitake and enoki — registered with FSSAI under K. Krishi Kallyan Group for healthy, fresh produce.",
  },
  {
    img: "./mushroom-investment.jpg",
    title: "Mushroom Units for Rural Youth",
    date: "India 2025 Model",
    desc: "₹4 lakh, 2-unit mushroom investment with ₹30,000/month potential income — insured by Krishi Kalyan with guaranteed buy-back for rural youth.",
  },
];

const projects = [
  // {
  //   tag: "Flagship",
  //   name: "Project DASAVUJA",
  //   bn: "প্রকল্প দশভুজা",
  //   img: "./dasavuja.jpg",
  //   desc: "Our 10-pillar farmer ecosystem — crop science, horticulture, soil health, crop protection, irrigation, agri extension, trade & export, training, dealer network and market linkage — led by a dedicated team member per vertical.",
  //   pillars: [
  //     "Crop Science",
  //     "Horticulture",
  //     "Soil Health",
  //     "Crop Protection",
  //     "Irrigation",
  //     "Agri Extension",
  //     "Trade & Export",
  //     "Training",
  //     "Dealer Network",
  //     "Market Linkage",
  //   ],
  // },
  {
    tag: "Investment",
    name: "Forest Cap Mushroom",
    bn: "ফরেস্ট ক্যাপ মাশরুম",
    img: "./mushroom-farm-unit.jpg",
    desc: "Modern mushroom cultivation venture under K. Krishi Kalyan Group — FSSAI registered, insured, with assured buy-back. Designed for first-time agri entrepreneurs and rural youth.",
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
    tag: "Training",
    name: "Forest Cap Training Centre",
    bn: "ফরেস্ট ক্যাপ প্রশিক্ষণ কেন্দ্র",
    img: "./forestcap-training-team.jpg",
    desc: "Skill-development hub for farmers and rural youth — hands-on workshops on potato & winter vegetable farming, problem-solving sessions, awards for innovative farmers and DAESI-led extension classes in Bengali.",
    pillars: [
      "Workshops",
      "Field practice",
      "DAESI guidance",
      "Awards",
      "Mentorship",
      "Bengali-medium classes",
    ],
  },
  {
    tag: "Input Services",
    name: "Deasi Dealer Agri Input Services",
    bn: "ডিএইএসআই ডিলার সেবা",
    img: "./daesi-dealer-shop.jpg",
    desc: "Govt. certified DAESI dealership offering quality seeds, fertilizers, pesticides, bio-inputs and crop-specific advisory — smart, digital agri-business with UPI payments, billing and farmer record-keeping.",
    pillars: [
      "Certified seeds",
      "Fertilizers",
      "Pesticides & bio-inputs",
      "Crop advisory",
      "Digital billing",
      "Farmer records",
    ],
  },
  {
    tag: "Export",
    name: "Trust India Export",
    bn: "ট্রাস্ট ইন্ডিয়া এক্সপোর্ট",
    img: "./trust-india-export.jpg",
    desc: "Our export-import vertical, built on Global EXIM Institute training — connecting West Bengal produce (vegetables, spices, mushroom value-add) to wider Indian and overseas buyers with full compliance support.",
    pillars: [
      "Export documentation",
      "Buyer sourcing",
      "Quality grading",
      "Packaging",
      "Logistics",
      "Compliance",
    ],
  },
  {
    tag: "Extension",
    name: "Agricultural Marketing & Extension",
    bn: "কৃষি বিপণন ও সম্প্রসারণ",
    img: "./atma-kvk-meeting.jpg",
    desc: "Joint outreach with ATMA, KVK and the District Deputy Agriculture office — village-level meetings, mandi linkage, FPO coordination and direct buyer connections so farmers earn fair, predictable prices.",
    pillars: [
      "ATMA / KVK link",
      "Mandi connect",
      "FPO support",
      "Price advisory",
      "Buyer matching",
      "Post-harvest",
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
  const [certOpen, setCertOpen] = useState<{
    img: string;
    title: string;
    pdf: string;
  } | null>(null);
  return (
    <>
      {/* HERO */}
      <HeroSlider />
      {/* USE & BENEFITS OF FARMERS */}
      <section
        id="benefits"
        className="bg-cream border-y border-border scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <FadeIn>
              <SectionEyebrow
                en="Use & Benefits for Farmers"
                bn="চাষির উপকার"
              />
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                Real, measurable gains for{" "}
                <span className="italic text-clay">every farmer.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Working with Krishi Kalyan is not just buying seeds or
                pesticides. It's joining an ecosystem that lifts the entire
                household — through better inputs, scientific advice in Bengali,
                protected cultivation, insured projects and direct market
                linkage. Here is what farmers actually gain.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.t} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-clay/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-foreground shadow-soft">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{b.t}</h3>
                  <p className="font-bengali mt-1 text-sm font-medium text-clay">
                    {b.bn}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Achievements" bn="আমাদের অর্জন" />
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl max-w-3xl">
              Milestones from the field{" "}
              <span className="italic text-clay">— and beyond.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
              A glimpse of what the Krishi Kalyan team has been building — Govt.
              trainings, FSSAI registration, community programs and farmer-led
              demonstration plots.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft hover:border-primary/30">
                  <button
                    type="button"
                    onClick={() =>
                      a.cert &&
                      setCertOpen({ img: a.img, title: a.title, pdf: a.cert })
                    }
                    className={`relative aspect-4/3 overflow-hidden bg-secondary text-left ${a.cert ? "cursor-zoom-in" : "cursor-default"}`}
                    aria-label={
                      a.cert ? `View full certificate: ${a.title}` : a.title
                    }
                  >
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                      <Trophy className="h-3.5 w-3.5 text-clay" /> {a.date}
                    </div>
                    {a.cert && (
                      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft">
                        <FileText className="h-3.5 w-3.5" /> Certificate
                      </div>
                    )}
                  </button>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.desc}
                    </p>
                    {a.cert && (
                      <button
                        type="button"
                        onClick={() =>
                          setCertOpen({
                            img: a.img,
                            title: a.title,
                            pdf: a.cert!,
                          })
                        }
                        className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <FileText className="h-3.5 w-3.5" /> View full
                        certificate
                      </button>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          {certOpen && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
              onClick={() => setCertOpen(null)}
              role="dialog"
              aria-modal="true"
              aria-label={certOpen.title}
            >
              <div
                className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-glow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-5 py-3">
                  <h4 className="font-display text-base font-bold truncate">
                    {certOpen.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <a
                      href={certOpen.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground"
                    >
                      <FileText className="h-3.5 w-3.5" /> Open PDF
                    </a>
                    <button
                      type="button"
                      onClick={() => setCertOpen(null)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="max-h-[80vh] overflow-auto bg-secondary p-4">
                  <img
                    src={certOpen.img}
                    alt={certOpen.title}
                    className="mx-auto h-auto w-full max-w-3xl rounded-lg shadow-soft"
                  />
                </div>
              </div>
            </div>
          )}
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
                scientific advice{" "}
                <span className="font-semibold text-foreground">
                  With the advisory of
                </span>{" "}
                — ATC Chinsura, Hooghly · SAMETI · Narendrapur Ramkrishna
                Mission · MANAGE · Ministry of Agriculture and Farmers Welfare,
                Govt. of India.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                We are committed to providing sustainable agricultural solutions
                and empowering farmers with the knowledge and resources they
                need to succeed.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "DAESI Certified",
                  "BCB 40 Years",
                  "FSSAI Registered",
                  "SAMETI Trained",
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
                  alt="Farmer holding a seedling at sunset in Hooghly"
                  loading="lazy"
                  className="aspect-4/5 w-full rounded-3xl object-cover shadow-soft"
                />
                <div className="absolute -bottom-5 -left-5 max-w-65 rounded-2xl bg-card p-5 shadow-soft border border-border">
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

          {/* Founder card */}
          <FadeIn>
            <div className="mt-16 grid gap-8 overflow-hidden rounded-4xl border border-border bg-card md:grid-cols-[1.1fr_1fr]">
              <img
                src={"./founder-portrait.jpg"}
                alt="Sri Gopal Chandra Show — Govt. DAESI Dealer, Krishi Kalyan Group"
                loading="lazy"
                className="aspect-4/3 w-full object-cover md:aspect-auto"
              />
              <div className="p-8 md:p-12">
                <SectionEyebrow en="Leadership" bn="নেতৃত্ব" />
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
                  Sri Gopal Chandra Show
                </h3>
                <p className="font-bengali mt-2 text-lg text-clay font-semibold">
                  গোপাল চন্দ্র সাউ — DAESI ডিলার
                </p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Founder & Govt. certified DAESI Dealer of Krishi Kalyan Group,
                  Ratanpur. SAMETI-WB / ATC trained in Export Orientation and
                  Value Chain Management. Leads Project Dasavuja and the Forest
                  Cap Mushroom initiative.
                </p>
                <a
                  href="tel:+917980334730"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft"
                >
                  <Phone className="h-4 w-4" /> +91 79803 34730
                </a>
              </div>
            </div>
          </FadeIn>
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
              <span className="font-bengali">বীজ থেকে বাজার</span>
              <span className="block mt-2 text-2xl font-semibold text-muted-foreground md:text-3xl">
                From Seed to Market — our verticals.
              </span>
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
