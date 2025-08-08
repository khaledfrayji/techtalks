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

export async function generateMetadata() {
  const siteUrl = "https://techtalkslb.com";
  
  return {
    title: {
      default: "TechTalks – Learn. Build. Grow. | Your programming platform",
      template: "%s | TechTalks"
    },
    description: "Master real-world programming with TechTalks. Build actual projects, learn industry skills, and advance your career with our hands-on coding courses and expert mentorship.",
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
      "coding mentorship"
    ],
    authors: [{ name: "TechTalks" }],
    creator: "TechTalks",
    publisher: "TechTalks",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: "TechTalks – Learn. Build. Grow.",
      description: "Real world programming courses, real projects. Build your skills and career with TechTalks.",
      url: siteUrl,
      siteName: "TechTalks",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image.jpg", // Add your OG image
          width: 1200,
          height: 630,
          alt: "TechTalks - Real World Programming Courses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TechTalks – Learn. Build. Grow.",
      description: "Real world programming courses, real projects. Build your skills and career with TechTalks.",
      images: ["/opengraph-image.jpg"],
      creator: "@techtalkslb", // Add your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
   
    category: "education",
    classification: "Education, Technology, Programming",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
    ],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechTalks",
              url: "https://techtalkslb.com",
              logo: "https://techtalkslb.com/l.png",
              description: "Real world programming courses and tech education platform",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["English", "Arabic"]
              },
              sameAs: [
                // Add your social media profiles
                "https://www.linkedin.com/company/techtalkscourses",
                "https://twitter.com/techtalkslb",
                "https://www.instagram.com/techtalks.lb"
              ]
            })
          }}
        />
        
        {/* Structured Data - Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "TechTalks",
              url: "https://techtalkslb.com",
              description: "Programming education platform offering real-world coding courses",
              address: {
                "@type": "PostalAddress",
                addressCountry: "LB",
                addressRegion: "Beirut"
              }
            })
          }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <Link
          href="/"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </Link>
        
        <Navbar />
        <WhatsAppStickyButton />
        
        <main id="main-content">
          {children}
        </main>
        
        <TechTalksFooter />
      </body>
    </html>
  );
}