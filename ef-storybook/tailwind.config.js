/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      "primary-button": "5px",
      "tag-button": "17.5px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    colors: {
      Primary: "#1b1829",
      "Main-off": "#e6007e",
      "Main-on": "#8b004c",
      "Secondary-off": "#008cff",
      "Secondary-on": "#005ba6",
      "Button01-off": "#404040",
      "Button01-on": "#000000",
      White: "#ffffff",
      "Board-bg": "#f3f4f6",
      "Input-off-bg": "#f9fafb",
      "Input-line": "#e5e7eb",
      mono100: " #f1f1f1",
      mono200: " #bebebe",
      mono300: " #d6d7d9",
      error: " #d01e1e",
      social: "#395997",
      "dark-Opacity": "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: [],
};
