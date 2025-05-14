// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // or wherever your files are
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#111827',
        text: '#111827',
        primary: '#1e3a8a',
        secondary: '#6b7280',
        button: {
          text: '#ffffff',
          bg: '#2563eb',
          hover: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
