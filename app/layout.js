import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import TechTalksFooter from "@/components/Footer";
import WhatsAppStickyButton from "@/components/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ New: generateMetadata function
export async function generateMetadata() {
  return {
    title: "TechTalks – Learn. Build. Grow.",
    description: "Real world programming courses, real projects. Build your skills and career with TechTalks.",
    metadataBase: new URL("https://techtalkslb.com"),

    openGraph: {
      title: "TechTalks – Learn. Build. Grow.",
      description: "Join a developer-first platform built to teach and empower coders in Lebanon and beyond.",
      url: "https://techtalkslb.com",
      siteName: "TechTalks",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image.jpg", // Add a 1200x630 preview image
          width: 1200,
          height: 630,
          alt: "TechTalks – Build your future in code",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "TechTalks",
      description: "Learn programming through real courses and team projects.",
      creator: "@techtalkslb", 
      images: ["/opengraph-image.jpg"],
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    
    },

    themeColor: "#0D0D0D",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <WhatsAppStickyButton />
        {children}
        <TechTalksFooter />
      </body>
    </html>
  );
}
