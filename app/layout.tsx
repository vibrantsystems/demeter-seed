import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DemoNoticeBanner from "@/components/DemoNoticeBanner";

export const metadata: Metadata = {
  title: "Demeter Seed | Certified Seed Supplier",
  description:
    "Certified, high-quality seed varieties for sustainable agricultural production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-gray-100 antialiased">
        <Header />

        {/* Always visible demo notice */}
        <DemoNoticeBanner />

        <main className="min-h-screen pt-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
