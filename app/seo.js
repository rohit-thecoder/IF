export const SITE_URL = "https://infineticstudios.com";

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Infinetic Studios — web, app, video and design agency",
};

const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

/**
 * Creates consistent, App Router-compatible metadata for public pages.
 *
 * @param {{ title: string, description: string, pathname: string }} page
 * @returns {import("next").Metadata}
 */
export function createPageMetadata({ title, description, pathname }) {
  const url = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname === "/" ? "./" : pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Infinetic Studios",
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots,
  };
}
