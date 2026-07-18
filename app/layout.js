import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLoader from "@/components/RouteLoader";
import RouteWatcher from "@/components/RouteWatcher";
import { LoaderProvider } from "@/context/LoaderContext";

export const metadata = {
  title: {
    default: "Infinetic Studios | Website Development & Digital Solutions",
    template: "%s | Infinetic Studios",
  },
  description:
    "Infinetic Studios provides web development, social media management, graphic designing, and video editing services across Jharkhand and Bokaro.",
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
        </LoaderProvider>
      </body>
    </html>
  );
}
