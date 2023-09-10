import "./globals.css";
import type { Metadata } from "next";
import { Hepta_Slab } from "next/font/google";

const heptaSlab = Hepta_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hire a Senior",
  description: "Ask a senior developer for advice on your project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heptaSlab.className}>{children}</body>
    </html>
  );
}
