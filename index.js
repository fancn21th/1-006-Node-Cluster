const os = require("os");
const cluster = require("cluster");
const server = require("./server");

var app = {};

app.init = function (callback) {
  if (cluster.isMaster) {
    // Fork the process
    for (var i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }
  } else {
    server.init();
  }
};

if (require.main === module) {
  app.init(function () {});
}

module.exports = app;
