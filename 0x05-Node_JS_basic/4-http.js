const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
});
server.listen(1245, () => {
  console.log('...');
});
