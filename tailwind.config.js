module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xs: { min: "1023px" },
      // => @media (min-width: 769px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      xl: ".25em",
    },
    textUnderlineOffset: {
      1: "0,5px",
      9: "10px",
    },
    borderRadius: {
      none: "0",
      sm: "1px",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "60px",
    },
    colors: {
      back: "#f5f5ef",
      blue: "#004aad",
      peche: "#ea902d",
    },
    extend: {
      backgroundImage: {
        homeline: "url('/src/assets/homeline.png')",
        aboutline: "url('/src/assets/aboutline.png')",
        projectsline: "url('/src/assets/projectsline.png')",
        toolsline: "url('/src/assets/toolsline.png')",
        contactline: "url('/src/assets/contactline.png')",
      },
      width: {
        "5/5": "10%",
      },
      margin: {
        "9/9": "600px",
      },
      fontFamily: {
        title: ["cyrvetica"],
        body: ["Quicksand"],
        body_bold: ["Quicksand-bold"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
    // ...
  ],
};
