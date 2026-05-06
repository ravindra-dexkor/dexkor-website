import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TeamsSection from "@/components/TeamsSection";
import OutcomesSection from "@/components/OutcomesSection";
import CustomerStoriesSection from "@/components/CustomerStoriesSection";
import TrustSection from "@/components/TrustSection";
import ComparisonSection from "@/components/ComparisonSection";
import FutureSection from "@/components/FutureSection";
import NextStepSection from "@/components/NextStepSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TeamsSection />
      <OutcomesSection />
      <CustomerStoriesSection />
      <TrustSection />
      <ComparisonSection />
      <FutureSection />
      <NextStepSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
