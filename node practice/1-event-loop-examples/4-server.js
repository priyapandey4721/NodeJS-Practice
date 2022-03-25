const http = require("http");
const server = http.createServer((req, res) => {
  console.log("First");
});
server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Working on PORT 5000");
});
