const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Third party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// Built in Middleware
app.use(express.static("public"));

//  Application level Middleware
app.use((req, res, next) => {
  console.log('Show Date = ' + Date.now());
  next();
});

app.get("/", (req, res) => {
  const contactList = [
    {
      nama: "Achmad",
      email: "rahman@gmail.com",
      noHP: "083217364",
    },
    {
      nama: "Rahman",
      email: "rahman@gmail.com", 
      noHP: "083217364",
    },
    {
      nama: "Mawardi",
      email: "rahman@gmail.com",
      noHP: "083217364",
    },
    {
      nama: "Ardi",
      email: "ardi@gmail.com", 
      noHP: "083217364",
    },
    {
      nama: "Lala S",
      email: "lala@gmail.com", 
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
    email: "rahman@gmail.com",
    noHP: "083217364",
  });
});

app.get("/readHTML", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

// app.get("/product/:id/category/:idCategory", (req, res) => { //http://localhost:3000/product/sepatu/category/12321  ---- use {req.params.idCategory}
app.get("/product/:id", (req, res) => { //http://localhost:3000/product/sepatu?idCategory=12321 ---- use {req.query.idCategory}
// res.send(
//     `Product ID : ${req.params.id} <br>Category : ${req.query.idCategory}`
//   );
res.render("about", { layout: "layouts/main-layout", title: "Product" });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 - NOT FOUND!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
