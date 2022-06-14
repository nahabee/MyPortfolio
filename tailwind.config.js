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
    colors: {
      back: "#f5f5ef",
      blue: "#004aad",
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
      },
    },
  },
};
