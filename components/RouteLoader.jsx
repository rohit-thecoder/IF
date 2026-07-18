// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function RouteLoader() {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#11afc0] border-t-transparent"></div>
//     </div>
//   );
// }
"use client";

import { useLoader } from "@/context/LoaderContext";

export default function RouteLoader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
