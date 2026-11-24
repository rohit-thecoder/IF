import ServicesSection from "@/components/ServiceSection";
import { createPageMetadata } from "../seo";

/** @type {import("next").Metadata} */
export const metadata = createPageMetadata({
  title: "Website, App, Video & Design Services in Bokaro & India",
  description:
    "Explore website development, mobile apps, video editing, graphic design and social media management in Bokaro, Chas, Jharkhand for modern firms across India.",
  pathname: "/services",
});

export default function ServicesPage() {
  return <ServicesSection />;
}
