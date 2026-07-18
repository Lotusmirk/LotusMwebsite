import { Hero } from '../components/sections/Hero';
import { CapabilitiesIntro } from '../components/sections/CapabilitiesIntro';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { IndustriesOverview } from '../components/sections/IndustriesOverview';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ImpactMetrics } from '../components/sections/ImpactMetrics';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { WhyLotusmirk } from '../components/sections/WhyLotusmirk';
import { ClientsTestimonials } from '../components/sections/ClientsTestimonials';
import { Insights } from '../components/sections/Insights';
import { FinalCTA } from '../components/sections/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesIntro />
      <ServicesOverview />
      <IndustriesOverview />
      <HowItWorks />
      <ImpactMetrics />
      <FeaturedProjects />
      <WhyLotusmirk />
      <ClientsTestimonials />
      <Insights />
      <FinalCTA />
    </>
  );
}
