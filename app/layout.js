import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLoader from "@/components/RouteLoader";
import RouteWatcher from "@/components/RouteWatcher";
import { LoaderProvider } from "@/context/LoaderContext";
// import Chatbot from "@/components/Chatbot";

export const metadata = {
  metadataBase: new URL("https://www.infineticstudios.com"),

  title: {
    default:
      "Infinetic Studios | Website Development Company in Bokaro, Jharkhand",
    template: "%s | Infinetic Studios",
  },

  description:
    "Infinetic Studios is a professional website development company in Bokaro, Chas and Jharkhand. We build SEO-friendly websites, ecommerce solutions, AI-powered applications, React and Next.js websites for businesses across India.",

  "keywords": [
    // --- 1. WEB & FULL STACK DEVELOPMENT (Core Tech Stack) ---
    "Website Development Company in Bokaro",
    "Website Development Company in Chas",
    "Website Development Company in Jharkhand",
    "Website Development Company in Dhanbad",
    "Website Development Company in Ranchi",
    "Website Development Company in Jamshedpur",
    "Best Website Development Company in Bokaro",
    "Best Website Development services in Bokaro",
    "Web Development Company in Bokaro",
    "Custom Website Development in Bokaro",
    "Business Website Development in Bokaro",
    "Next.js Development in Bokaro Jharkhand",
    "React Development in Bokaro Jharkhand",
    "Full Stack Web Developer in Bokaro",
    "MERN Stack Developer in Jharkhand",
    "Python Django Web Development Jharkhand",
    "Freelance Full Stack Developer Bokaro",
    "E-commerce Website Development in Ranchi",
    "PHP Laravel Developer in Bokaro Chas",
    "UI/UX Front End Developer Jharkhand",
    "Web Development Services for Startups Jharkhand",

    // --- 2. AI, AUTOMATION & ADVANCED TECH ---
    "AI Website Development in Bokaro Jharkhand",
    "AI Automation Services in Bokaro Jharkhand",
    "AI Agent Development in Bokaro Jharkhand",
    "Chatbot Integration Services Jharkhand",
    "AI Integrated Web Applications Ranchi",
    "Business Process Automation Bokaro",

    // --- 3. GRAPHICS DESIGN & BRANDING (New Additions) ---
    "Best Graphics Designer in Bokaro",
    "Graphic Design Services in Jharkhand",
    "Logo Design Company in Bokaro Chas",
    "Professional Brochure and Banner Design Bokaro",
    "Social Media Post Designer Jharkhand",
    "Brand Identity Design Services Ranchi",
    "UI UX Design Agency in Jharkhand",
    "Custom Vector Graphics and Illustration Bokaro",
    "Freelance Graphic Designer Dhanbad",
    "Business Card and Menu Card Design Bokaro",

    // --- 4. SOCIAL MEDIA MANAGEMENT & DIGITAL MARKETING ---
    "Social Media Management Services in Bokaro",
    "Social Media Marketing Agency in Jharkhand",
    "Instagram and Facebook Page Management Bokaro",
    "Best Digital Marketing Agency in Bokaro Chas",
    "YouTube Channel Optimization and Management Jharkhand",
    "Content Creation Services in Bokaro",
    "Real Estate Social Media Marketing Jharkhand",
    "Coaching Institute Marketing Services Bokaro",
    "Local SEO and Lead Generation Services Bokaro",

    // --- 5. MAINTENANCE, SEO & GENERIC ---
    "Website Maintenance Services in Jharkhand",
    "SEO Friendly Website Design Bokaro",
    "Website Repair and Redesign Services Chas",
    "Website Development Company India",
    "Web Design Company",
    "Responsive Website Design"
],

  authors: [
    {
      name: "Infinetic Studios",
      url: "https://www.infineticstudios.com",
    },
  ],

  creator: "Infinetic Studios",

  publisher: "Infinetic Studios",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Infinetic Studios | Website Development Company in Bokaro",
    description:
      "Professional website development, ecommerce websites, AI automation and SEO-friendly web solutions in Bokaro, Chas and Jharkhand.",

    url: "https://www.infineticstudios.com",

    siteName: "Infinetic Studios",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinetic Studios",
      },
    ],
  },

  twitter: {
  card: "summary_large_image",
  title: "Infinetic Studios | Website Development Company",
  description:
    "Custom websites, AI solutions and SEO-friendly web development.",
  images: ["/og-image.jpg"],
},

  category: "Technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <LoaderProvider>
    <RouteLoader />
    <RouteWatcher />

    <Navbar />

    {children}

    <Footer />

    {/* AI Chatbot */}
    {/* <Chatbot /> */}

  </LoaderProvider>
</body>
    </html>
  );
}

