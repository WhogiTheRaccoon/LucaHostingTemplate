import { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/layout/ThemeToggle";

export const metadata = {
  title: "Sanoservers - Fast Game and Web servers that you can rely on.",
  description: "Experience fast, free game and web hosting with powerful performance, reliable uptime, and instant deployment.",
  keywords: ["Free servers", "Ryzen 7950X", "Game Server Hosting", "affordable hosting", "host services", "united states game hosting", "Ryzen VPS", "DDoS protection"],
  openGraph: {
    title: "Sano Servers",
    description: "Experience fast, free game and web hosting with powerful performance, reliable uptime, and instant deployment.",
    url: "https://sanoservers.com",
    siteName: "SanoServers",
    images: [
      {
        url: "https://cdn.chit.sh/Sano_banner-EMdZNJKWiB9bPidKOOYkvJ6N.png",
        width: 960,
        height: 540,
        alt: "SanoServers"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SanoServers Hosting",
    description: "Experience fast, free game and web hosting with powerful performance, reliable uptime, and instant deployment.",
    images: ["https://cdn.chit.sh/Sano_banner-EMdZNJKWiB9bPidKOOYkvJ6N.png"],
  },
  authors: [{ name: "SanoServers" }],
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="theme-default">
      <head>
        <script>
          {`
            if (localStorage.getItem('theme')) {
              document.documentElement.className = localStorage.getItem('theme');
            } else {
              document.documentElement.className = 'theme-default';
            }
          `}
        </script>
      </head>
      <body className="bg-background">
        <Navbar />
        <ThemeToggle />
        {children}
        <Footer />
      </body>
    </html>
  );
}
