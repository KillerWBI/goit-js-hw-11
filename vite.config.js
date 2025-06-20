
export default {
  root: './src',
  base: '/goit-js-hw-11/', // 👈 ОБЯЗАТЕЛЬНО ДОБАВЬ
  build: {
    outDir: '../dist',
  },
  define: {
    global: 'window', // 👈 для simplelightbox
  },
};
