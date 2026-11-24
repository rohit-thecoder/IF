import ContactSection from "@/components/ContactSection";
import { createPageMetadata } from "../seo";

/** @type {import("next").Metadata} */
export const metadata = createPageMetadata({
  title: "Contact Our Bokaro Web & Creative Agency",
  description:
    "Contact our Bokaro team for custom websites, mobile apps, video editing, graphic design and social media management for brands across Jharkhand and India.",
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
