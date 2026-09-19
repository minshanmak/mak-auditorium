import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAK Auditorium | Premium Convention Center & Marriage Hall",
  description: "MAK Auditorium is a premium convention center, marriage hall, and event space. Book MAK auditorium for your weddings, corporate gatherings, and large-scale celebrations.",
  keywords: ["mak auditorium", "MAK auditorium", "marriage hall", "convention center", "wedding venue", "event space", "banquet hall", "auditorium"],
  openGraph: {
    title: "MAK Auditorium",
    description: "Premium convention center and marriage hall.",
    siteName: "MAK Auditorium",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAK Auditorium",
    description: "Premium convention center and marriage hall.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
