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
  title: "Beray Büşra Koçarslan | Full Stack Developer | Yazılım Uzmanı",
  description: "Beray Büşra Koçarslan - Full Stack Developer, yazılım uzmanı. React, Node.js, ve Next.js uzmanlığıyla projelerinize değer katın.",
  keywords: ["Beray Büşra Koçarslan", "Beray", "Büşra Koçarslan", "Full Stack Developer", "React Developer", "Next.js Developer", "Frontend Developer", "JavaScript Developer", "Web Developer"],
  authors: [{ name: "Beray Büşra Koçarslan" }],
  creator: "Beray Büşra Koçarslan",
  publisher: "Beray Büşra Koçarslan",
  openGraph: {
    title: "Beray Büşra Koçarslan | Full Stack Developer | Yazılım Uzmanı",
    description: "Beray Büşra Koçarslan - Full Stack Developer, yazılım uzmanı. React, Node.js, ve Next.js uzmanlığıyla projelerinize değer katın.",
    url: "https://busrakocarslan.com",
    siteName: "Beray Büşra Koçarslan Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beray Büşra Koçarslan - Full Stack Developer",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beray Büşra Koçarslan | Full Stack Developer",
    description: "Beray Büşra Koçarslan - Full Stack Developer ve yazılım uzmanı",
    images: ["/twitter-image.jpg"],
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
        <meta name="google-site-verification" content="JzNVH27jeyDfccM8k-U4LFJUHtEj64TNse38pyXjCEU" />
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