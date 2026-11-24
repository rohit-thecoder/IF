import AboutGallery from "@/components/AboutGallery";
import AboutSection from "@/components/AboutSection";
import HeroStreamline from "@/components/HeroStreamline";
import TeamSection from "@/components/TeamSection";
import { createPageMetadata } from "../seo";

/** @type {import("next").Metadata} */
export const metadata = createPageMetadata({
  title: "About Our Web, App & Creative Agency",
  description:
    "Meet Infinetic Studios, the Bokaro agency for custom websites, mobile apps, video editing, graphic design and social media management for brands across India.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <HeroStreamline />
      <TeamSection />
      <AboutGallery />
    </>
  );
}
