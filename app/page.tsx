import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import CustomerStoriesSection from "@/components/sections/CustomerStoriesSection";
import TrustSection from "@/components/sections/TrustSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FutureSection from "@/components/sections/FutureSection";
import Footer from "@/components/layout/Footer";
import OperatingLayerSection from "@/components/sections/OperatingLayerSection";

export const metadata: Metadata = {
  title: "DexKor | Enterprise CRM & Automation Platform",
  description: "DexKor is a next-generation enterprise CRM and automation platform designed to streamline your business operations and accelerate growth.",
  keywords: ["CRM", "Automation", "Enterprise Software", "Business Growth", "Workflow Automation", "DexKor"],
  alternates: {
    canonical: "https://dexkor.com",
  },
  openGraph: {
    title: "DexKor | Enterprise CRM & Automation Platform",
    description: "DexKor is a next-generation enterprise CRM and automation platform designed to streamline your business operations and accelerate growth.",
    url: "https://dexkor.com",
    siteName: "DexKor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DexKor | Enterprise CRM & Automation Platform",
    description: "DexKor is a next-generation enterprise CRM and automation platform designed to streamline your business operations and accelerate growth.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OperatingLayerSection />
      <OutcomesSection />
      <CustomerStoriesSection />
      <TrustSection />
      <ComparisonSection />
      {/* <FutureSection /> */}
      <Footer />
    </main>
  );
}
