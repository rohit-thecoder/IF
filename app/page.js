import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShockingAboutUsLight from "../components/ShockingAboutUsLight";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Curoseal from "../components/Curoseal";
import CollaborationComponent from "../components/CollaborationComponent";
import CustomerProductFit from "../components/CustomerProductFit";
import StatsSection from "../components/StatsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Curoseal />
      <CollaborationComponent />
      <CustomerProductFit />
      <ShockingAboutUsLight />
      <StatsSection />
      <TestimonialCarousel />
    </>
  );
}
