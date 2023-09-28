import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const heptaSlab = Josefin_Sans({ subsets: ["latin"] });

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
    <html lang="en" className="bg-magnolia">
      <body className={heptaSlab.className}>{children}</body>
    </html>
  );
}
