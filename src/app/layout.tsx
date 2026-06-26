import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./neurality.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurality — AI chatbots, Discord bots & modern web apps",
  description:
    "Neurality builds AI chatbot platforms, Discord bots, and modern web applications. Home of Cortex, Cortex 4.6, Cortex Code, and Axion.",
  keywords: [
    "Neurality",
    "Cortex",
    "Cortex 4.6",
    "Cortex Code",
    "Axion",
    "AI chatbot",
    "Discord bot",
    "web applications",
  ],
  authors: [{ name: "Neurality-Inc" }],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: "Neurality",
    description:
      "We build AI chatbot platforms, Discord bots, and modern web applications.",
    siteName: "Neurality",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Neurality",
    description:
      "We build AI chatbot platforms, Discord bots, and modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
