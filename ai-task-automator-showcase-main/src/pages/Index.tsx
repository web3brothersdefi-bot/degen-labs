import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import TaskCategoriesSection from "@/components/TaskCategoriesSection";
import PartnersSection from "@/components/PartnersSection";
import LogoMarquee from "@/components/LogoMarquee";
// import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
// import PromiseSection from "@/components/PromiseSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import WhyGrowRex from "@/components/WhyGrowRex";
import OurBenefits from "@/components/OurBenefits";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <LogoMarquee />
        <section id="about">
          <AboutSection />
        </section>
        <section id="results">
          <ResultsSection />
        </section>
        <section id="services">
          <TaskCategoriesSection />
        </section>
        <PartnersSection />
        {/* ComparisonSection removed per request */}
        <BenefitsSection />
        <WhyGrowRex />
        <OurBenefits />
        <GuaranteeSection />
        <AdvantagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;