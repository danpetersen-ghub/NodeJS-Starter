//https://codezup.com/create-separate-route-file-node-js-mean-stack/
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

console.log("login scripts loaded...");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/api/login", function (req, res) {
  console.log(`Incoming request: `);
  console.log(req.body);

  if (req.body[username] === "admin" && req.body[password] === "123") {
    res.json(app.ejs);
  }
});

const data = require("../template.json");

//seed DATA
router.get("/json", function (req, res) {
  res.json(data);
});

module.exports = router;
