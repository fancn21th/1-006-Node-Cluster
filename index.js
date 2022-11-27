const { cpus } = require("os");
const cluster = require("cluster");
const server = require("./server");

var app = {};

const numCPUs = cpus().length;

app.init = function (callback) {
  // without cluster
  // server.init();

  // with cluster
  // CAUTION: isMaster is deprecated in NODE 19 and I am testing it against node 14
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork the process
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    server.init();
  }
};

if (require.main === module) {
  app.init(function () {});
}

module.exports = app;
