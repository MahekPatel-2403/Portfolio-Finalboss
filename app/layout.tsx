import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahek Patel — Backend Engineer",
  description:
    "Computer Science student and backend engineer building scalable APIs, networking solutions, and distributed systems using Python, FastAPI, PostgreSQL, and Linux.",
  keywords: [
    "Mahek Patel",
    "backend engineer",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "open source",
    "computer science",
  ],
  authors: [{ name: "Mahek Patel" }],
  openGraph: {
    title: "Mahek Patel — Backend Engineer",
    description:
      "Computer Science student passionate about backend engineering, networking, and open source.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
