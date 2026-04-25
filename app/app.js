const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Hello from Kubernetes CI/CD - ENV: ${process.env.APP_ENV}`);
});

server.listen(3000);
