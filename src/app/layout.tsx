"use client";

import "./globals.css";
import { Mandali } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const mandali = Mandali({ weight: "400", subsets: ["latin"] });

const queryClient = new QueryClient();

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <title>Masak!</title>
      </head>
      <body
        className={`${mandali.className} bg-yellow-400 text-gray-900 antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
