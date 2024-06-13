/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      xs: ["12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400"
        }
      ],
      sm: [
        "14px", 
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        }
      ]
    },
     colors: {
      primary: " #1d2745",
      secondary: " #1de5d4",
      tertiary: " #f52c50",
      white: " #ffffff",
      mono100: " #f1f1f1",
      mono200: " #bebebe",
      mono300: " #d6d7d9",
      error: " #d01e1e",
    },
  },
  plugins: [],
}

