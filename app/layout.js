import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Last Third of Night Calculator (Tahajjud Time) | Islamic Tool",
  description:
    "Easily calculate the last third of the night (Tahajjud time) using Maghrib and Fajr prayer times. A simple, fast, and accurate Islamic prayer timing tool.",
  
  keywords: [
    "tahajjud time calculator",
    "last third of night",
    "islamic prayer times",
    "maghrib fajr calculator",
    "night prayer calculator",
    "tahajjud calculator online",
  ],

  metadataBase: new URL("https://tahajjud-time-calculator.vercel.app"),

  openGraph: {
    title: "Last Third of Night Calculator (Tahajjud Time)",
    description:
      "Calculate Tahajjud time easily using Maghrib and Fajr prayer times.",
    url: "https://tahajjud-time-calculator.vercel.app",
    siteName: "Tahajjud Calculator",
    type: "website",
    images: [
      {
        url: "/twitter-card.png",
        width: 512,
        height: 512,
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Last Third of Night Calculator",
    description:
      "Find Tahajjud time easily using Maghrib and Fajr prayer times.",
    images: ["/twitter-card.png"],
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}