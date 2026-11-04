import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";
import Navbar from "./components/Navbars";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rabira Asefa // Full-Stack Software Engineer",
  description: "Technical Neo-Brutalist portfolio showcasing high-performance web systems, scalable APIs, and full-stack engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-mono bg-[#090c10] text-[#e6edf3] selection:bg-[#00ff66] selection:text-black"
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
