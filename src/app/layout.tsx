"use client";

import "./globals.css";
import { Mandali } from "next/font/google";

const mandali = Mandali({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Masak!</title>
      </head>
      <body
        className={`${mandali.className} bg-yellow-400 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
