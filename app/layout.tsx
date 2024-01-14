import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/lib/AppContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pedro Barbeitos",
  description: "The personal website of Pedro Barbeitos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          " flex flex-col items-center min-h-dvh bg-background font-sans antialiased px-5 pb-4 overflow-auto justify-between content-between  ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <Navbar />
            {children}
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
