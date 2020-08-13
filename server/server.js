const path = require("path");
const express = require("express");
const app = express();

const { data } = require("./draft");

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/base/index.html");
});

app.get("/api", (req, res) => {
  res.json(data);
});

app.use(function (req, res) {
  res.send("404: Page not Found");
});

app.use(function (err, req, res, next) {
  res.send("500: Internal Server Error");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
