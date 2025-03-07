import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

// SEO Metadata Configuration
export const metadata = {
  title: "Critical Touch Infotech | Web & App Development Experts",
  description:
    "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
  keywords:
    "technology solutions, web development, mobile apps, IT consulting, digital transformation, software development, React, Next.js, cloud computing, AI solutions, business automation, digital marketing",
  authors: [{ name: "Critical Touch Infotech" }],
  openGraph: {
    title: "Critical Touch Infotech | Web & App Development Experts",
    description:
      "Critical Touch Infotech helps businesses grow with cutting-edge technology solutions, including web and mobile development.",
    type: "website",
    url: "https://www.criticaltouchinfotech.com",
    images: [
      {
        url: "https://www.criticaltouchinfotech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Critical Touch Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical Touch Infotech | Web & App Development Experts",
    description:
      "Critical Touch Infotech provides top-notch technology solutions to drive business success.",
    images: ["https://www.criticaltouchinfotech.com/twitter-image.jpg"],
  },
  robots: "index, follow",
  canonical: "https://www.criticaltouchinfotech.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}