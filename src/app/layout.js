import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Qasim Mansoori | Full-Stack & AI/ML Developer",
  description: "Portfolio of Qasim Mansoori - Full-Stack & AI/ML Developer building production-ready web and AI systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
