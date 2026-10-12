const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js on AWS ECS!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
