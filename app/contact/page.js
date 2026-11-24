import ContactSection from "@/components/ContactSection";

export const metadata = {
  title:
    "Contact Infinetic Studios | Website Development Company in Bokaro, Jharkhand",

  description:
    "Get in touch with Infinetic Studios for professional website development, mobile app development, SEO, social media management, graphic designing and video editing services. Contact our team in Bokaro, Jharkhand for a free consultation and custom digital solutions.",

  keywords: [
    "Contact Infinetic Studios",
    "Website Development Company Bokaro",
    "Website Development Company Jharkhand",
    "Contact Website Developer",
    "Web Development Services Bokaro",
    "App Development Company Jharkhand",
    "SEO Services Bokaro",
    "Graphic Designing Services",
    "Video Editing Services",
    "Social Media Management",
    "Digital Agency Jharkhand",
    "Free Website Consultation",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Infinetic Studios | Website Development Company in Bokaro",

    description:
      "Contact Infinetic Studios for website development, app development, SEO, graphic designing, video editing and digital solutions across Bokaro, Chas, Jharkhand and India.",

    url: "https://www.infineticstudios.com/contact",

    siteName: "Infinetic Studios",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Infinetic Studios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Infinetic Studios",

    description:
      "Get in touch with Infinetic Studios for website development and digital solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}