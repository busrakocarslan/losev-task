import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./globals.css";

import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Büşra Koçarslan | Full Stack Developer | Yazılım Uzmanı | Beray",
  description: "Büşra Koçarslan - Full Stack Developer, yazılım uzmanı. Beray, avukat ve yazılım konularında deneyimli. React, Node.js, ve Next.js uzmanlığıyla projelerinize değer katın.",
  keywords: ["Büşra Koçarslan", "Beray", "yazılım", "avukat", "Full Stack Developer", "React Developer", "Next.js Developer", "Frontend Developer", "JavaScript Developer", "Web Developer"],
  authors: [{ name: "Büşra Koçarslan" }, { name: "Beray" }],
  creator: "Büşra Koçarslan",
  publisher: "Büşra Koçarslan ve Beray",
  openGraph: {
    title: "Büşra Koçarslan | Full Stack Developer | Yazılım Uzmanı | Beray",
    description: "Büşra Koçarslan ve Beray - Full Stack Developer, yazılım uzmanı ve avukat işbirliği. React, Node.js, ve Next.js projeleriniz için çözümler.",
    url: "https://busrakocarslan.com",
    siteName: "Büşra Koçarslan ve Beray Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg", // Bu dosyayı public klasörüne eklemelisiniz
        width: 1200,
        height: 630,
        alt: "Büşra Koçarslan - Full Stack Developer ve Beray - Avukat/Yazılım Uzmanı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Büşra Koçarslan ve Beray | Yazılım & Hukuk",
    description: "Full Stack Developer ve avukatlık uzmanlığı. Yazılım ve hukuk alanlarında kaliteli hizmet.",
    images: ["/twitter-image.jpg"], // Bu dosyayı public klasörüne eklemelisiniz
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://busrakocarslan.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Büşra Koçarslan, Beray, yazılım, avukat, React, Next.js, Node.js, Full Stack Developer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}