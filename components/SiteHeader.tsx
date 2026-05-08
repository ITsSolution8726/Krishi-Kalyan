"use client";
import { useState } from "react";
import { Menu, X, Phone, Sprout } from "lucide-react";
import Link from "next/link";

const nav = [
  { to: "#home", label: "Home", bn: "হোম" },
  { to: "#about", label: "About", bn: "পরিচিতি" },
  { to: "#services", label: "Services", bn: "সেবা" },
  { to: "#projects", label: "Projects", bn: "প্রকল্প" },
  { to: "#investment", label: "Invest", bn: "বিনিয়োগ" },
  { to: "#contact", label: "Contact", bn: "যোগাযোগ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero shadow-soft transition-transform group-hover:rotate-6">
            <Sprout className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Krishi Kalyan</div>
            <div className="font-bengali text-[11px] text-clay -mt-0.5">কৃষি কল্যাণ গ্রুপ</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="px-3.5 py-2 text-sm font-medium text-foreground/75 rounded-full transition-colors hover:text-primary hover:bg-secondary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+917980334730"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> 79803 34730
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 text-base font-medium text-foreground border-b border-border/50 last:border-0"
              >
                <span>{n.label}</span>
                <span className="font-bengali text-sm text-muted-foreground">{n.bn}</span>
              </a>
            ))}
            <a href="tel:+917980334730" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> 79803 34730
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
