import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCardsSection } from "@/components/home/ServiceCardsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessStepsSection } from "@/components/home/ProcessStepsSection";
import { InternationalTransportSection } from "@/components/home/InternationalTransportSection";
import { FleetSection } from "@/components/home/FleetSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { VideoGallerySection } from "@/components/home/VideoGallerySection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FAQPreviewSection } from "@/components/home/FAQPreviewSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCardsSection />
      <WhyChooseUsSection />
      <ProcessStepsSection />
      <InternationalTransportSection />
      <FleetSection />
      <StatisticsSection />
      <VideoGallerySection />
      <BlogPreviewSection />
      <FAQPreviewSection />
      <ContactCTASection />
    </>
  );
}
