/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#F8FAFC",
        stale: "#334155",
        "stale-50": "#F8FAFC",
        "stale-100": "#F1F5F9",
        "stale-200": "#E2E8F0",
        "stale-500": "#64748B",
        "stale-700": "#334155",
        "gray-700": "#374151",
      },
    },
  },
  plugins: [],
};
