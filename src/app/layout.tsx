import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider} from '@clerk/nextjs'
import { auth } from "@clerk/nextjs/server";
import { use } from "react";
import CartProvider from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        {userId && (
          <Navbar />
        )}
        {children}
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}