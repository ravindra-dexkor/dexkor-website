import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import OperatingLayerSection from "@/components/sections/OperatingLayerSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TeamsSection from "@/components/sections/TeamsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import CustomerStoriesSection from "@/components/sections/CustomerStoriesSection";
import TrustSection from "@/components/sections/TrustSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FutureSection from "@/components/sections/FutureSection";
import NextStepSection from "@/components/sections/NextStepSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OperatingLayerSection />
      {/* <HowItWorksSection /> */}
      {/* <TeamsSection /> */}
      <OutcomesSection />
      <CustomerStoriesSection />
      <TrustSection />
      <ComparisonSection />
      <FutureSection />
      {/* <NextStepSection />
      <FinalCTASection /> */}
      <Footer />
    </main>
  );
}
