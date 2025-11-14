import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Aeternum Haute Horlogerie",
  description:
    "Montres suisses d'exception inspirées des constellations. Découvrez l'univers ultra-luxe d'Aeternum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${cormorant.variable} antialiased`}>
        <div className="min-h-screen bg-cosmos text-cosmic-foreground">
          <div className="starfield fixed inset-0 -z-10" />
          <Header />
          <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
