import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Cad Design LLP | Precision Architectural & Engineering CAD Services",
  description: "World Cad Design LLP is a premier provider of global CAD design services. Specializing in architectural drafting, 3D rendering, BIM modeling, and MEP design for construction and manufacturing.",
  keywords: "CAD design, architectural drafting, 3D modeling, BIM services, engineering design, World Cad Design LLP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
