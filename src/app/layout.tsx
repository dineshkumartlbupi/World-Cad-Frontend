import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Cad Design LLP | Roofing Measurements & Solar Design Services",
  description: "Accurate 3D roof reports, solar permit designs, and CAD drafting services for roofing and solar companies. Fast turnaround and precision guaranteed.",
  keywords: "roofing designs, solar cad, roof measurements, solar permit designs, 3D roof reports, world cad design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
