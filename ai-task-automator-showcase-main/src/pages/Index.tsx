import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResultsSection from '../components/ResultsSection';
import TaskCategoriesSection from '../components/TaskCategoriesSection';
import PartnersSection from '../components/PartnersSection';
import BenefitsSection from '../components/BenefitsSection';
import WhyDegenLabs from '../components/WhyGrowRex';
import AdvantagesSection from '../components/AdvantagesSection';
import OurBenefits from '../components/OurBenefits';
import GuaranteeSection from '../components/GuaranteeSection';
import MeetingBookingSection from '../components/MeetingBookingSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <TaskCategoriesSection />
      <PartnersSection />
      <BenefitsSection />
      <WhyDegenLabs />
      <AdvantagesSection />
      <OurBenefits />
      <GuaranteeSection />
      <MeetingBookingSection />
      <Footer />
    </div>
  );
};

export default Index;