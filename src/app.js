const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Node.js on AWS ECS!. Just wait for ECS configuration.",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;
