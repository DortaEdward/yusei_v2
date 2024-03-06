import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} bg-gradient-to-b from-gray-50 to-gray-300`}>
          <ClerkLoaded>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
