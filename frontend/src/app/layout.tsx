import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "../components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Khalkar | Blog",
  description:
    "Welcome to my personal blog where I share insights on development, design, and personal growth.",
  keywords: [
    "Yash Khalkar",
    "Blog",
    "Web Development",
    "JavaScript",
    "Next.js",
    "GraphQL",
    "Life",
  ],
  authors: [{ name: "Yash Khalkar", url: "https://yashkhalkar.vercel.app" }],
  creator: "Yash Khalkar",
  openGraph: {
    title: "Yash Khalkar | Blog",
    description: "Explore my latest blogs, thoughts, and ideas.",
    url: "https://blogs-yashkhalkar.vercel.app",
    siteName: "Yash Khalkar Blog",
    images: [
      {
        url: "https://blogs-yashkhalkar.vercel.app/yash.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Khalkar Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Khalkar | Blog",
    description: "My thoughts on development, design, and more.",
    creator: "@yashkhalkar001",
    images: ["https://blogs-yashkhalkar.vercel.app/yash.jpg"],
  },
  metadataBase: new URL("https://blogs-yashkhalkar.vercel.app"),
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
        <NavbarDemo />
        {children}
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1925889092848768"
            crossOrigin="anonymous"
          ></script>
        )}
      </body>
    </html>
  );
}
