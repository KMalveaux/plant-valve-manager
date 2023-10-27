const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(cors());

app.post("/authenticate", (req, res) => {
  const { username, passwordHash } = req.body;

  console.log(
    `Authentication req received: Username=${username} PasswordHash=${passwordHash}`
  );
  res
    .status(200)
    .json({ success: true, message: "Authentication request received" });
});

app.listen(port, function () {
  console.log(`Server listening on localhost:${port}`);
});
