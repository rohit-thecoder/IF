import { SITE_URL } from "./seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/clients", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date("2026-11-24T00:00:00.000Z");

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}/`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
