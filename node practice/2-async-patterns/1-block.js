const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    //Blocking Loop!!!
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
});
res.send("Error Page");
server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Working on PORT 5000");
});
