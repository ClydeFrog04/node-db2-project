export {};
require("dotenv").config();
const express = require("express");
const vehiclesRouter = require("./vehicles/vehiclesRouter");
const cors = require("cors");

const server = express();
const port = process.env.port || 4000;

server.use(express.json());
server.use(cors());
server.use("/api/vehicles", vehiclesRouter);

server.get("/", (req, res) => {
res.send("Welcome");
});

server.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});