import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login & Register",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
