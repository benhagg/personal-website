import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Haggard - Software Engineer",
  description:
    "Personal website of Ben Haggard, Software Engineer specializing in full-stack development, cloud architecture, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "TypeScript",
    "React",
    "AWS",
    "Next.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ben Haggard" }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: "Ben Haggard - Software Engineer",
    description: "Personal website of Ben Haggard, Software Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
