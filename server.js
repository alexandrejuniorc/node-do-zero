import { createServer } from "node:http";

const server = createServer((req, res) => {
  // res.end("Hello, World!");
  res.write("oi");
  return res.end()
});

server.listen(3333);
