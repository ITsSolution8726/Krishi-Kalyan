import {
  Star, Truck, ShieldCheck, Award, Leaf, Sprout, Apple,
  Flower2, Droplets, Heart, Scale, Feather, Activity,
} from "lucide-react";

// ------------------------------ DATA ------------------------------

export const stats = [
  { icon: Star, k: "4.7/5", v: "Verified Rating" },
  { icon: Heart, k: "50,000+", v: "Trusting Farmers" },
  { icon: Truck, k: "Free", v: "Delivery in Bengal" },
  { icon: Award, k: "Since 1985", v: "40 Years of Trust" },
];

export const crops = [
  {
    bn: "আলু",
    image: "crops/potato.png",
    list: "Bigger tubers, healthier roots and improved soil fertility.",
  },
  {
    bn: "ধান",
    image: "crops/rice.png",
    list: "Stronger plants with improved grain filling and higher yield.",
  },
  {
    bn: "বেগুন",
    image: "crops/brinjal.png",
    list: "More flowering, better fruit quality and longer harvest period.",
  },
  {
    bn: "করলা",
    image: "crops/bitter-gourd.png",
    list: "Healthy vines with improved flowering and fruit production.",
  },
  {
    bn: "পটল",
    image: "crops/potol.png",
    list: "Supports vigorous growth and consistent fruit development.",
  },
  {
    en: "Cauliflower",
    bn: "ফুলকপি",
    image: "crops/cabbage-coliflower.png",
    list: "Compact heads, greener leaves and healthier crop development.",
  },
];

export const comparison = [
  ["Yield", "Short-term boost", "2× sustained increase"],
  ["Bags per acre", "5 bags", "2 bags (60% less)"],
  ["Cost per acre", "₹18,000–₹25,000", "₹5,500–₹8,000"],
  ["Pest spray cycle", "Every 10 days", "Once a month"],
  ["Soil health", "Degrades over time", "Improves permanently"],
  ["Water needs", "High", "20–30% lower"],
  ["Next season", "Need more chemicals", "Need even less input"],
  ["Reusable land", "No", "Yes, forever"],
];

export const npk = [
  { icon: Leaf, color: "text-primary", title: "High Organic Carbon", desc: "Soil becomes rich, holds water better, feeds beneficial microbes." },
  { icon: Activity, color: "text-clay", title: "Nitrogen 1.5%", desc: "Bigger, greener leaves and strong vegetative growth." },
  { icon: Flower2, color: "text-clay", title: "Phosphorus 2.5%", desc: "Stronger roots, more flowers and better fruit setting." },
  { icon: ShieldCheck, color: "text-primary", title: "Potassium 2.5%", desc: "Disease resistance, drought tolerance, premium produce." },
  { icon: Scale, color: "text-primary", title: "Neutral pH", desc: "Works in acidic, neutral or alkaline soil — no adjustments." },
  { icon: Feather, color: "text-clay", title: "Light Weight", desc: "Easy to carry, spread and apply across the field." },
];

export const timeline = [
  {
    week: "Week 1–2",
    title: "Leaves look fresher and greener",
    image: "./timeline/week1.png",
    quote: "Within a week the leaves looked alive again.",
    who: "Radha B., Hooghly",
  },
  {
    week: "Week 3–4",
    title: "Stronger stems, visible new shoots",
    image: "./timeline/week3.png",
    quote: "Two doses in three weeks — best growth I've seen.",
    who: "Samar S., Singur",
  },
  {
    week: "Month 1",
    title: "More flowers, better fruit set, fewer pests",
    image: "./timeline/month1.png",
    quote: "Marigolds and chillies came in fuller and stronger.",
    who: "Karthik P., Burdwan",
  },
  {
    week: "Month 2–3",
    title: "Soil softens, water holds better",
    image: "./timeline/month2.png",
    quote: "My soil became soft and healthy. Crops grew better.",
    who: "Raghu R., Nadia",
  },
  {
    week: "Harvest",
    title: "30–50% higher yield, premium quality",
    image: "./timeline/harvest.png",
    quote: "Yield went from 2 tonnes to nearly 5 tonnes per acre.",
    who: "Commercial Grower",
  },
  {
    week: "Next Season",
    title: "Healthier soil — need even less input",
    image: "./timeline/nextseason.png",
    quote: "After six months the plants and trees are lush.",
    who: "Lathika G., Murshidabad",
  },
];

export const safetyGroups = [
  { icon: Apple, title: "Safe for Food Crops", points: ["No chemical residue on produce", "Export-quality certification ready", "Safe to eat immediately after harvest", "Compliant with organic standards"] },
  { icon: Sprout, title: "Safe for Soil", points: ["Improves soil microbiome naturally", "No salinity or toxicity buildup", "Never burns the root zone", "Reusable land — gets better every season"] },
  { icon: Droplets, title: "Safe for Water", points: ["Doesn't contaminate groundwater", "Zero chemical runoff into rivers", "Improves water retention in soil", "Reduces water waste"] },
  { icon: Heart, title: "Safe for Your Family", points: ["No skin irritation — touch without gloves", "Safe if children or pets touch", "No harmful fumes or odour", "Won't trigger allergies"] },
];

export const tiers = [
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

export const faqs = [
  { q: "Is it really better than DAP or Urea?", a: "Yes. Farmers consistently report ~2× yield with only 2 bags instead of 5 — and with zero soil damage. DAP and urea give a short-term boost but kill beneficial microbes. Krishi Mitra heals the soil permanently and the results compound every season." },
  { q: "Will it work for my specific crop?", a: "It works for every soil-grown crop — paddy, jute, vegetables, fruits, flowers, pulses, cotton and sugarcane. If it grows in soil, this works." },
  { q: "How much do I actually need?", a: "Field crops: 25–50 kg per acre (at most 2 bags). Home gardens: 50–100 g per pot. Most farmers replace 5 bags of chemical fertiliser with 2 bags of Krishi Mitra." },
  { q: "When will I see results?", a: "Days 7–15: greener, fresher leaves. Weeks 3–4: stronger growth and more flowers. Harvest: 30–50% higher yield in most fields." },
  { q: "Is it safe for vegetables I'll eat?", a: "100% safe. Zero chemical residue. You can harvest and eat the same day. Safe for children and pets — perfect for export-grade organic produce." },
  { q: "What if my soil is badly damaged by chemicals?", a: "It is ideal for restoration. One farmer reported soil going from dry and cracked to soft and healthy in a single season — driven by high organic carbon and the live microbe culture." },
  { q: "Why should I trust Krishi Kalyan Group?", a: "We're a DAESI-certified agri-enterprise serving Bengal for 40 years, with lab-tested batches, thousands of verified reviews and a dealer network across the state." },
];