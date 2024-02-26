import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#D0BCFF",
        onPrimary: "#381E72",
        secondary: "#CCC2DC",
        onSecondary: "#332D41",
        background: "#141218",
        onBackground: "#E6E0E9",
        backgroundContainer: "#36343B",
        outlineVariant: "#49454F",
        link: "#68AEFF",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
