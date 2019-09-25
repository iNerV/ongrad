module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://ongrad.ru/",
        secure: false,
        changeOrigin: true
      }
    }
  }
};
