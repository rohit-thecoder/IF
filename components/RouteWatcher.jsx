"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";

export default function RouteWatcher() {
  const pathname = usePathname();
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return null;
}
