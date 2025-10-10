export default function manifest() {
  return {
    name: "Cloud Native Durgapur",
    short_name: "CND",
    description: "Community site",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a8a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

