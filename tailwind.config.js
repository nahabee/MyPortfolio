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
      // brown: "#e2d3cd",
      // grey: "#e3dad5",
      // beige: "#e6cdb5",
      // orange: "#f7d8b5",
      // olive: "#d0c8b6",
      // white: "#FFFAF0",
      back: "#f5f5ef",
      blue: "#004aad",
    },
    extend: {
      backgroundImage: {
        line: "url('/src/assets/line.png')",
        quote: "url('/src/assets/expectation.png')",
      },
      fontFamily: {
        title: ["cyrvetica"],
        body: ["Quicksand"],
      },
    },
  },
};
