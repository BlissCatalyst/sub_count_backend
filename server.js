const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const endpoints = require("./endpoints.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/subs", endpoints);

// SERVER IS RUNNING TEST
server.get("/", (req, res) => {
    res.status(200).json({
        message: "server is running"
    });
});

module.exports = server;
