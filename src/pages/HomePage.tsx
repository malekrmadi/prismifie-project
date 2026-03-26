import { Hero } from "../sections/Hero";
import { PrismLight } from "../sections/PrismLight";
import { ExpertisesOverview } from "../sections/ExpertisesOverview";
import { ServicesDetails } from "../sections/ServicesDetails";
import { OffresPreview } from "../sections/OffresPreview";
import { Differenciation } from "../sections/Differenciation";
import { CTAFinal } from "../sections/CTAFinal";
import { FAQ } from "../sections/FAQ";
import { Contact } from "../sections/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <PrismLight />
      <ExpertisesOverview />
      <ServicesDetails />
      <OffresPreview />
      <Differenciation />
      <FAQ />
      <CTAFinal />
      <Contact />
    </main>
  );
}
