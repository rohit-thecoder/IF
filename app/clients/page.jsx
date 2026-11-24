import Clients from "@/components/Clients";

export const metadata = {
  title:
    "Our Clients & Portfolio | Website Development Projects | Infinetic Studios",

  description:
    "Explore the client portfolio of Infinetic Studios and discover our website development, mobile app development, SEO, graphic designing, video editing and digital transformation projects. We proudly serve businesses across Bokaro, Chas, Jharkhand and India.",

  keywords: [
    "Infinetic Studios Portfolio",
    "Website Development Portfolio",
    "Web Design Projects",
    "Client Portfolio",
    "Website Development Company Bokaro",
    "Website Development Company Jharkhand",
    "React Website Projects",
    "Next.js Projects",
    "Mobile App Development Portfolio",
    "SEO Projects",
    "Graphic Design Portfolio",
    "Video Editing Portfolio",
    "Digital Agency Jharkhand",
  ],

  alternates: {
    canonical: "/clients",
  },

  openGraph: {
    title:
      "Our Clients & Portfolio | Infinetic Studios",

    description:
      "Browse our portfolio of website development, mobile app development, SEO, graphic designing and digital projects delivered for businesses across Jharkhand and India.",

    url: "https://www.infineticstudios.com/clients",

    siteName: "Infinetic Studios",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinetic Studios Client Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Our Clients & Portfolio | Infinetic Studios",

    description:
      "Explore website development, app development and digital projects completed by Infinetic Studios.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ClientPage() {
  return <Clients />;
}