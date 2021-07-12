const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", async (req, res) => {
  // template html file
});

app.post("/receive", async (req, res) => {});
app.listen("3000", console.log("Listening on port 3000."));
