const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let userName = "";

// POST request
app.post("/submit", (req, res) => {
  userName = req.body.name;
  res.redirect("/greeting");
});

// GET request
app.get("/greeting", (req, res) => {
  res.send(`<h1>Hello, ${userName}!</h1>
  <br>
  <a href="/">Go Back</a>`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});