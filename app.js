const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World , DateTime: " + new Date());
});

app.post("/api", function (req, res) {
  res.send("Hello World , DateTime: " + new Date());
});

const port = 9999;

app.listen(port, () => {
  console.log("Listening on port " + port);
});
