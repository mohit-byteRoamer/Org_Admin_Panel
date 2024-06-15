module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // Customize focus styles for radio buttons
      focus: {
        "outline-none": "none",
      },
      width:{
        "30%":"30%",
        "70%":"70%"
      },
      backgroundColor: {
        "primary-color": "#00acb1",
        "light-primary": "#b3e6e8",
      },
   
      colors: {
        "primary-color": "#00acb1",
        "light-primary": "#b3e6e8",
      },
      textColor: {
        "primary-color": "#00acb1",
      },
      ringColor: {
        "primary-color": "#00acb1",
      },
      fontSize: {
        smm: "0.9rem",
      },
    },
  },
  plugins: [],
};
