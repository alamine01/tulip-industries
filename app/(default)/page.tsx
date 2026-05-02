export const metadata = {
  title: "Tulip Industries | Industrial Innovation in Africa",
  description: "Advanced interactive kiosks and telemedicine solutions engineered for the African context.",
};

import Hero from "@/components/hero-home";
import ModelViewerSection from "@/components/model-viewer-section";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ModelViewerSection />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
