const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

server.listen(3333, () => {
  console.log("servidor iniciado na porta 3333");
});

server.post("/userdata", (req, res) => {
  const requestData = req.body;
  console.log(requestData);
  return res.json({ message: "dados recebidos" });
});
