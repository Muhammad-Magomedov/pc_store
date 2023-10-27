/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./stories/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  theme: {
    extend: {
      minHeight: {
        100: "25rem",
        108: "27rem",
      },
      maxHeight: {
        100: "25rem",
        108: "27rem",
      },
      display: ["group-hover"],
    },
  },
};
