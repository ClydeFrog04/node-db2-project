export {};
const express = require("express");
const vehiclesRouter = require("./vehicles/vehiclesRouter");

const server = express();
const port = process.env.port || 4000;

server.use(express.json());
server.use("/api/vehicles", vehiclesRouter);

server.get("/", (req, res) => {
res.send("Welcome");
});

server.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});