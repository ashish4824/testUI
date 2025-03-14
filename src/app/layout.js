// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/Footer/Footer";
// import favicon from "./favicon.png";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

// export const viewport = {
//   width: "device-width",
//   initialScale: 1.0,
//   maximumScale: 1,
// };

// // SEO Metadata Configuration
// export const metadata = {
//   title: "Critical Touch Infotech | Web & App Development Experts",
//   description:
//     "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
//   keywords:
//     "technology solutions, web development, mobile apps, IT consulting, digital transformation, software development, React, Next.js, cloud computing, AI solutions, business automation, digital marketing",
//   authors: [{ name: "Critical Touch Infotech" }],
//   openGraph: {
//     title: "Critical Touch Infotech | Web & App Development Experts",
//     description:
//       "Critical Touch Infotech helps businesses grow with cutting-edge technology solutions, including web and mobile development.",
//     type: "website",
//     url: "https://criticaltouchinfotech.com",
//     images: [
//       {
//         url: "https://criticaltouchinfotech.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Critical Touch Infotech",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Critical Touch Infotech | Web & App Development Experts",
//     description:
//       "Critical Touch Infotech provides top-notch technology solutions to drive business success.",
//     images: ["https://criticaltouchinfotech.com/twitter-image.jpg"],
//   },
//   robots: "index, follow",
//   canonical: "https://criticaltouchinfotech.com/",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <link rel="icon" href={favicon} />
//         <meta name="theme-color" content="#ffffff" />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Head from "next/head";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Critical Touch Infotech | Web & App Development Experts",
  description:
    "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Critical Touch Infotech",
    url: "https://criticaltouchinfotech.com",
    title: "Critical Touch Infotech | Web & App Development Experts",
    description:
      "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
    images: [
      {
        url: "https://criticaltouchinfotech.com/og-image.jpg",
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
      "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
    image: "https://criticaltouchinfotech.com/twitter-image.jpg",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation."
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ts0n3wsJIlNYS4bLXZe_oZHha16Yb0n9Hw4-jOCT_CU" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE_HERE" />

        <meta property="og:title" content="Critical Touch Infotech | Web & App Development Experts" />
        <meta property="og:description" content="Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation." />
        <meta property="og:url" content="https://criticaltouchinfotech.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Critical Touch Infotech" />
        <meta property="og:image" content="https://criticaltouchinfotech.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Critical Touch Infotech | Web & App Development Experts" />
        <meta name="twitter:description" content="Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation." />
        <meta name="twitter:image" content="https://criticaltouchinfotech.com/twitter-image.jpg" />

        <link rel="canonical" href="https://criticaltouchinfotech.com/" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Critical Touch Infotech",
            "url": "https://criticaltouchinfotech.com",
            "logo": "https://criticaltouchinfotech.com/favicon.png",
            "description": "Critical Touch Infotech specializes in innovative web development, mobile apps, and IT consulting. Your trusted partner in digital transformation.",
            "sameAs": [
              "https://www.linkedin.com/company/criticaltouch-infotech/",
              "https://twitter.com/criticaltouch"
            ]
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
