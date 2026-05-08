import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"

import "./globals.css"
import "@xyflow/react/dist/style.css"
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
        <Script
          src="https://chat-widget-snowy.vercel.app/static/js/v1/widget.js"
          strategy="afterInteractive"
        />
        <Script id="dexkor-widget-init" strategy="afterInteractive">
          {`
            const initWidget = () => {
              if (window.initChatWidget) {
                window.initChatWidget({
                  hostUrl: window.location.origin,
                  uniquePartnerId: '6797656ca8375033a8b60ae6',
                  userEmail: "",
                  customerCode: "",
                  userName: "",
                  userNumber: "",
                });
              } else {
                setTimeout(initWidget, 500);
              }
            };
            initWidget();
          `}
        </Script>
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
