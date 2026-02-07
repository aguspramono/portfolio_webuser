/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f1f",
        abyss: "#070b17",
        cobalt: "#1f4bd8",
        skyglow: "#4f8cff",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        gradientShift: "gradientShift 10s ease infinite",
        orbitSlow: "orbit 18s linear infinite",
        orbitFast: "orbit 12s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
      boxShadow: {
        neon: "0 0 30px rgba(79, 140, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
