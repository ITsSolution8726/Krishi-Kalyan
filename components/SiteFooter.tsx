"use client";
import { Sprout, Phone, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-8  lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Sprout className="h-5 w-5 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-lg font-bold">
                  K.Krishi Kalyan
                </div>
                <div className="font-bengali text-xs text-accent">
                  কৃষি কল্যাণ গ্রুপ
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Govt. certified DAESI Dealer empowering farmers and rural youth
              across Bengal with end-to-end agri solutions.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/#about" className="hover:text-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-accent">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#investment" className="hover:text-accent">
                  Investment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" /> Kaluraytala,
                Ratanpur, Singur, Hooghly
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" /> +91 79803 34730
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" /> kkfc2025.1@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">
              Bengali
            </h4>
            <p className="font-bengali text-sm leading-relaxed text-background/80">
              অনেক সমস্যার এক সমাধান — কৃষি কল্যাণ। কৃষির সুরক্ষা, চাষির কল্যাণ।
              সরকার অনুমোদিত কৃষি বীজ ও কীটনাশক বিক্রেতা।
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-start gap-3 border-t border-background/15 pt-4 text-xs text-background/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Krishi Kalyan Group. All rights
            reserved.
          </p>
          <p className="font-bengali">কৃষি কল্যাণ — চাষির পাশে, সবসময়।</p>
        </div>

        <div className="mt-4 text-center text-[11px] text-background/45">
          Designed & Developed by{" "}
          <a
            href="https://itssolution.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-background/70 transition-colors hover:text-accent"
          >
            IT&apos;s Solution
          </a>
        </div>
      </div>
    </footer>
  );
}
