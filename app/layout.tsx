import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alizeh Adeel | Machine Learning & Generative AI Engineer",
  description: "Digital Portfolio of Alizeh Adeel, a Machine Learning Engineer specializing in end-to-end ML/DL pipelines, YOLO, RAG, and LangGraph-based agentic workflows.",
  keywords: [
    "Alizeh Adeel",
    "Machine Learning Engineer",
    "Generative AI",
    "RAG",
    "LangGraph",
    "Python Developer",
    "FAST NUCES",
    "Portfolio"
  ],
  authors: [{ name: "Alizeh Adeel" }],
  openGraph: {
    title: "Alizeh Adeel | Machine Learning & Generative AI Engineer",
    description: "Digital Portfolio of Alizeh Adeel, specializing in RAG, LangGraph, and MLOps.",
    url: "https://digital-cv-two.vercel.app",
    siteName: "Alizeh Adeel Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#030712] text-gray-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
