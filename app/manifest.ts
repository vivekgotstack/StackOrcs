import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "StackOrcs — Digital Engineering",
    short_name: "StackOrcs",
    description: "Digital engineering, built to move.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#080807",
    theme_color: "#080807",
    orientation: "any",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icons/stackorcs-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/stackorcs-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/stackorcs-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
