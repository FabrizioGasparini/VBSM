const { createServer } = require('http');
const next = require('next');
const httpProxy = require('http-proxy');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

// Crea un proxy per le API PHP su Aruba
const apiProxy = httpProxy.createProxyServer({
  target: 'https://volleyballsanmartino.it', // server Aruba dove risiede PHP
  changeOrigin: true,
  secure: true, // se SSL Aruba è valido
});

app.prepare().then(() => {
  createServer((req, res) => {
    const url = req.url;

    // Se la richiesta è per /api/* -> proxy verso Aruba
    if (url.startsWith('/api/')) {
      apiProxy.web(req, res, {}, (err) => {
        console.error('Proxy error:', err);
        res.writeHead(502);
        res.end('Bad gateway');
      });
      return;
    }

    // Tutto il resto -> gestito da Next.js
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://localhost:${port}`);
  });
});
