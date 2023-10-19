const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

server.listen(3333, () => {
  console.log("servidor iniciado na porta 3333");
});

server.get("/userdata", (req, res) => {
  return res.json();
});
