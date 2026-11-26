const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }

  if (req.url === "/about") {
    res.write("Here is our short history");
    res.end();
  }

  res.end("Oops! We can't seem to find the page you are looking for");
});

server.listen(5000);
