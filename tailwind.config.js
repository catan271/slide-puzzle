/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.vue', './src/components/**/*.vue', './src/layouts/**/*.vue'],
  theme: {
    extend: {
      spacing: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
      maxWidth: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
      minWidth: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
      maxHeight: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
      minHeight: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
      fontSize: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
      lineHeight: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
      borderRadius: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
      borderWidth: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
      letterSpacing: Object.fromEntries([...Array(200)].map((_, i) => [i / 2, `${i / 32}rem`])),
    },
  },
  corePlugins: {
    preflight: false,
  },
};
