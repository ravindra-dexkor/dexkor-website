import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Scrollable area to test navbar stickiness */}
      <div className="h-[100vh] bg-black" />
    </main>
  );
}
