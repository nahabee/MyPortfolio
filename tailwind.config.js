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
    textUnderlineOffset: {
      1: "0,5px",
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
      fontFamily: {
        title: ["cyrvetica"],
        body: ["Quicksand"],
      },
    },
  },
};
