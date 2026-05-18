"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  ChevronDown,
  Building2,
  Landmark,
  GraduationCap,
  Sprout,
  Globe2,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FadeIn, SectionEyebrow } from "@/components/Section";

// export const Route = createFileRoute("/contact")({
//   component: ContactPage,
//   head: () => ({
//     meta: [
//       { title: "Contact — Krishi Kalyan Group | Singur, Hooghly" },
//       { name: "description", content: "Get in touch with Krishi Kalyan Group — phone, WhatsApp, email, map directions to our Singur, Hooghly office. FAQs and key agricultural govt. organization contacts in West Bengal." },
//       { property: "og:title", content: "Contact Krishi Kalyan Group" },
//       { property: "og:description", content: "Reach our team in Singur, Hooghly. Map, FAQs and important agri govt. contacts in one place." },
//       { property: "og:type", content: "website" },
//     ],
//   }),
// });

const faqs = [
  {
    q: "Where is Krishi Kalyan Group located?",
    a: "Our main office is at Kaluraytala, Ratanpur, Singur, Hooghly, West Bengal. Use the map below for live directions.",
  },
  {
    q: "What are your visiting hours?",
    a: "Monday – Saturday, 9:00 AM to 7:00 PM. Sunday by appointment for farmer group meetings and training sessions.",
  },
  {
    q: "How do I start a mushroom farming unit with Krishi Kalyan?",
    a: "Call or WhatsApp +91 79803 34730. Our team will schedule a free consultation, share the investment models (Starter ₹2L / Standard ₹4L / Pro ₹8L) and explain the buy-back & insurance terms.",
  },
  {
    q: "Do you supply agri-inputs to farmers outside Hooghly?",
    a: "Yes. As a Govt. DAESI certified dealer we supply seeds, fertilizers, bio-inputs and crop-specific advisory across Hooghly and neighbouring districts. Bulk orders for FPOs and dealers are welcome.",
  },
  {
    q: "Do you provide farmer training and skill development?",
    a: "Yes — through our Forest Cap Training Centre we run hands-on workshops, DAESI-led extension classes (in Bengali) and youth entrepreneurship sessions throughout the year.",
  },
  {
    q: "Is the mushroom investment insured?",
    a: "Yes. Forest Cap Mushroom units under K. Krishi Kalyan Group are FSSAI registered, insured by Krishi Kalyan and come with a guaranteed buy-back of produce.",
  },
];

const govtOrgs = [
  {
    icon: Landmark,
    name: "ATC – Chinsurah, Hooghly",
    role: "Agricultural Training Centre, Govt. of West Bengal",
    addr: "Chinsurah, Hooghly, West Bengal – 712101",
    phone: "+91 33 2680 2069",
    web: "https://matirkatha.net",
  },
  {
    icon: GraduationCap,
    name: "SAMETI – West Bengal",
    role: "State Agricultural Management & Extension Training Institute",
    addr: "ATC Campus, Chinsurah, Hooghly",
    phone: "+91 33 2680 2069",
    web: "https://sametiwb.in",
  },
  {
    icon: Building2,
    name: "MANAGE",
    role: "National Institute of Agricultural Extension Management, Hyderabad",
    addr: "Rajendranagar, Hyderabad – 500030, Telangana",
    phone: "+91 40 2401 6702",
    web: "https://www.manage.gov.in",
  },
  {
    icon: Sprout,
    name: "KVK Hooghly",
    role: "Krishi Vigyan Kendra, ICAR",
    addr: "Mahanad, Pandua, Hooghly – 712147",
    phone: "+91 94334 14841",
    web: "https://hooghly.kvk4.in",
  },
  {
    icon: Landmark,
    name: "ATMA – Hooghly",
    role: "Agricultural Technology Management Agency",
    addr: "Office of the DDA, Chinsurah, Hooghly",
    phone: "+91 33 2680 2069",
    web: "https://matirkatha.net",
  },
  {
    icon: GraduationCap,
    name: "Ramakrishna Mission – Narendrapur",
    role: "Divyayan KVK & Ashrama, Agricultural Extension",
    addr: "Narendrapur, South 24 Parganas – 700103",
    phone: "+91 33 2477 2201",
    web: "https://rkmnarendrapur.org",
  },
  {
    icon: Globe2,
    name: "Ministry of Agriculture & Farmers Welfare",
    role: "Govt. of India",
    addr: "Krishi Bhavan, New Delhi – 110001",
    phone: "1800-180-1551 (Kisan Call Centre)",
    web: "https://agricoop.gov.in",
  },
  {
    icon: Building2,
    name: "Dept. of Agriculture – Govt. of West Bengal",
    role: "Directorate of Agriculture",
    addr: "Jessop Building, 63 N. S. Road, Kolkata – 700001",
    phone: "+91 33 2243 9614",
    web: "https://wb.gov.in/departments-details.aspx?id=D170818120534421",
  },
];

export default function ContactPage() {
  return (
    <main className="h-full bg-cream">
      {/* HERO */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <FadeIn>
            <SectionEyebrow en="Contact Us" bn="যোগাযোগ" />
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Talk to our team in Singur.
            </h1>
            <p className="font-bengali mt-3 text-2xl font-semibold text-clay md:text-3xl">
              আমরা আপনার পাশে আছি
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Questions about mushroom investment, DAESI inputs, training or
              dealership? Reach out — we usually reply within a few hours during
              working hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
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
                    icon: BsWhatsapp,
                    t: "WhatsApp",
                    v: "Chat on WhatsApp – 79803 34730",
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
                    v: "Kaluraytala, Ratanpur, Singur, Hooghly, West Bengal – 712409",
                    href: "https://www.google.com/maps/search/?api=1&query=Ratanpur+Singur+Hooghly+West+Bengal",
                  },
                  {
                    icon: Clock,
                    t: "Hours",
                    v: "Mon – Sat · 9:00 AM – 7:00 PM",
                  },
                ].map((c) => (
                  <a
                    key={c.t}
                    href={c.href ?? "#"}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

      {/* GOVT ORGS */}
      <section className="bg-cream border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Govt. & Institutional" bn="সরকারি যোগাযোগ" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl max-w-3xl">
              Important agricultural organizations for farmers.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Key institutions that support farmer welfare, training and
              extension across West Bengal and India.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {govtOrgs.map((o, i) => (
              <FadeIn key={o.name} delay={i * 0.04}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-primary/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/10 text-clay">
                    <o.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                    {o.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-clay">
                    {o.role}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>{o.addr}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <a
                        href={`tel:${o.phone.replace(/\s+/g, "")}`}
                        className="hover:text-primary"
                      >
                        {o.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <a
                        href={o.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:text-primary"
                      >
                        {o.web.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="Find us" bn="আমাদের ঠিকানা" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Visit our office in Ratanpur, Singur.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Krishi Kalyan Group — Singur, Hooghly"
                src="https://www.google.com/maps?q=Ratanpur%2C+Singur%2C+Hooghly%2C+West+Bengal&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ratanpur+Singur+Hooghly+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" /> Get directions
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <FadeIn>
            <SectionEyebrow en="FAQ" bn="প্রশ্নোত্তর" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions.
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.04}>
                <details className="group rounded-2xl border border-border bg-card p-5 open:shadow-soft transition-shadow">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display text-base font-semibold text-foreground md:text-lg">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {f.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
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
