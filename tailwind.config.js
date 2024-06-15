module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/pages/**/*.{md,mdx}",
    "./src/theme.config.tsx",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};