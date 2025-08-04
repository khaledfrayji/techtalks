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
