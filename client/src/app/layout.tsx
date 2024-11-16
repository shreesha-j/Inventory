import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutSelect from "./LayoutWrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <LayoutSelect >
          {children}
        </LayoutSelect>
      </body>
    </html>
  );
}
