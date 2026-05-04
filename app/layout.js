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

  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "bzQ6tn0kfZ5WgW75nNVyiekbgfomwg-6rVKQ87US2AY",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}