import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"

import "./globals.css"
import "@xyflow/react/dist/style.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dexkor.com"),
  title: {
    default: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    template: "%s | DexKor",
  },
  description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
  keywords: [
    "CRM", "Automation", "Enterprise Software", "Business Growth", "Workflow Automation", "DexKor",
    "ai native support platform", "customer lifecycle platform", "post sale operations platform",
    "customer lifecycle management software", "ai helpdesk software", "omnichannel support platform",
    "zendesk alternative", "freshdesk alternative", "customer success software",
    "churn prediction software", "customer health scoring software", "churnzero alternative",
    "customer onboarding software", "rocketlane alternative", "sales pipeline software",
    "zoho crm alternative", "pipedrive alternative", "agentic ai customer support",
    "ai support copilot", "ai customer success platform"
  ],
  authors: [{ name: "DexKor Team" }],
  creator: "DexKor",
  publisher: "DexKor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dexkor.com",
    siteName: "DexKor",
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
    creator: "@dexkor",
  },
};

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
        {/* <Script
          src="https://chat-widget-snowy.vercel.app/static/js/v1/widget.js"
          strategy="afterInteractive"
        />
        <Script id="dexkor-widget-init" strategy="afterInteractive">
          {`
            (function() {
              let attempts = 0;
              const maxAttempts = 30; // 15 seconds max
              
              function initDexkor() {
                if (window.initChatWidget) {
                  window.initChatWidget({
                    hostUrl: window.location.origin,
                    uniquePartnerId: '6797656ca8375033a8b60ae6',
                    userEmail: "",
                    customerCode: "",
                    userName: "",
                    userNumber: "",
                  });
                  console.log("DexKor Widget: Initialized successfully");
                } else if (attempts < maxAttempts) {
                  attempts++;
                  setTimeout(initDexkor, 500);
                } else {
                  console.error("DexKor Widget: Failed to load after 15s");
                }
              }

              if (document.readyState === 'complete') {
                initDexkor();
              } else {
                window.addEventListener('load', initDexkor);
              }
            })();
          `}
        </Script> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XB56M0QBPG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XB56M0QBPG');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wpb1pgay60");
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
