import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";
import Navbar from "./components/Navbars";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Rabira's Portfolio",
  description: "Showcasing projects, skills, and creativity",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
        
        </body>
    </html>
  );
}
