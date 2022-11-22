const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/json", (req, res) => {
  res.json({
    nama: "rahman",
    email: "rahmaan@gmail.com",
    noHP: "083217364",
  });
});

app.get("/readHTML", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br>Category : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 - NOT FOUND!</h1>");
});
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
