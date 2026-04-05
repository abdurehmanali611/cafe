import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe",
  description: "Cafe Portfolio user panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="relative flex flex-col gap-8 pb-10 pt-3">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(circle_at_top,rgba(255,228,169,0.75),transparent_55%)]" />
        <Navbar />
        {children}
        <Footer />
      </main>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
