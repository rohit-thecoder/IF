const siteUrl = "https://infineticstudios.com";

const faqEntries = [
  {
    question: "What are your service charges?",
    answer:
      "Pricing is transparent and designed for startups, creators, and small businesses. Final cost depends on scope and complexity. Website development starts at ₹999, social media management at ₹2,999 per month, video editing at ₹99 per minute, and graphic design at ₹499 per design.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Contact us through WhatsApp or the contact form. After discussing requirements, we recommend a plan, confirm timelines, and begin the project.",
  },
  {
    question: "What is the delivery timeline?",
    answer:
      "Design tasks are usually delivered within 24 hours. Website and video project timelines depend on scope, with clear delivery commitments agreed before work starts.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes. Revisions are included to help ensure the final output matches expectations; the number depends on the selected package.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "Yes. Optional maintenance and support plans are available for websites, social media, and long-term digital growth.",
  },
];

const serviceOffers = [
  ["Website Development Services", "Next.js, React, e-commerce and business websites"],
  ["Mobile App Development Services", "Android and iOS mobile applications"],
  ["Professional Video Editing & Reels Production", "Video editing, YouTube editing and Reels production"],
  ["Graphic Designing, Logo & Poster Making Services", "Graphic design, logo design, poster making and banner design"],
  ["Social Media Management & Digital Growth", "Social media management, content strategy and digital growth"],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Infinetic Studios",
      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,
      email: "infineticstudios@gmail.com",
      telephone: "+91-6202041591",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jodhadih More, Chas",
        addressLocality: "Bokaro Steel City, Chas",
        addressRegion: "Jharkhand",
        addressCountry: "IN",
      },
      areaServed: [
        "Bokaro Steel City",
        "Chas",
        "Dhanbad",
        "Ranchi",
        "Deoghar",
        "Jamshedpur",
        "Jharkhand",
        "India",
      ].map((name) => ({
        "@type": name === "Jharkhand" ? "State" : name === "India" ? "Country" : "City",
        name,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Infinetic Studios Digital Services",
        itemListElement: serviceOffers.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Infinetic Studios",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqEntries.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
