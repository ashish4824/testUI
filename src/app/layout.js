import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced metadata object for SEO
export const metadata = {
  title: "Critical Touch Infotech - Your Technology Partner",
  description: "Critical Touch Infotech provides innovative technology solutions to help businesses thrive in the digital age. Specializing in web development, mobile apps, and IT consulting.",
  keywords: "technology, web development, mobile apps, IT consulting, software solutions, digital transformation",
  author: "Critical Touch Infotech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.criticaltouchinfotech.com" />
        <meta property="og:image" content="https://www.criticaltouchinfotech.com/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.criticaltouchinfotech.com/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.criticaltouchinfotech.com" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Viewport Meta Tag for Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}