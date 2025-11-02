import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://main-portfolio-five-beryl.vercel.app"),
  title: "Laith's Portfolio",
  description:
    "A modern and interactive portfolio built with Next.js showcasing Laith AlMohsen's game development projects, 3D designs, and creative work.",
  keywords: [
    "Portfolio",
    "Laith",
    "Game Development",
    "Blender",
    "3D Design",
    "Unity",
  ],
  authors: [{ name: "Laith AlMohsen" }],
  openGraph: {
    title: "Laith's Portfolio",
    description:
      "Explore Laith AlMohsen's game development and 3D design projects, built with Next.js and modern web tools.",
    url: "https://main-portfolio-five-beryl.vercel.app/",
    siteName: "Laith Portfolio",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
