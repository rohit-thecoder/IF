import HeroSection from "@/components/HeroSection";
import ShockingAboutUsLight from "../components/ShockingAboutUsLight";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Curoseal from "../components/Curoseal";
import CollaborationComponent from "../components/CollaborationComponent";
import CustomerProductFit from "../components/CustomerProductFit";
import StatsSection from "../components/StatsSection";
import { createPageMetadata } from "./seo";

/** @type {import("next").Metadata} */
export const metadata = {
  ...createPageMetadata({
    title: "Infinetic Studios | Best Web Development & Digital Agency in Bokaro, Jharkhand & India",
    description:
      "Website development, mobile apps, video editing, graphic design and social media management for Bokaro, Chas, Jharkhand and growing businesses across India.",
    pathname: "/",
  }),
  title: {
    absolute: "Infinetic Studios | Best Web Development & Digital Agency in Bokaro, Jharkhand & India",
  },
};

export default function HomePage() {
  return (
    <>
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
