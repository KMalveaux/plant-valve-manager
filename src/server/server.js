const express = require("express");
const app = express();

app.get("/Authenticate", function (req, res) {
  console.log("Request to authenticate received.");
});

app.listen(4000, function () {
  console.log("Server listening on localhost:4000");
});
