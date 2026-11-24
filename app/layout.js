import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLoader from "@/components/RouteLoader";
import RouteWatcher from "@/components/RouteWatcher";
import SeoSchema from "@/components/SeoSchema";
import { LoaderProvider } from "@/context/LoaderContext";
import { createPageMetadata, SITE_URL } from "./seo";

/** @type {import("next").Metadata} */
export const metadata = {
  ...createPageMetadata({
    title: "Infinetic Studios | Best Web Development & Digital Agency in Bokaro, Jharkhand & India",
    description:
      "Website development, mobile apps, video editing, graphic design and social media management for Bokaro, Chas, Jharkhand and growing businesses across India.",
    pathname: "/",
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Infinetic Studios | Best Web Development & Digital Agency in Bokaro, Jharkhand & India",
    template: "%s | Infinetic Studios — Web, App, Video & Design Agency",
  },
  authors: [{ name: "Infinetic Studios", url: SITE_URL }],
  creator: "Infinetic Studios",
  publisher: "Infinetic Studios",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <SeoSchema />
        <LoaderProvider>
          <RouteLoader />
          <RouteWatcher />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
