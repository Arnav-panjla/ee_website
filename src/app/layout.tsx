import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IIT Delhi - Electrical Engineering",
  description: "Making Connections. Delivering Results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
