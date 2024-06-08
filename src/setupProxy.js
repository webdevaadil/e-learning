const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://elearning.growthmetaverse.co.in',
      changeOrigin: true,
    })
  );
};