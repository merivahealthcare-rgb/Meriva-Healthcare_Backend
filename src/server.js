const express = require("express");
const app = express();
const config= require("./config/config.js")

const PORT = config.PORT ||3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});