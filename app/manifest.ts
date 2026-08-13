import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StackOrcs",
    short_name: "StackOrcs",
    description: "Digital engineering, built to move.",
    start_url: "/",
    display: "standalone",
    background_color: "#080807",
    theme_color: "#ff5a1f",
    icons: [
      {
        src: "/stackorcs-logo.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
