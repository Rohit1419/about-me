import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/profile";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title} in ${profile.location}`,
  description: profile.description,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title} in ${profile.location}`,
    description: profile.description,
    url: profile.website.url,
    siteName: profile.website.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title} in ${profile.location}`,
    description: profile.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: profile.website.url,
  },
  icons: {
    icon: "/fevicon.ico",
    apple: "/fevicon.ico",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.description,
    url: profile.website.url,
    email: profile.email,
    sameAs: [profile.links.github, profile.links.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.address.locality,
      addressRegion: profile.address.region,
      addressCountry: profile.address.country,
    },
    workLocation: {
      "@type": "Place",
      name: profile.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.address.locality,
        addressRegion: profile.address.region,
        addressCountry: profile.address.country,
      },
    },
    knowsAbout: profile.knowsAbout,
    hasOccupation: {
      "@type": "Occupation",
      name: profile.title,
      occupationLocation: {
        "@type": "City",
        name: profile.location,
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="geo.region" content={`US-${profile.address.region}`} />
        <meta name="geo.placename" content={profile.location} />
        <meta
          name="geo.position"
          content={`${profile.address.coordinates.lat};${profile.address.coordinates.lng}`}
        />
        <meta
          name="ICBM"
          content={`${profile.address.coordinates.lat}, ${profile.address.coordinates.lng}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
