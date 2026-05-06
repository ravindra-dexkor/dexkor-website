import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const satoshi = localFont({
  src: "../public/font/Fonts/WEB/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, satoshi.variable, "font-sans")}
    >
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
