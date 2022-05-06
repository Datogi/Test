module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        '1': "url('/src/1.jpg')",
        '2': "url('/src/2.jpg')",
      }),
    },
  },
  plugins: [
   
  ],
}
