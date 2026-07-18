import AboutGallery from "../../components/AboutGallery";
import AboutSection from "../../components/AboutSection";
import HeroStreamline from "../../components/HeroStreamline";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "About Infinetic Studios | Digital Agency in Jharkhand & Bokaro",
  description:
    "Learn about Infinetic Studios, a professional web development company based in Bokaro, Jharkhand.",
};
export default function ServicesPage() {
  return <>
  <AboutSection />
  <HeroStreamline />
  
  <TeamSection />
  <AboutGallery />
  </>;
}