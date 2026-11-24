import AboutGallery from "@/components/AboutGallery";
import AboutSection from "@/components/AboutSection";
import HeroStreamline from "@/components/HeroStreamline";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "About Infinetic Studios | Website Development Company in Bokaro, Jharkhand",

  description:
    "Learn about Infinetic Studios, a trusted website development company in Bokaro, Chas and Jharkhand. We specialize in custom website development, Next.js, React, AI automation, ecommerce solutions and SEO-friendly web applications for businesses across India.",

  keywords: [
    "About Infinetic Studios",
    "Website Development Company Bokaro",
    "Website Development Company Chas",
    "Website Development Company Jharkhand",
    "Web Development Company India",
    "Next.js Development Company",
    "React Development Company",
    "AI Automation Company",
    "Professional Website Developers",
    "Digital Agency Jharkhand",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Infinetic Studios | Website Development Company in Bokaro",

    description:
      "Meet the team behind Infinetic Studios. We build modern websites, AI-powered solutions and SEO-optimized digital experiences for businesses across Bokaro, Jharkhand and India.",

    url: "https://www.infineticstudios.com/about",

    siteName: "Infinetic Studios",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Infinetic Studios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Infinetic Studios",

    description:
      "Discover Infinetic Studios, a website development company helping businesses grow with modern web solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

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