import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Motion from "@/components/Motion";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/content";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suraj-kgp-ub.vercel.app"),
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

// Applies a saved theme before first paint so the page never flashes the wrong colours.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Motion>
          <Nav />
          {children}
          <footer className="foot">
            <span>{profile.name}</span>
            <ThemeToggle />
          </footer>
        </Motion>
      </body>
    </html>
  );
}
