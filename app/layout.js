import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { SITE } from "@/lib/site-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "luxury wedding venue India",
    "heritage convention center",
    "boutique wedding hall",
    "Jaipur wedding venue",
    "Mandapam banquet",
    "Grande Bhartiyam",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
