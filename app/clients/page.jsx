import Clients from "@/components/Clients";
import { createPageMetadata } from "../seo";

/** @type {import("next").Metadata} */
export const metadata = createPageMetadata({
  title: "Web, App & Creative Portfolio",
  description:
    "See website, mobile app, video editing, graphic design and social media projects delivered by our Bokaro, Jharkhand agency for growing clients across India.",
  pathname: "/clients",
});

export default function ClientPage() {
  return <Clients />;
}
