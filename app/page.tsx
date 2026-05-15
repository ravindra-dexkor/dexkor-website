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
  title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
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
  alternates: {
    canonical: "https://dexkor.com",
  },
  openGraph: {
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
    url: "https://dexkor.com",
    siteName: "DexKor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
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
