var router = require("express").Router();
var fs = require("fs");

router.get("/", function (req, res) {
  res.sendFile("welcome.html", { root: __dirname + "/public/" });
});
router.get("/top", function (req, res) {
  res.sendFile("welcome.html", { root: __dirname + "/public/" });
});

router.get("/gaming.html", function (req, res) {
  res.sendFile("gaming.html", { root: __dirname + "/public/" });
});

router.get("/about.html", function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/public/" });
});

router.get("/gaming", function (req, res) {
  res.sendFile("gaming.html", { root: __dirname + "/public/" });
});

router.get("/about", function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/public/" });
});

router.get("/13update", function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/public/" });
});
router.get("/13update.html", function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/public/" });
});
router.get("/business", function (req, res) {
  res.sendFile("business.html", { root: __dirname + "/public/" });
});

module.exports = router;
