import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { profile } from "@/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://surajsah.com"),
  title: profile.name,
  description:
    "Suraj Sah — software engineer at Salesforce. Distributed systems, backend platforms, and AI agentic systems. Previously Rivian, Mastercard, Airbus.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    title: profile.name,
    description: profile.lede,
    images: ["/assets/suraj.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
