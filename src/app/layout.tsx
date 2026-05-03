import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoteWise AI | Understand Elections. Vote Smarter.",
  description: "Your AI-powered offline election assistant. Get instant answers about voter registration, documents, EVMs, and voting rights. 50+ election FAQs. Works without internet.",
  keywords: ["voting", "elections", "india", "voter registration", "democracy", "EVM", "election commission", "voter id", "how to vote"],
  authors: [{ name: "VoteWise AI" }],
  creator: "VoteWise AI",
  publisher: "VoteWise AI",
  robots: "index, follow",
  openGraph: {
    title: "VoteWise AI | Understand Elections. Vote Smarter.",
    description: "Your AI-powered offline election assistant. Get instant answers about Indian elections, voter registration, and voting rights.",
    type: "website",
    locale: "en_IN",
    siteName: "VoteWise AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoteWise AI | Understand Elections. Vote Smarter.",
    description: "Your AI-powered offline election assistant. Get instant answers about Indian elections.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`min-h-full flex flex-col bg-white dark:bg-[#0F172A] ${inter.variable} ${sora.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
