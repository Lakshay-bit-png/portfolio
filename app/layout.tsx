import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "./data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              lakshay<span>.garg</span>
            </Link>
            <div className="nav-links">
              <Link href="/#work">work</Link>
              <Link href="/#projects">projects</Link>
              <Link href="/blog">blog</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="wrap">
            {profile.name}
          </div>
        </footer>
      </body>
    </html>
  );
}
