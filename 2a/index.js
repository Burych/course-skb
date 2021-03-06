const http = require('http');
const url = require('url');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const sum = (+query.a || 0) + (+query.b || 0);

  res.setHeader('access-control-allow-origin', 'http://account.skill-branch.ru');
  res.setHeader('access-control-allow-methods', 'GET');
  res.setHeader('access-control-allow-headers', 'content-type, accept');
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  
  res.end(sum.toString());
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});