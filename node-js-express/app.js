const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const contactList = [
    {
      nama: "Achmad",
      email: "rahmaan@gmail.com",
      noHP: "083217364",
    },
    {
      nama: "Rahman",
      email: "rahmaan@gmail.com",
      noHP: "083217364",
    },
    {
      nama: "Mawardi",
      email: "rahmaan@gmail.com",
      noHP: "083217364",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Rahman's",
    title: "Beranda",
    contactList,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { layout: "layouts/main-layout", title: "Contact" });
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
