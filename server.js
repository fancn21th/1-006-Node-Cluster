const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
let count = 1;

const server = {};

server.httpServer = http.createServer((req, res) => {
  console.log("VISIT:", count++);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello ${req.headers["user-agent"]}`);
});

server.init = function (params) {
  server.httpServer.listen(port, hostname, () => {
    console.log(
      `Worker ${process.pid} started and Server running at http://${hostname}:${port}/`
    );
  });
};

module.exports = server;
