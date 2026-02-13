import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World CAD Design LLP",
  description: "Excellence in solar permit designs, 3D roof reports, and CAD drafting. Fast 24h turnaround for residential and commercial solar projects. AHJ & Utility approved.",
  keywords: "solar design services, roofing measurement reports, solar permit plansets, commercial solar design, 3D roof models, CAD drafting services, solar engineering back-office",
  authors: [{ name: "World CAD Design LLP" }],
  openGraph: {
    title: "World CAD Design LLP | Solar & Roofing Engineering Experts",
    description: "Accurate 3D roof reports and permit-ready solar designs. Fast, reliable, and NEC compliant engineering services.",
    url: "https://worldcaddesign.com",
    siteName: "World CAD Design LLP",
    images: [
      {
        url: "/images/hero_landing.png",
        width: 1200,
        height: 630,
        alt: "World CAD Design Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World CAD Design LLP | Solar & Roofing CAD Services",
    description: "Fast 24h turnaround for solar and roofing design services. Accurate and code-compliant engineering.",
    images: ["/images/hero_landing.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://worldcaddesign.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

