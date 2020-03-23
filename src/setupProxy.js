const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("HI");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api/*", {
      target: "https://fathomless-peak-57759.herokuapp.com",
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/auth/*", {
      target: "https://fathomless-peak-57759.herokuapp.com",
      changeOrigin: true
    })
  );
};
