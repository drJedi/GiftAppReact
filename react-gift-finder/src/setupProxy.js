const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/newsletter',
    createProxyMiddleware({
      target: 'https://www.cewe.pl',
      changeOrigin: true,
      secure: true,
      pathRewrite: { '^/api/newsletter': '' },
    })
  );
};


