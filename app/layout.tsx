import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krishikalyangroup.com"), // change domain

  title: {
    default: "Krishi Kalyan Group — Smart Farming. Secure Income.",
    template: "%s | Krishi Kalyan Group",
  },

  description:
    "DAESI-certified agri-enterprise providing agricultural inputs, mushroom farming projects, farmer training, consultancy, irrigation solutions and income-based farming models in West Bengal.",

  keywords: [
    "Krishi Kalyan",
    "Krishi Kalyan Group",
    "Mushroom Farming",
    "Agri Business",
    "Agricultural Consultancy",
    "DAESI Dealer",
    "Farmer Training",
    "Agriculture West Bengal",
    "Singur Agriculture",
    "Crop Protection",
    "Agricultural Inputs",
    "Soil Testing",
    "Rural Entrepreneurship",
    "Modern Farming",
    "Farming Investment",
  ],

  authors: [{ name: "Krishi Kalyan Group" }],
  creator: "Krishi Kalyan Group",
  publisher: "Krishi Kalyan Group",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.krishikalyangroup.com",
    siteName: "Krishi Kalyan Group",
    title: "Krishi Kalyan Group — Smart Farming. Secure Income.",
    description:
      "From Farming to Earning — Agricultural inputs, mushroom farming, farmer training and modern agri-business opportunities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krishi Kalyan Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krishi Kalyan Group",
    description:
      "Smart Farming. Secure Income. Modern agricultural solutions for farmers and rural entrepreneurs.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">
        {/* Google Analytics */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FSQC9D7T2G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FSQC9D7T2G');
    `}
        </Script> */}
        {/* Local Business Structured Data */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: "Jewar Jewellers",
              foundingDate: "1973",
              founder: {
                "@type": "Person",
                name: "Mr. Debasis Burman",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rishra",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              url: "https://www.jewar1974.com",
              sameAs: [
                "https://www.facebook.com/jewarjeweller1973",
                "https://www.instagram.com/jewar1973/",
                "https://www.youtube.com/@JewarJewellery",
                "https://g.co/kgs/1PMfU2Y",
              ],
            }),
          }}
        /> */}
        <SiteHeader />
        {children}
        {/* <Analytics /> */}
        <SiteFooter />
      </body>
    </html>
  );
}
