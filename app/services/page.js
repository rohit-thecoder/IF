import ServicesSection from "@/components/ServiceSection";

export const metadata = {
  title:
    "Website Development, App Development & Digital Services | Infinetic Studios",

  description:
    "Infinetic Studios offers professional website development, mobile app development, social media management, graphic designing, video editing, AI automation and custom digital solutions in Bokaro, Chas, Jharkhand and across India.",

  keywords: [
    "Website Development Company in Bokaro",
    "Website Development Company in Chas",
    "Website Development Company in Jharkhand",
    "Website Development Services",
    "Custom Website Development",
    "Business Website Development",
    "Responsive Website Design",
    "SEO Friendly Website Development",
    "Next.js Development",
    "React Development",
    "Mobile App Development",
    "Android App Development",
    "Social Media Management",
    "Graphic Designing Services",
    "Video Editing Services",
    "AI Automation Services",
    "AI Agent Development",
    "Digital Solutions Company",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Website Development & Digital Services | Infinetic Studios",

    description:
      "Professional website development, app development, social media management, graphic designing, video editing and AI automation services for businesses across Jharkhand and India.",

    url: "https://www.infineticstudios.com/services",

    siteName: "Infinetic Studios",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinetic Studios Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Website Development Services | Infinetic Studios",

    description:
      "Explore our website development, app development, graphic designing, social media management and AI solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}