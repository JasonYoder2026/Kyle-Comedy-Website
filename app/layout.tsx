import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Schrock",
  description: "Official site of Kyle Schrock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-900 text-white flex flex-col">
        <header className="p-4 flex justify-between items-center bg-neutral-800 shadow">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full object-cover" src="/kyle.jpg"></img>
            <h1 className="text-xl font-bold">Kyle Schrock</h1>
          </div>
          <nav className="space-x-6">
            <Link href="/">Media</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="flex-grow p-6">{children}</main>
        <footer className="p-4 text-center text-sm text-black border-t border-neutral-700">
          © {new Date().getFullYear()} Kyle Schrock. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
