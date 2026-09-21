import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050914",
          main: "#050914",
        },
        surface: {
          DEFAULT: "#0b1220",
          hover: "#111827",
          elevated: "#1e293b",
        },
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
          active: "#1d4ed8",
          muted: "rgba(59, 130, 246, 0.12)",
          glow: "rgba(59, 130, 246, 0.3)",
        },
        secondary: {
          DEFAULT: "#60a5fa",
          muted: "rgba(96, 165, 250, 0.15)",
        },
        content: {
          primary: "#eef2ff",
          muted: "#8b93a8",
          dim: "#475569",
        },
        hairline: {
          DEFAULT: "rgba(238, 242, 255, 0.08)",
          subtle: "#1e293b",
          hover: "rgba(59, 130, 246, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "3px",
        md: "4px",
        lg: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
