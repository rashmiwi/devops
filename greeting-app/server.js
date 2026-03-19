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
  res.send(`
    <div style="font-family:sans-serif;text-align:center;margin-top:100px">
    <h1>Hello, ${userName}!</h1>
    <a href="/">Go Back</a>
    </div>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});