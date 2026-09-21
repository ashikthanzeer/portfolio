import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050914",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ashik Muhammed T — Computer Science & Data Science Undergrad",
  description:
    "Portfolio of Ashik Muhammed T — CSE student at College of Engineering Trivandrum & BS Data Science at IIT Madras. Building software, data science models, and real-world tools.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable}`} suppressHydrationWarning>
      <body
        className="bg-bg text-content-primary font-sans antialiased selection:bg-primary selection:text-bg"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
