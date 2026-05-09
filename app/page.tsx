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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
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
