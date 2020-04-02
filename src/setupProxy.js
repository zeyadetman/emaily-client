const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("HI");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api/*", {
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/auth/*", {
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true
    })
  );
};
