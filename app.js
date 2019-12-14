const express = require("express");
const app = express();

app.listen(process.env.PORT);
app.get("/", (req, res) => {
  res.send(`Process runs on Port ${process.env.PORT} AND PID ${process.pid}`);
});

console.log(`Process runs on Port ${process.env.PORT} AND PID ${process.pid}`);
