import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import TechTalksFooter from "@/components/Footer";
import WhatsAppStickyButton from "@/components/Whatsapp";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "TechTalks – Learn. Build. Grow. | Your programming platform",
    template: "%s | TechTalks",
  },
  description:
    "Master real-world programming with TechTalks. Build actual projects, learn industry skills, and advance your career with our hands-on coding courses and expert mentorship.",
  keywords: [
    "techtalks",
    "programming in lebanon",
    "lebanon",
    "software engineer",
    "programming courses",
    "coding bootcamp",
    "web development",
    "software engineering",
    "tech career",
    "learn coding",
    "programming skills",
    "developer training",
    "tech education",
    "coding mentorship",
  ],
  authors: [{ name: "TechTalks" }],
  creator: "TechTalks",
  publisher: "TechTalks",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },

  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:url": "https://techtalkslb.com/", //main url
    "og:image": "/opengraph-image.jpg", //when u share the link on apps the img would be displayed
    "og:type": "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechTalks – Learn. Build. Grow.",
    description:
      "Real world programming courses, real projects. Build your skills and career with TechTalks.",
    images: ["/opengraph-image.jpg"],
    creator: "@techtalkslb", // Add your Twitter handle
  },

  category: "education",
  classification: "Education, Technology, Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      > <Navbar />
        <WhatsAppStickyButton />
        {children}
        <TechTalksFooter />
      </body>
    </html>
  );
}
