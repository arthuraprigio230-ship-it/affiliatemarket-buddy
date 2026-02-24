import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AwardsSection from "@/components/AwardsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersMarquee />
      <FeaturesSection />
      <HowItWorksSection />
      <AwardsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
