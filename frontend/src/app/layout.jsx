import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDFix",
  description: "Crie currículos profissionais rapidamente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="min-h-screen transition-colors duration-300">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

