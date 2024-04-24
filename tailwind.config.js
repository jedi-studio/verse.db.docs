module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    "./pages/**/*.{md,mdx}",
    "./theme.config.tsx",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};