import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomLayout from "@/components/custom-layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Viral Tok",
  description: "Viral Tok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
